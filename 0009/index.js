// 0009
// toWeirdCase("String");		//=> returns "StRiNg"
// toWeirdCase("Weird string case");	//=> returns "WeIrD StRiNg CaSe"

/**
 * @param {string} sentence
 */
function toWeirdCase(sentence) {
	const strings = sentence.split(" ");
	const result = strings.map(str => {
		let newStr = "";
		for (let i = 0; i < str.length; i++) {
			if (i % 2 === 0) {
				newStr += str[i].toUpperCase();
			} else {
				newStr += str[i].toLowerCase();
			}
		}
		return newStr;
	});

	return result.join(" ");
}

// 上記のプログラムを最適化するには、文字列を直接操作する代わりに、
// 配列に変換して操作をしてから、文字列に戻します。
function toWeirdCase1(sentence) {
	return sentence
		.split(" ")
		.map(str => [...str]
			.map((c, i) => i % 2 === 0 ? c.toUpperCase() : c.toLowerCase())
			.join("")
		)
		.join(" ");
}

/**
 * @param {string} sentence
 */
function toWeirdCase2(sentence) {
	return sentence
		.toUpperCase()
		.replace(/\w{2}/g, val => val[0] + val[1].toLowerCase());
}

module.exports = {
	toWeirdCase,
	toWeirdCase1,
	toWeirdCase2
};