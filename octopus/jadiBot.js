const { modul } = require('./module');
const { baileys, boom, chalk, fs, figlet, FileType, path, process, PhoneNumber } = modul;
const { Boom } = boom
const { default: makeWaSocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, generateWAMessage, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = baileys
const { color, bgcolor } = require('./lib/color')
const log = (pino = require("pino"));
const qrcode = require('qrcode');
const rimraf = require("rimraf");
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, reSize } = require('./lib/myfunc')
const owner = JSON.parse(fs.readFileSync('./database/owner.json').toString())
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })






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











if (global.conns instanceof Array) console.log()
else global.conns = []

const jadiBot = async (OctopusBotzz, m, from) => {
const { sendImage, sendMessage } = OctopusBotzz;
const { reply, sender } = m;
const { state, saveCreds } = await useMultiFileAuthState(path.join(__dirname, `./database/rentbot/${sender.split("@")[0]}`), log({ level: "silent" }));
try {
async function start() {
let { version, isLatest } = await fetchLatestBaileysVersion();
const OctopusBotzz = await makeWaSocket({
auth: state,
browser: [`Rent Bot By ${ownername}`, "Chrome", "1.0.0"],
logger: log({ level: "silent" }),
version,
})

OctopusBotzz.ws.on('CB:Blocklist', json => {
if (blocked.length > 2) return
for (let i of json[1].blocklist) {
blocked.push(i.replace('c.us','s.whatsapp.net'))}})

OctopusBotzz.ws.on('CB:call', async (json) => {
const callerId = json.content[0].attrs['call-creator']
const idCall = json.content[0].attrs['call-id']
const Id = json.attrs.id
const T = json.attrs.t
OctopusBotzz.sendNode({
  tag: 'call',
    attrs: {
      from: '6281359391296@s.whatsapp.net',
      id: Id,
      t: T
    },
    content: [
      {
        tag: 'reject',
        attrs: {
          'call-creator': callerId,
          'call-id': idCall,
          count: '0'
        },
        content: null
      }
    ]
})
if (json.content[0].tag == 'offer') {
let qutsnya = await OctopusBotzz.sendContact(callerId, owner)
await OctopusBotzz.sendMessage(callerId, { text: `Block Automatic System!!!\nDon't Call Bots!!!\nPlease contact the owner to open the block!!!`}, { quoted : qutsnya })
await sleep(8000)
await OctopusBotzz.updateBlockStatus(callerId, "block")
}
})

OctopusBotzz.ev.on('messages.upsert', async chatUpdate => {
try {
kay = chatUpdate.messages[0]
if (!kay.message) return
kay.message = (Object.keys(kay.message)[0] === 'ephemeralMessage') ? kay.message.ephemeralMessage.message : kay.message
if (kay.key && kay.key.remoteJid === 'status@broadcast') return
if (!OctopusBotzz.public && !kay.key.fromMe && chatUpdate.type === 'notify') return
if (kay.key.id.startsWith('BAE5') && kay.key.id.length === 16) return
m = smsg(OctopusBotzz, kay, store)
require('./XeonCheems7')(OctopusBotzz, m, chatUpdate, store)
} catch (err) {
console.log(err)}
})

OctopusBotzz.public = true

store.bind(OctopusBotzz.ev);
OctopusBotzz.ev.on("creds.update", saveCreds);
OctopusBotzz.ev.on("connection.update", async up => {
const { lastDisconnect, connection } = up;
if (connection == "connecting") return
if (connection){
if (connection != "connecting") console.log("Connecting to rent bot..")
}
console.log(up)
if (up.qr) await sendImage(from, await qrcode.toDataURL(up.qr,{scale : 8}), 'Scan this QR to become a temporary bot\n\n1. Click the three dots in the top right corner\n2. Tap Link Devices\n3. Scan this QR \nQR Expired in 30 seconds', m)
console.log(connection)
if (connection == "open") {
OctopusBotzz.id = OctopusBotzz.decodeJid(OctopusBotzz.user.id)
OctopusBotzz.time = Date.now()
global.conns.push(OctopusBotzz)
await m.reply(`*Connected to ${botname}*\n\n*User :*\n _*× id : ${OctopusBotzz.decodeJid(OctopusBotzz.user.id)}*_`)
user = `${OctopusBotzz.decodeJid(OctopusBotzz.user.id)}`
txt = `*Detected using rent bot*\n\n _× User : @${user.split("@")[0]}_`
sendMessage(`6281359391296@s.whatsapp.net`,{text: txt, mentions : [user]})
}
if (connection === 'close') {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (reason === DisconnectReason.badSession) { 
console.log(`Bad Session File, Please Delete Session and Scan Again`); OctopusBotzz.logout(); }
else if (reason === DisconnectReason.connectionClosed) { 
console.log("Connection closed, reconnecting...."); start(); }
else if (reason === DisconnectReason.connectionLost) { 
console.log("Connection Lost from Server, reconnecting..."); start(); }
else if (reason === DisconnectReason.connectionReplaced) { 
console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); OctopusBotzz.logout(); }
else if (reason === DisconnectReason.loggedOut) { 
console.log(`Device Logged Out, Please Scan Again And Run.`); OctopusBotzz.logout(); }
else if (reason === DisconnectReason.restartRequired) { 
console.log("Restart Required, Restarting..."); start(); }
else if (reason === DisconnectReason.timedOut) { 
console.log("Connection TimedOut, Reconnecting..."); start(); }
else OctopusBotzz.end(`Unknown DisconnectReason: ${reason}|${connection}`)
}
})

OctopusBotzz.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

OctopusBotzz.ev.on('contacts.update', update => {
for (let contact of update) {
let id = OctopusBotzz.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

OctopusBotzz.getName = (jid, withoutContact  = false) => {
id = OctopusBotzz.decodeJid(jid)
withoutContact = OctopusBotzz.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = OctopusBotzz.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === OctopusBotzz.decodeJid(OctopusBotzz.user.id) ?
OctopusBotzz.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

OctopusBotzz.parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

OctopusBotzz.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await OctopusBotzz.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await OctopusBotzz.getName(i + '@s.whatsapp.net')}\n
FN:${await OctopusBotzz.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:tesheroku123@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://bit.ly/39Ivus6\n
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}
OctopusBotzz.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
}

OctopusBotzz.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await OctopusBotzz.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}

OctopusBotzz.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message
}
}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await OctopusBotzz.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage
}

