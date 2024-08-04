const fs = require("fs");
const chalk = require("chalk");

//owmner v card
global.ytname = "YT: ICode"; //ur yt chanel name
global.socialm = "GitHub: sulaiman0851"; //ur github or insta name
global.location = "Indonesia"; //ur location

//new
global.botname = "Octopus Botzz MD"; //ur bot name
global.ownernumber = "6281359391296"; //ur owner number
global.ownername = "Sulaiman Majid"; //ur owner name
global.websitex = "https://bit.ly/m/octopus-bot";
global.wagc = "https://chat.whatsapp.com/H5pTRObSv3sAcihLxO0mDF";
global.themeemoji = "🪀";
global.wm = "OCTOPUS BOT";
global.botscript = "https://github.com/404"; //script link
global.packname = "Sticker By";
global.author = "Octopus Bot | https://bit.ly/m/octopus-bot";
global.creator = "6281359391296@s.whatsapp.net";
global.xprefix = ".";
global.premium = ["6281359391296", "6287763151406", "6282174325809"]; // Premium User
global.hituet = 0;

global.limitawal = {
  premium: "Infinity",
  free: 2,
  monayawal: 1000
}

global.rpg = {
  darahawal: 100,
  besiawal: 15,
  goldawal: 10,
  emeraldawal: 5,
  umpanawal: 5,
  potionawal: 1
}

//bot sett
global.typemenu = "v8"; // menu type 'v1' => 'v8'
global.typereply = "v2"; // reply type 'v1' => 'v3'
global.autoblocknumber = "92"; //set autoblock country code
global.antiforeignnumber = "91"; //set anti foreign number country code
global.welcome = true; //welcome/left in groups
global.anticall = false; //bot blocks user when called
global.autoswview = true; //auto status/story view
global.adminevent = false; //show promote/demote message
global.groupevent = true; //show update messages in group chat
global.publik = true; //on if you want to public the bot
global.autoread = true
//msg
global.mess = {
  limit: "Your limit is up!",
  nsfw: "Nsfw is disabled in this group, Please tell the admin to enable",
  done: "Done✓",
  error: "Error!",
  success: "Here you go!",
};
//thumbnail
global.thumb = fs.readFileSync("./OctopusBotzzMedia/theme/oct.jpg");

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
