// initial to final
gsap.to("#box1", {
    x: 1000,
    duration: 2,
    delay: 1,
    backgroundColor: "pink",
    // scale: 0.5,
    borderRadius: "50%",
});

//final to initial
gsap.from("#box2", {
    x: 1200,
    duration: 2,
    delay: 1,
});
