



//codervox section 13 -



/* var theFood1 = document.getElementById("food");

var theFood2 = document.querySelector("#food");

var theFood3 = document.querySelector("li"); */

// ^^ Coadervox 13.4 ===================================


/* 
var theFood4 = document.getElementsByTagName("li");
// selects all li  then like array console.log(theFood4[1]);
// theFood4.constructor.name  tells us what were working with an html collection



var theFood5 = document.getElementsByClassName("snack");
//console.log(theFood5[0]); //Glazed


var theFood6 = document.querySelectorAll(".snack");
//console.log(theFood6[2]) //Vanilla */



// ^^ Codervox 13.5 ==========================================



/* var theText = document.getElementById("food").textContent;
//.textContent allows us to get/update text in an element


//document.getElementById("food").textContent = "The Delicious Pastries";
//update the text

var theHTML = document.getElementsByTagName("li")[1].innerHTML;
console.log(theHTML);
//getting back not just the text but the em tags as well.


document.getElementsByTagName("li")[2].innerHTML = "Vanilla <strong>Frosted</strong>";

 */

// ^^ Codervox 13.6 ============================================================

/* 
document.getElementById("food").style.color = "green";
// 1. Select element 2. .style.(css proptery) = value 


document.getElementsByClassName("snack")[1].style.backgroundColor = "#6e4f43";
//make sure you use camel case there are no dashes


var theDrinks = document.getElementsByClassName("drink");

for (var i = 0; i < theDrinks.length; i++) {
    theDrinks[i].style.backgroundColor = "#c3a38e"
}
 */
//affect change on multiple elements



// ^^ Codervox 13.7 Style ==========================================================


/* document.querySelector("a").hasAttribute('href'); //returns boolean
document.querySelector("a").getAttribute('href'); // "http://www.starbucks.com"
document.querySelector("a").removeAttribute('href'); //remobes the href attribute
document.querySelector("a").setAttribute('href', 'http://www.dunkindonuts.com'); //set href to another value

 */


//^^ Codervox 13.8 Attributes ========================================