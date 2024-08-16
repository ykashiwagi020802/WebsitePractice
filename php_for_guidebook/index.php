
<div class="">
  <ul>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</div>

<!-- phpを実行するには＜？php★？；＞(ただし？＜＞；は半角)で★に操作を書く -->

<?php
  echo "Hello World!<br>";
  // <br>で改行タグ
  echo "good night<br>";
  // 数字を数字として扱いたい場合は""不要
  echo 3;
  echo "<br>";
  // 数字を文字列として扱いたい場合は""をつける
  echo "3";
  // ""だと文字列として足し算するので3+3が出力される
  echo "3+3";
  echo "<br>";
  // ""をつけないと数字として足し算するので6が出力される
  echo 3+3;
?>

<?php 
  // varという変数にhello worldという文字列を代入する
  $var = "Hello World!";
  // varという変数を出力(この場合に""は不要、""とすると文字列として認識される)
  echo $var;
  echo "<br>";
  // 変数.文字列とすると変数の後ろに文字列を追加できる
  // 変数.""でつなげる
  echo $var."山田さん";
  echo "<br>";
  $name = "山田";
  // 変数同士をつなぐのも.でできる
  // 変数.変数でつなげる
  echo $var . $name . "さん";
?>

<?php
  // 価格を1000円に設定する
  $price = 1000;
  echo $price;
  echo "<br>";
  // number_format(★);で★の値をカンマ区切りにする
  // (例1000→1,000)
  echo number_format($price);
?>

<?php

$a = 5;
$b = 8;
$total = $a + $b;
// if(★){●}で★の条件が満たされていたら●を行う
if($total == 13){
  echo '$totalは13です';
}
echo "<br>";
// !=で≠を表す
if($total != 10){
  echo '$totalは10ではありません';
}

echo "<br>";

// if(★){●} ★がtrueなら{●}の処理を行う
if(true){
  echo 'これはtrueです';
}
// if(★){●} ★がfalseなら{●}の処理は行わない
if(false){
  echo 'これはfalseです';
}
?>

<?php
echo "<br>";
$a = 5;
$b = 8;
$total = $a + $b;
// if(★||■){●}で★の条件か■の条件どちらかが満たされていたら●を行う
if($a == 5|| $b ==3){
  echo '$aが5または$bが3です';
}

?>

<?php
echo "<br>";
$a = 5;
$b = 8;
$total = $a + $b;
// if(★&&■){●}で★の条件か■の条件両方が満たされていたら●を行う
if($a == 5&& $b ==8){
  echo '$aが5かつ$bが8です';
  echo "<br>";
}
?>

<?php
echo "<br>";
$a = 5;
$b = 8;
$total = $a + $b;
if($a == 5&& $b ==4){
  echo '$aが5かつ$bが8です';
  echo "<br>";

// if→elseifでifがfalseのときにelseifの条件を判定する
}elseif($a == 5|| $b ==3){
  echo '$aが5または$bが3です';
  echo "<br>";
}
?>

<?php
echo "<br>";
$a = 5;
$b = 8;
$total = $a + $b;
if($a == 5&& $b ==4){
  echo '$aが5かつ$bが8です';
  echo "<br>";

// if→elseifでifがfalseのときにelseifの条件を判定する
}elseif($a == 4|| $b ==3){
  echo '$aが5または$bが8です';
  echo "<br>";
  //elseifがfalseのときにelse条件を判定するor動作を実行する
}else{
  echo '全部falseでした';
}
?>

<?php
echo "<br>";
$a = 5;
$b = 8;
$total = $a + $b;

// if(★):■;
// elseif(■):●;
// else:▲;
// endif;
// という書き方もあり

if($a == 5&& $b ==4):
  echo '$aが5かつ$bが8です';
  echo "<br>";
elseif($a == 4|| $b ==3):
  echo '$aが5または$bが8です';
  echo "<br>";
else:
  echo '全部falseでした';
endif;
?>
