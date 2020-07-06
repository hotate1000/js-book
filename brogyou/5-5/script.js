'use strict';

const images = ['img1.png','img2.png','img3.png'];
// 使用する画像の配列を作成する
let current = 0;
// 配列の番号を指定する

function changeImage(num) {
  if(current + num >= 0 && current + num < images.length) {
  // もしcurrent + onclickの引数が0以上、かつcurrnt + onclickの引数が配列内のデータ数以下の場合
    current = current + num;
    document.getElementById('main_image').src = images[current];
    // images配列の[current]番目の画像を表示させる
    pageNum()
  }else if(current + num >= images.length) {
    current = 0;
    document.getElementById('main_image').src = images[current];
    pageNum()
  }else if(current + num <= 0) {
    current = images.length - 1;
    document.getElementById('main_image').src = images[current];
    pageNum()
  }
};

function pageNum() {
// ページネーションの作成
  document.getElementById('page').textContent = `${current + 1}/${images.length}`
}

pageNum();
// ページネーションの呼び出し
document.getElementById('prev').onclick = function() {
  changeImage(-1);
  //id=prevを選択するとchangeImageに-1を渡します。
};
document.getElementById('next').onclick = function() {
  changeImage(+1);
  //id=nextを選択するとchangeImageに＋1を渡します。
};
