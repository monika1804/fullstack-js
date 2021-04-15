var user = {
  name:"John",
  age: 23,
  hobby:"soccer",
  spells: ["Html", "CSS", "React"] ,                     //add array inside the object
  shout: function(){                                       //function inside the object
    console.log("AAHH!!");
  }
};

// user.spells;                            show all array which write in spells
// user.spells[2];                             show the single Element(index[0, 1, 2])              
user.favFood ="spinach"; 

//user.shout();                         AAHH!

var list = [
  {
    username:"harry",
    password:"admin"
  },
  {
    username:"sassy",
    password:"123"
  }
];


//list[0].password;                   admin
//list[1].username;                   sassy