class Block {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      push()
      var pos =this.body.position;
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      rectMode(CENTER);
      stroke("black")
      fill("pink");
      rect(0,0, this.width, this.height);
      pop();
         }
  };