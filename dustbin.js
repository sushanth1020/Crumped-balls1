class Dustbin {
    constructor(x, y, width, height,angle) {
      var options = {
          isStatic: true ,
          restitution:0.3,
          friction:0.5,
          density:1.2
          
      }
      this.body = Bodies.elipse
        (x, y, width, height, options);
      this.width = width;
      this.height = height;
      Matter.Body.setAngle(this.body,angle);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      elipseMode(CENTER);
      strokeWeight(2);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  