


var warning = document.getElementById("theMessage");
var theEmail = document.getElementById("email");


theEmail.addEventListener("focus",function(){
    warning.textContent = "Please enter a valid email."
    warning.style.color = "#50A6C2";

});


/// on focus of input it displays the message above


theEmail.addEventListener("blur", function(){
    if (theEmail.value == 0) {
        alert("Email CANNOT be blank.");
    } else {
        warning.textContent = "";
    }
})


//if email is blank and unfocused ^^