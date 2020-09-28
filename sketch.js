const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1,block2,block3,block4,block5,block6,block7;
var sblock1,sblock2,sblock3,sblock4,sblock5,sblock6,sblock7;
var block8, block9, block10,block11,block12;
var sblock8, sblock9,sblock10,sblock11,sblock12;
var block13, block14, block15;
var sblock13, sblock14, sblock15;
var block16, sblock16;
var stand1,stand2;

var polygonImg, polygonObj,slingShot;
var bgColor = "blue";
var score = 0;

function preload() {
    polygonImg = loadImage("polygon.png");
    getbackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    stand1 = new Ground(600,350,160,10);
    stand2 = new Ground(1000,200,160,10);
    
    //create first pyramid block
    block1 = new Block(540,340,20,30);
    block2 = new Block(560,340,20,30);
    block3 = new Block(580,340,20,30);
    block4 = new Block(600,340,20,30);
    block5 = new Block(620,340,20,30);
    block6 = new Block(640,340,20,30);
    block7 = new Block(660,340,20,30);

    block8 = new Block(560,310,20,30);
    block9 = new Block(580,310,20,30);
    block10 = new Block(600,310,20,30);
    block11 = new Block(620,310,20,30);
    block12 = new Block(640,310,20,30);

    block13 = new Block(580,280,20,30);
    block14 = new Block(600,280,20,30);
    block15 = new Block(620,280,20,30);

    block16 = new Block(600,250,20,30);

    //create next pyramid block
    sblock1 = new Block(940,190,20,30);
    sblock2 = new Block(960,190,20,30);
    sblock3 = new Block(980,190,20,30);
    sblock4 = new Block(1000,190,20,30);
    sblock5 = new Block(1020,190,20,30);
    sblock6 = new Block(1040,190,20,30);
    sblock7 = new Block(1060,190,20,30);

    sblock8 = new Block(960,160,20,30);
    sblock9 = new Block(980,160,20,30);
    sblock10 = new Block(1000,160,20,30);
    sblock11 = new Block(1020,160,20,30);
    sblock12 = new Block(1040,160,20,30);

    sblock13 = new Block(980,130,20,30);
    sblock14 = new Block(1000,130,20,30);
    sblock15 = new Block(1020,130,20,30);

    sblock16 = new Block(1000,100,20,30);

    polygonObj = Bodies.circle(200,600,40);
    World.add(world,polygonObj);
    
    slingshot = new SlingShot(polygonObj,{x:200, y:100});
    Engine.run(engine);
}

function draw(){

    background(bgColor);

    Engine.update(engine);
    
    noStroke();
    textSize(20);
    fill("red");
    text("SCORE : " + score,750,40);
    imageMode(CENTER);
    image(polygonImg,polygonObj.position.x,polygonObj.position.y,40,40);

    slingshot.display();    
    stand1.display();
    stand2.display();
    
    fill("blue");
    block1.display();
    block1.score();
    block2.display();
    block2.score();
    block3.display();
    block3.score();
    block4.display();
    block4.score();
    block5.display();
    block5.score();
    block6.display();
    block6.score();
    block7.display();
    block7.score();

    fill("green");
    block8.display();
    block8.score();
    block9.display();
    block9.score();
    block10.display();
    block10.score();
    block11.display();
    block11.score();
    block12.display();
    block12.score();

    fill("pink");
    block13.display();
    block13.score();
    block14.display();
    block14.score();
    block15.display();
    block15.score();

    fill("gray");
    block16.display();
    block16.score();

    fill("skyblue");
    sblock1.display();
    sblock1.score();
    sblock2.display();
    sblock2.score();
    sblock3.display();
    sblock3.score();
    sblock4.display();
    sblock4.score();
    sblock5.display();
    sblock5.score();
    sblock6.display();
    sblock6.score();
    sblock7.display();
    sblock7.score();

    fill("lightgreen");
    sblock8.display();
    sblock8.score();
    sblock9.display();
    sblock9.score();
    sblock10.display();
    sblock10.score();
    sblock11.display();
    sblock11.score();
    sblock12.display();
    sblock12.score();

   fill("pink");
   sblock13.display();
   sblock13.score();
   sblock14.display();
   sblock14.score();
   sblock15.display();
   sblock15.score();

   fill("gray");
    sblock16.display();
    sblock16.score();
   
  
}

function mouseDragged(){
    Matter.Body.setPosition(polygonObj, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(polygonObj,{x:200,y:600});
        slingshot.attach(polygonObj);
    }
}

async function getbackgroundImg() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    console.log(responseJSON);
    var datetime = responseJSON.datetime;
    console.log(datetime);
    var hour = datetime.slice(11,13);
    console.log(hour);

    if(hour >= 6 && hour <= 18){
        bgColor = "white";
    }
    else {
        bgColor = "black";
    }

}