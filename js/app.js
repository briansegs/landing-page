/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/


/**
 * End Global Variables
 * Start Helper Functions
 *
*/

let scroll = function () {
    let elmnt = document.querySelector('.your-active-class');
    elmnt.scrollIntoView({
        behavior: "smooth",
    });
}

let sections = document.querySelectorAll('section');
let nav = document.getElementById('navbar__list');
for (let section of sections) {
    let li = document.createElement('li');
    li.setAttribute('class', 'menu__link')
    li.innerText = section.dataset.nav;
    nav.appendChild(li);
    li.addEventListener('click', scroll)
};


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active


