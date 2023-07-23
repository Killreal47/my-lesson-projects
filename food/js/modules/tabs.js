function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
	// ТАБЫ картинки, текст на желтом фоне и выбор меню

	const tabs = document.querySelectorAll(tabsSelector), // меню справа
		tabsContent = document.querySelectorAll(tabsContentSelector),  // картинки + текст на желтом фоне
		tabsParent = document.querySelector(tabsParentSelector); // родительский элемент меню справа


	function hideTabContent() { // Скрываем контент табов картинка + тексст снизу
		tabsContent.forEach((item) => {
			item.classList.add('hide');
			item.classList.remove('show', 'fade');
		});

		tabs.forEach(item => {
			item.classList.remove(activeClass);
		});

	}

	function showTabContent(i = 0) {  // Показываем контент табов картинка + тексст снизу
		tabsContent[i].classList.add('show', 'fade');
		tabsContent[i].classList.remove('hide');
		tabs[i].classList.add(activeClass);
	}

	hideTabContent();
	showTabContent();

	tabsParent.addEventListener('click', (event) => {
		const target = event.target;

		if (target && target.classList.contains(tabsSelector.slice(1))) {
			tabs.forEach((item, i) => {
				if (target == item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});
}

export default tabs;