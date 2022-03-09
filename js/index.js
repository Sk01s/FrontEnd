// Start Timer Event
let daysEl = document.querySelector("[data-days]");
let hoursEl = document.querySelector("[data-hours]");
let minsEl = document.querySelector("[data-mins]");
let secEl = document.querySelector("[data-sec]");
setInterval(() => {
	let currnetDate = new Date().getTime();
	let EventDate = new Date("Dec 31 , 2022 23:59:59 ");
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
		clearInterval();
	}
}, 1000);
