const { proto, getContentType } = require("@whiskeysockets/baileys");
const chalk = require("chalk");
const fs = require("fs");
const Crypto = require("crypto");
const axios = require("axios");
const child_process = require("child_process");
const moment = require("moment-timezone");
const { sizeFormatter } = require("human-readable");
const util = require("util");
const Jimp = require("jimp");
//const { defaultMaxListeners } = require("stream");

const unixTimestampSeconds = (date = new Date()) =>
  Math.floor(date.getTime() / 1000);

exports.unixTimestampSeconds = unixTimestampSeconds;

exports.totalcase = () => {
  var file = fs.readFileSync("../octopusMainFile.js").toString();
  var jumlah = (file.match(/case '/g) || []).length;
  return jumlah;
};

// const moment = require("moment-timezone");

const ucapan = () => {
  /*===TIME with Moment Timezone===*/

  /*
ENG TIME (
GLOBAL TIMEZONE: {
"London"
})
*/
  const globalTime = moment.tz("Europe/London").format("HH:mm:ss");
  const globalDate = moment.tz("Europe/London").format("DD/MM/YYYY");

  ///////////<=========================>\\\\\\\\\\\

  ///////////ID TIME///////////

  const waktuIndo = moment.tz("Asia/Jakarta").format("HH:mm:ss");
  const tanggalIndo = moment.tz("Asia/Jakarta").format("DD/MM/YYYY");

  const time1 = moment().tz("Asia/Jakarta").format("HH:mm:ss");

  let ucapanWaktu = "";

  ///////////TimeSay///////////
  if (time1 < "04:00:00") {
    ucapanWaktu = "Waktu Fajar 🌃";
  } else if (time1 < "04:17:00") {
    ucapanWaktu = "Saatnya sholat *Subuh* 🕌";
  } else if (time1 < "04:27:00") {
    ucapanWaktu = "Waktu sholat *Subuh* telah usai ⌛";
  } else if (time1 < "05:00:00") {
    ucapanWaktu = "Selamat Pagi 🌄";
  } else if (time1 < "11:00:00") {
    ucapanWaktu = "Selamat Siang 🌁";
  } else if (time1 < "11:56:00") {
    ucapanWaktu = "Waktunya sholat *Dzuhur* 🕌";
  } else if (time1 < "12:07:00") {
    ucapanWaktu = "Waktu sholat *Dzuhur* telah usai ⌛";
  } else if (time1 < "14:00:00") {
    ucapanWaktu = "Selamat siang 🌅";
  } else if (time1 < "15:23:00") {
    ucapanWaktu = "Ini waktunya sholat *Ashar* 🕌";
  } else if (time1 < "15:33:00") {
    ucapanWaktu = "Waktu sholat *Ashar* telah usai ⌛";
  } else if (time1 < "16:00:00") {
    ucapanWaktu = "Selamat sore 🌅";
  } else if (time1 < "17:15:00") {
    ucapanWaktu = "Senja 🌇";
  } else if (time1 < "18:11:00") {
    ucapanWaktu = "Waktunya sholat *Magrib* 🕌";
  } else if (time1 < "18:21:00") {
    ucapanWaktu = "Waktu sholat *Maghrib* telah usai ⌛";
  } else if (time1 < "19:00:00") {
    ucapanWaktu = "Waktunya sholat *Isya* 🕌";
  } else if (time1 < "19:25:00") {
    ucapanWaktu = "Waktu sholat *Isya* telah usai ⌛";
  } else if (time1 < "19:20:00") {
    ucapanWaktu = "Selamat malam 🌌";
  } else {
    ucapanWaktu = "Tengah malam 🌉";
  }

  return { ucapanWaktu, globalTime, globalDate, waktuIndo, tanggalIndo };
};

const generateMessageTag = (epoch) => {
  let tag = (0, exports.unixTimestampSeconds)().toString();
  if (epoch) tag += ".--" + epoch; // attach epoch if provided
  return tag;
};

const processTime = (timestamp, now) => {
  return moment.duration(now - moment(timestamp * 1000)).asSeconds();
};

const getRandom = (ext) => {
  return `${Math.floor(Math.random() * 10000)}${ext}`;
};

const getBuffer = async (url, options) => {
  try {
    options ? options : {};
    const res = await axios({
      method: "get",
      url,
      headers: {
        DNT: 1,
        "Upgrade-Insecure-Request": 1,
      },
      ...options,
      responseType: "arraybuffer",
    });
    return res.data;
  } catch (err) {
    return err;
  }
};

const getImg = async (url, options) => {
  try {
    options ? options : {};
    const res = await axios({
      method: "get",
      url,
      headers: {
        DNT: 1,
        "Upgrade-Insecure-Request": 1,
      },
      ...options,
      responseType: "arraybuffer",
    });
    return res.data;
  } catch (err) {
    return err;
  }
};

const fetchJson = async (url, options) => {
  try {
    options ? options : {};
    const res = await axios({
      method: "GET",
      url: url,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
      },
      ...options,
    });
    return res.data;
  } catch (err) {
    return err;
  }
};
const webp2mp4File = async (path) => {
  return new Promise((resolve, reject) => {
    const form = new BodyForm();
    form.append("new-image-url", "");
    form.append("new-image", fs.createReadStream(path));
    axios({
      method: "post",
      url: "https://s6.ezgif.com/webp-to-mp4",
      data: form,
      headers: {
        "Content-Type": `multipart/form-data; boundary=${form._boundary}`,
      },
    })
      .then(({ data }) => {
        const bodyFormThen = new BodyForm();
        const $ = cheerio.load(data);
        const file = $('input[name="file"]').attr("value");
        bodyFormThen.append("file", file);
        bodyFormThen.append("convert", "Convert WebP to MP4!");
        axios({
          method: "post",
          url: "https://ezgif.com/webp-to-mp4/" + file,
          data: bodyFormThen,
          headers: {
            "Content-Type": `multipart/form-data; boundary=${bodyFormThen._boundary}`,
          },
        })
          .then(({ data }) => {
            const $ = cheerio.load(data);
            const result =
              "https:" +
              $("div#output > p.outfile > video > source").attr("src");
            resolve({
              status: true,
              message: "Created By Eternity",
              result: result,
            });
          })
          .catch(reject);
      })
      .catch(reject);
  });
};

const fetchUrl = async (url, options) => {
  try {
    options ? options : {};
    const res = await axios({
      method: "GET",
      url: url,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
      },
      ...options,
    });
    return res.data;
  } catch (err) {
    return err;
  }
};

