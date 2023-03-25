const { goodVsEvil } = require('./index');

describe("0010のテスト", () => {
	test("battleのテスト", () => {
		expect(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1')).toBe('Battle Result: Evil eradicates all trace of Good');
		expect(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0')).toBe('Battle Result: Good triumphs over Evil');
		expect(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0')).toBe('Battle Result: No victor on this battle field');
	});
});