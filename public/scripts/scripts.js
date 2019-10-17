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

console.log(sticky);
console.log(navbar);

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyTop() {
    if (window.pageYOffset > sticky) {
        console.log(window.pageYOffset);
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
} 