const WAVersion = async () => {
  let get = await exports.fetchUrl(
    "https://web.whatsapp.com/check-update?version=1&platform=web"
  );
  let version = [get.currentVersion.replace(/[.]/g, ", ")];
  return version;
};

const isNumber = (number) => {
  const int = parseInt(number);
  return typeof int === "number" && !isNaN(int);
};
const TelegraPh = (Path) => {
  return new Promise(async (resolve, reject) => {
    if (!fs.existsSync(Path)) return reject(new Error("File not Found"));
    try {
      const form = new BodyForm();
      form.append("file", fs.createReadStream(Path));
      const data = await axios({
        url: "https://telegra.ph/upload",
        method: "POST",
        headers: {
          ...form.getHeaders(),
        },
        data: form,
      });
      return resolve("https://telegra.ph" + data.data[0].src);
    } catch (err) {
      return reject(new Error(String(err)));
    }
  });
};

const sleep = async (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const buffergif = async (image) => {
  const filename = `${Math.random().toString(36)}`;
  await fs.writeFileSync(`./XeonMedia/trash/${filename}.gif`, image);
  child_process.exec(
    `ffmpeg -i ./XeonMedia/trash/${filename}.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ./XeonMedia/trash/${filename}.mp4`
  );

  var buffer5 = await fs.readFileSync(`./XeonMedia/trash/${filename}.mp4`);
  Promise.all([
    unlink(`./XeonMedia/video/${filename}.mp4`),
    unlink(`./XeonMedia/gif/${filename}.gif`),
  ]);
  return buffer5;
};
const fetchBuffer = async (url, options) => {
  try {
    options ? options : {};
    const res = await axios({
      method: "GET",
      url,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36",
        DNT: 1,
        "Upgrade-Insecure-Request": 1,
      },
      ...options,
      responseType: "arraybuffer",
    });
    return res.data;
  } catch (err) {
    return err;
  }
};
const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};

