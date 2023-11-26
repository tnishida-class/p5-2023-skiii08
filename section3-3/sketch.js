// テキスト「キーボード操作に反応する」
let x, y;
let speed = 0.5

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = windowWidth / 2;
  y = (2/3)*windowHeight;
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  x = windowWidth / 2;
  y = (2/3)*windowHeight;
}

function draw(){
  background(160, 192, 255);
  fill(160,190,30);
  rect(0,(2/3)*height,width,(1/3)*height)
  fill(255);
  ellipse(x, y, 50);

  if(keyIsDown(LEFT_ARROW)){ x -= 5*speed; }
  if(keyIsDown(RIGHT_ARROW)){ x += 5*speed; }
  
  if(keyIsDown(UP_ARROW)){
    speed += 0.03;
    speed = constrain(speed, 0.5, 2);
  }else{
      speed = 0.5;
     }
  
}
  
  /*if(keyIsDown(UP_ARROW)){ y -= 5; }
  if(keyIsDown(DOWN_ARROW)){ y += 5; }
  if(keyIsDown("A".charCodeAt(0))){ x+= 10; } // 文字キーの場合
  if(keyIsDown(.charCodeAt(0))){ x-= 10; } // スペースキーも文字キーと同様
}*/


 /*イベントハンドラを使用するパターン
 function keyPressed(){
  if(keyCode == LEFT_ARROW){ x -= 5; }
  else if(keyCode == RIGHT_ARROW){ x+= 5; }
  else if(keyCode == DOWN_ARROW){ y += 5; }
  else if(keyCode == UP_ARROW){ y -= 5; }
  else if(key == "A"){ x += 10; }
}

function keyReleased(){
  if(keyCode == LEFT_ARROW){ x -= 5; }
  else if(keyCode == RIGHT_ARROW){ x+= 5; }
  else if(keyCode == DOWN_ARROW){ y += 5; }
  else if(keyCode == UP_ARROW){ y -= 5; }
  else if(key == "A"){ x += 10; }
}
 

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);
}*/



