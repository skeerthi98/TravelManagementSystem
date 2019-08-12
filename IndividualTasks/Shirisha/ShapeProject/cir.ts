import {IShape} from './tasknew'
export class cir implements IShape
{
    radius:number;
    
    constructor(pr:number)
    {
        this.radius=pr;
       // this.breadth=pb;
    }
    public Draw(){
        console.log("this is circle");
    }
    public Area():number{
        return 3.14*this.radius*this.radius;
    }
}