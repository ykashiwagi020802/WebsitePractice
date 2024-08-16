
const message = 'Hello World';
// promptはユーザーが入力できるフォームを表示する
// prompt("あなたの名前を教えてください");

// ユーザーがダイアログで入力した文字列をyourNameに代入
// (consoleに入力した値が表示される)
let yourName = prompt("あなたの名前を教えてください");
console.log(yourName);

// ウインドウの高さはinnderHeight(またはwindow.innerHeight)で取得できる
console.log(`ウィンドウの高さは${innerHeight}です`);

// document.querySelector('.★').textContentで★のクラス(の一番最初)のテキストを取得
console.log(document.querySelector('.p1').textContent);
// document.querySelector('.★').textContentですべての★のnodeを取得
console.log(document.querySelectorAll('p'));

// ここでtextは全てのp要素と定義
const text = document.querySelectorAll('p');
// textの要素を1個ずつ取り出してtextcontent(つまりテキスト部分)を表示
// (つまり全てのp要素のテキスト部分を表示)
text.forEach(function (element) {
  console.log(element.textContent);
});

// document.querySelector('★').textContent ='●'
// ★の要素のテキストを●に変更
// この場合はh1classに対してtextContentを変更
document.querySelector('h1').textContent = 'メッセージが届いています';

// document.querySelector('★').addEventListener('●',function(){
//   操作■
// });で★の要素に対して●のイベントが起きたら■がおこる。
// 本例ではbuttonをclickした時にconsoleにメッセージを表示する
document.querySelector('button').addEventListener('click', function () {
  console.log('ボタンがクリックされました');
});