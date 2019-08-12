import {IShape} from './tasknew'
import {rect} from './rec'

export class square extends rect implements IShape
{
    length:number;
    constructor(pl:number)
    {
        super(pl,pl);
        this.length=pl;
    }
    public Draw(){
        console.log("this is square");
    }
    //public Area():number{
      //  return this.length*this.length;
    //}
}