// 0012
// https://www.codewars.com/kata/525f50e3b73515a6db000b83

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"


function createPhoneNumber(numbers) {
	return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
}

function createPhoneNumber2(numbers) {
	numbers = numbers.join('');
	return '(' + numbers.slice(0, 3) + ') '
		+ numbers.slice(3, 6)
		+ '-'
		+ numbers.slice(6);
}

function createPhoneNumber3(numbers) {
	return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}

function createPhoneNumber4(numbers) {
	return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}

module.exports = {
	createPhoneNumber,
	createPhoneNumber2,
	createPhoneNumber3,
	createPhoneNumber4
};