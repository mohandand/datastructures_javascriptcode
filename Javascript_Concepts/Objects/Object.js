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

//Object with duplicate keys

let obj = {
    a:10,
    b:20,
    a:9
}

console.log(obj)  //last key value is relaced at first position and written

//Tricky Object

const a = {};
const  b = {key:"b"}
const  c = {key:"c"}
a[b]=123; // when we assign key as object it assignd like a["[Object Object]"] =123 
          //as object cant be converted as key unless its string when it tries to convert forcefully to string it will becomes Object Object;
a[c]=456; // when we assign key as object it assignd like a["[Object Object]"] =456 so overirided;
console.log(a)
console.log(a[b])

//JSON.stringfy() and JSON.parse()
// we use this In API calls as they accept String not objct and we cant directly store object inside local storage so we nned to convert



const user2 = {
    name:"Mohan",
    age:27,
}

let strObj = JSON.stringify(user2) //convert as String

//localStorage.setItem(test ,strObj) // key will be test and object as string willbe value. caheck under aplications if u asssign object directly it give [Object Object] as when it tries to convert forcefully to string it will becomes Object Object;

console.log( strObj,typeof strObj)  /


console.log( JSON.parse(strObj),typeof JSON.parse(strObj))   //Convert Back to Object

//Spread operator 
//with string will spread all charcters 

console.log([..."MOHAN"])

const user3 = {
    name:"Mohan",
    age:27,
}

const user4 = {
    namef:"Mohan",
    agef:27,
    ...user3  //add user3 all properties insidd user4
}

console.log(user4)



