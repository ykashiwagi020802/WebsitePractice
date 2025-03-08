// button要素をclickしたときに以下の要素を行う
document.querySelector('button').addEventListener('click', function () {

  const p = document.querySelectorAll('p');
  // 全てのp要素を取得

  p.forEach(function (element) {
    // classListでその要素(これで言えばp要素)に操作をできる
    // .add('★')で★のclassを追加

    element.classList.add('visible');
  });
});