function incrementString (string) {  
    // Extract string's number
    var number = string.match(/\d+/) === null ? 0 : string.match(/\d+/)[0];
    console.log(number)
}
console.log(increamentString(number))