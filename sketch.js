const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score= 0;

var engine, world;
var backgroundImg

function preload() {
    getBackgroundImage();
}

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,500,1200,20);

    block1 = new Block(710,40);
    block2 = new Block(700,40);

    block3 = new Block(760,40);
    block4 = new Block(760,40);
    block5 = new Block(700,50);
    block6 = new Block(720,40);

    stand = new Stand(800,240,490,10);
    stone= new Stone(500,300,10,10)

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new Slingshot(stone.body,{x:290, y:50});


    Engine.run(engine);
}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
    }

    Engine.update(engine);
    //strokeWeight(4);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    ground.display();
    stand.display();
    
    stone.display();
    
    slingshot.display();
   
    noStroke();
    fill("blue")
    textSize(50)
    text("Score:" + score,750,440)
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(stone.body);
    }
}

async function getBackgroundImage(){
    var resp = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
     var respJson = await resp.json();
      var dateTime = respJson.datetime;
       var hour = dateTime.slice(11,13);

       if(hour >= 06 && hour < 17){
           bg="Nature.PNG"
       }
       else{
           bg="Night.PNG"
       }
       backgroundImg= loadImage(bg);
}