var menuitems = document.getElementById("menuitems");

menuitems.style.maxHeight = "0px";

function toggle(){
    if(menuitems.style.maxHeight == "0px"){
        menuitems.style.maxHeight = "200px";
    }
    else{
        menuitems.style.maxHeight = "0px"
    }

}

var productimg = document.getElementById("productimg");

var smallimg = document.getElementsByClassName("smallimg");

smallimg[0].onclick = function(){
    productimg.src =smallimg[0].src;
}
smallimg[1].onclick = function(){
    productimg.src =smallimg[1].src;
}
smallimg[2].onclick = function(){
    productimg.src =smallimg[2].src;
}
smallimg[3].onclick = function(){
    productimg.src =smallimg[3].src;
}



var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");

function register(){
    RegForm.style.transform = "translatex(0px)";
    LoginForm.style.transform = "translatex(0px)";
    Indicator.style.transform = "translatex(100px)";
}
function login(){
    RegForm.style.transform = "translatex(300px)";
    LoginForm.style.transform = "translatex(300px)";
    Indicator.style.transform = "translatex(0px)";
}
