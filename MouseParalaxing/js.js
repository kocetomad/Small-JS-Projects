var bg;
var y = 0;
var ppl;
var flag;
var offset;
var offsety;
var pic;
let press1=false;
let press2=false;
var name;
function setup() {
	name="";
  pic=0;
  // The background image must be the same size as the parameters
  // into the createCanvas() method. In this program, the size of
  // the image is 720x400 pixels.
  bg = loadImage("stormwind.jpg");
  ppl=loadImage("Stormwind_Army.png");
  flag=loadImage("Stormwind_Army.png");
  createCanvas(windowWidth, windowHeight);
 
}

function draw() {
  offset=map(mouseX,0,windowWidth,-10,10);
  offsety=map(mouseY,0,windowHeight,-10,10);
  image(bg,-30+offset, -30+offsety, windowWidth+40, windowHeight+40);

  image(ppl, width/2+offset*1.7, height/3+offsety*1.5, ppl.width*1.2, ppl.height*1.2);
  switch(pic){
    case 0: 
     ppl=loadImage("Stormwind_Army.png");
	 name="Stormwind Army";
     break;
    case 1:
     ppl=loadImage("Anduin.png");
	 	 name="Anduin Wrynn";

     break;
    case 2:
     ppl=loadImage("genn.png");
	 	 	 name="Genn Greymane";

     break;
  }
  fill(0, 255, 0);
  textSize(100);
	text(name,width/2+offset*1.4, height/4+offsety*1.2)
	  fill(255, 204, 0);
	    textSize(80);

	text("JOIN THE \n ALLIANCE TODAY!",width/14+offset*1.4, height/3+offsety*1.2)

console.log(pic,);
}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
  pic--;
  if(pic<0){
    pic=2;
  }
  }
  if (keyCode === RIGHT_ARROW) {
  pic++;
  if(pic>2){
    pic=0;
  }
  }
  
}