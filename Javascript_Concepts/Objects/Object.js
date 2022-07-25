const User = {
    name:"Mohan",
    age:27,
    "Last Name":"Dandigam" , //to add prpoperty with spaces you have to use double qoutes,
    phone:23,
    "Last Name":"Dandigam"  //to add prpoperty with spaces you have to use double qoutes
}

delete User.phone;

console.log(User);
console.log(User["Last Name"]); //you have to access/delet like that you cant access with dot.

//Adding dynmic key value pair to an object

const propertyname = "firstname";
const name = "Mohan"

const user1 = {
    propertyname:name,// it wont work
    [propertyname]:name
}

console.log(user1);

//Loop Through Objects

for(let key in User){
    console.log(`${key} : ${User[key]}`)
}

//Object entires,values and Keys

let objent = Object.entries(User);
let Keys =Object.keys(User);
let values = Object.values(User);

console.log(objent,Keys,values);