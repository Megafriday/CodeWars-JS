// https://www.codewars.com/kata/5390bac347d09b7da40006f6

const data = "abc def ghi";   // 目標："Abc Def Ghi"

/**
 * 先頭を大文字にする関数
 * @param {string} str
 */
const solution1 = (str) => {
	return str.replace(/(^|\s)[a-z]/g, s => s.toUpperCase());
};


/**
 * 先頭を大文字にする関数
 * @param {string} str 
 */
const solution2 = (str) => {
	return str.split(" ")
		.map(s => s.charAt(0).toUpperCase() + s.slice(1))
		.join(" ");
};

/**
 * 先頭を大文字にする関数
 * @param {string} str 
 */
const solution3 = (str) => {
	return str.split(" ")
		.map(s => s.slice(0, 1).toUpperCase() + s.slice(1))
		.join(" ");
};

/**
 * 先頭を大文字にする関数
 * @param {string} str 
 */
const solution4 = (str) => {
	return str.split(" ")
		.map(s => s[0].toUpperCase() + s.slice(1))
		.join(" ");
};


module.exports = {
	solution1,
	solution2,
	solution3,
	solution4
}