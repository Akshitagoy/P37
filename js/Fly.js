class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            
            
        }
        
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }
    
}