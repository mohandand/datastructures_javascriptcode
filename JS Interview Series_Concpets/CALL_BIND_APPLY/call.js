//Expilcit Object Binding 

/* CALL , Bind and Apply methods are super imortant Javascript methods 
that are available to all javascript functions, which are used to said that this keyword is independent of how the function is called 
You can use these methods to tie a function to an object and call the function as if it belong to that object*/

//What is CAll..?

var obj = {
    name:"Mohan"
}

function sayHello(age,country){
    return "Hello " + this.name + " Age: " +age + "Lives In " +country
}

console.log(sayHello(27)); //Undefined as this points to Window Object

//CALL: So lets call above fuction as its inside of obj using call method.

//Call method take two argments one is objecta and argumets for function.

console.log(sayHello.call(obj,27,"USA")); //Mohan


//What is Apply..?

//So apply works same as how call works but the only differnce is that it takes all the argument in array format.

console.log(sayHello.apply(obj,[27,"USA"]));

//What is Bind..?

// what bind does is instead of calling function like above it provides us with another function which we can 
// call later on to excute that function

const bindFunc = sayHello.bind(obj)//we will get function so bind provide reusable function and we can use it later and which act as inside object only.
console.log(bindFunc) //we will get function so bind provide reusable function 
console.log(bindFunc(27,"America"))

//What is ot put of below..?

const age= 10;

var person ={
    name:"Dand",
    age:20,
    getAge: function(){
        return this.age
    }
}

var person2 = {age:24}

console.log(person.getAge.call(person2)) //context is now person-2 object so it prints 24 so for apply and bind also same

//What is ot put of below..?

const animals =[
    {species:"Lion",name:"King"},
    {species:"Tiger",name:"Mantri"}
]

function printAnimals(i){
    this.print =function(){
        console.log("#" +i+ "" +this.species + ":" +this.name);
    }
    this.print();
}

for(let i=0;i<animals.length;i++){
    printAnimals.call(animals[i],i)
}

//Append an array to another array

let array = [1,2,3]
let array2 = [4,5,6]
let arry3=[6,7,8]

array.push.apply(array,array2)

console.log(array)

console.log(array.concat(arry3)) //regular method

//Find Max or min of list of numbers

const numbers = [1,2,3,4]

console.log(Math.max(1,2,3,4)) //reguler way
// console.log(Math.max(numbers)) //not work on arrays so using aply we can improve it
console.log(Math.max.apply(null,numbers))

//Question:Bound Function


function f(){
    console.log(this);
}

let user ={
    g:f.bind(null)
}

user.g(); //window object

//Question:Bound Chaining

function f1(){
    console.log(this.name);
}

let fun = f1.bind({name:"MohanDAndigam"}).bind({name:"RidhiDandigam"}) //once bindedd with one context its always with that context

fun();

//Arrrow function inside object always points to window object it does not matter if you apply call,bind or apply


var person1 ={
    name:"Dand",
    age:20,
    getAgeArrow: ()=> {
        return this.age
    }
   ,
    getAge: function(){
        return this.age
    }
}

var person3 = {age:24}

console.log(person1.getAgeArrow.call(person2)) //undefined