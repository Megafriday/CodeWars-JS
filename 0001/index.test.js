const index = require('./index');
const data = "abc def ghi";   // 目標："Abc Def Ghi"

describe("0001のテスト", () => {

	test("solution1のテスト", () => {
		expect(index.solution1(data)).toBe("Abc Def Ghi")
	});

	test("solution2のテスト", () => {
		expect(index.solution2(data)).toBe("Abc Def Ghi")
	});

	test("solution3のテスト", () => {
		expect(index.solution3(data)).toBe("Abc Def Ghi")
	});

	test("solution4のテスト", () => {
		expect(index.solution4(data)).toBe("Abc Def Ghi")
	});

});


