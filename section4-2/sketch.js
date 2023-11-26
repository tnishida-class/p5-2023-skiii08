//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let balls;
let mX;
let mY;


function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];
}

function draw(){
  background(160, 192, 255);
  
  //ワラワラ湧く
  const mX = random(windowWidth/3,windowWidth*2/3);
  const mY = random(windowHeight/3,windowHeight*2/3);
  const dx = mX- (mX+random(-7,7));
  const dy = mY -(mY+random(-7,7));
  if(mag(dx, dy) > 7){
    const b = { x: mX, y: mY, size: random(10,10), vx: dx, vy: dy };
    balls.push(b);
  }


  

  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
  }

  if (b.x < 0 || b.x > windowWidth || b.y < 0 || b.y > windowHeight) {
    balls.splice(i, 1);
  }  
  

}

function mouseDragged(){
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  if(mag(dx, dy) > 40){// mag(x,y) はベクトル(x,y)の長さ
    const b = { x: mouseX, y: mouseY, size: random(10,10), vx: dx/5, vy: dy/5 };
    balls.push(b);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}


/*
let balls;

function setup() {
  createCanvas(windowWidth, windowHeight);
  balls = [];
}

function draw() {
  background(160, 192, 255);

  // ワラワラ湧く
  const mX = random(windowWidth / 3, windowWidth * 2 / 3);
  const mY = random(windowHeight / 3, windowHeight * 2 / 3);
  const dx = mX - (mX + random(-10, 10));
  const dy = mY - (mY + random(-10, 10));
  if (mag(dx, dy) > 10) {
    const b = { x: mX, y: mY, size: random(10, 10), vx: dx / 4, vy: dy / 4 };
    balls.push(b);
  }

  for (let i = balls.length - 1; i >= 0; i--) {
    let b = balls[i];
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;

    // ボールが画面外に出たら削除
    if (b.x < 0 || b.x > windowWidth || b.y < 0 || b.y > windowHeight) {
      balls.splice(i, 1);
    }

    // ボール同士の衝突判定
    for (let j = 0; j < balls.length; j++) {
      if (i !== j) { //iを衝突判定の当該のボールとし、ｊはそれ以外のボールが該当する
        const other = balls[j];
        const distance = dist(b.x, b.y, other.x, other.y);
        if (distance < b.size / 2 + other.size / 2) {
          // 衝突した場合、反対方向に移動
          const angle = atan2(other.y - b.y, other.x - b.x);
          const overlap = (b.size / 2 + other.size / 2) - distance;
          const targetX = b.x - overlap * cos(angle);
          const targetY = b.y - overlap * sin(angle);

          // 反射角の計算
          const normal = createVector(targetX - other.x, targetY - other.y);
          normal.normalize();
          const relativeVelocity = createVector(b.vx - other.vx, b.vy - other.vy);
          const dot = relativeVelocity.dot(normal);
          const reflection = p5.Vector.sub(relativeVelocity, p5.Vector.mult(normal, 2 * dot));
          b.vx = reflection.x;
          b.vy = reflection.y;

          b.x = targetX;
          b.y = targetY;
        }
      }
    }
  }
}

function mouseDragged() {
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  if (mag(dx, dy) > 20) {
    const b = { x: mouseX, y: mouseY, size: random(10, 10), vx: dx / 5, vy: dy / 5 };
    balls.push(b);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
*/
