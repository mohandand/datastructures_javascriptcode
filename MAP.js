//https://www.freecodecamp.org/news/how-to-use-javascript-collections-map-and-set/

//One way of creating MAP

let map1 = new Map();

console.log(map1);

/* 
Map keys can be of any type, a primitive, or an object. 
This is one of the major differences between Map and regular JavaScript objects where the key can only be a string: */

// create a Map
const funMap = new Map();

funMap.set(360, 'My House Number'); // number as key
funMap.set(true, 'I write blogs!'); // boolean as key

let obj = {'name': 'tapas'}
funMap.set(obj, true); // object as key

console.log(funMap);

let obj1={
    name:"Mohan"
    // 2:"Rollno"
}

obj1.name="Advik"


//A regular JavaScript object always treats the key as a string. Even when you pass it a primitive or object, it internally converts the key into a string:

// Create an empty object
const funObj = {};

// add a property. Note, passing the key as a number.
funObj[360] = 'My House Number';

// It returns true because the number 360 got converted into the string '360' internally!
console.log(funObj[360] === funObj['360']);


//Second way of creating MAP and accepting 2 number as key
const map = new Map(
   [[2 ,'Mohan'],
    ['Country' ,'USA']]
)
//adding new key and values in differnt ways
map.set("Master","ComputerScience")
//if you use same key its replace old value.
map.set("Master","CS")
map.age=10;

//getting values from Map
console.log(map.get('Country'))
// console.log(map.get(age)) //it gives error
console.log(map.age)

//Size of the MAp

console.log('size of the map is', map.size);
// returns true, if map has an element with the key, 'Master' other wise return false
console.log(map.has('Master'))



map.delete("Country"); // removes the element with key.


// Clear the map by removing all the elements
//map.clear(); 

map.size // It will return, 0\

/* 
The methods keys(), values() and entries() methods return a MapIterator, which is excellent because 
you can use a for-of or forEach loop directly on it. */

const ageMap = new Map([
    ['Jack', 20],
    ['Alan', 34],
    ['Bill', 10],
    ['Sam', 9]
  ]);

  console.log(ageMap.keys());
  console.log(ageMap.values());
  console.log(ageMap.entries());

  let mape = ageMap.entries()
  // with forEach
ageMap.forEach((value, key) => {
   console.log(`${key} is ${value} years old!`);
});

// with for-of
for(const [key, value] of ageMap) {
  console.log(`${key} is ${value} years old!`);
}
//
const address = {
    'Tapas': 'Bangalore',
    'James': 'Huston',
    'Selva': 'Srilanka'
  };
  //Convert an Object into a Map in JavaScript
  const addressMap = new Map(Object.entries(address));

  //map to object
  Object.fromEntries(map)
//map to array

const map3 = new Map();
map.set('milk', 200);
map.set("tea", 300);
map.set('coffee', 500);

console.log(Array.from(map3));


console.log(map);
console.log(obj);


