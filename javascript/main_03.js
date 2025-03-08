function calculation(number1, number2) {
  const plus = number1 + number2;
  const minus = number1 - number2;
  console.log('結果は', plus, 'です。');
  console.log('結果は', minus, 'です。');
  console.log(`${number1}+${number2}は${plus}です。`);
}
calculation(10, 5);

// 定数変数に関数を代入
const myFunc = function message(userName) {
  console.log('こんにち' + userName + 'さん');
  console.log(`こんにちは${userName}さん`);
};
myFunc('山田');

// 変数、定数が代入される場合は関数に名前を付けなくても関数を使うことができる。
// 一般的には定数、変数がある場合は関数に名前を付けない。こともおおい
const myFunc2 = function (userName) {
  console.log('こんにち' + userName + 'さん');
  console.log(`こんにちは${userName}さん`);
};
myFunc2('鈴木');

// functionがなくダブルアロー演算子(=>)を使って関数を定義することもできる。
// ダブルアロー関数という
// ちなみに(userName)でなくてuserNameでもOK
const myFunc3 = (userName) => {
  console.log('おはよう' + userName + 'さん');
  // ここは${}の場合は''ではなくバッククオート(`)を使う
  console.log(`おはよう${userName}さん`);
};
myFunc3('鈴木');

//return(処理した結果を関数を実行したところに返す)
function plus(number1, number2) {
  return number1 + number2;
}
console.log(plus(2, 5));



function minus(number3, number4) {
  console.log(number3 - number4);
}
// plus関数が上で定義されているので、その値plus(1,6)が1+6で7となるので
// minus(10,7)となり10-7で3となる
minus(10, plus(1, 6));


// return;があると処理は終了となる
// つなりreturn以降の処理は実行されない
function myFunc4() {
  return;
  console.log('こんにちは');
}
myFunc4();