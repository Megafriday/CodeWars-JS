const { toWeirdCase, toWeirdCase1, toWeirdCase2 } = require('./index');

describe("0009のテスト", () => {
	test("toWeirdCaseのテスト", () => {
		expect(toWeirdCase('This')).toBe('ThIs');
		expect(toWeirdCase2('THISa')).toBe('ThIsA');
		expect(toWeirdCase('is')).toBe('Is');
		expect(toWeirdCase('This is a test')).toBe('ThIs Is A TeSt');
	});

	test("toWeirdCase1のテスト", () => {
		expect(toWeirdCase1('This')).toBe('ThIs');
		expect(toWeirdCase2('THISa')).toBe('ThIsA');
		expect(toWeirdCase1('is')).toBe('Is');
		expect(toWeirdCase1('This is a test')).toBe('ThIs Is A TeSt');
	});

	test("toWeirdCase2のテスト", () => {
		expect(toWeirdCase2('This')).toBe('ThIs');
		expect(toWeirdCase2('THISa')).toBe('ThIsA');
		expect(toWeirdCase2('is')).toBe('Is');
		expect(toWeirdCase2('This is a test')).toBe('ThIs Is A TeSt');
	});
});