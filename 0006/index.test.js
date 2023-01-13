const { spinWords1, spinWords2 } = require('./index');

describe("0006のテスト", () => {
	test("spinWords1のテスト", () => {
		expect(spinWords1("Welcome")).toBe("emocleW");
		expect(spinWords1("Hey fellow warriors")).toBe("Hey wollef sroirraw");
		expect(spinWords1("This is a test")).toBe("This is a test");
		expect(spinWords1("This is another test")).toBe("This is rehtona test");
		expect(spinWords1("You are almost to the last test")).toBe("You are tsomla to the last test");
		expect(spinWords1("Just kidding there is still one more")).toBe("Just gniddik ereht is llits one more");
		expect(spinWords1("Seriously this is the last one")).toBe("ylsuoireS this is the last one");
	});

	test("spinWords2のテスト", () => {
		expect(spinWords2("Welcome")).toBe("emocleW");
		expect(spinWords2("Hey fellow warriors")).toBe("Hey wollef sroirraw");
		expect(spinWords2("This is a test")).toBe("This is a test");
		expect(spinWords2("This is another test")).toBe("This is rehtona test");
		expect(spinWords2("You are almost to the last test")).toBe("You are tsomla to the last test");
		expect(spinWords2("Just kidding there is still one more")).toBe("Just gniddik ereht is llits one more");
		expect(spinWords2("Seriously this is the last one")).toBe("ylsuoireS this is the last one");
	});
});