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
    // repeat property,if we put 1, now it will run 2 times, for infinite use -1
    repeat: -1,
    // to repeat and bounce back,reverse
    yoyo: true,
});

gsap.from("h1", {
    color: "red",
    y: 20,
    duration: 2,
    delay: 1,
    opacity: 0,
    // put the animations on the same type of tags one by one after each second specified by number, also if we give -1 it will happen each after 1 seconds in reverse
    stagger: 1,
});
