
/* 
alert("Success you did it!");
console.log("You did it again!"); */


/* Var creates  "order" which is empty cat box its a variable */

/* var order = prompt("Welcome to our website. What would you like to order?");
document.write(order + " is an excellent choice!"); */

/* 

var paidMember = false;
var rewardPoints =40;

if(paidMember === true) {
    document.write("Welcome to our club!");
} else if(rewardPoints >=50) {
    document.write("You're not a member. Would you like to redeem your points?");
} else
 {
    document.write("Sorry, you do not have access.");
} */





/* 

var choice = prompt("You have two choices, coffee or tea. Which would you like?");

if(choice === "coffee") {
    document.write("Great choice. Would you like cream and sugar?");
} else if(choice === "tea") {
    document.write("Excellent choice. Would you like milk and sugar?");
} else {
    document.write("Sorry, I don't know what that is.")
} */





// ~~~~~~~~~~~~~~~While Loops ~~~~~~~~~// 
/* 
var i = 1;

while(i < 15) {
    console.log(i);
    i++;
} */

/* 
var message = "";
var i = 1;


while(i <= 15) {
    message ="<p>I am number " + i + "!</p>";
    document.write(message);
    i++;
}
 */

/* 
var i = 1;

while(i <= 15) {
    console.log(i);
    i++;

} */



// ~~~~~~~~~~~~ Do while loops ~~~~~~~~~~~ //

/* 
var i  = 0;

do {
 i++;
 console.log("The number is " + i);
} while(i < 10); */






// ~~~~~~~~~~~~~~~~~~~  OCT 15 functions ~~~~~~~~~~~~//


/*  how to make a function



function nameOfFunction() {
  //  code to be run 
}


// This is how we call the function
nameOfFunction();

//This function can be called any number of times */


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



/* function fullGreetings(age, name) {
    return "Hi " + name + ", I believe you are " + age + " years old.";
}

console.log( fullGreetings(27, "Brittany"));
 */


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~function decclaration


//exercise// 

/* function area(length, width) {
    return (length * width)
}

console.log(area(10, 2))

 */

 //exercise solve//

/* function area(length, width) {
     return length * width;
 }

 var result = area(10, 2)


 */

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~function experession 

/* 
var hello = function() {
    console.log("How are you?");
}

hello();
 */




/* function isEven(value) {
    if ( )
    return true;
    else
    return false;
} */


//~~~~~~~~~~~ Exercise 

/* 
function even(number) {
    if (number % 2 == 0) {
        return true; 
    } else {
        return false;
    }
} */
/* 
function even(number) {
    if (number % 2 >= 1) {
        return false; 
    } else {
        return true;
    }
}
 */

//~~~~~~~~~~~~~~~~~~~ end exercise




//local scope blah is only accesscible inside curly braces 


/* var blah = "Please give me coffee"; // global scope 

function hello() {
    var blah = "It's early in the morning";
    console.log(blah);
}

hello();
console.log(blah);
 */



//// set interval  runs function every 5seconds

/* function hello(){
    console.log("Will you be my friend?")
    console.log("Please? I'll give you money!");
}

setInterval(hello, 5000); */



//~~~~~~~~ Anonymous functions


/* setInterval(
    function(){
        alert("Hello")
    }, 6000
); */


/* function isHighest(num1, num2, num3) {
    if (num1 > num2 && num3) 
    { return num1 }
        else if (num2 > num1 && num2 > num3) 
        { return num2 }
        else { return num3}
    
}
 */


 //solution below

/* function isHighest(x, y, z){
    if (x > y && z){
        return x;
    } else if (y > x && y > z)
    {
        return y;
    } else {
        return z;
    }

} */







////// Returning Values ////////////

/* 
function emotion(feelings) {
    return feelings;
}
var currentFeeling = emotion("really love");



function theNumber(number) {
    return number;
}

var times = theNumber(3);



function restaurants(place1) {
    console.log("I " + currentFeeling + " eating at " + place1 + " and I've been there " + times + " times.");
}

restaurants("In-N-Out"); */

///////////////////





/////////////// Call Back Functions //////////////////////

/* 
function theHELLO(name, question) {
    alert("Hello " + name + "!");
    question();
}

function help(){
    alert("How can I assist you?");
}

theHELLO('Garfield', help) //If you were to put help() it would run that as first function.
 */





/////////////////////    Anonymous Functions   ////////////

/* 
setTimeout(function() {
    alert('I love chocolate chip cookies!');
}, 3000); */