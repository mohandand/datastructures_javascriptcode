/* 
src:https://www.youtube.com/watch?v=rv7Q11KWmKU&t=83s
two types of binidings:
Implicit and Ecplicit
->Implicit binding  is applied when you invoke a function in an object using dot notation
->Expilcit Binding can be applied using call,bind and apply
//IMpotant notes

this inside noraml function always points to its parent Object
this inside arrow function always points to its arent function and no parent function meants points to Object
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

//this key word inside a function looks for Parent Object as its nor there it refer Window Object

function getParam(){
    console.log(this.a);
}

console.log(getParam());

//this inside Object

let user = {
    name:"Mohan",
    getName(){
        console.log(this.name)
    },
    getName1: function(){
        console.log(this.name)
    },
    childObj:{
        newName : "DAnd",
        getName(){
            console.log(this.newName,"and",this.name)  //normal Function only poiniting to immedate parent if its not there it point to window
        }
    },
    getNameArrow:() => {
        console.log(this.name) //it refer to Window Object beacause arrow function look for its parent function as its not there it pint ot window object
        console.log(this) //it refer to window Object 
    },

    getNameNestedArrow () {
        var nestedArrow = () => {
            console.log(this.name); //user.name// it will refer to its parent function this refernce
            nestedArrow();
        }
    }
}

user.getName();
user.getName1();
user.childObj.getName();
user.getNameArrow();
user.getNameNestedArrow();

//this inside a class or a constructor

class profile{
    constructor(n){
        this.firstname = n;
    }

    getProfile(){
        console.log(this.firstname)  // this herer points to everthing inside of constructor
    }
}

const Profile = new profile("Dandigam") // creating new Object from profile class
console.log(Profile) //Object with name:Dandigam and isnide object constrctor class and getProfile Method.
Profile.getProfile(); // Dandigam // So inside of the class this points to all the variable inside constructor 

//Whats below Output

function makeUser(){
    return {
        namee:"DAND",
        ref:this
    }
}

let userr = makeUser();
console.log(user) //it prints name:Dand and ref:window Object because makeUser parent is Window Object

//whats is below output

let test = {
    greet : "hello",
    print(){
         console.log(this.greet);
    }
}

// let temp = test;
// console.log("NOt object directly Called")
// console.log(temp.print())

test.print();
setTimeout(test.print,1000) //its consider as callback functionrather than the method of object  so that method no longer acces to its objec
setTimeout(function(){
    test.print();
},1000)

//What is output if below code

var length=4;

function callback(){
    console.log(this.length);
}

const object ={
    length:5,
    method(fn){
        fn();
    }
}

object.method(callback); //4 as fn is inside object so it target to global object and print 4



//Write code

const calculation = {
    total : 0,
    add(a){
        this.total +=a;
        return this
    },
    mul(a){
        this.total *=a;
        return this
    },  
    sub(a){
        this.total -=a;
        return this
    }

}

const res = calculation.add(10).mul(10).sub(10);
console.log(res.total);