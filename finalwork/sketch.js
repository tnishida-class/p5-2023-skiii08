// 最終課題を制作しよう


let giftBoxX;
let giftBoxY;
let giftBoxSpeed;
let giftBoxSize;

let starX;
let starY;
let starSpeed;
let starSize;
let starXSpeed;

let score = 0;
let gameover = false;
let leftPressed = false;
let rightPressed = false;

function setup() {
  createCanvas(600, 600);
  resetGame();
}

function draw() {
  background(100);

  if (!gameover) {
    // プレゼントボックスの表示と移動
    displayGiftBox();
    moveGiftBox();

    // 星の表示と移動
    displayStar();
    moveStar();

    // プレゼントボックスと星の当たり判定
    if (hits(giftBoxX, giftBoxY, giftBoxSize, starX, starY, starSize)) {
      score++;
      resetStar();
    }

    // 地面と星の当たり判定
    if (hitsGround(starY)) {
      gameover = true;
    }

    // スコアの表示
    textSize(20);
    fill(255);
    text("Score: " + score, width - 100, 30);
  } else {
    // ゲームオーバーの表示
    textSize(32);
    fill(255, 0, 0);
    textAlign(CENTER, CENTER); //タテヨコともに中央ぞろえ
    text("Game Over", width / 2, height / 2);
    textSize(20);
    fill(255);
    text("Score:"+score,width / 2, height / 2 + 40);
    text("Press SPACE to restart", width / 2, height / 2 + 80);
  }
}

//キーの判定
function keyPressed() {
  if (keyCode === LEFT_ARROW && !gameover) {
    leftPressed = true;
  } else if (keyCode === RIGHT_ARROW && !gameover) {
    rightPressed = true;
  } else if (keyCode === 32 && gameover) {
    // スペースキーでゲームをリセット
    gameover = false;
    score = 0;
    resetGame();
  }
}

function keyReleased() {
  if (keyCode === LEFT_ARROW) {
    leftPressed = false;
  } else if (keyCode === RIGHT_ARROW) {
    rightPressed = false;
  }
}

function resetGame() {
  // プレゼントボックスの初期化
    //ギフトボックスの初期座標はキャンパス真ん中
  giftBoxX = width / 2; 
  giftBoxY = height - 25;
  giftBoxSpeed = 3;
  giftBoxSize = 30;

  // 星の初期化
  resetStar();
}

//draw関数内とresetGame関数内の二か所に用いる。
function resetStar() {
  starX = width / 2;
  starY = 0;
  starSpeed = 2;
  starSize = 15;
  starXSpeed = 5;
}

function displayGiftBox() {
  fill(255);
  textAlign(CENTER, CENTER); 
  textSize(40);
  text("🎁",giftBoxX,giftBoxY);
}

function moveGiftBox() {
  // 自動で左右に移動
  giftBoxX += giftBoxSpeed;
  if (giftBoxX - giftBoxSize / 2 < 0 || giftBoxX + giftBoxSize / 2 > width) {
    giftBoxSpeed *= -1; // 壁に当たったら反転
  }
}

//授業内演習課題の引用、直後のdisplayStarで利用
function star(cx, cy, r){ 
  beginShape();
  for(var i = 0; i < 5; i++){
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    //let theta = TWO_PI * i * 1 / 5
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    noStroke();
    fill (255,242,56);
    vertex(x,y);
  }
  endShape(CLOSE);
}

function displayStar() {
  fill(255, 255, 0);
  star(starX, starY, starSize);
}



function moveStar() {
  // 星は自動で下に移動
  starY += starSpeed;
  // 左右のキーに応じて横に移動
  if (leftPressed) {
    starX -= starXSpeed;
  } else if (rightPressed) {
    starX += starXSpeed;
  }
  // 画面端に達したら反転
  if (starX - starSize / 2 < 0 || starX + starSize / 2 > width) {
    starXSpeed *= -1;
  }
}

//当たり判定
function hits(x1, y1, size1, x2, y2, size2) {
  //(giftBoxX, giftBoxY, giftBoxSize, starX, starY, starSize)
  //星と🎁が当たる⇒上辺のみを定義。縦のラインに触れただけでは当たり判定は出さない
  return (
    x1 - size1 / 2 < x2 + size2 / 2 &&
    x1 + size1 / 2 > x2 - size2 / 2 &&
    y1 - size1 / 2 < y2 + size2 / 2 &&
    y1 + size1 / 2 > y2 - size2 / 2
  );
}

function hitsGround(y) {
  return y > height;
}


