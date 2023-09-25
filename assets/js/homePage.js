
/*<<<<<<<<<<<<<<<<<<<<<<navbar section start>>>>>>>>>>>>>>>>>*/ 
let icon1 = document.querySelector(".icon-lang");
let icon2 = document.querySelector(".icon-menu");
let menu = document.querySelector(".response-menu");
let languages = document.querySelector(".lang");
let lang = false;

icon1.addEventListener('click',() => {
    if(!lang){
        languages.style.display = "block";
        lang = true;
    }
    else {
        languages.style.display = "none";
        lang = false;
    }
})

icon2.addEventListener('click',() => {
    if(!lang){
        menu.style.display = "block";
        lang = true;
    }else{
        menu.style.display = "none";
        lang = false;
    }
})
/*<<<<<<<<<<<<<<<<<<<<<<navbar section ended>>>>>>>>>>>>>>>>>*/ 
