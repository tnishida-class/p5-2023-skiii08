// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」

let size = 70;
let i = 100; //心臓の大きさの縮尺として使う（i=100がサイズ100％）
let cS = 0.6; //定速
let maxS = 1.6; //最大速度
let minS = 0.3//最小速度
function setup(){
createCanvas(200, 200);
}
function drawEllipse(p){ //円バージョン
  background(160, 192, 255); 
  ellipse(width / 2, height / 2, size*i/100); 
   //sizeに縮尺率を掛けて大きさを変える        
i += p*speed; //縮尺率が速く変わればサイズも速く変わる
}
function drawHeart(p){ //ハートバージョン
  background(160, 192, 255);
  textSize(size*i/100);         
  text("💓",width / 3.7, height / 1.8);
  i += p*speed;
}
function changeSpeed(a,b,c){//速度いじる
  speed += a;
  speed = constrain(speed, b, c);
}

let flag = true; //拡大と縮小の切り替え用、trueで拡大
let speed = cS; //初期設定速度を定速にしておく
function draw(){
  if(keyIsDown(UP_ARROW)){  //↑と↓に反応してペースが変わるようにした
    changeSpeed(0.005,cS,maxS) //徐々に早くなる、長押しすると無限に早くなるため上限設定
  }else if(keyIsDown(DOWN_ARROW)){
    changeSpeed(-0.005,minS,cS)
  }else {
    if(speed < cS){  //徐々に定速に戻す
      speed += 0.005;  
    }else if(speed > cS){
      speed -= 0.005; 
    }
  }
  if(flag){
    drawHeart(1);
    //drawEllipse(1);
  }
  if(!flag){
    drawHeart(-1);
    //drawEllipse(-1);
  }
 if( i >= 100){flag = false;}//サイズが100％を超えたら、縮小に転じる。
  //ここで>=なのは、speedをいじった場合、iがちょうど100にならず、そのまま拡大を続けるバグが起きたため。
 if( i <= 90){flag = true;}
  
}


      

    
    



  

