/**
 * @param {string} string 
 */
function spinWords1(string) {
	return string.split(" ")
		.map(str => str.length >= 5 ? [...str].reverse().join("") : str)
		.join(" ");
}

/**
 * @param {string} string 
 */
function spinWords2(string) {
	return string.replace(/\w{5,}/g, str => [...str].reverse().join(""));
}

module.exports = {
	spinWords1,
	spinWords2
};