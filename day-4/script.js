const main = document.querySelector("#main");
const cursor = document.querySelector("#cursor");
const imageDiv = document.querySelector("#image");

main.addEventListener("mousemove", function (dets) {
    // console.log(dets);
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 0.6,
        easing: "elastic.out(1,0.3)",
    });
});

imageDiv.addEventListener("mouseenter", function () {
    cursor.innerHTML = "View More!";
    gsap.to(cursor, {
        scale: 4,
        backgroundColor: "#ffffff8a",
    });
});
imageDiv.addEventListener("mouseleave", function () {
    cursor.innerHTML = "";
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "white",
    });
});
