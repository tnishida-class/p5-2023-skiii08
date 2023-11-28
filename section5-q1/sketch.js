// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  // balloon("I love keyakizaka46");
  balloon("I love keyakizaka46",45,55);
}

function balloon(t,x,y){
   let w = textWidth(t);
   let h = textAscent() + textDescent();
   let p = 2;
   noStroke();
    fill (189,8,174);
    rect(23.5,23.5,w+p*20+3,h+p*20+3);
    noStroke();
    fill (255);
    rect(21.5,21.5,w+p*20+1.5,h+p*20+1.5)
    noStroke();
    fill(5,171,77);
    triangle(20,19+h+p*20,38,20+h+p*20,30,40+h+p*20);
    noStroke();
    fill (5,171,77);
    rect(20,20,w+p*20,h+p*20);
    noStroke();
    fill(255);
    text(t, x, y); 
 }

f/*unction balloon(t,x,y){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p =2;
  noStroke();
  fill(5,171,77);
  rect(23.5,23.5,w+p*20+3,h+p*20+3);
  
}*/
