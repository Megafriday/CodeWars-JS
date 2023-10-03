// 座席をシャッフルするプログラム

let seats = [
  ['藤井', '永瀬', '渡辺', '豊島'],
  ['千田', '羽生', '斎藤', '菅井'],
  ['佐々木', '久保', '木村', '佐藤'],
  ['広瀬', '糸谷', '丸山']
]; // 現在の座席の二次元配列


for (let i = 0; i < 100; i++) {
  let row1 = Math.floor(Math.random() * seats.length);
  let col1 = Math.floor(Math.random() * seats[row1].length);
  let name1 = seats[row1][col1];

  let row2 = Math.floor(Math.random() * seats.length);
  let col2 = Math.floor(Math.random() * seats[row2].length);
  let name2 = seats[row2][col2];

  seats[row1][col1] = name2;
  seats[row2][col2] = name1;

}

console.log(seats);