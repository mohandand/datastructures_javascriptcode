//https://www.freecodecamp.org/news/pipe-and-compose-in-javascript-5b04004ac937/

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
    return functions.reduce((currentValue,currentFunctions) => {
        return currentFunctions(currentValue)
    },value)
}
console.log(pipe(
    getName,
    uppercase,
    get6Characters,
    reverse
  )({ name: 'Buckethead' }));