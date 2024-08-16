alert("hello world!");

// const ★="■"で★に■を代入する
const message = "hello world!";
alert(message);

// const ★ =数値の場合は""が不要
const number = 123;
alert(number);

// 文字列(コンソールで確認)
console.log("hello world!");

// これはエラーが出る(コンソールで確認)
console.log("hello world!");

// 数値は""不要(コンソールで確認)
console.log("123");

// ""がない数値は実際に計算してくれる10+2は12と表示される(コンソールで確認)
console.log(10 + 2);

// ""だと文字列として認識
console.log("10+2");

// 定数はconstで扱う
const message1 = "hello world!";
console.log(message1);

// 変数はletで扱う(good morningをgreetingに代入)(コンソールで確認)
let greeting = "good morning!";
console.log(greeting);

// letは再代入OK
let greeting1 = "good morning!";
greeting1 = "good night!";
console.log(greeting1);

// ブロックスコープ{}の中にtext1=cと定義されているのでここはcと表示される
const text1 = "a";
{
  const text1 = "b";
  {
    const text1 = "c";
    console.log(text1);
  }
}

// ブロックスコープ{}の中にtext2は定義されていないの外側を探しに行く。するとtext2=bが表示される
const text2 = "a";
{
  const text2 = "b";
  {
    console.log(text2);
  }
}

// ブロックスコープ{}の中にtextは定義されていないの外側を探しに行く。
// ないのでさらに外側を探しに行くするとtext3=aが表示される
const text3 = "a";
{
  {
    console.log(text3);
  }
}

const userName = "山田";
const number1 = "5";
console.log("こんにちは" + userName + "さん");
// 定数は${★}でも表示できる
console.log("こんにちは${userName}さん");
console.log(5 * 3);
// ここでのnumber1は文字列として認識される
console.log(number1 + 3);