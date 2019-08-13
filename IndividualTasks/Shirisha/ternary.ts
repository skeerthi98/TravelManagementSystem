class ternary_op{
    public a:number;
    public b:number;
 public condition() {
        this.a=23;
        this.b=9;
//var r =(a>b)?"yes":"no";        
console.log((this.a>this.b)?"yes":"no");
        
    }
}
    var op=new ternary_op();
console.log(op.condition());
//console.log(op.a);
//console.log(op.b);
