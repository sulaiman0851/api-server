const axios = require("axios");
const chalk = require("chalk");

async function Bitly(link) {
	console.log(chalk.bgGreen(chalk.whiteBright("Bitly Shortlink")));
	await axios.get(`https://api.erdwpe.com/api/linkshort/bitly?link=${link}`);
}

module.exports = {
	Bitly, Tryurl
};
