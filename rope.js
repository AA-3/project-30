class ROPE{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.08,
            length: 20
        }
        this.pointB = pointB
        this.rop = Constraint.create(options);
        World.add(world, this.rop);
    }

    fly(){
        this.rop.bodyA = null;
    }
    attach(body){
        this.rop.bodyA=body
    }

    display(){
        if(this.rop.bodyA){
        var pointA = this.rop.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}