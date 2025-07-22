// 0011
// https://www.codewars.com/kata/526dbd6c8c0eb53254000110


// 文字列が英数字であることを確認する。英数字には、次の条件があります。
// 少なくとも 1 文字(""は無効)
// 使用できる文字は、大文字 / 小文字のラテン文字と 0 から 9 までの数字です。
// 空白 / アンダースコアなし


function alphanumeric(phrase) {
	if (phrase === "") return false;	// 正規表現の ^ $ でカバー出来る
	const regexp = /[a-zA-Z0-9]/;
	return [...phrase].every(s => regexp.test(s));
}

function alphanumeric2(string) {
	return /^[0-9a-z]+$/i.test(string);
}

module.exports = {
	alphanumeric,
	alphanumeric2
};