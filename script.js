// Create a function to slide the text
function slideText() {
    const slidingText = document.getElementById('slidingText');
    const textWidth = slidingText.clientWidth;
    const headerWidth = document.getElementById('topHeader').clientWidth;

    const animation = slidingText.animate(
        [
            { transform: `translateX(${headerWidth}px)` },
            { transform: `translateX(-${textWidth}px)` }
        ],
        {
            duration: 18000,
            iterations: Infinity,
            easing: 'linear'
        }
    );
}
slideText();

//video cursor animation
function videoconAnimation() {
    var videocon = document.querySelector("#video-container");
    var playbtn = document.querySelector("#play");
    videocon.addEventListener("mouseenter", function () {
      gsap.to(playbtn, {
        scale: 1,
        opacity: 1,
      });
    });
    videocon.addEventListener("mouseleave", function () {
      gsap.to(playbtn, {
        scale: 0,
        opacity: 0,
      });
    });
    document.addEventListener("mousemove", function (dets) {
      gsap.to(playbtn, {
        left: dets.x - 30,
        top: dets.y - 20,
      });
    });
}
videoconAnimation();

//h1 loading animation
function loadinganimation() {
    gsap.from("#page1 h1", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 0.9,
      stagger: 0.3,
    });
}
loadinganimation();

//hover cursor animation
function cursorAnimation() {
  // document.addEventListener("mousemove", function (dets) {
  //   gsap.to("#cursor", {
  //     left: dets.x,
  //     top: dets.y,
  //   });
  // });
  
  document.querySelectorAll(".child").forEach(function (elem) {
    elem.addEventListener("mousemove", function (dets) {
      gsap.to("#cursor", {
        left: dets.x,
        top: dets.y,
        transform: "scale(1)",
        opacity: 0.8
      });
    });

    // elem.addEventListener("mouseenter", function () {
    //   gsap.to("#cursor", {
    //     transform: "translate(-50%,-50%) scale(1)",
    //   });
    // });
    elem.addEventListener("mouseleave", function () {
      gsap.to("#cursor", {
        transform: "scale(0)",
      });
    });
  });

}
cursorAnimation();

//logo slide
function clientLogoSlide(){
var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);
}
clientLogoSlide();