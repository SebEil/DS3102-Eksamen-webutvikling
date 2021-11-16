gsap.from('.page-container', {
    duration: 2,
    y:'-100%',
    opacity: 1,
})

gsap.to("#unitedBtn", {
    x: -20,
    duration: 3.5,
})

gsap.to("#liverpoolBtn", {
    x: 20,
    duration: 3.5
})

gsap.to('.logoimg', {
    rotate: 360,
    duration: 2,
})