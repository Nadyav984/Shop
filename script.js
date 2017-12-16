function validate(e){
    e.preventDefault();
      let userName = document.getElementById("username").value;
      let password = document.getElementById("password").value;
    //console.log(password);
      let age = document.getElementById("age").value;
      let userEmail = document.getElementById("email").value;
      let data = document.getElementById("date").value;
        if(checkUser(userName)&&
           checkPassword(password)&&
           checkAge(age)&&
           checkEmail(userEmail)&&
           checkDate(data)){
      alert(true);
    }else{
      return false
    }
}

window.onload = function() {
    document.getElementById("registrationform").addEventListener("submit", validate);
    document.getElementById("username").oninput = (e) => {
    document.getElementById('username1').textContent = document.getElementById("username").value
  }
}

function checkUser(userName='') {
    var re = /^user_(\w+)/g;
 // console.log(!!userName.match(re));
    if (userName==="") {
      document.getElementById("username").style.border = "1px solid red";
      alert("You should enter a valid username starts with user_");
          return false;
    } else if(userName.match(re)){
      document.getElementById("username").style.border = "1px solid black";
         return true;
    } else {
        document.getElementById("username").style.border = "1px solid red";
      alert("You entered INVALID USER NAME: "+userName+". Enter a valid username without SPACES starts with user_ + your username ");
        return false;
    }
}

function checkPassword(password){
  var pass_regex=/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (password==="") {
      document.getElementById("password").style.border = "1px solid red";
      alert("You should enter a valid password");
              return false;
    }else if (password.match(pass_regex)){
              return true;
    }else{
      document.getElementById("password").style.border = "1px solid red";
      alert("You entered INVALID PASSWORD: "+password+". Enter a valid password:for min 8 letter password, with at least a symbol, upper and lower case letters and a number ");
              return false;
  }
}
function checkAge(age){
  var age_regex=/^[1-9]?[0-9]{1}$|^100$/;

  if (age.match(age_regex)) {
    document.getElementById("age").style.border = "1px solid black";
		     return true;
    } else  {
      document.getElementById("age").style.border = "1px solid red";
      alert("You should enter correct age");
         return false;
   }
  }
  

function checkEmail(email){
  var email_regex =/(\w+)@(\w+).(\w+)/;
  console.log(email);
  if(email.match(email_regex)){
    document.getElementById("email").style.border = "1px solid black";
          return true;

    } else{
    document.getElementById("email").style.border = "1px solid red";
      alert("Check your entered email");
          return false;
    }
}

function checkDate() {
  var x = document.getElementById("myDate").value;
  document.getElementById("demo").innerHTML = x; 
}



/*--------------------------------------------------------------------------------------------------------*/
