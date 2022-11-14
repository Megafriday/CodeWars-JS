/**
 * 母音を無くす
 * @param {string} str 
 */
const disemvowel1 = (str) => {
	return str.replace(/[aiueo]/ig, (match) => "");
};

module.exports = {
	disemvowel1
};