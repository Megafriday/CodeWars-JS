// https://qiita.com/niku_ypp/items/ab01815a63763323d330

{
	// 配列の重複した値を削除
	const meta = ["foo", "bar", "baz", "foo"];

	const unique_meta = [...new Set(meta)];
	console.log(unique_meta);
}

{
	// 配列・オブジェクトをディープコピー
	const fruits = ["apple", ["banana", ["grape"]]];

	const copied_fruits = structuredClone(fruits);
	fruits[1][1][0] = "pineapple";
	console.log(fruits); // ["apple", ["banana", ["pineapple"]]]
	console.log(copied_fruits); // ["apple", ["banana", ["grape"]]]
}

{
	// 連番の配列を作成

	const sequential_number = [...new Array(5)].map((_, i) => i);
	console.log(sequential_number); // [0, 1, 2, 3, 4]
}

{
	// 配列内の文字列の数字を数値に換する
	const string_numbers = ["1", "10", "-100"];

	const numbers = string_numbers.map(i => +i);
	console.log(numbers);

	const numbers2 = string_numbers.map(Number);	// 数値に変換
	console.log(numbers2);

	const string_numbers2 = numbers2.map(String);	// 文字列に変換
	console.log(string_numbers2);
}

{
	// 配列をシャッフルする
	const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

	const shuffled_numbers = numbers.sort(() => Math.random() - 0.5);
	console.log(shuffled_numbers); // [7, 0, 6, 4, 1, 5, 2, 8, 3]
}

{
	// 配列内の偽の値を削除する
	const company = ["Microsoft", null, "Apple", "Google", null];

	const filtered_company = company.filter(Boolean);
	console.log(filtered_company);
}

{
	// 配列の最後の値を取得する
	const numbers = [1, 2, 3, 4, 5];
	console.log(numbers.at(-1)); // 5
	console.log(numbers.pop());
}

{
	// オブジェクトに動的プロパティ名を設定する

	const dynamic = "foo";
	const dynamic_objects = {
		[dynamic]: "bar"
	};
	console.log(dynamic_objects); // { foo: 'bar' }

	dynamic_objects['hoge'] = "fuga";
	console.log(dynamic_objects);	// { foo: 'bar', hoge: 'fuga' }
}

{
	// 複数のオブジェクトを一つにまとめる

	const user = {
		name: "Tarou",
		id: 102
	};

	const detail = {
		age: 25,
		birth: "1998-03-12"
	};

	const summary = { ...user, ...detail };
	console.log(summary); // { name: "Tarou", id: 102, age: 25, birth: "1998-03-12" }
}

{
	// 分割代入

	const num = [10, 20, 30];
	const [a, b, c] = num;
	console.log(a, b, c); // 10 20 30

	const num2 = [10, [20, 30]];
	const [a2, [b2, c2]] = num2;
	console.log(a2, b2, c2); // 10 20 30

	const num3 = [10, { key: "value" }, 30];
	const [a3, { key: b3 }, c3] = num3;
	console.log(a3, b3, c3); // 10 "value 30
}

{
	// 変数の値を入れ替える
	const a = 10;
	const b = 20;

	[a, b] = [b, a];
	console.log(a, b); // 20 10
}

{
	// 動的なプロパティがついたオブジェクトを生成する
	function obj(o) {
		const result = {};
		o.split(" ").forEach(v => result[v] = true);
		return result;
	}
	console.log(obj("apple banana orange")); // { apple: true, banana: true, orange: true } 
	// ↓
	function obj(o) {
		return o.split(" ").reduce((p, c) => (p[c] = true, p), {});
	}
	console.log(obj("apple banana orange")); // { apple: true, banana: true, orange: true } 
}

{
	// 正規表現
	const str = "I like 'apple' and 'banana'.";
	const regex = /'(.+?)' and '(.+?)'/;

	const match = str.match(regex);
	console.log(match);

	const fruits1 = match[1], fruits2 = match[2];
	console.log(fruits1);
	console.log(fruits2);
}

{
	const str = "I like 'apple' and 'banana'.";
	const regex = /'(.+?)' and '(.+?)'/;

	const [fruits1, fruits2] = str.match(regex)?.slice(1);
	console.log(fruits1);
	console.log(fruits2);
}

{
	const str = "I like 'apple' and 'banana'.";
	const regex = /'(.+?)' and '(.+?)'/;

	const [, fruits1, fruits2] = str.match(regex);
	console.log(fruits1);
	console.log(fruits2);
}

{
	const str = "I like 'apple' and 'banana'.";
	const regex = /'(.+?)' and '(.+?)'/;

	const [match, fruits1, fruits2] = str.match(regex) ?? [];

	if (!match) return;
	// or
	if (match) { }
}

{
	// if文省略
	const cond = true;
	const val = () => { };
	const val2 = () => { };

	if (cond) val();
	// ↓
	cond && val();

	if (cond) val(); else val2();
	// ↓
	(cond ? val : val2)();

	if (val) val(); else val2();
	// ↓
	(val || val2)();
}

{
	// 複数の値のどれかに一致
	if (s == "on" || s == "at" || s == "go") { }
	// ↓
	if (["on", "at", "go"].includes(s)) { }
}

{

}









{
	// 重複した文字数を数える
	const str = "kapilalipak";
	const result = [...str].reduce((acc, i) => {
		acc[i] = acc[i] + 1 || 1;
		return acc;
	}, {});
	console.log(result);
}

{
	// 重複した文字数を数える
	const str = "kapilalipak";
	const result = [...str].reduce((acc, i) => (acc[i] = acc[i] + 1 || 1, acc), {});
	console.log(result);
}