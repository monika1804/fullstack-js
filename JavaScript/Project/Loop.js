var list = [
  {
    FirstName:"Harry",
    LastName:"Max",
    Address:"Test"
  },
  {
    FirstName:"Marry",
    LastName:"Mest",
    Address:"Rest"
  },
  {
    FirstName:"Sassy",
    LastName:"Max",
    Address:"Dest"
  },
  {
    FirstName:"Billy",
    LastName:"test",
    Address:"adyt"
  },
];

console.log(list[0].FirstName, list[0].Address);

for (var i=0; i<list.length; i++){
  console.log(list[i].FirstName, list[i].Address);
}