
// let i=★,i<=■;i++の場合は★～■までの処理をする
// とらえ方を変えると
// i=1から初めてi<=10の間{}の処理を行いその後iの条件を変える(この場合は1を足す)
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// let i=★;while(i<=■){●;i++}の場合は★～■までの処理をする
let j = 1;
while (j <= 5) {
  console.log(j);
  j++;
}

// 配列
// ここでは0番目がapple,1番目がbanana,2番目がorangeとなる
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits);
// 配列の0番目の要素を取得
console.log(fruits[0]);

// 配列.forEach(関数);で使える
// 配列名.forEach(function (★) {
//   f(★);
// });で1個ずつ要素を取り出してfという関数の処理をする

fruits.forEach(function (element) {
  console.log(`こんにちは${element}さん`);
});