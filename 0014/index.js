// N予備校 プログラミング座談会での出題
// https://www.nnn.ed.nico/lessons/482532548

// 問題： "ぺりかん" => "ぺん"
let data = "ぺりかん";
console.log(data.charAt(0) + data.charAt(data.length - 1));
console.log(data[0] + data[data.length - 1]);
console.log(data.replace(/^(.).+(.)$/, "$1$2"));
const arr = data.match(/^(.).+(.)$/);
console.log(arr[1] + arr[2]);

// 問題： "山田 太郎" => "山田"
data = "山田 太郎";
console.log(data.slice(0, data.indexOf(" ")));
console.log(data.substring(0, data.indexOf(" ")));
console.log(data.split(" ")[0]);
console.log(data.replace(/^(.+) .+$/, "$1"));
console.log(data.match(/^(.+) .+$/)[1]);

// 問題："09012345678" => "090-1234-5678"
data = "09012345678";
console.log(data.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"));
console.log(`${data.slice(0, 3)}-${data.slice(3, 7)}-${data.slice(7, 12)}`);
console.log(`${data.substring(0, 3)}-${data.substring(3, 7)}-${data.substring(7, 12)}`);

// 問題： [56, 83, 105, 222] => [ 28, 111 ]
// 偶数のみ２で割った値にする
data = [56, 83, 105, 222];
console.log(data.filter(i => i % 2 === 0).map(i => i / 2));
