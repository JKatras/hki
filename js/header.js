function init() {
	console.log('oi m8');
	
	window.addEventListener('scroll', function(e) {
		var distanceY = window.pageYOffset || document.documentElement.scrollTop,
			shrinkOn = 300,
			header = document.getElementById('page-top-row');
		if (distanceY > shrinkOn) {
			header.addClass('smaller');
		}else{
			header.removeClass('smaller');
		}
	});
}

window.onload = init();