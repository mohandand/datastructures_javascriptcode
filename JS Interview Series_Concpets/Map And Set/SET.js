//https://www.freecodecamp.org/news/how-to-use-javascript-collections-map-and-set/

/* 
A Set is a collection of unique elements that can be of any type. Set is also an ordered collection of elements,
 which means that elements will be retrieved in the same order that they were inserted in. */

//  //Creating Set
 const set = new Set();
console.log(set);

const fruteSet = new Set(['🍉', '🍎', '🍈', '🍏']);
console.log(fruteSet);

// // Create a set - saladSet
const saladSet = new Set();

// Add some vegetables to it
saladSet.add('🍅'); // tomato
saladSet.add('🥑'); // avocado
saladSet.add('🥕'); // carrot
saladSet.add('🥒'); // cucumber

console.log(saladSet);

//if add one more cucumber then it wont accept as set contains only unique elements:

saladSet.add('🥒');
console.log(saladSet);

// The salad has a🥕, so returns true
console.log('Does the salad have a carrot?', saladSet.has('🥕'));

// The salad doesn't have a🥦, so returns false
console.log('Does the salad have broccoli?', saladSet.has('🥦'));

saladSet.delete('🥑');
console.log('I do not like 🥑, remove from the salad:', saladSet);

//saladSet.clear(); to clear all elemets.

// Create a Set
const houseNos = new Set([360, 567, 101]);

// Get the SetIterator using the `values()` method
console.log(houseNos.values());

// with forEach

houseNos.forEach((value) => {
    console.log(value);
 });
 
 
 // with for-of
 
 for(const value of houseNos) {
    console.log(value);
  }

  /* 
  The major difference between an array and a Set is that arrays allow you to have duplicate elements. Also, 
  some of the Set operations like delete() are faster than array operations like shift() or splice().

Think of Set as an extension of a regular array, just with more muscles. The Set data structure is 

not a replacement of the array. Both can solve interesting problems. */

//converting set to array

const arr = [...houseNos];
console.log(arr);

// Create a mixedFruit array with a few duplicate fruits
const mixedFruit = ['🍉', '🍎', '🍉', '🍈', '🍏', '🍎', '🍈'];

// Pass the array to create a set of unique fruits
const mixedFruitSet = new Set(mixedFruit);

console.log(mixedFruitSet);

// Create a person object
const person = {
    'name': 'Alex',
    'age': 32
  };
 //A Set can have elements of any type, even objects:
 // Create a set and add the object to it
 const pSet = new Set();
 pSet.add(person);
 console.log(pSet);

