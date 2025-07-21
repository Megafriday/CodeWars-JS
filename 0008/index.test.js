const { domainName, domainName1, domainName2, domainName3, domainName4, domainName5 } = require('./index');

describe("0008のテスト", () => {
	test("domainNameのテスト", () => {
		expect(domainName("http://google.com")).toBe("google");
		expect(domainName("http://google.co.jp")).toBe("google");
		expect(domainName("www.xakep.ru")).toBe("xakep");
		expect(domainName("https://youtube.com")).toBe("youtube");
		expect(domainName("https://www.e0-4b07e.pro/archive/")).toBe("e0-4b07e");
	});

	test("domainName1のテスト", () => {
		expect(domainName1("http://google.com")).toBe("google");
		expect(domainName1("http://google.co.jp")).toBe("google");
		expect(domainName1("www.xakep.ru")).toBe("xakep");
		expect(domainName1("https://youtube.com")).toBe("youtube");
		expect(domainName1("https://www.e0-4b07e.pro/archive/")).toBe("e0-4b07e");
	});

	test("domainName2のテスト", () => {
		expect(domainName2("http://google.com")).toBe("google");
		expect(domainName2("http://google.co.jp")).toBe("google");
		expect(domainName2("www.xakep.ru")).toBe("xakep");
		expect(domainName2("https://youtube.com")).toBe("youtube");
		expect(domainName2("https://www.e0-4b07e.pro/archive/")).toBe("e0-4b07e");
	});

	test("domainName3のテスト", () => {
		expect(domainName3("http://google.com")).toBe("google");
		expect(domainName3("http://google.co.jp")).toBe("google");
		expect(domainName3("www.xakep.ru")).toBe("xakep");
		expect(domainName3("https://youtube.com")).toBe("youtube");
		expect(domainName3("https://www.e0-4b07e.pro/archive/")).toBe("e0-4b07e");
	});

	test("domainName4のテスト", () => {
		expect(domainName4("http://google.com")).toBe("google");
		expect(domainName4("http://google.co.jp")).toBe("google");
		expect(domainName4("www.xakep.ru")).toBe("xakep");
		expect(domainName4("https://youtube.com")).toBe("youtube");
		expect(domainName4("https://www.e0-4b07e.pro/archive/")).toBe("e0-4b07e");
	});

	test("domainName5のテスト", () => {
		expect(domainName5("http://google.com")).toBe("google");
		expect(domainName5("http://google.co.jp")).toBe("google");
		expect(domainName5("www.xakep.ru")).toBe("xakep");
		expect(domainName5("https://youtube.com")).toBe("youtube");
		expect(domainName5("https://www.e0-4b07e.pro/archive/")).toBe("e0-4b07e");
	});

});