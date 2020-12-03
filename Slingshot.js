class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage('sprites/sling1.png');
        this.sling2 = loadImage('sprites/sling2.png');
        this.sling3 = loadImage('sprites/sling3.png');
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            image(this.sling1,200,20)
            image(this.sling2,170,20)
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push()
            stroke(48,22,8);
            strokeWeight(10);
            if(pointA.x<220){
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            image(this.sling3,pointA.x-20,pointA.y-10,15,30)
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y);
            }

            else{
             line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
             image(this.sling3,pointA.x+25,pointA.y-10,15,30)
             line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-3);

            }
           
            pop()
        }
    }
    
}