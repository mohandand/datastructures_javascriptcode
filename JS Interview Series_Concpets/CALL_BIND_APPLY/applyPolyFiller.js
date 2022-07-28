let car = {
    color:"red",
    comapny:"Benz"
}

function purchaseCar(currency,price){
    console.log(`I have Purchased ${this.color} -${this.comapny} car for ${currency}${price}`);
}

Function.prototype.myApply = function(context={},args=[]){
    if(typeof this !== "function"){
        throw new Error(this + "Its not callable")
    }
    if(!Array.isArray(args)) {
        throw new TypeError("Please pass arguments in the frm of array")
    }
  context.fn = this
  context.fn(...args)

}

purchaseCar.myApply(car,["$",60000]);