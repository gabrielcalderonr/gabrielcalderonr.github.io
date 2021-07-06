function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

var header = document.getElementById("mainmenu");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

/*date*/

let d = new Date();
var dayOfWeek = d.getDay();
var dName = ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun", "Mon", "Tues", "Wed", "Thur"];
var today = document.getElementById("goodbanner");

document.getElementById("dayofweek1").innerHTML = dName[dayOfWeek-1];
document.getElementById("dayofweek2").innerHTML = dName[dayOfWeek];
document.getElementById("dayofweek3").innerHTML = dName[dayOfWeek+1];
document.getElementById("dayofweek4").innerHTML = dName[dayOfWeek+2];
document.getElementById("dayofweek5").innerHTML = dName[dayOfWeek+3];

if (dayOfWeek == 5){
    today.style.display = "block";
} else {
    today.style.display = "none";
}
  /*End of date*/