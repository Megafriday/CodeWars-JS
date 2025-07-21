// 0005
// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

/**
 * @param {string} str 
 */
function reverseWords1(str) {
	const data = str.split(" ");
	const result = [];

	for (const s of data) {
		let buf = "";
		for (let i = s.length - 1; i >= 0; i--) {
			buf += s[i];
		}
		result.push(buf);
	}

	return result.join(" ");
}

/**
 * @param {string} str 
 */
function reverseWords2(str) {
	return str.split(" ").map(s => s.split("").reverse().join("")).join(" ");
}

/**
 * @param {string} str 
 */
function reverseWords3(str) {
	return str.replace(/\S+/g, s => [...s].reverse().join(""));
}

module.exports = {
	reverseWords1,
	reverseWords2,
	reverseWords3
}