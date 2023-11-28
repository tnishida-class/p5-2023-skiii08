//ボックスに関する変数
let boxX;
let boxY;
let boxSpeed;
let boxSize;

//星に関する変数
let starX;
let starY;
let starYSpeed;
let starSize;
let starXSpeed;

//function draw内で何を実行するかの状態を決める変数
let gameover = false;
let startScreen = true; 

//その他の必要な変数
let score = 0;
let life = 3;
let leftPressed = false;
let rightPressed = false;

//キャンパスの設定
function setup() {
  createCanvas(600, 600);
  resetGame();
}

//状態変数でスタート画面⇔ゲーム画面⇔リスタート画面を切り替える
function draw() {
  background(0,102,34);

  if (startScreen) {
      // スタート画面の表示（初期状態）
    displayStartScreen();
  } else if (!gameover) {
      // ゲーム画面の表示
    displayGameScreen();
  } else {
     // ゲームオーバー画面の表示
    displayGameOverScreen();
  }
}

//キーが押されたことに対する反応まとめ
function keyPressed() {
  if (keyCode === ENTER) {
    if (startScreen) {
        // スタート画面の時、エンターキーでゲームスタート
      startScreen = false;
    } else if (gameover) {
        // ゲームオーバーの時にエンターキーでリスタート
      gameover = false;
      score = 0;
      resetGame();
    }
        //左右移動、ゲームオーバー画面では左右キーは動作しない
  } else if (keyCode === LEFT_ARROW && !gameover) {
    leftPressed = true;
  } else if (keyCode === RIGHT_ARROW && !gameover) {
    rightPressed = true;
  }
}
//左右キーは押す・離すどちらも認識
function keyReleased() {
  if (keyCode === LEFT_ARROW) {
    leftPressed = false;
  } else if (keyCode === RIGHT_ARROW) {
    rightPressed = false;
  }
}

//スタート画面の中身
function displayStartScreen() {
  textSize(32);
  fill(200,156,51);
  textAlign(CENTER, CENTER);  //⇒文字列を中央ぞろえにする
  text("Press ENTER to start", width / 2, height / 2);
  textSize(44);
  text("🎄",width/5-5,height/2);
  text("🎄",width/5+130,height/3);
  text("🎄",width/5+400,height/4);
  text("🎄",width/5-50,height/5);
  text("🎄",width/5+250,height/4+250);
  text("🎄",width/5+100,height/3+300);
  text("🎄",width/5+300,height/2-270);
  text("🎄",width*4/5+70,height/2-55);
  text("🎅",width*4/5+15,height/2);
  text("🎅",width*4/5+200,height/3+200);
  text("🎅",width*4/5-320,height/4-100);
  text("🎅",width*4/5-400,height/3+30);
  text("🎅",width*4/5+10,height/2+250);
  text("🎅",width*4/5-400,height/5+350);
  text("🎅",width*4/5-100,height/5+50);
}
//ゲームオーバー画面の中身
function displayGameOverScreen() {
    //Game　Overの表示  
  textSize(32);
  fill(255, 0, 0);
  textAlign(CENTER, CENTER);
  text("Game Over", width / 2, height / 2);
  textSize(20);
  fill(255);
    //スコアとリスタート案内を表示
  text("Score: " + score, width / 2, height / 2 + 40);
  text("Press ENTER to restart", width / 2, height / 2 + 80);
  textSize(60);
  text("🦌",width/2-150,height/2+200);
  text("🦌",width/2-100,height/2+200);
  text("🦌",width/2-50,height/2+200);
  text("🛷",width/2+100,height/2+200);
  fill(212,255,254);
  rect(0,height/2+225,width,height-height/2+225);
  text("🌕",width/2+150,height/2-150);
}

//ゲーム中の中身
function displayGameScreen() {
    //以下それぞれの関数が常に機能し続ける
  displayBox();
  moveBox();
  displayStar();
  moveStar();
    //星とボックスが当たるとスコアが増え、星がリセット。また上から降ってくる
  if (hits(boxX, boxY, boxSize, starX, starY, starSize)) {
    score++;
    resetStar();
  }
    //星と地面が当たると、ゲームの状態変数が代わり、ゲームオーバー画面が表示
  if (hitsGround(starY)) {
      //ライフは星と地面が当たるたびにカウント
    life --;
      //失敗回数が３回以下の場合はただ星がリセットされるだけ
    if(life > 0){
      resetStar();
    }
      //三回目の失敗のみゲームオーバー
    if(life == 0){
    gameover = true;
    }
  }
   
    //画面右上、スコアの表示
  textSize(20);
  fill(255);
  text("Score: " + score, width - 100, 30);
    //スコアの下にライフの表示、lifeの変数の値に連動
  for(let i = 0; i < life; i++){
    text("💓",width -20- i*30, 60);
  }
  
}

 //ボックスの位置、スピードなどの基本設定
 //gemeOver = True の時、キャンパスの設定で利用
function resetGame() {
  boxX = width / 2; 
  boxY = height - 25;
  boxSpeed = 3;
  boxSize = 30;
  life = 3;
    //ボックスをリセットするとき、同時に星もリセット
  resetStar();
}
//boxの大きさ、デザインなどの詳細
function displayBox() {
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(50);
  text("🎁", boxX, boxY);
}
//一定の速度で動き続けるboxの設定
function moveBox() {
  boxX += boxSpeed;
  if (boxX - boxSize / 2 < 0 || boxX + boxSize / 2 > width) {
    boxSpeed *= -1;
  }
}


//星の位置、スピードなどの基本設定
//resetGameとdisplayGameScreanの中で利用
function resetStar() {
  starX = width / 2;
  starY = 0;
  starSize = 15;
    // 点数が増えるごとに少しずつ速くする
  starXSpeed = 5 + 0.15 * score; 
  starYSpeed = 2 + 0.15 * score; 
}
//星を描く用、授業からの引用、直後のdisplayStarで利用
function star(cx, cy, r) {
  beginShape();
  for (var i = 0; i < 5; i++) {
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    noStroke();
    fill(255, 242, 56);
    vertex(x, y);
  }
  endShape(CLOSE);
}
//星を描く
function displayStar() {
  fill(255, 255, 0);
  star(starX, starY, starSize);
}
//星の動き
function moveStar() {
    //starは一定速度落ち続ける
  starY += starYSpeed;   
    //左右キーの状態変数により押されている時間のみx座標が上下する
  if (leftPressed) {
    starX -= starXSpeed;
  } else if (rightPressed) {
    starX += starXSpeed;
  }
    //ウィンドウの左右の端に当たると跳ね返る
  if (starX - starSize / 2 < 0 || starX + starSize / 2 > width) {
    starXSpeed *= -1;
  }
}


//boxとstarの当たり判定
function hits(x1, y1, size1, x2, y2, size2) {
  return (
    x1 - size1 / 2 < x2 + size2 / 2 &&
    x1 + size1 / 2 > x2 - size2 / 2 &&
    y1 - size1 / 2 < y2 + size2 / 2 &&
    y1 + size1 / 2 > y2 - size2 / 2
  );
}

//地面とstarの当たり判定
function hitsGround(y) {
  return y > height;
}

