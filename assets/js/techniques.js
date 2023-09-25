
let techNav = document.querySelector(".tech-nav");
let techIcon = document.querySelector(".icon-tech");
let nav = false;

techIcon.addEventListener('click',()=>{
        if(!nav){
            techNav.style.transform = "translateX(0)";
            nav = true;
        }else{
            techNav.style.transform ="translateX(100%)";
            nav = false;
        }

})