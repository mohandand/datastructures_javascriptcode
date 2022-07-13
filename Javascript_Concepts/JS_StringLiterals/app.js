
const parent = document.getElementsByTagName('body')[0]
let list = `<div>
<ul>
 <li>Item-1</li>
 <li>Item-1</li>
</ul>
</div>`
//Yes, setting the .innerHTML properties overwrites any previous value for that property.

/*If you want to append your info to it, you have to code it to append by adding to the previous HTML, not overwriting the previous value (note the use of += here).

list is created with string not as Node so you cant use parent.appendChild(list) as it thrugh error as appendCjild method expect an argument as Node but not string
*/

parent.innerHTML = parent.innerHTML + list;


let button = document.getElementsByTagName('button')[0];

button.addEventListener('click', () => {
alert('Hello There!')
} , )