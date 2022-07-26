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
        sum = this.total+a;
        return this; //refer entire object
    }
}

const result = calc.add(5);
console.log(result)

//This in english we used to refer some thing ex: if you want tell about bat .you say this is Bat here this means bat

//So In Jvascript we use this to referer something like an Object

console.log(this); //refers window Object
 this.a =10;
console.log(this.a); //now we added a property to window Object check in console
 