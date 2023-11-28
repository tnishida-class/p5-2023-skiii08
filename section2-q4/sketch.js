// 南アフリカ国旗
function setup() {
  const red = color(224, 60, 49);
  const green = color(0, 119, 73);
  const blue = color(0, 20, 137);
  const white = color(255);
  const black = color(0);
  const yellow = color(255, 184, 28);
  createCanvas(450, 300);
  background(255);
  noStroke();

  const h = height / 3;    // ボーダーの高さ
  const m = height / 2;    //三角形の中心のy座標
  let c1 = [red,white,blue,white,green,yellow,black]      //塗っていく色順
  let n1 = [0,h,2*h,height*0.4,height*0.3,height*0.08,0]  //大きさ変えるようの数値
 
function drawRect(c, n){   //ボーダーを描く
  fill(c);
  rect(0,n,width,h);
}

function drawTriangle(c,a){ //三角形を描く
  fill(c);
  triangle(0,height*0.2-a,0,height*0.8+a,width*0.3+a,m)
 //a=0の時に最小の黒三角。aをいじることで等倍。 
}

for(let i = 0; i < c1.length; i++){
  if(i<3){
  drawRect(c1[i],n1[i]);
  }//ここまでで３色ボーダー
  if(i==3){
    drawTriangle(c1[i],n1[i]);
    fill(green);
    rect(0,height*0.4,width,height*0.2);
  }//これで白△→緑ボーダー
  if(i>3){
    drawTriangle(c1[i],n1[i]);
  }//これで3色三角形
 }
}

/*とりあえず力技で描いたやつ。

drawRect(red, 0);
drawRect(white,20);
drawRect(blue,40);
drawTriangle(white,25);
fill(green);
rect(0,24,90,12);
drawTriangle(green,18);
drawTriangle(yellow,5);
drawTriangle(black,0);
}
繰り返しの授業やから無理やり繰り返しで描いたけど正直こっちのが楽
*/





