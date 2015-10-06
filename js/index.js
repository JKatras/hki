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
	
//	homepage add sticky header after scrolling past video

	var homeHeader = $('.home-header');
	var homeSocialNav = $('.home-social-nav');
	var homeHeaderWrap = $('#home-header-wrap');
	$(window).on('scroll', function() {
		var scrollPosition = $(window).scrollTop();
		if(scrollPosition >= $('#video-overlay').height()-20) {
//		if (scrollPosition >= 800) {
			homeHeader.addClass('fixed');
			homeSocialNav.addClass('fixed');
  		homeHeaderWrap.addClass('shown');
//  		.fadeTo(500, 1, function(){
//   			homeHeaderWrap.css("visibility", "visible");   
//			});
		}
		else {
			homeHeader.removeClass('fixed');
			homeSocialNav.removeClass('fixed');
			homeHeaderWrap.removeClass('shown');
//			.fadeTo(500, 0, function(){
//   			homeHeaderWrap.css("visibility", "hidden");   
//			});
		}
	});
	
	//homepage animate GIFs on scroll
	
	var gifLoadPos = $('#snoopy-gif').offset().top;
	var notLoaded = true;
  $(document).scroll(function(){
      var scrollPosition = $(this).scrollTop();    
      if(gifLoadPos - scrollPosition <= 300 && notLoaded)
      {
      	$('#snoopy-gif').attr('src', '/assets/img/placeholder/snoopy.gif');
      	$('#fall-leaves-gif').attr('src', '/assets/img/placeholder/fall_leaves.gif');
      	$('#corgi-gif').attr('src', '/assets/img/placeholder/corgi_leaves.gif');
      	$('#stream-gif').attr('src', '/assets/img/placeholder/stream.gif');
      	notLoaded = false;
      }
  });
 
	
});