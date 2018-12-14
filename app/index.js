/* eslint-disable prefer-destructuring */
/* eslint-disable func-names */
/**
 * Application entry point
 */
// Load application styles
import '../assets/styles/index.sass';
import 'bootstrap';
// ================================
// START YOUR APP HERE
// ================================

// ================================
// IMAGES HERE
// ===============================
import '../assets/images/logo.png';
import '../assets/images/home_bg.svg';
import '../assets/images/home_illus.svg';
import '../assets/images/about_us_illus.svg';
import '../assets/images/about_us_illus_2.svg';
import '../assets/images/services_illus.svg';
import '../assets/images/contact_bg.svg';
import '../assets/images/contact_illus_1.svg';
import '../assets/images/contact_illus_2.svg';

const jquery = require('jquery');

// eslint-disable-next-line no-undef
window.$ = jquery;

// eslint-disable-next-line no-undef
$(document).ready(() => {
  // Add scrollspy to <body>
  $('body').scrollspy({ target: '.navbar', offset: 50 });

  // Add smooth scrolling on all links inside the navbar
  $('#navbar-top .navbar-nav .nav-item .nav-link').on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      const hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        () => {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        },
      );
    } // End if
  });
});
