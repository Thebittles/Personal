
// Clock 

function displayclock(){
    var time= new Date();
    var hrs = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();

    if (hrs > 12 ){
        hrs = hrs - 12;
    }
    if (hrs == 0){
        hrs = 12;
    }
    document.getElementById("clock").innerHTML = hrs + ':' + min + ':' + sec;

}


setInterval(displayclock, 500);

// Clock End



// Background Colors

var colors = ['#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8', '#4527A0', '#311B92',
'#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F', '#283593', '#1A237E',
'#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1'];
var index = 0;


setInterval(function(){
    document.querySelector("body").style.background = colors[index];
    index++;

    if (index == undefined || index >= colors.length) {
        index = 0;
    }
}, 500);
