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