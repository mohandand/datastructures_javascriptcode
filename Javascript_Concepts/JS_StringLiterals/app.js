
const parent = document.getElementsByTagName('body')[0]
let list = `<div>
<ul>
 <li>Item-1</li>
 <li>Item-1</li>
</ul>
</div>`
//setting the .innerHTML properties overwrites any previous value for that property.

/*If you want to append your info to it, you have to code it to append by adding to the previous HTML, not overwriting the previous value (note the use of += here).

list is created with string not as Node so you cant use parent.appendChild(list) as it thrugh error as appendCjild method expect an argument as Node but not string
*/

parent.innerHTML = parent.innerHTML + list;


const dogs = [
    { name: 'Snickers', age: 2 },
    { name: 'Hugo', age: 8 },
    { name: 'Sunny', age: 1 }
]

const dogList = `${dogs.map(dog => `<li>${dog.name} is ${dog.age}</li>
`)}`

let div = document.getElementsByTagName('div')[0]

div.innerHTML = div.innerHTML + dogList;



//In JavaScript DOM, you can choose to only fire an event once. 
//This means you can allow an event to only be triggered once on a specific element.
let button = document.getElementsByTagName('button')[0];

button.addEventListener('click', () => {
console.log('Hello There!')
},{once:true} )

/* If you want to add an event callback but have it run only once, you can simply use the once option in the method's options object:
This prevents the need to otherwise immediately remove the event listener after the callback first fires (which I've been guilty of!):

document.body.addEventListener('click', cb);

  function cb() {
    console.log('Hi! 👋');
    document.body.removeEventListener('click', cb);
  }*/