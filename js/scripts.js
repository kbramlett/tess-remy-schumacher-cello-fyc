/*!
* Start Bootstrap - One Page Wonder v6.0.6 (https://startbootstrap.com/theme/one-page-wonder)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
*/

// 
// Get the current year
let currentDate = new Date();
let currentYear = currentDate.getFullYear();

// Find the element with the id "currentYear"
let currentYearElement = document.getElementById("currentYear");

// Update the content of the element with the current year
currentYearElement.textContent = currentYear;

// Auto close drop-down nav on click of link
window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

}); 
//Auto pause current audio when another audio element is clicked to play
// Select all audio elements on the page
const audios = document.querySelectorAll('audio');

// Function to pause all other audio elements
function pauseOtherAudios(currentAudio) {
    audios.forEach(audio => {
        if (audio !== currentAudio) {
            audio.pause();
        }
    });
}

// Add event listeners to each audio element
audios.forEach(audio => {
    audio.addEventListener('play', () => pauseOtherAudios(audio));
});
