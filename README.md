## CodeWars-JS
CodeWarsの勉強履歴

## URL
https://www.codewars.com/

## コマンド
00からはじまるフォルダに格納されているjsファイルのうちテストファイルを除くファイrの中身をall.txtに出力したい

find ./00* -type f -name "*.js" ! -name "*.test.js" | sort | xargs cat > all.txt