document.addEventListener("DOMContentLoaded", function() {
  var loader = document.getElementById('loader');
  var text = "elbarkani";
  var speed = 150;
  var delay = 1000;

  const titreSpans = document.querySelectorAll('h2 span');
  const titre2 = document.querySelectorAll('h3 span');
  const logo = document.querySelector('.logo');
  const button = document.querySelector('.blog-link');
  const li = document.querySelector('.nav-links');

  // Hide the content until the animation is complete
  var content = document.querySelector('.container');
  content.style.display = "none";

  function animateLoader() {
    var letters = text.split("");
    var i = 0;
    var interval = setInterval(function() {
      loader.innerHTML += letters[i];
      i++;

      if (i === letters.length) {
        clearInterval(interval);

        setTimeout(function() {
          loader.style.display = "none";
          content.style.display = "block";

          // Start the timeline animation
          const TL = gsap.timeline({paused: true});
          TL
            .staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.2)
            .staggerFrom(titre2, 1, {opacity: 0, ease: "power2.out"}, 0.2, '-=1')
            .from(li, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3, '-=2')
            .from(logo, 0.4, {transform: "scale(0)", ease: "power2.out"}, '-=2')
            .staggerFrom(button, 1, {right: -200, ease: "power2.out"}, 0.3, '-=1');

          TL.play();
        }, delay);
      }
    }, speed);
  }

  animateLoader();
});

document.addEventListener("DOMContentLoaded", function() {
    var navToggle = document.querySelector(".nav-toggle");
    var header = document.querySelector("header");
    var close = document.querySelector(".close");

    navToggle.addEventListener("click", function() {
      header.classList.toggle("nav-open");
    });

    close.addEventListener("click", function() {
      header.classList.toggle("nav-open");
    });
});
