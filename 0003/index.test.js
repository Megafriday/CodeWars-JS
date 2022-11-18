const { disemvowel1, disemvowel2 } = require('./index');


describe("0003のテスト", () => {
	test("", () => {
		expect(disemvowel1("This website is for losers LOL!")).toBe("Ths wbst s fr lsrs LL!");
		expect(disemvowel1("No offense but,\nYour writing is among the worst I've ever read")).toBe("N ffns bt,\nYr wrtng s mng th wrst 'v vr rd");
		expect(disemvowel1("What are you, a communist?")).toBe("Wht r y,  cmmnst?");

		expect(disemvowel2("This website is for losers LOL!")).toBe("Ths wbst s fr lsrs LL!");
		expect(disemvowel2("No offense but,\nYour writing is among the worst I've ever read")).toBe("N ffns bt,\nYr wrtng s mng th wrst 'v vr rd");
		expect(disemvowel2("What are you, a communist?")).toBe("Wht r y,  cmmnst?");
	});
});