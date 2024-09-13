const main = document.querySelector("#main");
const cursor = document.querySelector("#cursor");

main.addEventListener("mousemove", function (dets) {
    // console.log(dets);
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 0.3,
        easing: "elastic.out(1,0.3)",
    });
});
