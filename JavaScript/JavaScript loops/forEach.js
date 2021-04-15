// var todos = [
//   "clean room",
//   "brush teeth",
//   "excercise",
//   "study Javascript",
//   "eat healthy"
// ];

// var todosImportant = [
//   "clean room!",
//   "brush teeth!",
//   "excercise!",
//   "study Javascript!",
//   "eat healthy!"
// ];
// var todosLength = todos.length;

// function logtodos(todos, i){
//   console.log(todos, i)
// }

// todos.forEach(logtodos);
// todosImportant.forEach(logtodos);


var users = [
  {
    "name": "test",
    "lastname": "fest",
    "address": "mest"
  },
  {
    "name": "test1",
    "lastname": "fest1",
    "address": "mest1"
  },
  {
    "name": "test2",
    "lastname": "fest2",
    "address": "mest2"
  }
]

console.log(users[0].name, users[0].address)
console.log(users[1].name, users[1].address)
console.log(users[2].name, users[2].address)

// for(var i = 0; i < users.length; i++){

//   console.log(users[i].name, users[i].address)
// }

function log(user, i){
  console.log(user.name, user.address)
}

users.forEach(log)