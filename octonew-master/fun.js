const moment = require("moment-timezone");

const ucapanSelamat = () => {
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

	///////////TimeSay///////////
	const time1 = moment().tz("Asia/Jakarta").format("HH:mm:ss");

	if (time1 < "23:59:00") {
		var ucapanWaktu = "Tengah malam 🌉";
	}
	if (time1 < "19:20:00") {
		var ucapanWaktu = "Selamat malam 🌌";
	}
	if (time1 < "19:25:00") {
		var ucapanWaktu = "Waktu sholat *Isya* telah usai ⌛";
	}
	if (time1 < "19:00:00") {
		var ucapanWaktu = "Waktunya sholat *Isya* 🕌";
	}
	if (time1 < "18:21:00") {
		var ucapanWaktu = "Waktu sholat *Maghrib* telah usai ⌛";
	}
	if (time1 < "18:11:00") {
		var ucapanWaktu = "Waktunya sholat *Magrib* 🕌";
	}
	if (time1 < "17:15:00") {
		var ucapanWaktu = "Senja 🌇";
	}
	if (time1 < "16:00:00") {
		var ucapanWaktu = "Selamat sore 🌅";
	}
	if (time1 < "15:33:00") {
		var ucapanWaktu = "Waktu sholat *Ashar* telah usai ⌛";
	}
	if (time1 < "15:23:00") {
		var ucapanWaktu = "Ini waktunya sholat *Ashar* 🕌";
	}
	if (time1 < "14:00:00") {
		var ucapanWaktu = "Selamat siang 🌅";
	}
	if (time1 < "12:07:00") {
		var ucapanWaktu = "Waktu sholat *Dzuhur* telah usai ⌛";
	}
	if (time1 < "11:56:00") {
		var ucapanWaktu = "Waktunya sholat *Dzuhur* 🕌";
	}
	if (time1 < "11:00:00") {
		var ucapanWaktu = "Selamat Siang 🌁";
	}
	if (time1 < "05:00:00") {
		var ucapanWaktu = "Selamat Pagi 🌄";
	}
	if (time1 < "04:27:00") {
		var ucapanWaktu = "Waktu sholat *Subuh* telah usai ⌛";
	}
	if (time1 < "04:17:00") {
		var ucapanWaktu = "Saatnya sholat *Subuh* 🕌";
	}
	if (time1 < "04:00:00") {
		var ucapanWaktu = "Waktu Fajar 🌃";
	}
	return ucapanWaktu;
};

const waktu =()=>{
  const xtime = moment.tz("Asia/Jakarta").format("HH:mm:ss");
const xdate = moment.tz("Asia/Jakarta").format("DD/MM/YYYY");
return { xtime, xdate }
}

const stringContoh = () => {
  const xtime = moment.tz("Asia/Jakarta").format("HH:mm:ss");
const xdate = moment.tz("Asia/Jakarta").format("DD/MM/YYYY");
return `${xtime}, ${xdate}`
}

async function loading() {
	var xeonlod = [
		"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
		"《 ████▒▒▒▒▒▒▒▒》30%",
		"《 ███████▒▒▒▒▒》50%",
		"《 ██████████▒▒》80%",
		"《 ████████████》100%",
		"𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🦄..."
	];
	let key = await console.log("ʟᴏᴀᴅɪɴɢ...");

	for (let i = 0; i < xeonlod.length; i++) {
		await console.log(xeonlod[i]);
	}
}

module.exports = {
	ucapanSelamat,
	waktu,
	stringContoh,
	loading
};