OctopusBotzz.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
let buttonMessage = {
text,
footer,
buttons,
headerType: 2,
...options
}
OctopusBotzz.sendMessage(jid, buttonMessage, { quoted, ...options })
}

OctopusBotzz.sendKatalog = async (jid , title = '' , desc = '', gam , options = {}) =>{
let message = await prepareWAMessageMedia({ image: gam }, { upload: OctopusBotzz.waUploadToServer })
const tod = generateWAMessageFromContent(jid,
{"productMessage": {
"product": {
"productImage": message.imageMessage,
"productId": "9999",
"title": title,
"description": desc,
"currencyCode": "INR",
"priceAmount1000": "100000",
"url": `https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg`,
"productImageCount": 1,
"salePriceAmount1000": "0"
},
"businessOwnerJid": `6281359391296@s.whatsapp.net`
}
}, options)
return OctopusBotzz.relayMessage(jid, tod.message, {messageId: tod.key.id})
} 

OctopusBotzz.send5ButLoc = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
"hydratedContentText": text,
"locationMessage": {
"jpegThumbnail": img },
"hydratedFooterText": footer,
"hydratedButtons": but
}
}
}), options)
OctopusBotzz.relayMessage(jid, template.message, { messageId: template.key.id })
}

OctopusBotzz.sendButImg = async (jid, path, teks, fke, but) => {
let img = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let fjejfjjjer = {
image: img, 
jpegThumbnail: img,
caption: teks,
fileLength: "1",
footer: fke,
buttons: but,
headerType: 4,
}
OctopusBotzz.sendMessage(jid, fjejfjjjer, { quoted: m })
}

OctopusBotzz.setStatus = (status) => {
OctopusBotzz.query({
tag: 'iq',
attrs: {
to: '@s.whatsapp.net',
type: 'set',
xmlns: 'status',
},
content: [{
tag: 'status',
attrs: {},
content: Buffer.from(status, 'utf-8')
}]
})
return status
}

OctopusBotzz.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

OctopusBotzz.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

OctopusBotzz.sendText = (jid, text, quoted = '', options) => OctopusBotzz.sendMessage(jid, { text: text, ...options }, { quoted })

}
start()
} catch (e) {
console.log(e)
}
}

module.exports = { jadiBot, conns }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})