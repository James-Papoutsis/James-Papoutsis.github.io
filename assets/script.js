// Window Scroll
$(window).on("scroll", function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop >= 50) {
        $('body').addClass('fixed-header');
    } else {
        $('body').removeClass('fixed-header')
    }
});

// Document Ready
$(document).ready(function() {

    // Typing animation
    new Typed('#type-it', {
        strings: ['BAccSci Student', 'CompSci Nerd', 'Problem Solver', 'Lifelong Learner'],
        typeSpeed: 100,
        loop: true
    });
});
