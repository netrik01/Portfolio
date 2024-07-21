// -------------------loader---------------------
var typed= new Typed('.loading',{
    strings:["","Loading....","loading..."],
    typeSpeed: 150,
    BackSpeed: 80,
    loop:true
})
// -------------------home---------------------

// -------------------Typing---------------------

$('.hello').textillate({ 
    initialDelay: 2000, 
    // in: { effect: 'fadeInLeftBig' },
    in: { effect: 'fadeInUp' },
    delay: 15,
    delayScale:1.5,
});

var typed= new Typed('.typing',{
    strings:["","Java Developer","Web Designer","web Developer","Coder"],
    typeSpeed: 150,
    BackSpeed: 80,
    loop:true
})

var home = gsap.timeline();
home.to(".gsap_01",{
    top:"0",
    delay:4,
    ease:"power2.in",
    duration:1.5,
    opacity:1,
})
home.to(".home-img", {
    right: "0",
    duration: 2.5,
    ease: "bounce.out",
    opacity: 1,
})

// -------------------About---------------------
gsap.to(".about_title h2",{
    scrollTrigger:{
        trigger:`.about`,
        scroller:`body`,
        start:`0% 60%`,
        end:`10% 45%`,
        scrub: 2,
        // markers:true,
    },
    opacity:1,
    top:0,
    duration:1,
    ease:`power1.inOut`,
})
gsap.to(".about .about-content",{
    scrollTrigger:{
        trigger:`.about`,
        scroller:`body`,
        start:`0% 60%`,
        end:`20% 30%`,
        scrub: 2,
        // markers:true,
    },
    opacity:1,
    left:0,
    duration:3,
    ease:`back.out(1.7)`,
})
gsap.to(".about .tab_trigger",{
    scrollTrigger:{
        trigger:`.about`,
        scroller:`body`,
        start:`0% 30%`,
        end:`10% 5%`,
        scrub: 2,
        // markers:true,
    },
    opacity:1,
    left:0,
    duration:5,
    // ease: `elastic.inOut(1.75,0.1)`,
    ease: `slow(0.7,0.7,false)`,
})

// -------------------Service---------------------
gsap.to(".service_title h2",{
    scrollTrigger:{
        trigger:`.service`,
        scroller:`body`,
        start:`0% 60%`,
        end:`10% 45%`,
        scrub: 2,
        // markers:true,
    },
    opacity:1,
    top:0,
    duration:1,
    ease:`power1.inOut`,
})
gsap.to(".service_box_01",{
    scrollTrigger:{
        trigger:`.service`,
        scroller:`body`,
        start:`0% 40%`,
        end:`10% 25%`,
        scrub: 1,
        // markers:true,
    },
    opacity:1,
    left:0,
    duration:1,
    ease:`circ.inOut`,
})
gsap.to(".service_box_02",{
    scrollTrigger:{
        trigger:`.service`,
        scroller:`body`,
        start:`0% 40%`,
        end:`10% 25%`,
        scrub: 1,
        // markers:true,
    },
    opacity:1,
    bottom:0,
    duration:1,
    ease:`circ.inOut`,
})
gsap.to(".service_box_03",{
    scrollTrigger:{
        trigger:`.service`,
        scroller:`body`,
        start:`0% 40%`,
        end:`10% 25%`,
        scrub: 1,
        // markers:true,
    },
    opacity:1,
    right:0,
    duration:1,
    ease:`circ.inOut`,
})

// -------------------Portfolio---------------------
gsap.to(".portfolio_title h2",{
    scrollTrigger:{
        trigger:`.portfolio`,
        scroller:`body`,
        start:`0% 60%`,
        end:`10% 45%`,
        scrub: 2,
        // markers:true,
    },
    opacity:1,
    top:0,
    duration:1,
    ease:`power1.inOut`,
})
// -------------------box_scrub_all_at_one_time---------------------
gsap.to(".prot_box_01",{
    scrollTrigger:{
        trigger:`.portfolio`,
        scroller:`body`,
        start:`0% 35%`,
        end:`10% 15%`,
        scrub: 2,
        // markers:true,
    },
    opacity:1,
    left:0,
    duration:1,
    ease:`circ.inOut`,
})
gsap.to(".prot_box_02",{
    scrollTrigger:{
        trigger:`.portfolio`,
        scroller:`body`,
        start:`0% 35%`,
        end:`10% 15%`,
        scrub: 2,
        // markers:true,
    },
    opacity:1,
    top:0,
    duration:1,
    ease:`circ.inOut`,
})
gsap.to(".prot_box_03",{
    scrollTrigger:{
        trigger:`.portfolio`,
        scroller:`body`,
        start:`0% 35%`,
        end:`10% 15%`,
        scrub: 2,
        // markers:true,
    },
    opacity:1,
    right:0,
    duration:1,
    ease:`circ.inOut`,
})

gsap.to(".prot_box_04",{
    scrollTrigger:{
        trigger:`.portfolio`,
        scroller:`body`,
        start:`0% 20%`,
        end:`10% 10%`,
        scrub: 2,
        // markers:true,   
    },
    opacity:1,
    left:0,
    duration:1,
    ease:`circ.inOut`,
})
gsap.to(".prot_box_05",{
    scrollTrigger:{
        trigger:`.portfolio`,
        scroller:`body`,
        start:`0% 20%`,
        end:`10% 10%`,
        scrub: 2,
        // markers:true,
    },
    opacity:1,
    bottom:0,
    duration:1,
    ease:`circ.inOut`,
})
gsap.to(".prot_box_06",{
    scrollTrigger:{
        trigger:`.portfolio`,
        scroller:`body`,
        start:`0% 20%`,
        end:`10% 10%`,
        scrub: 2,
        // markers:true,
    },
    opacity:1,
    right:0,
    duration:1,
    ease:`circ.inOut`,
})

// -------------------Contact---------------------

gsap.to(".contact_title h2",{
    scrollTrigger:{
        trigger:`.contact`,
        scroller:`body`,
        start:`0% 60%`,
        end:`10% 45%`,
        scrub: 2,
        // markers:true,
    },
    opacity:1,
    top:0,
    duration:1,
    ease:`power1.inOut`,
})
gsap.to(".contact_box_01",{
    scrollTrigger:{
        trigger:`.contact`,
        scroller:`body`,
        start:`0% 40%`,
        end:`10% 20%`,
        scrub: 2,
        // markers:true,
    },
    opacity:1,
    left:0,
    duration:2.5,
    // ease:`elastic.inOut(1.75,0.2)`,
    ease:`expo.out`,
})
gsap.to(".contact_box_02",{
    scrollTrigger:{
        trigger:`.contact`,
        scroller:`body`,
        start:`0% 40%`,
        end:`10% 20%`,
        scrub: 2,
        // markers:true,
    },
    opacity:1,
    right:0,
    duration:2.5,
    // ease:`elastic.inOut(1.75,0.2)`,
    ease:`expo.out`,
})