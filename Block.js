class Block {
  constructor(x,y,width,height){
      var options = {
          'restitution' :0.8
      }
      this.body = Bodies.rectangle(x,y,width,height, options);
      this.Visibility = 255;
      this.width = width;
      this.height = height;
      World.add(world,this.body);

  }
  display(){
     // console.log(this.body.speed);
      if(this.body.speed < 3){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(2);
        stroke("black");
        //fill("lightblue");
        rect(0, 0,this.width, this.height);
        pop();
      }
      else {
          World.remove(world,this.body);
          push();
          this.Visibility = this.Visibility - 5;
          tint(255,this.Visibility);
          
          pop();
      }
      
  }
  score(){
    if(this.Visibility < 0 && this.Visibility > -100){
      score++;
    }
  }
}