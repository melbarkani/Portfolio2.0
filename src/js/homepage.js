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
