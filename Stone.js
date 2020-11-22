class Stone {
    constructor(x, y, radius) {
        var options = {
            isStatic:false,
            'restitution':0.7,
            'friction': 0.5,
            'density':1.5,
        }
    this.body = Bodies.circle(x, y, radius , options);
    //this.image = loadImage("stone.png")
    this.radius= 20
    
    World.add(world, this.body);
  }
  
  fly(){
      this.stone.body= null;
  }
  display()
  {
    var pos =this.body.position;
    //var angle = this.body.angle;
    push();
   translate(pos.x, pos.y);
    //rotate(angle);
    ellipseMode(RADIUS);
    strokeWeight(4);
    fill("white");
    //fill("black");
   // imageMode(CENTER)
    //image(this.image,0,0,105,105);
    ellipse(0, 0, this.radius,this.radius);
    pop();
  }
  }