const { isPangram, isPangram1, isPangram2 } = require('./index');


describe("0007のテスト", () => {
	it("isPangramのテスト", () => {
		var string = "The quick brown fox jumps over the lazy dog."
		expect(isPangram(string)).toBeTruthy();
	})
	it("isPangramのテスト", () => {
		var string = "This is not a pangram."
		expect(isPangram(string)).toBeFalsy();
	});

	it("isPangram1のテスト", () => {
		var string = "The quick brown fox jumps over the lazy dog."
		expect(isPangram1(string)).toBeTruthy();
	})
	it("isPangram1のテスト", () => {
		var string = "This is not a pangram."
		expect(isPangram1(string)).toBeFalsy();
	});

	it("isPangram2のテスト", () => {
		var string = "The quick brown fox jumps over the lazy dog."
		expect(isPangram2(string)).toBeTruthy();
	})
	it("isPangram2のテスト", () => {
		var string = "This is not a pangram."
		expect(isPangram2(string)).toBeFalsy();
	});
});