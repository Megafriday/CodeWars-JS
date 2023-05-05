const { createPhoneNumber, createPhoneNumber2, createPhoneNumber3, createPhoneNumber4 } = require('./index');

describe("0012のテスト", () => {
	test("createPhoneNumberのテスト", () => {
		expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe("(123) 456-7890");
		expect(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toBe("(111) 111-1111");
		expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe("(123) 456-7890");

	});

	test("createPhoneNumber2のテスト", () => {
		expect(createPhoneNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe("(123) 456-7890");
		expect(createPhoneNumber2([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toBe("(111) 111-1111");
		expect(createPhoneNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe("(123) 456-7890");
	});

	test("createPhoneNumber3のテスト", () => {
		expect(createPhoneNumber3([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe("(123) 456-7890");
		expect(createPhoneNumber3([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toBe("(111) 111-1111");
		expect(createPhoneNumber3([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe("(123) 456-7890");
	});

	test("createPhoneNumber4のテスト", () => {
		expect(createPhoneNumber4([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe("(123) 456-7890");
		expect(createPhoneNumber4([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toBe("(111) 111-1111");
		expect(createPhoneNumber4([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe("(123) 456-7890");
	});
});