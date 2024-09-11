gsap.to("#page2 h1", {
    x: "-160%", // GSAP property for horizontal translation
    scrollTrigger: {
        trigger: "#page2", // Parent element is the trigger
        scroller: "body",
        markers: true, // Debugging markers
        start: "top 0%", // When #page2 reaches the top of the viewport
        end: "top -100%", // Animation ends when the bottom of #page2 hits the top of the viewport
        scrub: 0.5, // Smooth scrubbing
        pin: true, // Pin the element while scrolling
    },
});
