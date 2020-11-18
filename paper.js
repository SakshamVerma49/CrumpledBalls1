class Paper {
    constructor(x, y, radius) {
      var options = {
          restitution:0.3,
          friction:0.5,
          density:0.8
      }
      this.body = Bodies.circle(x,y,radius,options);
      World.add(world, this.body);
      this.radius = radius;
        }

    display(){
      var angle = this.body.angle;
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      //rotate(angle);
      //rectMode(CENTER);
      fill(255,0,0); //133, 66, 44);
      //rect(0, 0, this.width, this.height);
      ellipseMode(RADIUS);
      ellipse(0,0, this.radius, this.radius);
      pop();
    }
  }