var array = [10,30,20,30,20]
var sum = array[0]+array[1]+array[2]+array[3]+array[4]
var average = sum/5
console.log(average)
console.log(array)

function setup() {
  createCanvas(400,400);
  }

function red_bg() 
  { 
    r = 255;
    g = 0;
    b = 0;
    background("red");
  }

  function green_bg()
  {
    r = 0;
    g = 255; 
    b = 0;
    background("green");
  }

function draw() 
{
  btn_red = createButton("RED");
  btn_red.position(100,50);
  btn_red.mousePressed(red_bg);
  
  btn_green = createButton("Green");
  btn_green.position(250,50);
  btn_green.mousePressed(green_bg);
  //background("white"); 
  
  if(keyDown("R")) {
    red_bg();
  }
  if(keyDown("G")) {
    green_bg();
  }
  drawSprites();
} 
