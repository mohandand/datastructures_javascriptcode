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
            console.log(this.newName,"and",this.name)  //normal Function only poiniting to immedate parent if its not there 
        }
    },
    getNameArrow:() => {
        console.log(this.name) //it refer to Window Object
        console.log(this.name) //it refer to window bject
    }
}

user.getName();
user.getName1();
user.childObj.getName();
user.getNameArrow();