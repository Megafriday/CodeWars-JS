// https://www.codewars.com/kata/545cedaa9943f7fe7b000048

/**
 * @param {string} string 
 */
function isPangram(string) {
	const data = string.toLowerCase().replaceAll(" ", "");
	for (let i = 97; i <= 122; i++) {
		if (!data.includes(String.fromCodePoint(i))) return false;
	}
	return true;
}

function isPangram1(string) {
	const alpahbetList = "abcdefghijklmnopqrstuvwxyz".split("");
	return alpahbetList.every((s) => string.toLowerCase().includes(s));
}


module.exports = {
	isPangram,
	isPangram1
};