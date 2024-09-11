gsap.from("#page2 .box", {
    scale: 0,
    opacity: 0,
    rotate: 720,
    duration: 1,
    scrollTrigger: {
        trigger: "#page2 .box",
        scroller: "body",
        markers: true,
        start: "top 60%",
        end: "top 30%",
        // either this to control animation as per your scroll or a number
        // scrub: true,
        scrub: 2,
        //  pin the element
        pin: true,
    },
});
