class Ball {
  constructor(x,y,r){
    let option = {
       restitution:1.95 
    }
    this.body=Bodies.circle(x,y,r,option)
    this.r=r
    World.add(world,this.body)
   
    
  }
display(){
push ()

pop ()

}
    
}