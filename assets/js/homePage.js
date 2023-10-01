/*<<<<<<<<<<<<<<<<<<<<<<navbar section start>>>>>>>>>>>>>>>>>*/
let icon1 = document.querySelector(".icon-lang");
let icon2 = document.querySelector(".icon-menu");
let icon3 = document.querySelector("#icon-exit");
let menu = document.querySelector(".response-menu");
let languages = document.querySelector(".lang");

let lang = false;
let resMenu = false;
let closemenu = false;
//langugage active and deactive
icon1.addEventListener("click", () => {
  if (!lang) {
    languages.style.display = "block";
  } else {
    languages.style.display = "none";
  }
  lang = !lang
});
//response menu active
icon2.addEventListener("click", () => {
  if (!resMenu) {
    menu.style.transform = "translateX(0)";
  }
  else{
    menu.style.transform = "translateX(120%)"
  }
  resMenu = !resMenu
});
//response menu deactive
icon3.addEventListener("click", () => {
  if (!closemenu) {
    menu.style.transform = "translateX(120%)"
  }  else{
    menu.style.transform = "translateX(0)"
  }
  closemenu = !closemenu
});

/*<<<<<<<<<<<<<<<<<<<<<<navbar section ended>>>>>>>>>>>>>>>>>*/
