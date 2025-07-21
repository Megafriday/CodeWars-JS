// 0003
// https://www.codewars.com/kata/52fba66badcd10859f00097e

// 「This website is for losers LOL!」という文字列は「Ths wbst s fr lsrs LL!」になります。

/**
 * 母音を無くす
 * @param {string} str 
 */
const disemvowel1 = (str) => {
	return str.replace(/[aiueo]/ig, (match) => "");
};

const disemvowel2 = (str) => {
	return str.replace(/[aiueo]/ig, "");
};

module.exports = {
	disemvowel1,
	disemvowel2
};