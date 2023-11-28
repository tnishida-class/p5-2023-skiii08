// テキスト「配列を使った描画」練習問題：折れ線グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
  }

  // 横線を引く
  const n = 10;
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }

  // ここからが本番
  // 線を引くために一つ前の点を覚えておく変数
  let px, py;
  for(let i = 0; i < scores.length; i++){
    const dx = width / scores.length;
    const h = height * scores[i] / 100;
    fill(0);
    ellipse(i * dx + 10, height - h, 10)
    px = i+1;
  py =height - (height * scores[i+1] / 100);
   line(i * dx + 10,height - h, px*dx+10,py);
  }

  
  
 
}