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

	var gifLoadPos = $('#snoopy-gif').offset().top;
	var notLoaded = true;
  $(document).scroll(function(){
      var scrollPosition = $(this).scrollTop();
      console.log(scrollPosition, 'doc pos');
      console.log(gifLoadPos, 'gif pos');
      
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