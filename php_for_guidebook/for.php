<?php

// for($i=★;$i<●;$i++){
// 処理}
// で★から●-1まで処理する(正確にはi<●を満たさなくなった場合に
// 処理を終了)
for($i=1; $i<=10; $i++){
  echo $i."、";
}

echo '<br>';

// $j = ★;
// while($j<●){
//   処理;
//   $j++;
// }
// で★から●-1まで処理をする

$j = 1;
while($j<10){
  echo $j."、";
  $j++;
}

echo '<br>';
// shopsの配列の中身を1個ずつ取り出して表示する
$shops = array('新宿店','目黒店','吉祥寺店');
foreach($shops as $ABC){
  echo $ABC;
}

echo '<br>';
// forのコロン構文
for($i=1; $i<=10; $i++):
  echo $i."、";
endfor;

echo '<br>';
// whileのコロン構文
$j = 1;
while($j<10):
  echo $j."、";
  $j++;
endwhile;

// foreachのコロン構文
$shops = array('新宿店','目黒店','吉祥寺店');
foreach($shops as $ABC):
  echo $ABC;
endforeach;
?>