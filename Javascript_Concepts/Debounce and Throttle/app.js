
/* In JavaScript, a debounce function makes sure that your code is only triggered once per user input. 
Search box suggestions, text-field auto-saves, and eliminating double-button clicks are all use cases for debounce. */

let timeOut; 

function debounce(fn,timeDelay){ 
    return function(e){
        if(timeOut){
            clearTimeout(timeOut)
          }
      timeOut = setTimeout(() => {
        fn(e);
      },timeDelay)
      console.log(timeOut)
    }
  }

  document.getElementById('btn').addEventListener("click", debounce(e =>{
    console.log("clicked")},3000
  ));
  let last=0;
  function throttle(fn,timeDelay){ 
      return function(...args){
        let now = new Date().getTime();
        if(now-last<timeDelay){
          return;
        }else{
          last = now;
          return fn(...args)
        }
      }
  }

  document.getElementById('btn1').addEventListener("click", throttle(e =>{
    console.log("clicked")},2000
  ));

  //if you load th scrip first 
// window.onload = function () {
//     var e = document.getElementById("db_info");
//     e.innerHTML='Found you';
// };