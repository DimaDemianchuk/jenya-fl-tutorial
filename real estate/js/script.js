"use sctrict";


const swiper = new Swiper('.slider--main__block', {
    // Optional parameters
    loop: true,
  

    // Navigation arrows
    navigation: {
      nextEl: '.body--main__block-arrow.swiper-button-next',
      prevEl: '.body--main__block-arrow.swiper-button-prev',
    },
  

  });


  // tabs



  const tabNavItems = document.querySelectorAll('.nav-deals-button');
const tabItems = document.querySelectorAll('.item-tabs');
document.addEventListener("click", function (e) {
	const targetElement = e.target;
	let currentActiveIndex = null;
	let newActiveIndex = null;
	if (targetElement.closest('.nav-deals-button')) {
		tabNavItems.forEach((tabNavItem, index) => {
			if (tabNavItem.classList.contains('active')) {
				currentActiveIndex = index;
				tabNavItem.classList.remove('active');
			}
			if (tabNavItem === targetElement) {
				newActiveIndex = index;
			}
		});
		targetElement.classList.add('active');
		tabItems[currentActiveIndex].classList.remove('active');
		tabItems[newActiveIndex].classList.add('active');
	}
});