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
const sections = document.querySelectorAll('section');

function scrollToDiv(id) {
	let div = document.getElementById(id);
	div.scrollIntoView({
		block: 'start',
		behavior: 'smooth',
		inline: 'start'
	});
};

function toggleActiveDiv() {
	let active = "your-active-class";
	let current = document.getElementsByClassName(active);
	for (section of sections) {
			let fullView = section.getBoundingClientRect().top + section.getBoundingClientRect().bottom;
		if (fullView < window.innerHeight) {
			current[0].className = current[0].className.replace(active, "");
			section.className += active;
		}
	}
}

for (let section of sections) {
    let li = document.createElement('li');
    let id = section.id;
	let sectionName = section.dataset.nav;
	let navBar = document.getElementById('navbar__list');
	li.setAttribute('class', 'menu__link');
	li.innerText = sectionName;
    li.addEventListener('click', function () {
		scrollToDiv(id);
	});
	navBar.appendChild(li);
};

window.addEventListener('scroll', toggleActiveDiv);


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


