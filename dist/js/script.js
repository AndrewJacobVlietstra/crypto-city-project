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

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
})