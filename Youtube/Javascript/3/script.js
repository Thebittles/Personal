





var sliderPic = document.querySelector(".slider-img");
var images = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg"];

var btnLeft = document.getElementById("btn-l")
var btnRight = document.getElementById("btn-r")


var i = 0; //current image index










btnLeft.addEventListener("click", prev)

function prev(){
    if(i <= 0 ) i = images.length;
    i--;
    return setImg();
}

btnRight.addEventListener("click", next)

function next(){
    if( i >= images.length-1) i = -1;
    i++;
    return setImg();
  
  }

function setImg() {
    return sliderPic.setAttribute("src", images[i]);

}