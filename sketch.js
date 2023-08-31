function setup() {
    createCanvas(1000 , 1000);
    background("gold");}
  
  function draw() {
   
    fill("yellow")
    stroke("black")
  
    if(mouseIsPressed) {
      rect(mouseX,mouseY,20,35)
    }}