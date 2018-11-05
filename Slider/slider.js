var width = 720;
var count = 1;
var carousel = document.getElementById('carouselid');
var list = carousel.querySelector('ul');
var listElements = carousel.querySelectorAll('li');

var position = 0;

carousel.querySelector('.prev').onclick = function() {
	 position = Math.min(position + width * count, 0);
	 let p = position;
	 list.style.marginLeft = position + 'px';
};


carousel.querySelector('.next').onclick = function() {
	 position = Math.max(position - width * count, -width*(listElements.length - count));
	 let p = position;
	 list.style.marginLeft = position + 'px';
}