class Drop{

constructor (x,y){
    var op = {
        friction:0.001,
        restitution:0.1
    }
    this.rain = Bodies.circle(x,y,3,op)
    this.radius = 3
    World.add(world,this.rain)
}

updateY(){
    if(this.rain.position.y>height){
        Matter.Body.setPosition(this.rain,{x:(random(0,400)),y:(random(0,400))})
    }
}

showdrop(){
    fill("lightblue");
    ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius)
}













}