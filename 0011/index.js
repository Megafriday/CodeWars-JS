// https://www.codewars.com/kata/526dbd6c8c0eb53254000110

function alphanumeric(phrase) {
	if (phrase === "") return false;	// 正規表現の ^ $ でカバー出来る
	const regexp = /[a-zA-Z0-9]+/;
	return [...phrase].every(s => regexp.test(s));
}

function alphanumeric2(string) {
	return /^[0-9a-z]+$/i.test(string);
}

module.exports = {
	alphanumeric,
	alphanumeric2
};