const clockString = (ms) => {
  let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
  let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
  let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
};

const isUrl = (url) => {
  return url.match(
    new RegExp(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/,
      "gi"
    )
  );
};

const getTime = (format, date) => {
  if (date) {
    return moment(date).locale("id").format(format);
  } else {
    return moment.tz("Asia/Kolkata").locale("id").format(format);
  }
};

const formatDate = (n, locale = "id") => {
  let d = new Date(n);
  return d.toLocaleDateString(locale, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
};

const formatp = sizeFormatter({
  std: "JEDEC", //'SI' = default | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
});

const json = (string) => {
  return JSON.stringify(string, null, 2);
};

const format = (...args) => {
  return util.format(...args);
};

const logic = (check, inp, out) => {
  if (inp.length !== out.length)
    throw new Error("Input and Output must have same length");
  for (let i in inp) if (util.isDeepStrictEqual(check, inp[i])) return out[i];
  return null;
};

const generateProfilePicture = async (buffer) => {
  const jimp = await Jimp.read(buffer);
  const min = jimp.getWidth();
  const max = jimp.getHeight();
  const cropped = jimp.crop(0, 0, min, max);
  return {
    img: await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG),
    preview: await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG),
  };
};

const bytesToSize = (bytes, decimals = 2) => {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

const getSizeMedia = (path) => {
  return new Promise((resolve, reject) => {
    if (/http/.test(path)) {
      axios.get(path).then((res) => {
        let length = parseInt(res.headers["content-length"]);
        let size = exports.bytesToSize(length, 3);
        if (!isNaN(length)) resolve(size);
      });
    } else if (Buffer.isBuffer(path)) {
      let length = Buffer.byteLength(path);
      let size = exports.bytesToSize(length, 3);
      if (!isNaN(length)) resolve(size);
    } else {
      reject("I dont know what the error is");
    }
  });
};

const parseMention = (text = "") => {
  return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(
    (v) => v[1] + "@s.whatsapp.net"
  );
};

const getGroupAdmins = (participants) => {
  let admins = [];
  for (let i of participants) {
    i.admin === "superadmin"
      ? admins.push(i.id)
      : i.admin === "admin"
      ? admins.push(i.id)
      : "";
  }
  return admins || [];
};

/**
 * Serialize Message
 * @param {WAConnection} conn
 * @param {Object} m
 * @param {store} store
 */
const smsg = (OctopusBotzz, m, store) => {
  if (!m) return m;
  let M = proto.WebMessageInfo;
  if (m.key) {
    m.id = m.key.id;
    m.isBaileys = m.id.startsWith("BAE5") && m.id.length === 16;
    m.chat = m.key.remoteJid;
    m.fromMe = m.key.fromMe;
    m.isGroup = m.chat.endsWith("@g.us");
    m.sender = OctopusBotzz.decodeJid(
      (m.fromMe && OctopusBotzz.user.id) ||
        m.participant ||
        m.key.participant ||
        m.chat ||
        ""
    );
    if (m.isGroup)
      m.participant = OctopusBotzz.decodeJid(m.key.participant) || "";
  }
  if (m.message) {
    m.mtype = getContentType(m.message);
    m.msg =
      m.mtype == "viewOnceMessage"
        ? m.message[m.mtype].message[getContentType(m.message[m.mtype].message)]
        : m.message[m.mtype];
    m.body =
      m.message.conversation ||
      m.msg.caption ||
      m.msg.text ||
      (m.mtype == "listResponseMessage" &&
        m.msg.singleSelectReply.selectedRowId) ||
      (m.mtype == "buttonsResponseMessage" && m.msg.selectedButtonId) ||
      (m.mtype == "viewOnceMessage" && m.msg.caption) ||
      m.text;
    let quoted = (m.quoted = m.msg.contextInfo
      ? m.msg.contextInfo.quotedMessage
      : null);
    m.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : [];
    if (m.quoted) {
      let type = getContentType(quoted);
      m.quoted = m.quoted[type];
      if (["productMessage"].includes(type)) {
        type = getContentType(m.quoted);
        m.quoted = m.quoted[type];
      }
      if (typeof m.quoted === "string")
        m.quoted = {
          text: m.quoted,
        };
      m.quoted.mtype = type;
      m.quoted.id = m.msg.contextInfo.stanzaId;
      m.quoted.chat = m.msg.contextInfo.remoteJid || m.chat;
      m.quoted.isBaileys = m.quoted.id
        ? m.quoted.id.startsWith("BAE5") && m.quoted.id.length === 16
        : false;
      m.quoted.sender = OctopusBotzz.decodeJid(m.msg.contextInfo.participant);
      m.quoted.fromMe =
        m.quoted.sender === (OctopusBotzz.user && OctopusBotzz.user.id);
      m.quoted.text =
        m.quoted.text ||
        m.quoted.caption ||
        m.quoted.conversation ||
        m.quoted.contentText ||
        m.quoted.selectedDisplayText ||
        m.quoted.title ||
        "";
      m.quoted.mentionedJid = m.msg.contextInfo
        ? m.msg.contextInfo.mentionedJid
        : [];
      m.getQuotedObj = m.getQuotedMessage = async () => {
        if (!m.quoted.id) return false;
        let q = await store.loadMessage(m.chat, m.quoted.id, OctopusBotzz);
        return exports.smsg(OctopusBotzz, q, store);
      };
      let vM = (m.quoted.fakeObj = M.fromObject({
        key: {
          remoteJid: m.quoted.chat,
          fromMe: m.quoted.fromMe,
          id: m.quoted.id,
        },
        message: quoted,
        ...(m.isGroup
          ? {
              participant: m.quoted.sender,
            }
          : {}),
      }));

      /**
       *
       * @returns
       */
      m.quoted.delete = () =>
        OctopusBotzz.sendMessage(m.quoted.chat, {
          delete: vM.key,
        });

      /**
       *
       * @param {*} jid
       * @param {*} forceForward
       * @param {*} options
       * @returns
       */
      m.quoted.copyNForward = (jid, forceForward = false, options = {}) =>
        OctopusBotzz.copyNForward(jid, vM, forceForward, options);

      /**
       *
       * @returns
       */
      m.quoted.download = () => OctopusBotzz.downloadMediaMessage(m.quoted);
    }
  }
  if (m.msg.url) m.download = () => OctopusBotzz.downloadMediaMessage(m.msg);
  m.text =
    m.msg.text ||
    m.msg.caption ||
    m.message.conversation ||
    m.msg.contentText ||
    m.msg.selectedDisplayText ||
    m.msg.title ||
    "";
  /**
   * Reply to this message
   * @param {String|Object} text
   * @param {String|false} chatId
   * @param {Object} options
   */
  m.reply = (text, chatId = m.chat, options = {}) =>
    Buffer.isBuffer(text)
      ? OctopusBotzz.sendMedia(chatId, text, "file", "", m, {
          ...options,
        })
      : OctopusBotzz.sendText(chatId, text, m, {
          ...options,
        });
  /**
   * Copy this message
   */
  m.copy = () => exports.smsg(OctopusBotzz, M.fromObject(M.toObject(m)));

  /**
   *
   * @param {*} jid
   * @param {*} forceForward
   * @param {*} options
   * @returns
   */
  m.copyNForward = (jid = m.chat, forceForward = false, options = {}) =>
    OctopusBotzz.copyNForward(jid, m, forceForward, options);

  OctopusBotzz.appenTextMessage = async (text, chatUpdate) => {
    let messages = await generateWAMessage(
      m.chat,
      { text: text, mentions: m.mentionedJid },
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
  };

  return m;

  return m;
};

const reSize = async (buffer, ukur1, ukur2) => {
  return new Promise(async (resolve, reject) => {
    var media = await Jimp.read(buffer);
    var ab = await media.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG);
    resolve(ab);
  });
};

module.exports = {
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
  ucapan,
  reSize,
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
