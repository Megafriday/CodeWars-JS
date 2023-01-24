// https://www.codewars.com/kata/545cedaa9943f7fe7b000048

/**
 * @param {string} string 
 */
function isPangram(sentence) {
	sentence = sentence.toLowerCase().replaceAll(" ", "");
	for (let i = 97; i <= 122; i++) {
		if (!sentence.includes(String.fromCodePoint(i))) return false;
	}
	return true;
}

function isPangram1(sentence) {
	const alpahbetList = "abcdefghijklmnopqrstuvwxyz".split("");
	return alpahbetList.every((s) => sentence.toLowerCase().includes(s));
}


module.exports = {
	isPangram,
	isPangram1
};
