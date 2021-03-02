const sections = document.querySelectorAll('section');

function scrollToDiv(id) {
	const div = document.getElementById(id);
	div.scrollIntoView({
		block: 'start',
		behavior: 'smooth',
		inline: 'start'
	});
};

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

window.addEventListener('scroll', toggleActiveDiv);





