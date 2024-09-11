gsap.from("#page1 .box", {
    scale: 0,
    delay: 1,
    duration: 2,
    rotate: 360,
});
gsap.from("#page2 .box", {
    scale: 0,
    // delay: 1,
    duration: 2,
    rotate: 360,

    // run on scroll, sasta tarika
    // scrollTrigger: "#page2 .box",

    // mehenga tarika
    scrollTrigger: {
        trigger: "#page2 .box",
        scroller: "body",
        markers: true,
        start: "top 60%",
    },
});
// gsap.from("#page3 .box", {
//     scale: 0,
//     delay: 1,
//     duration: 2,
//     rotate: 360,
// });
