// Global varisbles

const sections = document.querySelectorAll('section');


// Functions

/*
Function below will:
Store a div by id
Scroll the viewport to that div
*/
function scrollToDiv(id) {
	const div = document.getElementById(id);
	div.scrollIntoView({
		block: 'start',
		behavior: 'smooth',
		inline: 'start'
	});
};

/*
Function below will:
Keep track of the current active div
Loop through all divs to find which div is in view
Remove active state from stored div
Add active state to the div that is in view
*/
function toggleActiveDiv() {
	const active = "your-active-class";
	let current = document.getElementsByClassName(active);
	for (section of sections) {
			const wholeDiv = section.getBoundingClientRect().top + section.getBoundingClientRect().bottom;
		if (wholeDiv < window.innerHeight) {
			current[0].classList.remove(active);
			section.classList.add(active);
		}
	}
}


// Navigation bar setup

/*
The 'for of' loop below will:
Loop through all divs
Create a list Item
Set the list item's class to 'menu__Link'
Add the div's name to it's innerText
Add an EventListener with scrollToDive attached to it
Append the List item to the navigation bar
*/
for (let section of sections) {
    let li = document.createElement('li');
    const id = section.id;
	const sectionName = section.dataset.nav;
	const navBar = document.getElementById('navbar__list');
	li.setAttribute('class', 'menu__link');
	li.innerText = sectionName;
    li.addEventListener('click', function () {
		scrollToDiv(id);
	});
	navBar.appendChild(li);
};


// Set active div

/*
Listens for when a div is scrolled to
Sets div to active
*/
window.addEventListener('scroll', toggleActiveDiv);





