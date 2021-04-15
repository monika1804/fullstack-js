var database = [
    {
      username:'harry',
      password:'123'
    },
    {
      username:'test',
      password:'666'
    },
    {
      username:'rest',
      password:'456'
    }
];
 var newsfeed = [
   {
     username:"Bobby",
     timeline:"It is too cool!!"
   },
   {
     username:"sassy",
     timeline:'It is so nice!!'
   }
 ];

 var usernameprompt = prompt("What's your username?");
 var passwordprompt = prompt("what is your password");

 function isUserValid(username, password){                                                        // in For loop case
  for(var i=0; i < database.length; i++)
  if(database[i].username === username && database[i].password === password){
     return true;
   }
   return false; 
 }
 function signIn(username, password){
//  console.log(isUserValid(username, password));
if(isUserValid(username, password)){
  console.log(newsfeed);
} else {
  alert("sorry wrong username and password");
}
//      if(user === database[0].username &&                                                     // logical operator
//     pass === database[0].password){
//      console.log(newsfeed);
//    }
//  else{
//     alert("sorry wrong username and password");
//  }
};
signIn(usernameprompt, passwordprompt)