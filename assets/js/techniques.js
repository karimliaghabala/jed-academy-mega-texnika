
let techNav = document.querySelector(".tech-nav");
let techIcon = document.querySelector(".icon-tech");
let nav = false;

techIcon.addEventListener('click',()=>{
        if(!nav){
            techNav.style.display = "block";
            nav = true;
        }else{
            techNav.style.display = "none";
            nav = false;
        }

})