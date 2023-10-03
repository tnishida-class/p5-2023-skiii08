function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  stroke(255);
  strokeWeight(4);     
  fill(127, 17, 131); 
  triangle(12,120,116,120,116,10); 
  
  fill(240, 156, 180);    
  triangle(0,108,106,108,106,0);   
  
  fill(255);    
  triangle(15,102,100,102,100,15);   
  fill(246,156,180);　         
  textSize(31);        
  textFont("serif");   
  text("46", 68, 100);
  text("櫻坂", 56,148)
}
