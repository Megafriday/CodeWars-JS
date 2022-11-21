const { openOrSenior1, openOrSenior2 } = require('./index');


describe("004のテスト", () => {
	test("openOrSenior1のテスト", () => {

		expect(openOrSenior1([[45, 12], [55, 21], [19, -2], [104, 20]])).toStrictEqual(['Open', 'Senior', 'Open', 'Senior']);

		expect(openOrSenior1([[3, 12], [55, 1], [91, -2], [53, 23]])).toStrictEqual(['Open', 'Open', 'Open', 'Open']);

		expect(openOrSenior1([[59, 12], [55, -1], [12, -2], [12, 12]])).toStrictEqual(['Senior', 'Open', 'Open', 'Open']);

	});

	test("openOrSenior2のテスト", () => {

		expect(openOrSenior2([[45, 12], [55, 21], [19, -2], [104, 20]])).toStrictEqual(['Open', 'Senior', 'Open', 'Senior']);

		expect(openOrSenior2([[3, 12], [55, 1], [91, -2], [53, 23]])).toStrictEqual(['Open', 'Open', 'Open', 'Open']);

		expect(openOrSenior2([[59, 12], [55, -1], [12, -2], [12, 12]])).toStrictEqual(['Senior', 'Open', 'Open', 'Open']);

	});

});