var a;
var ground,block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16 ;
var polygon;
var slingshot;

var circles=[];
function setup() {
  createCanvas(800,800);
  stroke(255)
  
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  a=height;
  circles.push(width/2)

   groundObj = new Ground (400,790,width,20);
   standObj = new Ground (410, 550, 240, 25);

   // number 1
   block1 = new Box (130,530,30,40);
   block2 = new Box (160,530,30,40);
   block3 = new Box (190,530,30,40);
   block4 = new Box (220,530,30,40);
   block5 = new Box (250,530,30,40);
   block6 = new Box (280,530,30,40);
   block7 = new Box (310,530,30,40);

   //number 2
   block8 = new Box (160,490,30,40);
   block9 = new Box (190,490,30,40);
   block10 = new Box (220,490,30,40);
   block11 = new Box (250,490,30,40);
   block12 = new Box (280,490,30,40);

   //number3
   block13 = new Box (190,450,30,40);
   block14 = new Box (220,450,30,40);
   block15 = new Box (250,450,30,40);

   //top
   block16 = new Box (220,410,30,40);

   polygon = Bodies.circle(100,200,20)
   polygon = loadImage(polygon)
   World.add(world,polygon);

   slingshot = new SlingShot (this.polygon,{x:100, y:200});
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0); 
  
  
  
  
  a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}


 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();
 block10.display();
 block11.display();
 block12.display();
 block13.display();
 block14.display();
 block15.display();
 block16.display();

 groundObj.display();
 standObj.display();

 slingshot.display();
 polygon.display();

  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }

    if(keyCode === 32){
    slingshot.attach(this.polygon);
    Matter.Body.setPosition(this.polygon, {x: 100, y: 200});

    }

}
 


function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}