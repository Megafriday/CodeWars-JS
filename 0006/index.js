// 0006
// https://www.codewars.com/kata/5264d2b162488dc400000001

// ５文字以上の文字列は順番を逆にする
// "Hey fellow warriors"  --> "Hey wollef sroirraw"
// "This is a test        --> "This is a test"
// "This is another test" --> "This is rehtona test"


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