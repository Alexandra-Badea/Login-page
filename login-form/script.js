var showForm = document.getElementById("show_form");
var login = document.getElementById("login");
var btnClose = document.getElementsByClassName("btn");
var body = document.getElementById("body");
var main = document.getElementById("main");

login.addEventListener("click", function(){
    showForm.style.display = "block"; 
    if(showForm.style.display == "block") {
    }
});

for(var i = 0; i < btnClose.length; i++){
    btnClose[i].addEventListener("click", function(){
        showForm.style.display = "none";
        body.style.backgroundColor = "#fff";
    })
}; 

window.onclick = function(event){
    if(event.target == showForm)
        showForm.style.display = "none";
};

