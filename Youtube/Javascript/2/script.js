
let sliderImages = document.querySelectorAll(".slide");

arrowLeft = document.querySelector("#arrow-left");
arrowRight = document.querySelector("#arrow-right");
current = 0;

// ==============================


// clear all images
function reset(){
for(let i = 0; i < sliderImages.length; i++){
    sliderImages[i].style.display = 'none';

}
};


//init slider
function startSlide(){
    reset(); // calls reset function
    sliderImages[0].style.display = "block";
}


// Show prev slide left
function slideLeft(){
    reset();
    sliderImages[current -1].style.display = "block";
    current--;
}


// we have our functions now we need to create a event

// Left arrow event  show prev

arrowLeft.addEventListner("click", function(){
    if(current === 0){
        current = sliderImages.length;
    }
    slideLeft();

});

// Right arrow Event Show next
function slideRight(){
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
}



arrowRight.addEventListner("click", function(){
    if(current === sliderImages.length - 1){
        current = -1;
    }
    slideRight();
});







startSlide(); //calls fucntion

