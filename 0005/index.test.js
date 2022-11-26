const { reverseWords1, reverseWords2 } = require('./indes');

describe("0005のテスト", () => {
	test("reverseWords1のテスト", () => {

		expect(reverseWords1('The quick brown fox jumps over the lazy dog.'))
			.toBe('ehT kciuq nworb xof spmuj revo eht yzal .god');

		expect(reverseWords1('apple')).toBe('elppa');

		expect(reverseWords1('a b c d')).toBe('a b c d');

		expect(reverseWords1('double  spaced  words')).toBe('elbuod  decaps  sdrow')
	});

	test("reverseWords2のテスト", () => {

		expect(reverseWords2('The quick brown fox jumps over the lazy dog.'))
			.toBe('ehT kciuq nworb xof spmuj revo eht yzal .god');

		expect(reverseWords2('apple')).toBe('elppa');

		expect(reverseWords2('a b c d')).toBe('a b c d');

		expect(reverseWords2('double  spaced  words')).toBe('elbuod  decaps  sdrow')
	});
});
