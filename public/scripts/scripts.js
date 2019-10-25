// Open the Modal
function openModal() {
    document.getElementById("imageModal").style.display = "block";
}
  
  // Close the Modal
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyTop()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// console.log(sticky);
// console.log(navbar);

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyTop() {
    if (window.pageYOffset > sticky) {
        // console.log(window.pageYOffset);
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
} 

if(document.URL.indexOf("/projects") >= 0){
    var navlink = document.getElementById("navProjectBorder");
    navlink.classList.add("nav-link-border-active");
    var footerlink = document.getElementById("footerProjectLink");
    footerlink.classList.add("footer-link-active");
}

if(document.URL.indexOf("/illustration") >= 0){
    var navlink = document.getElementById("navIllustrationBorder");
    navlink.classList.add("nav-link-border-active");
    var footerlink = document.getElementById("footerIllustrationLink");
    footerlink.classList.add("footer-link-active");
}

if(document.URL.indexOf("/photography") >= 0){
    var navlink = document.getElementById("navPhotographyBorder");
    navlink.classList.add("nav-link-border-active");
    var footerlink = document.getElementById("footerPhotographyLink");
    footerlink.classList.add("footer-link-active");
}

if(document.URL.indexOf("/webapps") >= 0){
    var navlink = document.getElementById("navWebAppBorder");
    navlink.classList.add("nav-link-border-active");
    var footerlink = document.getElementById("footerWebAppLink");
    footerlink.classList.add("footer-link-active");
}

if(document.URL.indexOf("/digital") >= 0){
    var navlink = document.getElementById("navDigitalBorder");
    navlink.classList.add("nav-link-border-active");
    var footerlink = document.getElementById("footerDigitalLink");
    footerlink.classList.add("footer-link-active");
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if(typeof slides[(slideIndex-1)] !== 'undefined'){
        slides[slideIndex-1].style.display = "block";
    }
    if(typeof slides[(slideIndex-1)] !== 'undefined'){
    dots[slideIndex-1].className += " active";
    }
} 

