class Reactangle{
    constructor(h,w){
        this.h=h;
        this.w=w;
    }
    Area(){
        return this.h*this.w
    }
}

const squre = new Reactangle(10,2);
console.log(squre.Area())