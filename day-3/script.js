var path = `M 10 100 Q 500 100 990 100`;

// we just have to alter the value after 250 to create the animation
var finalPath = `M 10 100 Q 500 100 990 100`;

var string = document.querySelector("#string");
string.addEventListener("mousemove", function (dets) {
    // console.log(dets)
    console.log("entered");
    path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;
    gsap.to("svg path", {
        attr: {
            d: path,
        },
        duration: 0.3,
        ease: "power3.out",
    });
});

string.addEventListener("mouseleave", function () {
    gsap.to("svg path", {
        attr: {
            d: finalPath,
        },
        duration: 1.5,
        ease: "elastic.out(1,0.2)",
    });
});

// Theory

// Scalable vector Graphic (SVG) - used to make 2D graphics

// svg : treated like a container  and it has attributes  height and width,
// path : child of svg element , it can be used to create Lines, Curves, Arcs and more.
// - stroke : "color" => attribute used to provide color to the line or path
// - d : "commands and parameters " => attribute contains series of commands and parameter used by these commands.

// example:
// <svg width="500" height="200">
//      <path d="M x y Q x1 y1 x2 y2" stroke="black" fill="transparent" />
// </svg>

// => here
// - M : "move to" command
// - x : x axis coordinate ,
// - y : y axis coordinate

// Curves => in path curves are two types CUBIC CURVE and QUADRATIC CURVES
// - C : used for cubic curve => it is complex and it has two control points
// - Q : used for Quadratic curve => it is simple than cubic and it has one control point

// GSAP property -------------------------------------------------------------------------------------

// - attr : {key: value} => used to manipulate attributes of html element, it contains value as object in which key is attribute itself and value is value of attribute.
// - ease : used for provide easing to element , there are multiple predefined easing functions you can check out on GSAP official website

// YOU CAN use {ease : "elastic.out(1, 0.2)"}  which is predefined easing function to animate like guitar string
