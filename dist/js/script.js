// Carousel / Slideshow
$(document).ready(function (){
    $(".carousel").slick({
        autoplay: true,
        autoplaySpeed: 6500,
        dots: true
    });
});



// For Responsive Navbar
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks =  document.getElementsByClassName('main-nav-list')[0];

// When clicking menu item, toggle navbarlinks to display as flex items
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
})

// When clicking a navbarlink, hide the navbarlinks
navbarLinks.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
})