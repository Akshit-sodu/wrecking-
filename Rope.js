class Rope{
  constructor(bodyA,pointB){
    var option = {
      bodyA:bodyA,
      pointB:pointB,
      stiffness: 1,
      lenght: 250,
    }
    this.pointB = pointB;
    this.rope = Constraint.create(option);
    World.add(world,this.rope);

  }
  display(){
    var pointA = this.rope.bodyA.postion
    var pointB = this.pointB;
    strokeWeight(4);
    stroke("blue");
    line(pointB.x,pointB.y,pointA.x,pointA.y)

  }

}
