// 小手調べ
function setup(){
  createCanvas(150, 150);
  background(255);
  for(let i = 0; i < 10; i++){
    let d = (i + 1)*10; 
  noFill();
  if(i<5){
    stroke(0,0,255);
  }
  else{
    stroke(255,0,0);
  }
  ellipse(50,50,d);
    
  }
}
