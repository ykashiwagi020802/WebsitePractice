
// function ★(){■}で★は関数名、■は関数の処理内容を記述
// function message() {
//   console.log("こんにちは山田さん");
// }
// message();

// 新しい関数
function message(userName) {
  console.log('こんにちは' + userName + 'さん');
}

// say()の()の中のuserNameに山田を代入した値を返す
message('山田');
// say()の()の中のuserNameに田中を代入した値を返す
message('田中');

function calculation(number1, number2) {
  console.log('number1は${number1}です。number2は${number2}です。');
}
calculation(10, 5);