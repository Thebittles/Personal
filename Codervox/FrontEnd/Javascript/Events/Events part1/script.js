

// == Codervox Section 14 EVENTS ========


/* 

function popup() {
    alert("How are you?");
}
 */



// ^^ Section 14.3 =========





/* 
document.getElementsByTagName("button")[0].onclick = function() {
    alert("How about a donut for breakfast");

}; */




//^^ Section 14.4 ================


/* 
document.getElementsByTagName("button")[0].addEventListener("click", function() {
    alert("How about a donut for lunch?");
});
 */



// ^^ Section 14.5 evetlistener

var randomColor = "#"+((1<<24)*Math.random()|0).toString(16);


document.querySelector("div").addEventListener("click", function(){
 document.querySelector("div").style.backgroundColor = randomColor;
 document.querySelector("div").textContent = "I haven't seen this before.";
});



























// ^^ Section 14.6 MOUSE EVENTS