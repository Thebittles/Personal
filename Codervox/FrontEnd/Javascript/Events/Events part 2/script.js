


document.querySelector("img").addEventListener("mouseleave", function(){
document.querySelector("img").src = "img/pic2.jpg";
});

document.querySelector("img").addEventListener("mouseenter", function(){
document.querySelector("img").src = "img/pic1.jpg";
}); 


// Codervox 14.7 Mouse Events




document.getElementById("userText").addEventListener("keyup",function(){
    var textLength = document.getElementById("userText").value.length;
    var message = document.getElementById("theMessage");
    var counter = (10 - (textLength));
    message.textContent = counter + " Characters left."

    if (counter <= 3) {
        message.style.color = "red";
        document.getElementById("userText").style.border = "solid 5px red"
    } else {
        message.style.color = "black";
        document.getElementById("userText").style.border = "none"
    }
});
