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
let sections = document.querySelectorAll('section');
let nav = document.getElementById('navbar__list');



for (let section of sections) {
    let li = document.createElement('li');
    let name = section.id;

	li.setAttribute('class', 'menu__link')
	li.innerText = section.dataset.nav;
    li.addEventListener('click', function () {
      let e = document.getElementById(name);
      e.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
      });
    })

    nav.appendChild(li);
};


window.addEventListener('scroll', function () {
	let current = document.getElementsByClassName("your-active-class");
	for (section of sections) {
		let fullView = section.getBoundingClientRect().top + section.getBoundingClientRect().bottom;
		if (fullView < window.innerHeight)
		{
			current[0].className = current[0].className.replace("your-active-class", "");
			section.className += "your-active-class";
		}
	}
});


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


