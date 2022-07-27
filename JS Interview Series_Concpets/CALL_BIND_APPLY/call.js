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