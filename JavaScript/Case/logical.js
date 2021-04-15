function validate(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if(username === "admin" && password === "admin"){
  alert("Username and Password are Correct");
}
else if(username === "admin" && password !== "admin"){
  alert("Username is correct but password is incorrect");
}
else if(username !== "admin" && password === "admin"){
  alert("Username is incorrect but Password  is correct");
}
else{
  alert("Username and Password is incorrect")
}
};