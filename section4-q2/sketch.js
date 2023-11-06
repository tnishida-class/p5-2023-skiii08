// テキスト「配列を使った描画」練習問題：円グラフ

//function setup(){
  //createCanvas(400, 400);
  //background(200);

 /* // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
  }

  // 円グラフを描くには割合が必要なので合計を計算しておく
  let sum = 0;
  for(let i = 0; i < scores.length; i++){
    sum += scores[i]; 
  }
  console.log("sum="+sum)


*/








let numbers = []; //乱数の保管用
let numbersRateAngle = []; //乱数の割合に応じた度の保管用
function setup() {
  createCanvas(400, 400);
  let total = 0;

  for (let i = 0; i < 10; i++) {
    let num = random(40, 100); // 40から100までの乱数
    numbers.push(num);
    total += num;
  }
  //確認用
  console.log("numbers ="+numbers)
  console.log("total = "+total)

  // 要素の割合を計算、360度のうちのどれだけを占めるかを計算し直す
  for (let i = 0; i < numbers.length; i++) {
    numbersRateAngle.push(360*(numbers[i] / total))
  }
  //確認用
  console.log("numbersRateAngle="+numbersRateAngle)
}



function draw() {
  background(255);
  let x = width / 2;
  let y = height / 2;
  let d = 200
  let lastAngle = 0;

  for (let i = 0; i < numbers.length; i++) {
  if(i%2 == 0){ //白一色だとなぜか上手くいかなかったので白黒で塗り分けた
    //fill(0);
    let angle = numbersRateAngle[i] * (Math.PI / 180); //度⇒ラジアンに変換
    arc(x, y, d, d, lastAngle, lastAngle + angle);
    lastAngle += angle; //次のために値を更新して終了
    
  }
  else{
    fill(255);
    let angle = numbersRateAngle[i] * (Math.PI / 180);
    arc(x, y, d, d, lastAngle, lastAngle + angle, PIE);
    lastAngle += angle;
  }
}

/*以下値表記用　上手くいかない。要改善。
let s = 0;
for (let i = 0; i < numbers.length; i++) {
  fill(0);
  text(numbers[i].toPrecision(3), x + 130*Math.cos(s), y + 130*Math.sin(s));
  s += numbersRateAngle[i];

}*/
}


  
