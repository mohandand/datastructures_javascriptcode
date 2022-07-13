let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");



  form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    engine(username, 0, "Username cannot be blank");
    engine(email, 1, "Email cannot be blank");
    engine(password, 2, "Password cannot be blank");
  });

  
/* id will target our id
serial will target our classes [error class, success and failure icons]
message will print a message inside our .error class */

  let engine = (id, serial, message) => {
    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
    } 
    
    else {
        errorMsg[serial].innerHTML = "";
    }
  }