// テキスト「インタラクティブなアニメーション」
let x, y, vx, vy;
let grabbed; // 円をつかんでいるかどうかを記憶するために使う変数

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 0;
  vy = 0;
  grabbed = false;
  movingStop = false;
}


function draw(){
  background(160, 192, 255);
  ellipse(x, y, 30);
  if(!grabbed && x != width / 2 && y != height / 2)// つかんで動かしてはじめてアニメーション
  { 
 //重力アリ改変、ボールを離したら落ちて止まる
   
    const g = 1; // 重力
    
    x += vx;
    y += vy;
    vy += g;
    
    // 重力は「速度の変化量」
    // 速度が大きくなりすぎないように調整
    if(x < 0 || x > width){ vx = -0.62* vx; }
    if(y < 0 || y > height){ vy = -0.62  * vy; }
    x = constrain(x, 0, width);
    y = constrain(y, 0, height);//これ書かないと投げすぎたとき画面外から帰ってこない

    if(Math.abs(y-vy) < height/100){
      x = constrain(x, 0, 0);
      y = constrain(y, 0, 0);
    }



     //テキスト通常、重力なし 
    /*x += vx;
    y += vy;
    if(x < 0 || x > width){ vx = -0.8 * vx; }
    if(y < 0 || y > height){ vy = -0.8 * vy; } //壁に当たるたびに減速していく
      x = constrain(x, 0, width);
      y = constrain(y, 0, height);*/
  
  
  }
}



function keyPressed(){  
  if(key == " "){// スペースキーを押したらリセット
    x = width / 2;
    y = height / 2;
    vx = 0;
    vy = 0;
    grabbed = false;
  }
}

function mousePressed(){
  grabbed = dist(mouseX, mouseY, x, y) < 30; // distは２点の距離を求める関数
}

function mouseDragged(){
  if(grabbed){
    x = mouseX;
    y = mouseY;
   
  }
}

function mouseReleased(){
  if(grabbed){
    grabbed = false;
    vx = mouseX - pmouseX;
    vy = mouseY - pmouseY;
  }　//vx,vyはつまり速度なので、mouse - pmouseが大きい＝速度が速い、勢い良く投げたように見せられる
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
