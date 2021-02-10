// Carousel / Slideshow
$(document).ready(function (){
    $(".carousel").slick({
        autoplay: true,
        autoplaySpeed: 5000,
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


/* Navigation Smooth Scroll on buttons */

// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
    // On-page links
    if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
    ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
        scrollTop: target.offset().top
        }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
            return false;
        } else {
        };
        });
    }
    }
});