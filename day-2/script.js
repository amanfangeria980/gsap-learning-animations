gsap.to("#page2 h1", {
    // transform: "translateX(-160%)",
    x: "-160%",
    scrollTrigger: {
        // whenever we will use pin, we will trigger the parent instead of the element itself
        // trigger: "#page2 h1",
        trigger: "#page2",
        scroller: "body",
        // markers: true,
        // start: "top 50%",
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin: true,
    },
});
