function timer(id, dedline) {
	//***************************************************************************** */
	// Таймер 
	//***************************************************************************** */
	function getTimeRemaining(endtime) { // Получаем дни, часы, минуты и секунды
		let days, hours, minutes, seconds;
		const t = Date.parse(endtime) - Date.parse(new Date());

		if (t <= 0) {
			days = 0;
			hours = 0;
			minutes = 0;
			seconds = 0;
		} else {
			days = Math.floor(t / (1000 * 60 * 60 * 24));
			hours = Math.floor((t / (1000 * 60 * 60) % 24));
			minutes = Math.floor((t / 1000 / 60) % 60);
			seconds = Math.floor((t / 1000) % 60);
		}


		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};

	}

	function getZero(num) {
		if (num < 10 && num >= 0) {
			return `0${num}`;
		} else {
			return num;
		}
	}


	function setClock(selector, endtime) { // Устанавливаем наше время на страницу
		const timer = document.querySelector(selector),
			days = timer.querySelector('#days'),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			timeInterval = setInterval(updateClock, 1000);

		updateClock();

		function updateClock() { // Обновляем часы каждую секунду
			const t = getTimeRemaining(endtime);
			days.innerHTML = getZero(t.days);
			hours.innerHTML = getZero(t.hours);
			minutes.innerHTML = getZero(t.minutes);
			seconds.innerHTML = getZero(t.seconds);

			if (t.total <= 0) { // Останавливаем функцию, если закончилось время акции 
				clearInterval(timeInterval);
			}
		}
	}


	setClock(id, dedline);
}

export default timer;