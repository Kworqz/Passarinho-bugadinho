class Log{
    constructor(x,y,height,angle){
       var options = {
           'restitution':0.8,
           'friction' : 1.0,
           'density' : 1.0
       }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = 20;
        this.height = 50;
        Matter.Body.setAngle(this.body,angle);

        World.add(world,this.body);
    }
        display(){
            var position = this.body.position;
            var angle = this.body.angle;

            push();
            translate(position.x,position.y);
            rotate(angle);
            fill("brown");
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            pop();
            position.x = mouseX;
            position.y = mouseY;
        }
}