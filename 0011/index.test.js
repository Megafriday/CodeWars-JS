const { alphanumeric, alphanumeric2 } = require('./index');


describe("0011のテスト", () => {
	test("alphanumericのテスト", () => {
		expect(alphanumeric("Mazinkaiser")).toBeTruthy();
		expect(alphanumeric("hello world_")).toBeFalsy();
		expect(alphanumeric("PassW0rd")).toBeTruthy();
		expect(alphanumeric("     ")).toBeFalsy();
	});

	test("alphanumeric2のテスト", () => {
		expect(alphanumeric2("Mazinkaiser")).toBeTruthy();
		expect(alphanumeric2("hello world_")).toBeFalsy();
		expect(alphanumeric2("PassW0rd")).toBeTruthy();
		expect(alphanumeric2("     ")).toBeFalsy();
	});
});