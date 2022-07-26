//https://www.freecodecamp.org/news/pipe-and-compose-in-javascript-5b04004ac937/

//Compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x); src:https://medium.com/javascript-scene/reduce-composing-software-fe22f0c39a1d

// multiple arror functions : https://atomizedobjects.com/blog/quick-fixes/what-do-multiple-arrow-functions-mean-in-javascript/
getName = (person) => person.name;
uppercase = (string) => string.toUpperCase();
get6Characters = (string) => string.substring(0, 6);
reverse = (string) =>
  string
    .split('')
    .reverse()
    .join('');

// 'BUCKETHEAD'

get6Characters = (string) => string.substring(0, 6);

pipe = (...functions) =>(value) =>{
    return functions.reduceRight((currentValue,currentFunctions) => {
        return currentFunctions(currentValue)
    },value)
}
console.log(pipe(
    reverse,
    get6Characters,
    uppercase,
    getName
  )({ name: 'Buckethead' }));  //'TEKCUB