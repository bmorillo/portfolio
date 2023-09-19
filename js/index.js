// Get a reference to the button element
var scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Add a scroll event listener to check the user's scroll position
window.addEventListener('scroll', function() {
    // Blocks the button if the user has not scrolled enough
    if (window.pageYOffset > 100) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Click event listener to smoothly scroll back to the top when button is clicked
scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
