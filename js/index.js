$(document).ready(function() {

//homepage fade animation for header form
	
	var hsup = $('#home-sign-up-prompt');
	var hsur = $('#home-sign-up-row');
	var hfwb = $('#home-free-week-btn');
	
	hfwb.click(function() {
	 hsup.fadeOut(500, function() {
	 	hsur.fadeIn(500);
	 });
	 return false;
	});
	
//homepage animate GIFs on scroll

//	var gifLoadPos = $('#snoopy-gif').offset().top;
//	$('html, body').scroll(function() {
//			console.log('gif position= '+gifLoadPos);
//			console.log("$(document).scrollTop()= "+$(document).scrollTop());
//	});
	
	var waypoint = new Waypoint({
		element: document.getElementById('snoopy-gif'),
	  handler: function(direction) {
	    console.log('Scrolled to waypoint!')
	  }
	});
	
});