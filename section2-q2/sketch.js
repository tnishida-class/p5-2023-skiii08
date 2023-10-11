// チェッカー
function setup() {
  createCanvas(400, 400);
  let size = width / 8;
  let d = size / 2;
  noStroke();
  for(let s = 0; s < 8; s++){
    for(let t = 0; t < 8; t++){
     let x = s*size;
     let y = t*size;
     if ((s + t)%2 === 1){
      fill(122);
      rect(x,y,size,size);
     if(((s+ t)%2 === 1) && (t<3)){
      fill(255,0,0);
      ellipse(x+d,y+d,size);}
     if(((s+ t)%2 === 1) && (t>4)){
        fill(0);
        ellipse(x+d,y+d,size);
      } 
     }
    }
  }
}  
      
  


     
        