const numberA = 10;
const numberB = 5;
if (numberA > numberB) {
  console.log(numberA + "は" + numberB + "より大きいです。");
  // 上の行と同じ意味
  console.log("${numberA}は${numberB}よりおおきい");
}

const numberC = 10;
const numberD = 15;
if (numberC > numberD) {
  console.log(numberC + "は" + numberD + "より大きいです。");
  // 上の行と同じ意味
  console.log("${numberC}は${numberD}よりおおきい");
  // ===は型も含めて同じ(例えば文字列の10と数値の10は違う)
  // ==は数字だけ同じなら方が違くてもtrueとなる
} else if (numberC === numberD) {
  console.log(numberC + "は" + numberD + "と等しいです。");
} else {
  console.log(numberC + "は" + numberD + "より小さいです。");
}

// 比較演算はtrueかfalseを返す
// つまりconsole.log(★)は★がtrueかfalseを返す
console.log(numberC > numberD);
console.log(numberA > numberB);

// データの型としてtrue、falseもある(falseは""不要)
// ちなみにfalseが代入されるとif文の中身は実行されないので何も表示されない
const data = false;
if (data) {
  console.log("テスト");
}

// 0、-0、false、NaN、null、undefined、0n、""(空の文字列)はfalseとして扱われる
const sentence0 = "";
if (data) {
  console.log("trueです");
} else {
  console.log("falseです");
}

const sentence1 = "test";
if (data) {
  console.log("trueです");
} else {
  console.log("falseです");
}

const value0 = 0;
if (data) {
  console.log("trueです");
} else {
  console.log("falseです");
}

const value1 = 140;
if (data) {
  console.log("trueです");
} else {
  console.log("falseです");
}

// let ★だと★は宣言されるが値としてはundefinedとなる
let person;
console.log(person);

// この場合はpersonは値がundefinedなのでfalseとして扱われる
let person1;
console.log(person1);
if (person1) {
  console.log("こんにちは${person1}さん");
} else {
  console.log("person1はfalseです");
}

