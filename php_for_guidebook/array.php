<?php

// 店舗リスト
// 新宿店、目黒店、吉祥寺店

$shop_shinjuku = '新宿店';
$shop_meguro = '目黒店';
$shop_kichijoji = '吉祥寺店';

echo $shop_shinjuku . '、' . $shop_meguro . '、' . $shop_kichijoji . '、';

// array()で配列を定めることができる。新宿店が0番目、目黒店が1番目、吉祥寺店が2番目となる。番目は0から始まる。
$shops = array('新宿店', '目黒店', '吉祥寺店');

  echo '<br>';
  // $★[●]で★の配列の●番目の要素を取り出す
  echo $shops[0];
  echo '<br>';
  echo $shops[1];
  echo '<br>';
  echo $shops[2];

  echo '<br>';
  echo '<br>';
  // $★[] = '●';で★の配列に●を加える
  $shops[] = '横浜店';
  echo $shops[3];
  
  echo '<br>';
  // 連想配列
  // $★ = array('●' => '○', '▲' => '■', '☆' => '★');によって
  // ●が〇、▲が■、☆が★に対応する。
  $shops = array(
    'shinjuku' => '新宿店',
    'meguro' => '目黒店',
    'kichijoji' => '吉祥寺店'
  );

  echo $shops['meguro'];
  
  echo '<br>';
  // $shopsの要素を1個ずつ出す
  foreach($shops as $shop){
    echo $shop . '、';
  }