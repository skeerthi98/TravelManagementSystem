import {IShape} from './tasknew'
export class rect implements IShape
{
    length:number;
    breadth:number;
    constructor(pl:number,pb:number)
    {
        this.length=pl;
        this.breadth=pb;
    }
    public Draw(){
        console.log("this is rectangle");
    }
    public Area():number{
        return this.length*this.breadth;
    }
}