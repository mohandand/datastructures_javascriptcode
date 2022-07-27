let array = [2,4,6];

let sum = (arr) => {
    return arr.reduce((accumalotr,curentValue)=> accumalotr+curentValue,0)
}

console.log(sum(array))