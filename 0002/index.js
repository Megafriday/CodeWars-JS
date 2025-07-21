// 0002
// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

const data = "abc";			// 目標：["ab", "c_"]
const data2 = "abcdef"	// 目標：["ab", "cd", "ef"]

/**
 * @param {string} str 
 */
const solution1 = (str) => {

	if (str.length % 2 == 1) str += "_";

	result = [];
	for (let i = 0; i < str.length; i += 2) {
		result.push(str[i] + str[i + 1]);
	}
	return result;
};

/**
 * @param {string} str 
 */
const solution2 = (str) => {
	return (str + "_").match(/.{2}/g) || [];
};


module.exports = {
	solution1,
	solution2
};