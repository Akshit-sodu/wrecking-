class Box {
  constructor(x,y,width,height){
    var option = {
      restitution : 1,
      friction : 1,
      density : 0.04
    }
       this.body = Bodies.rectangle(x,y,width,height,option);
       this.width = width;
    this.height = height;
    World.add(world,this.body);
  }
  
  display(){
    var pos = this.body.position;
    var ang = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(ang);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("pink");
    fill("red");
    rect(0,0,this.width,this.height);
    pop();

  }
}