/* GET API and POST API Using fetch */

//GET

fetch('http://myprofiledata')
.then(res => res.json())
.then(console.log(res));


//POST 

let profile = {
    name:"mohan",
    age:25
}

fetch('http://myprofile/data',{
    method:'POST',
    head:{
        'Content-Type':'application/json',
    },
    body:JSON.stringify(profile)
})
.then(res => res.json())
.then(console.log(res))
.catch((err)=>{
    console.log(err)
})

// if you use same in  async functions then

//get

async function fetchJSON(){
    let response = await fetch('url')
    let data = await response.json();
    console.log(data)
}


//post also same like above we can write