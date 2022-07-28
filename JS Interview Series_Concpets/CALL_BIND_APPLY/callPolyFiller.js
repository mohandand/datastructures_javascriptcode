let car = {
    color:"red",
    comapny:"Benz"
}

function purchaseCar(currency,price){
    console.log(`I have Purchased ${this.color} -${this.comapny} car for ${currency}${price}`);
}

Function.prototype.myCall = function(context={},...args){
    if(typeof this !== "function"){
        throw new Error(this + "Its not callable")
    }
  context.fn = this
  context.fn(...args)

}

purchaseCar.myCall(car,"$",60000);