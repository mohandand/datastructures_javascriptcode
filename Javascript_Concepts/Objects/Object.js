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