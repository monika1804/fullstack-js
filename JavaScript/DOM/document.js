/* DOM Selectors
getElementsByTagName        = all html tags <h1>,<p>,<body> etc..
getElementsByClassName      = class (*)
getElementById              = id(#)

document.querySelectors("li");
document.querySelectorsAll("li");                    shows all list

getAttribute            
document.querySelctor("li").getAttribute("random");                     // it shows the value of inside the querySelector i.e 23., => random = "23"
=> "23"
setAttribute
document.querySelector("li").setAttribute("random", "1000");            // it change the value of inside the querySelector i.e 23 to 1000.,=> random = "100
document.querySelector("li");
=> <li random="1000">Notebook</li>
document.querySelector("h1").style;                                     // use to check the all CSS styling properties which use in html tag .i.e., <h1>
document.querySelector("h1").style.background="yellow";                 //use to set the new styling css property

use className for styling the htnl element


var h1 = document.querySelector("h1");                                  //use for styling the element direct to the use of className in style.css coolTitle is the class 
h1;
h1.className = "coolTitle";

//classList
document.querySelector("li").classList;                                 //use to show which class we use in the <li> tag in the console
document.querySelector("li").classList.add("coolTitle");                //add the css class in the list item
document.querySelector("li").classList.remove("coolTitle");             //remove  the  class
document.querySelector("li").classList.add("done");                      //use to replace the class i.e coolTitle to done
document.querySelector("li").classList.toggle("done");                    //on off on off i.e true  false true false
document.querySelector("h1").innerHTML = "<strong>!!!!</strong>";         //it is use for replace the item of the list in <strong> tag i.e shopping LIST TO !!!

document.querySelectorAll("li")[1];                                        //  jello
document.querySelectorAll("li")[1].parentElement;                           //<ul>
document.querySelectorAll("li")[1].parentElement.parentElement;              //<body>
document.querySelectorAll("li")[1].parentElement.parentElement.children;      // h1, p, ul , li


var button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function(){                                //use to do a event in button  .... mouseenter, mousemove, mouseover, mousedown, click
  console.log("CLICK!!");
})


var button = document.getElementById("enter");                           //clicking
var input = document.getElementById("userinput");
button.addEventListener("click", function(){
  console.log("click is working");
})
*/

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength(){
  return input.value.length;
}
function createListItem(){
  var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";
}

button.addEventListener("click", function(){
  if(inputLength > 0){
    var li = document.createElement("li");
    createListItem();
  }
})


input.addEventListener("keypress", function(event){
  if(inputLength > 0 && event.keyCode === 13){
    var li = document.createElement("li");
    createListItem();
  }
})