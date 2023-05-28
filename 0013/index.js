// https://www.codewars.com/kata/54a91a4883a7de5d7800009c
// incrementString("str");		// str1
// incrementString("str99");	// str100
// incrementString("str009");	// str010

/**
 * @param {string} str 
 */
function incrementString(str) {

	if (!/.*(\d+)$/.test(str)) return str + "1";
	return str.replace(/\d+$/,
		(match) => String(parseInt(match) + 1).padStart(match.length, "0"));

}

/**
 * @param {string} str
 */
function incrementString2(str) {
	const match = str.match(/(\d*)$/);
	const number = match[1] !== '' ? parseInt(match[1]) + 1 : 1;
	const paddedNumber = number.toString().padStart(match[1].length, '0');
	return str.slice(0, match.index) + paddedNumber;
}

function incrementString3(str) {
	return str.replace(/\d*$/, i => String(+i + 1).padStart(i.length, 0));

}

function incrementString4(str) {
	return str.replace(/\d*$/, i => {
		console.log("i：", i);		// ''
		return String(+i + 1);		// +'' => 0、　parseInt('') => NaN
	});
}

console.log(incrementString4("str"));

module.exports = {
	incrementString,
	incrementString2,
	incrementString3
}