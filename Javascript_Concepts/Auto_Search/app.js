let time;
function myDebouncedSearch(fn,timedelay){
  return function(...args){
    if(time){
      clearTimeout(time);
    }
    time = setTimeout(() => {
      fn(...args);
    },timedelay)
  }
}
    const selectElement = document.getElementsByClassName('search-input')[0];
  selectElement.addEventListener("change", myDebouncedSearch((e) => 
    myDebouncedSearc(e)),2000
  );
  
  const ulElement = document.querySelector('.results');
  
   async function myDebouncedSearc(moviename){
     let data = await searchData(moviename);
     console.log("executed")
      for(let i=0;i<3;i++){
      let movie = data[i].title;
      const liElement = document.createElement('li');
        liElement.textContent=movie;
        ulElement.append(liElement)
    }
   }