let car = {
    color:"red",
    comapny:"Benz"
}

function purchaseCar(currency,price){
    console.log(`I have Purchased ${this.color} -${this.comapny} car for ${currency}${price}`);
}

Function.prototype.myBind = function(context={},...args){
    if(typeof this !== "function"){
        throw new Error(this + "Its not callable")
    }

  context.fn = this
  return function(...newargs){
    return context.fn(...args,...newargs);
  }

}

const newFun = purchaseCar.myBind(car,"$",60000);
console.log(newFun());