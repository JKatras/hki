$(document).ready(function() {
  
  var pageTop = $('#page-top-row');
  
  $(document).scroll(function() {
  var headerScrollPos = $(this).scrollTop();
  	if (headerScrollPos >= 250) {
  		console.log(headerScrollPos + " is over 300");
  		pageTop.addClass('smaller');
  	}else {
  		pageTop.removeClass('smaller');
  	}
  });
  
});
