// 0004
// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa

// シニアになるには、メンバーは55歳以上で、ハンディキャップが7を超える必要があります。

const data = [[45, 12], [55, 21], [19, -2], [104, 20]];

function openOrSenior1(data) {
	return data.map(([age, handicap]) => {
		if (age >= 55 && handicap > 7) return "Senior";
		return "Open";
	});
}

function openOrSenior2(data) {
	return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}

module.exports = {
	openOrSenior1,
	openOrSenior2
};