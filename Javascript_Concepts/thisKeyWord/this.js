/* 
two types of binidings:
Implicit and Ecplicit
->Implicit binding  is applied when you invoke a function in an object using dot notation
->Expilcit Binding can be applied using call,bind and apply
*/

//Implicit binding

var calc ={
    total:0,
    add(a) {
        this.total+a;
        return this;
    }
}

const result = calc.add(5);
console.log(result)