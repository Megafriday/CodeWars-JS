// https://www.codewars.com/kata/52fba66badcd10859f00097e

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