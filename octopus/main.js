require("./settings");
const makeWASocket = require("@whiskeysockets/baileys").default;
const { uncache, nocache } = require("./lib/loader");
const { color } = require("./lib/color");
const NodeCache = require("node-cache");
const readline = require("readline");
const pino = require("pino");
const { Boom } = require("@hapi/boom");
const { Low, JSONFile } = require("./lib/lowdb");
const yargs = require("yargs/yargs");
const fs = require("fs");
const chalk = require("chalk");
const FileType = require("file-type");
const path = require("path");
const axios = require("axios");
const _ = require("lodash");
const moment = require("moment-timezone");
const PhoneNumber = require("awesome-phonenumber");
const {
	imageToWebp,
	videoToWebp,
	writeExifImg,
	writeExifVid
} = require("./lib/exif");
const {
	smsg,
	isUrl,
	generateMessageTag,
	getBuffer,
	getSizeMedia,
	fetch,
	await,
	sleep,
	reSize
} = require("./assets/function/myfunc.js");
const {
	default: OctopusBotzzConnect,
	getAggregateVotesInPollMessage,
	delay,
	PHONENUMBER_MCC,
	makeCacheableSignalKeyStore,
	useMultiFileAuthState,
	DisconnectReason,
	fetchLatestBaileysVersion,
	generateForwardMessageContent,
	prepareWAMessageMedia,
	generateWAMessageFromContent,
	generateMessageID,
	downloadContentFromMessage,
	makeInMemoryStore,
	jidDecode,
	proto,
	Browsers
} = require("@whiskeysockets/baileys");

const store = makeInMemoryStore({
	logger: pino().child({
		level: "silent",
		stream: "store"
	})
});
global.opts = new Object(
	yargs(process.argv.slice(2)).exitProcess(false).parse()
);
global.db = new Low(new JSONFile(`./assets/database.json`));

global.DATABASE = global.db;
global.loadDatabase = async function loadDatabase() {
	if (global.db.READ)
		return new Promise(resolve =>
			setInterval(function () {
				!global.db.READ
					? (clearInterval(this),
					  resolve(
							global.db.data == null
								? global.loadDatabase()
								: global.db.data
					  ))
					: null;
			}, 1 * 1000)
		);
	if (global.db.data !== null) return;
	global.db.READ = true;
	await global.db.read();
	global.db.READ = false;
	global.db.data = {
		users: {},
		database: {},
		chats: {},
		game: {},
		settings: {},
		message: {},
		...(global.db.data || {})
	};
	global.db.chain = _.chain(global.db.data);
};
loadDatabase();

if (global.db)
	setInterval(async () => {
		if (global.db.data) await global.db.write();
	}, 30 * 1000);

require("./octopusMainFile.js");
nocache("../octopusMainFile.js", module =>
	console.log(
		color("[ CHANGE ]", "green"),
		color(`'${module}'`, "green"),
		"Updated"
	)
);
require("./main.js");
nocache("../main.js", module =>
	console.log(
		color("[ CHANGE ]", "green"),
		color(`'${module}'`, "green"),
		"Updated"
	)
);

//------------------------------------------------------
let phoneNumber = "6281359391296";
//let owner = JSON.parse(fs.readFileSync("./assets/database/data/role/owner.json"));

const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code");
const useMobile = process.argv.includes("--mobile");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
const question = text => new Promise(resolve => rl.question(text, resolve));

