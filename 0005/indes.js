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

module.exports = {
	reverseWords1,
	reverseWords2
}