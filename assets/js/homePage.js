

let icon = document.querySelector(".icon-lang");
let languages = document.querySelector(".lang");
let nav = document.querySelector(".middle-nav>ul")
let lang = false;

icon.addEventListener('click',() => {
    if(!lang){
        languages.style.display = "block";
        lang = true;
    }
    else {
        languages.style.display = "none";
        lang = false;
    }
})