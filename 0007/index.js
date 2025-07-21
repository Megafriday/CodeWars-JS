// 0007
// https://www.codewars.com/kata/545cedaa9943f7fe7b000048

// パングラムは、アルファベットのすべての文字を少なくとも一度は含む文です。
// たとえば、「The quick brown fox jumps over the lazy dog"」という文は、A-Z の文字を
// 少なくとも一度使用するため、パングラムです(大文字と小文字は関係ありません)。
// 文字列が与えられた場合、それがパングラムであるかどうかを検出します。
// 返す場合は True、そうでない場合は False を返します。数字と句読点は無視します。

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
	const alpahbet = "abcdefghijklmnopqrstuvwxyz".split("");
	return alpahbet.every((s) => sentence.toLowerCase().includes(s));
}

function isPangram2(sentence) {
	const alpabet = "abcdefghijklmnopqrstuvwxyz";
	let result = true;

	for (const element of [...alpabet]) {
		const regexp = new RegExp(element);
		result = result && regexp.test(sentence);
	}

	return result;
}



module.exports = {
	isPangram,
	isPangram1,
	isPangram2
};
