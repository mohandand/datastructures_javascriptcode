// Types of Function Declartions\

//Noraml Function Declartions
function Hello(){
    console.log("Hello")
    return;
}
//Function Expersion
var Hello1 = function(){  //right side part called Annonymus function 
    console.log("Hello")
    return;
}
//Arrow Functions

let Hello2 = () => {console.log("HEllo")}

//First Class Functions

//If in program if function do act like variable and we can pass function as argument and retun in another function ..etc

function squre(num){
    return num*num
}

function displaySquare(fn){
    console.log("Squre is:" +fn(5))
}
displaySquare(squre)

//IIFE Immediate Invoked Function Execuiton

// (function Sum(num){
//     console.log(num+num);
// })(5);

//Function Scope

//let has block scope so every time 
for(let i=0;i<5;i++){
    setTimeout(()=>{console.log(i)},i*1000)
}

//var has block scope
for(var i=0;i<5;i++){
    setTimeout(()=>{console.log(i)},i*1000)
}

//Params vs Arguments

function sub(a,b) { //Parms
    return a-b
}

sub(5,2) //aruguments

//rest vs Spread

function mul(a,b) { 
    return a-b
}
var arr = [4,5]
mul(...arr) //spread array values and pass

function mul1(...args) { //Rest Operaor
    return args[0]*args[1]
}
var arr = [4,5]
mul1(...arr)

//Call Back Functions
//we use it in event listener ,map, reduce ,every filter,setTimeout
document.addEventListenet('cilck' , ()=> {})

