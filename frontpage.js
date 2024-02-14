let fullName = document.getElementById("fullName");
let passWord = document.getElementById("passWord");
let Form = document.getElementById("myForm");

fullName();
function (fullNamevalue){
  if(fullName==""){
    alert("Name field cannot be empty")
  }

  else if(fullName !="Paul Njogu"){
    alert("Please enter your valid name")
  }
}
Form.addEventListener("submit", e =>{
  e.fullName();
});