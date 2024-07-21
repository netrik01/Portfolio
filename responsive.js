// ------------Nav-Bar------------
const sidemenu =document.getElementById("sideMenu-bar")
const navToggler=document.querySelector(".nav-toggler")

function openMenu(){
    sidemenu.style.right="0";
    navToggler.style.opacity="0"
}

function closeMenu(){
    sidemenu.style.right="-450px";
    navToggler.style.opacity="1"
}

