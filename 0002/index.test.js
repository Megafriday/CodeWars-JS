const index = require('./index');

describe("0002のテスト", () => {
	test("solution1のテスト", () => {
		expect(index.solution1("abc")).toStrictEqual(["ab", "c_"]);
		expect(index.solution1("abcdef")).toStrictEqual(["ab", "cd", "ef"]);
		expect(index.solution1("")).toStrictEqual([]);
	});

	test("solution2のテスト", () => {
		expect(index.solution2("abc")).toStrictEqual(["ab", "c_"]);
		expect(index.solution2("abcdef")).toStrictEqual(["ab", "cd", "ef"]);
		expect(index.solution2("")).toStrictEqual([]);
	});
});