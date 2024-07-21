// -------------------Loader---------------------
document.addEventListener("readystatechange", function () {
    if (document.readyState === "complete") {
        gsap.to(".loader", {
            x: `-100%`,
            backgroundColor: `#00f`,
            duration:4,
            delay: 3,
            opacity: 0,
            ease: Expo.easeInOut
        })
    }
})

// var loading = gsap.timeline();
// loading
// .to(".loader", {
//     backgroundImage: `linear-gradient(rgba(116, 241, 203, 0.636),rgb(55, 55, 208),#8470eada)` ,
//     x: `-100%`,
//     duration: 2,
//     delay: 3,
//     opacity: 1,
//     ease:Expo.easeInOut
// })

