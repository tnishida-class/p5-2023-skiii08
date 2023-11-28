// テキスト「配列を使った描画」練習問題：円グラフ

//function setup(){
  //createCanvas(400, 400);
  //background(240);

  // 配列をランダムに初期化する
  //let scores = [];
  //for(let i = 0; i < 10; i++){
    //scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
  //}

  // 円グラフを描くには割合が必要なので合計を計算しておく
  //let total = 0;
  //for(let i = 0; i < scores.length; i++){ total += scores[i]; }

  // BLANK[1]
  let numbers = [];
  let numbersRateAngle = [];
  function setup(){
    createCanvas(400,400);
    let total = 0;
   
   for(let i = 0; i<10; i++){
     let num = random(40,100);
     numbers.push(num);
     total += num;
   }
 
 for (let i = 0; i<numbers.length; i++){
   numbersRateAngle.push(360*(numbers[i]/total))
 }
 }
 
 function draw(){
   background(255);
   let x = width / 2;
   let y =height/2;
   let d = 200
   let lastAngle = 0;
 
   for(let i = 0; i<numbers.length; i++){
     if(i%2==0){
       let angle = numbersRateAngle[i]*(Math.PI/180);
       arc(x,y,d,d,lastAngle,lastAngle + angle);
       lastAngle += angle;
     }
     else{
       fill(255);
       let angle = numbersRateAngle[i]*(Math.PI/180);
       arc(x,y,d,d,lastAngle,lastAngle + angle, PIE);
       lastAngle += angle;
     }
   }
   let s = 0;
   for (let i = 0; i < numbers.length; i++) {
     fill(0);
     text(numbersRateAngle[i].toPrecision(3), x + 130*Math.cos(s), y + 130*Math.sin(s));
     s += numbersRateAngle[i];
   
   }
 }
 
 