const { incrementString, incrementString2, incrementString3 } = require('./index');

describe("0013のテスト", () => {
	test("incrementStringのテスト", () => {
		expect(incrementString("foobar000")).toBe("foobar001");
		expect(incrementString("foobar999")).toBe("foobar1000");
		expect(incrementString("foobar00999")).toBe("foobar01000");
		expect(incrementString("foo")).toBe("foo1");
		expect(incrementString("foobar001")).toBe("foobar002");
		expect(incrementString("foobar1")).toBe("foobar2");
		expect(incrementString("1")).toBe("2");
		expect(incrementString("009")).toBe("010");
		expect(incrementString("fo99obar99")).toBe("fo99obar100");
	});

	test("incrementString2のテスト", () => {
		expect(incrementString2("foobar000")).toBe("foobar001");
		expect(incrementString2("foobar999")).toBe("foobar1000");
		expect(incrementString2("foobar00999")).toBe("foobar01000");
		expect(incrementString2("foo")).toBe("foo1");
		expect(incrementString2("foobar001")).toBe("foobar002");
		expect(incrementString2("foobar1")).toBe("foobar2");
		expect(incrementString2("1")).toBe("2");
		expect(incrementString2("009")).toBe("010");
		expect(incrementString2("fo99obar99")).toBe("fo99obar100");
	});

	test("incrementString3のテスト", () => {
		expect(incrementString3("foobar000")).toBe("foobar001");
		expect(incrementString3("foobar999")).toBe("foobar1000");
		expect(incrementString3("foobar00999")).toBe("foobar01000");
		expect(incrementString3("foo")).toBe("foo1");
		expect(incrementString3("foobar001")).toBe("foobar002");
		expect(incrementString3("foobar1")).toBe("foobar2");
		expect(incrementString3("1")).toBe("2");
		expect(incrementString3("009")).toBe("010");
		expect(incrementString3("fo99obar99")).toBe("fo99obar100");
	});
});