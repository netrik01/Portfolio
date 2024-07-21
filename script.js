// -------------------Mouse Move Circle---------------------
window.addEventListener("mousemove", function(dets){
    function abc(){
        document.querySelector(".mouse_circle").style.top =`${dets.clientY}px`
        document.querySelector(".mouse_circle").style.left =`${dets.clientX}px`
    }
    window.requestAnimationFrame(abc)
});

// -------------------Mouse Move Circle_enlarge---------------------
document.querySelectorAll(".enlarge").forEach(function(elem){
    elem.addEventListener("mousemove", function(){
        document.querySelector(".mouse_circle").style.width = "60px";
        document.querySelector(".mouse_circle").style.height = "60px";
        document.querySelector(".mouse_circle").style.backgroundColor = "white";
        document.querySelector(".mouse_circle").style.mixBlendMode = "difference";
    })
})

// -------------------Mouse Move Circle_small---------------------
document.querySelectorAll(".enlarge").forEach(function(elem){
    elem.addEventListener("mouseleave", function(){
            document.querySelector(".mouse_circle").style.width = "15px";
            document.querySelector(".mouse_circle").style.height = "15px";
            document.querySelector(".mouse_circle").style.backgroundColor = "transparent";
            document.querySelector(".mouse_circle").style.mixBlendMode = "initial";
    })
})
// -------------------Home---------------------

// -------------------Nav-Bar icom---------------------
const nav=document.querySelector(".navbar")
const navlist=nav.querySelectorAll("li")
const totalNavList=navlist.length;
    for(let i=0; i<totalNavList; i++){
        // console.log(navlist[i])
        const a= navlist[i].querySelector("a");
        // console.log(a)
        a.addEventListener("click",function(){
            for(let j=0;j<totalNavList;j++){
                navlist[j].querySelector("a").classList.remove("active")
            }
            // console.log(this)
            this.classList.add("active")
        })
    }
    
// -------------------Nav-Bar-scroll---------------------
const sections= document.querySelectorAll("section[id]")
window.addEventListener("scroll",navActive);
function navActive(){
    let scrollY=window.pageYOffset;
    sections.forEach(current =>{
        const sectionHeight =current.offsetHeight
        const sectionTop=current.offsetTop - 50
        const sectionId= current.getAttribute("id")

        if(scrollY>sectionTop && scrollY<= sectionTop +sectionHeight){
            document.querySelector('.navbar a[href*=' + sectionId + ']').classList.add("active")
        }else{
            document.querySelector('.navbar a[href*=' + sectionId + ']').classList.remove("active")
        }
    })
}

// -------------------About---------------------

// -------------------Sills/certificate/education---------------------

const tablinks = document.getElementsByClassName("tab-links")
const tabcontents = document.getElementsByClassName("tab-contents")

function openTab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

// -------------------Services---------------------

// -------------------services_modal---------------------

const modalViews = document.querySelectorAll(".services_modal")
const modalBtns =document.querySelectorAll(".service-btn")
const modalCloses=document.querySelectorAll(".services_modal-close")

let modal=function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}
modalBtns.forEach((modalBtn,i)=>{
    modalBtn.addEventListener('click',()=>{
        modal(i)
    })
})


modalCloses.forEach((modalClose)=>{
    modalClose.addEventListener('click',()=>{
        modalViews.forEach((modalView)=>{
            modalView.classList.remove('active-modal')
        })
    })
})


// -------------------Contact---------------------

const scriptURL = 'https://script.google.com/macros/s/AKfycbx7PBEedfOYGKnfzUzSwxp-M94dJ9F4AALCg2lcn-V6Cam9OL-xrMtb-ZXrYfqs-Y-O/exec'
const form = document.forms['submit-to-google-sheet']
const suc_msg =document.getElementById('suc-msg')

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
        suc_msg.innerHTML="Message sent Successfully !"
        setTimeout(()=>{
            suc_msg.innerHTML=""
        },3000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
