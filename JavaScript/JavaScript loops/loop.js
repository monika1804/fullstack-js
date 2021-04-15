var todos = [
  "clean room",
  "brush teeth",
  "excercise",
  "study Javascript",
  "eat healthy"
];
// todos.length;

for(var i=0; i<todos.length; i++){                                                  //length if object 0, 1, 2, 3, 4 index
  console.log(i);
}

// for( var i=0; i<todos.length; i++){   
// console.log(todos[i] + "!");                                                      // name of the list & add "!" sign after the items of the list
// }

// for( var i=0; i<todos.length; i++){                                               // its shows list with index no.
//   todos[i] = todos[i] + "!" ;
// }

// for( var i=0; i<todos.length; i++){                                               // remove 4, 3, 2 inex in the list i.e., 2<2
//     todos.pop();
//     console.log(todos);
//   }

// var todosLength = todos.length;
// for( var i=0; i < todosLength; i++){  
//   todos.pop();
// }

  //forEach Loop

  todos.forEach(function(i){
    console.log(i);
  })

  //add index in forEach

  todos.forEach(function(todo, i){
    console.log(todo, i);
  })