var baraban = document.getElementsByClassName('circle')[0];


function turnBar(e) {

	e.target.style.transform = 'rotate(' + Math.random()*30 + 'rad)';
	
};

baraban.addEventListener('click', turnBar);