async function startOctopusBotzz() {
	let { version, isLatest } = await fetchLatestBaileysVersion();
	const { state, saveCreds } = await useMultiFileAuthState(`./session`);
	const msgRetryCounterCache = new NodeCache(); // for retry message, "waiting message"
	const OctopusBotzz = makeWASocket({
		logger: pino({ level: "silent" }),
		printQRInTerminal: !pairingCode, // popping up QR in terminal log
		browser: Browsers.windows("Firefox"), // for this issues https://github.com/WhiskeySockets/Baileys/issues/328
		auth: {
			creds: state.creds,
			keys: makeCacheableSignalKeyStore(
				state.keys,
				pino({ level: "fatal" }).child({ level: "fatal" })
			)
		},
		markOnlineOnConnect: true, // set false for offline
		generateHighQualityLinkPreview: true, // make high preview link
		getMessage: async key => {
			let jid = jidNormalizedUser(key.remoteJid);
			let msg = await store.loadMessage(jid, key.id);

			return msg?.message || "";
		},
		msgRetryCounterCache, // Resolve waiting messages
		defaultQueryTimeoutMs: undefined // for this issues https://github.com/WhiskeySockets/Baileys/issues/276
	});

	store.bind(OctopusBotzz.ev);

	// login use pairing code
	// source code https://github.com/WhiskeySockets/Baileys/blob/master/Example/example.ts#L61
	if (pairingCode && !OctopusBotzz.authState.creds.registered) {
		if (useMobile)
			throw new Error("Cannot use pairing code with mobile api");

		let phoneNumber;
		if (!!phoneNumber) {
			phoneNumber = phoneNumber.replace(/[^0-9]/g, "");

			if (
				!Object.keys(PHONENUMBER_MCC).some(v =>
					phoneNumber.startsWith(v)
				)
			) {
				console.log(
					chalk.bgBlack(
						chalk.redBright(
							"Start with country code of your WhatsApp Number, Example : +6281359391296"
						)
					)
				);
				process.exit(0);
			}
		} else {
			phoneNumber = await question(
				chalk.bgBlack(
					chalk.greenBright(
						`Please type your WhatsApp number 😍\nFor example: +6281359391296 : `
					)
				)
			);
			phoneNumber = phoneNumber.replace(/[^0-9]/g, "");

			// Ask again when entering the wrong number
			if (
				!Object.keys(PHONENUMBER_MCC).some(v =>
					phoneNumber.startsWith(v)
				)
			) {
				console.log(
					chalk.bgBlack(
						chalk.redBright(
							"Start with country code of your WhatsApp Number, Example : +6281359391296"
						)
					)
				);

				phoneNumber = await question(
					chalk.bgBlack(
						chalk.greenBright(
							`Please type your WhatsApp number 😍\nFor example: +6281359391296 : `
						)
					)
				);
				phoneNumber = phoneNumber.replace(/[^0-9]/g, "");
				rl.close();
			}
		}

		setTimeout(async () => {
			let code = await OctopusBotzz.requestPairingCode(phoneNumber);
			code = code?.match(/.{1,4}/g)?.join("-") || code;
			console.log(
				chalk.black(chalk.bgGreen(`Your Pairing Code : `)),
				chalk.black(chalk.white(code))
			);
		}, 3000);
	}

	OctopusBotzz.ev.on("connection.update", async update => {
		const { connection, lastDisconnect } = update;
		try {
			if (connection === "close") {
				let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
				if (reason === DisconnectReason.badSession) {
					console.log(
						`Bad Session File, Please Delete Session and Scan Again`
					);
					startOctopusBotzz();
				} else if (reason === DisconnectReason.connectionClosed) {
					console.log("Connection closed, reconnecting....");
					startOctopusBotzz();
				} else if (reason === DisconnectReason.connectionLost) {
					console.log("Connection Lost from Server, reconnecting...");
					startOctopusBotzz();
				} else if (reason === DisconnectReason.connectionReplaced) {
					console.log(
						"Connection Replaced, Another New Session Opened, Please Close Current Session First"
					);
					startOctopusBotzz();
				} else if (reason === DisconnectReason.loggedOut) {
					console.log(
						`Device Logged Out, Please Delete Session and Scan Again.`
					);
					startOctopusBotzz();
				} else if (reason === DisconnectReason.restartRequired) {
					console.log("Restart Required, Restarting...");
					startOctopusBotzz();
				} else if (reason === DisconnectReason.timedOut) {
					console.log("Connection TimedOut, Reconnecting...");
					startOctopusBotzz();
				} else
					OctopusBotzz.end(
						`Unknown DisconnectReason: ${reason}|${connection}`
					);
			}
			if (
				update.connection == "connecting" ||
				update.receivedPendingNotifications == "false"
			) {
				console.log(color(`\n🌿Connecting...`, "yellow"));
			}
			if (
				update.connection == "open" ||
				update.receivedPendingNotifications == "true"
			) {
				console.log(color(` `, "magenta"));
				console.log(
					color(
						`🌿Connected to => ` +
							JSON.stringify(OctopusBotzz.user, null, 2),
						"yellow"
					)
				);
				await delay(1999);
				console.log(
					chalk.yellow(
						`\n\n               ${chalk.bold.blue(
							`[ ${botname} ]`
						)}\n\n`
					)
				);
				console.log(
					color(
						`< ================================================== >`,
						"cyan"
					)
				);
				console.log(
					color(`\n${themeemoji} YT CHANNEL: ICode`, "magenta")
				);
				console.log(
					color(`${themeemoji} GITHUB: sulaiman0851 `, "magenta")
				);
				console.log(
					color(
						`${themeemoji} INSTAGRAM: @sulaimanmajid_ `,
						"magenta"
					)
				);
				console.log(
					color(`${themeemoji} WA NUMBER: 6281359391296`, "magenta")
				);
				console.log(color(`${themeemoji} CREDIT: ${wm}\n`, "magenta"));
				await delay(1000 * 2);
			}
		} catch (err) {
			console.log("Error in Connection.update " + err);
			startOctopusBotzz();
		}
	});
	OctopusBotzz.ev.on("creds.update", saveCreds);
	OctopusBotzz.ev.on("messages.upsert", () => {});
	//------------------------------------------------------
	//welcome
	OctopusBotzz.ev.on("group-participants.update", async anu => {
		if (global.welcome) {
			console.log(anu);
			try {
				let metadata = await OctopusBotzz.groupMetadata(anu.id);
				let participants = anu.participants;
				for (let num of participants) {
					try {
						ppuser = await OctopusBotzz.profilePictureUrl(
							num,
							"image"
						);
					} catch (err) {
						ppuser =
							"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
					}
					try {
						ppgroup = await OctopusBotzz.profilePictureUrl(
							anu.id,
							"image"
						);
					} catch (err) {
						ppgroup =
							"https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60";
					}
					//welcome\\
					memb = metadata.participants.length;
					ppThumbUsr = await getBuffer(ppuser);
					if (anu.action == "add") {
						let clientNumber = num;
						const xtime = moment
							.tz("Asia/Jakarta")
							.format("HH:mm:ss");
						const xdate = moment
							.tz("Asia/Jakarta")
							.format("DD/MM/YYYY");
						const xmembers = metadata.participants.length;
						bodyOfText = `┌──────────❖
│「 *Hai* @${clientNumber.split("@")[0]}👋 」
│  Selamat datang di ${metadata.subject}
└───────────────┈ ⳹
│✑  *Masuk ke group:* ${metadata.subject}
│✑  *Jumlah member sekarang:* ${xmembers}
│✑  *Waktu masuk:* : 
│✑ ${xtime} ${xdate}
└───────────────┈ ⳹`;
						OctopusBotzz.sendMessage(anu.id, {
							text: bodyOfText,
							contextInfo: {
								mentionedJid: [num],
								externalAdReply: {
									showAdAttribution: true,
									containsAutoReply: true,
									title: ` ${global.botname}`,
									body: `${ownername}`,
									previewType: "PHOTO",
									thumbnailUrl: ``,
									thumbnail: ppThumbUsr,
									sourceUrl: `${wagc}`
								}
							}
						});
					} else if (anu.action == "remove") {
						const varCusTime = moment
							.tz("Asia/Jakarta")
							.format("HH:mm:ss");
						const varCusDate = moment
							.tz("Asia/Jakarta")
							.format("DD/MM/YYYY");
						let clientNumber = num;
						const gcMember = metadata.participants.length;
						bodyOfText = `┌──────────❖
│「 *Selamat tinggal* @${clientNumber.split("@")[0]}👋 」
│✑  *tag member yang keluar:* @${clientNumber.split("@")[0]}
│✑  *Keluar dari:* ${metadata.subject}
│✑  *Jumlah member sekarang:* ${gcMember}
│✑  *Waktu keluar:* ${varCusTime} ${varCusDate}
└───────────────┈ ⳹`;
						OctopusBotzz.sendMessage(anu.id, {
							text: bodyOfText,
							contextInfo: {
								mentionedJid: [num],
								externalAdReply: {
									showAdAttribution: true,
									containsAutoReply: true,
									title: ` ${global.botname}`,
									body: `${ownername}`,
									previewType: "PHOTO",
									thumbnailUrl: ``,
									thumbnail: ppThumbUsr,
									sourceUrl: `${wagc}`
								}
							}
						});
					}
				}
			} catch (err) {
				console.log(err);
			}
		}
	});
	// Anti Call
	OctopusBotzz.ev.on("call", async XeonPapa => {
		if (global.anticall) {
			console.log(XeonPapa);
			for (let XeonFucks of XeonPapa) {
				if (XeonFucks.isGroup == false) {
					if (XeonFucks.status == "offer") {
						let XeonBlokMsg =
							await OctopusBotzz.sendTextWithMentions(
								XeonFucks.from,
								`*${OctopusBotzz.user.name}* can't receive ${
									XeonFucks.isVideo ? `video` : `voice`
								} call. Sorry @${
									XeonFucks.from.split("@")[0]
								} you will be blocked. If called accidentally please contact the owner to be unblocked !`
							);
						OctopusBotzz.sendContact(
							XeonFucks.from,
							owner,
							XeonBlokMsg
						);
						await sleep(8000);
						await OctopusBotzz.updateBlockStatus(
							XeonFucks.from,
							"block"
						);
					}
				}
			}
		}
	});
	//autostatus view
	OctopusBotzz.ev.on("messages.upsert", async chatUpdate => {
		if (global.antiswview) {
			mek = chatUpdate.messages[0];
			if (mek.key && mek.key.remoteJid === "status@broadcast") {
				await OctopusBotzz.readMessages([mek.key]);
			}
		}
	});
	//admin event
	OctopusBotzz.ev.on("group-participants.update", async anu => {
		if (global.adminevent) {
			console.log(anu);
			try {
				let participants = anu.participants;
				for (let num of participants) {
					try {
						ppuser = await OctopusBotzz.profilePictureUrl(
							num,
							"image"
						);
					} catch (err) {
						ppuser =
							"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
					}
					try {
						ppgroup = await OctopusBotzz.profilePictureUrl(
							anu.id,
							"image"
						);
					} catch (err) {
						ppgroup =
							"https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60";
					}
					if (anu.action == "promote") {
						const varCusTime = moment
							.tz("Asia/Jakarta")
							.format("HH:mm:ss");
						const varCusDate = moment
							.tz("Asia/Jakarta")
							.format("DD/MM/YYYY");
						let clientNumber = num;
						bodyOfText = ` 𝗖𝗼𝗻𝗴𝗿𝗮𝘁𝘀🎉 @${
							clientNumber.split("@")[0]
						}, you have been *promoted* to *admin* 🥳`;
						OctopusBotzz.sendMessage(anu.id, {
							text: bodyOfText,
							contextInfo: {
								mentionedJid: [num],
								externalAdReply: {
									showAdAttribution: true,
									containsAutoReply: true,
									title: ` ${global.botname}`,
									body: `${ownername}`,
									previewType: "PHOTO",
									thumbnailUrl: ``,
									thumbnail: ppThumbUsr,
									sourceUrl: `${wagc}`
								}
							}
						});
					} else if (anu.action == "demote") {
						const varCusTime = moment
							.tz("Asia/Jakarta")
							.format("HH:mm:ss");
						const varCusDate = moment
							.tz("Asia/Jakarta")
							.format("DD/MM/YYYY");
						let clientNumber = num;
						bodyOfText = `𝗢𝗼𝗽𝘀‼️ @${
							clientNumber.split("@")[0]
						}, you have been *demoted* from *admin* 😬`;
						OctopusBotzz.sendMessage(anu.id, {
							text: bodyOfText,
							contextInfo: {
								mentionedJid: [num],
								externalAdReply: {
									showAdAttribution: true,
									containsAutoReply: true,
									title: ` ${global.botname}`,
									body: `${ownername}`,
									previewType: "PHOTO",
									thumbnailUrl: ``,
									thumbnail: ppThumbUsr,
									sourceUrl: `${wagc}`
								}
							}
						});
					}
				}
			} catch (err) {
				console.log(err);
			}
		}
	});

	// detect group update
	OctopusBotzz.ev.on("groups.update", async json => {
		if (global.groupevent) {
			try {
				ppgroup = await OctopusBotzz.profilePictureUrl(anu.id, "image");
			} catch (err) {
				ppgroup =
					"https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60";
			}
			console.log(json);
			const res = json[0];
			if (res.announce == true) {
				await sleep(2000);
				OctopusBotzz.sendMessage(res.id, {
					text: `「 Group Settings Change 」\n\nGroup has been closed by admin, Now only admins can send messages !`
				});
			} else if (res.announce == false) {
				await sleep(2000);
				OctopusBotzz.sendMessage(res.id, {
					text: `「 Group Settings Change 」\n\nThe group has been opened by admin, Now participants can send messages !`
				});
			} else if (res.restrict == true) {
				await sleep(2000);
				OctopusBotzz.sendMessage(res.id, {
					text: `「 Group Settings Change 」\n\nGroup info has been restricted, Now only admin can edit group info !`
				});
			} else if (res.restrict == false) {
				await sleep(2000);
				OctopusBotzz.sendMessage(res.id, {
					text: `「 Group Settings Change 」\n\nGroup info has been opened, Now participants can edit group info !`
				});
			} else if (!res.desc == "") {
				await sleep(2000);
				OctopusBotzz.sendMessage(res.id, {
					text: `「 Group Settings Change 」\n\n*Group description has been changed to*\n\n${res.desc}`
				});
			} else {
				await sleep(2000);
				OctopusBotzz.sendMessage(res.id, {
					text: `「 Group Settings Change 」\n\n*Group name has been changed to*\n\n*${res.subject}*`
				});
			}
		}
	});

	OctopusBotzz.ev.on("messages.upsert", async chatUpdate => {
		//console.log(JSON.stringify(chatUpdate, undefined, 2))
		try {
			mek = chatUpdate.messages[0];
			if (!mek.message) return;
			mek.message =
				Object.keys(mek.message)[0] === "ephemeralMessage"
					? mek.message.ephemeralMessage.message
					: mek.message;
			if (mek.key && mek.key.remoteJid === "status@broadcast") return;
			if (
				!OctopusBotzz.public &&
				!mek.key.fromMe &&
				chatUpdate.type === "notify"
			)
				return;
			if (mek.key.id.startsWith("Octo") && mek.key.id.length === 16)
				return;
			if (mek.key.id.startsWith("BAE5")) return;
			m = smsg(OctopusBotzz, mek, store);
			require("./octopusMainFile")(OctopusBotzz, m, chatUpdate, store);
		} catch (err) {
			console.log(err);
		}
	});

	OctopusBotzz.decodeJid = jid => {
		if (!jid) return jid;
		if (/:\d+@/gi.test(jid)) {
			let decode = jidDecode(jid) || {};
			return (
				(decode.user &&
					decode.server &&
					decode.user + "@" + decode.server) ||
				jid
			);
		} else return jid;
	};

	OctopusBotzz.ev.on("contacts.update", update => {
		for (let contact of update) {
			let id = OctopusBotzz.decodeJid(contact.id);
			if (store && store.contacts)
				store.contacts[id] = {
					id,
					name: contact.notify
				};
		}
	});

	OctopusBotzz.getName = (jid, withoutContact = false) => {
		id = OctopusBotzz.decodeJid(jid);
		withoutContact = OctopusBotzz.withoutContact || withoutContact;
		let v;
		if (id.endsWith("@g.us"))
			return new Promise(async resolve => {
				v = store.contacts[id] || {};
				if (!(v.name || v.subject))
					v = OctopusBotzz.groupMetadata(id) || {};
				resolve(
					v.name ||
						v.subject ||
						PhoneNumber(
							"+" + id.replace("@s.whatsapp.net", "")
						).getNumber("international")
				);
			});
		else
			v =
				id === "0@s.whatsapp.net"
					? {
							id,
							name: "WhatsApp"
					  }
					: id === OctopusBotzz.decodeJid(OctopusBotzz.user.id)
					? OctopusBotzz.user
					: store.contacts[id] || {};
		return (
			(withoutContact ? "" : v.name) ||
			v.subject ||
			v.verifiedName ||
			PhoneNumber("+" + jid.replace("@s.whatsapp.net", "")).getNumber(
				"international"
			)
		);
	};

	OctopusBotzz.sendContact = async (jid, kon, quoted = "", opts = {}) => {
		let list = [];
		for (let i of kon) {
			list.push({
				displayName: await OctopusBotzz.getName(i),
				vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await OctopusBotzz.getName(
					i
				)}\nFN:${await OctopusBotzz.getName(i)}\nitem1.TEL;waid=${
					i.split("@")[0]
				}:${i.split("@")[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`
			});
		}
		OctopusBotzz.sendMessage(
			jid,
			{
				contacts: {
					displayName: `${list.length} Contact`,
					contacts: list
				},
				...opts
			},
			{ quoted }
		);
	};

	OctopusBotzz.public = true;

	OctopusBotzz.serializeM = m => smsg(OctopusBotzz, m, store);

	OctopusBotzz.sendText = (jid, text, quoted = "", options) =>
		OctopusBotzz.sendMessage(
			jid,
			{
				text: text,
				...options
			},
			{
				quoted,
				...options
			}
		);
	OctopusBotzz.sendImage = async (
		jid,
		path,
		caption = "",
		quoted = "",
		options
	) => {
		let buffer = Buffer.isBuffer(path)
			? path
			: /^data:.*?\/.*?;base64,/i.test(path)
			? Buffer.from(path.split`,`[1], "base64")
			: /^https?:\/\//.test(path)
			? await await getBuffer(path)
			: fs.existsSync(path)
			? fs.readFileSync(path)
			: Buffer.alloc(0);
		return await OctopusBotzz.sendMessage(
			jid,
			{
				image: buffer,
				caption: caption,
				...options
			},
			{
				quoted
			}
		);
	};
	OctopusBotzz.sendTextWithMentions = async (
		jid,
		text,
		quoted,
		options = {}
	) =>
		OctopusBotzz.sendMessage(
			jid,
			{
				text: text,
				mentions: [...text.matchAll(/@(\d{0,16})/g)].map(
					v => v[1] + "@s.whatsapp.net"
				),
				...options
			},
			{
				quoted
			}
		);
	OctopusBotzz.sendImageAsSticker = async (
		jid,
		path,
		quoted,
		options = {}
	) => {
		let buff = Buffer.isBuffer(path)
			? path
			: /^data:.*?\/.*?;base64,/i.test(path)
			? Buffer.from(path.split`,`[1], "base64")
			: /^https?:\/\//.test(path)
			? await await getBuffer(path)
			: fs.existsSync(path)
			? fs.readFileSync(path)
			: Buffer.alloc(0);
		let buffer;
		if (options && (options.packname || options.author)) {
			buffer = await writeExifImg(buff, options);
		} else {
			buffer = await imageToWebp(buff);
		}
		await OctopusBotzz.sendMessage(
			jid,
			{ sticker: { url: buffer }, ...options },
			{ quoted }
		).then(response => {
			fs.unlinkSync(buffer);
			return response;
		});
	};

	OctopusBotzz.sendVideoAsSticker = async (
		jid,
		path,
		quoted,
		options = {}
	) => {
		let buff = Buffer.isBuffer(path)
			? path
			: /^data:.*?\/.*?;base64,/i.test(path)
			? Buffer.from(path.split`,`[1], "base64")
			: /^https?:\/\//.test(path)
			? await await getBuffer(path)
			: fs.existsSync(path)
			? fs.readFileSync(path)
			: Buffer.alloc(0);
		let buffer;
		if (options && (options.packname || options.author)) {
			buffer = await writeExifVid(buff, options);
		} else {
			buffer = await videoToWebp(buff);
		}
		await OctopusBotzz.sendMessage(
			jid,
			{ sticker: { url: buffer }, ...options },
			{ quoted }
		);
		return buffer;
	};
	OctopusBotzz.downloadAndSaveMediaMessage = async (
		message,
		filename,
		attachExtension = true
	) => {
		let quoted = message.msg ? message.msg : message;
		let mime = (message.msg || message).mimetype || "";
		let messageType = message.mtype
			? message.mtype.replace(/Message/gi, "")
			: mime.split("/")[0];
		const stream = await downloadContentFromMessage(quoted, messageType);
		let buffer = Buffer.from([]);
		for await (const chunk of stream) {
			buffer = Buffer.concat([buffer, chunk]);
		}
		let type = await FileType.fromBuffer(buffer);
		trueFileName = attachExtension ? filename + "." + type.ext : filename;
		// save to file
		await fs.writeFileSync(trueFileName, buffer);
		return trueFileName;
	};

	OctopusBotzz.copyNForward = async (
		jid,
		message,
		forceForward = false,
		options = {}
	) => {
		let vtype;
		if (options.readViewOnce) {
			message.message =
				message.message &&
				message.message.ephemeralMessage &&
				message.message.ephemeralMessage.message
					? message.message.ephemeralMessage.message
					: message.message || undefined;
			vtype = Object.keys(message.message.viewOnceMessage.message)[0];
			delete (message.message && message.message.ignore
				? message.message.ignore
				: message.message || undefined);
			delete message.message.viewOnceMessage.message[vtype].viewOnce;
			message.message = {
				...message.message.viewOnceMessage.message
			};
		}
		let mtype = Object.keys(message.message)[0];
		let content = await generateForwardMessageContent(
			message,
			forceForward
		);
		let ctype = Object.keys(content)[0];
		let context = {};
		if (mtype != "conversation")
			context = message.message[mtype].contextInfo;
		content[ctype].contextInfo = {
			...context,
			...content[ctype].contextInfo
		};
		const waMessage = await generateWAMessageFromContent(
			jid,
			content,
			options
				? {
						...content[ctype],
						...options,
						...(options.contextInfo
							? {
									contextInfo: {
										...content[ctype].contextInfo,
										...options.contextInfo
									}
							  }
							: {})
				  }
				: {}
		);
		await OctopusBotzz.relayMessage(jid, waMessage.message, {
			messageId: waMessage.key.id
		});
		return waMessage;
	};

	OctopusBotzz.sendPoll = (
		jid,
		name = "",
		values = [],
		selectableCount = 1
	) => {
		return OctopusBotzz.sendMessage(jid, {
			poll: { name, values, selectableCount }
		});
	};

	OctopusBotzz.parseMention = (text = "") => {
		return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(
			v => v[1] + "@s.whatsapp.net"
		);
	};

	OctopusBotzz.downloadMediaMessage = async message => {
		let mime = (message.msg || message).mimetype || "";
		let messageType = message.mtype
			? message.mtype.replace(/Message/gi, "")
			: mime.split("/")[0];
		const stream = await downloadContentFromMessage(message, messageType);
		let buffer = Buffer.from([]);
		for await (const chunk of stream) {
			buffer = Buffer.concat([buffer, chunk]);
		}

		return buffer;
	};
	return OctopusBotzz;
}

startOctopusBotzz();

process.on("uncaughtException", function (err) {
	let e = String(err);
	if (e.includes("conflict")) return;
	if (e.includes("Socket connection timeout")) return;
	if (e.includes("not-authorized")) return;
	if (e.includes("already-exists")) return;
	if (e.includes("rate-overlimit")) return;
	if (e.includes("Connection Closed")) return;
	if (e.includes("Timed Out")) return;
	if (e.includes("Value not found")) return;
	console.log("Caught exception: ", err);
});
