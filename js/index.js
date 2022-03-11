// Start Timer Event
let currentYear = 2022;
let daysEl = document.querySelector("[data-days]");
let hoursEl = document.querySelector("[data-hours]");
let minsEl = document.querySelector("[data-mins]");
let secEl = document.querySelector("[data-sec]");
setInterval(() => {
	let currnetDate = new Date().getTime();
	let EventDate = new Date(`Dec 31 , ${currentYear} 23:59:59 `);
	deffDate = EventDate - currnetDate;
	let days = Math.floor(deffDate / (24 * 60 * 60 * 1000));
	let hours = Math.floor(deffDate / (60 * 60 * 1000) - days * 24);
	let mins = Math.floor(deffDate / (1000 * 60) - days * 24 * 60 - hours * 60);
	let sec = Math.floor(
		deffDate / 1000 - days * 24 * 60 * 60 - hours * 60 * 60 - mins * 60
	);
	daysEl.innerHTML = days < 10 ? "0" + days : days;
	hoursEl.innerHTML = hours < 10 ? "0" + hours : hours;
	minsEl.innerHTML = mins < 10 ? "0" + mins : mins;
	secEl.innerHTML = sec < 10 ? "0" + sec : sec;
	if ((deffDate = 0)) {
		currentYear++;
	}
}, 1000);
//  Count Animtion
let sections = document.querySelectorAll("[data-count]");
let container = document.querySelector("[data-section]");
let staticsCounter = new IntersectionObserver(function (contain) {
	if (contain[0].isIntersecting) {
		console.log(contain[0]);
		sections.forEach((el) => {
			const maxNum = el.dataset.count;
			const numInc = setInterval(() => {
				el.textContent++;
				if (el.textContent === maxNum) {
					clearInterval(numInc);
				}
			}, maxNum / 2000);
		});
	}
}, {});

staticsCounter.observe(container);
// animation on scroll
let skillSection = document.querySelector("[data-skill]");
let progress = document.querySelectorAll("[data-per]");

let skillObserver = new IntersectionObserver((el) => {
	el.forEach(
		(el) => {
			if (el.isIntersecting) {
				let widthOne = 0;
				let maxWidth = el.target.dataset.per;
				let widthTimer = setInterval(() => {
					widthOne++;
					el.target.style.width = `${widthOne}%`;
					if (el.target.style.width == maxWidth) {
						clearInterval(widthTimer);
						skillObserver.unobserve(el.target);
					}
				}, 1);
			}
		},
		{ threshold: 1 }
	);
});

progress.forEach((el) => {
	skillObserver.observe(el);
});
