'use strict';



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < navToggler.length; i++) {
  navToggler[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  });
}



/**
 * header
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

function navigateToPage(page) {
  window.location.href = page;
}

// Click event for search icon
document.getElementById("search-icon").addEventListener("click", function() {
  document.querySelector(".nav").classList.toggle("search");
  document.querySelector(".nav").classList.toggle("no-search");
  document.querySelector(".search-input").classList.toggle("search-active");
});

// Click event for menu toggle
document.querySelectorAll('.menu-toggle').forEach(function(element) {
  element.addEventListener("click", function() {
    document.querySelector(".nav").classList.toggle("mobile-nav");
    this.classList.toggle("is-active");
  });
});

// inside 



function toggleNav() {
  var nav = document.getElementById("myTopnav");
  if (nav.style.left === "0px") {
    nav.style.left = "-250px"; // Hide the menu
  } else {
    nav.style.left = "0px"; // Show the menu
  }
}
