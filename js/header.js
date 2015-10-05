$(document).ready(function() {
  
  var pageTop = $('#page-top-row');
  var memNav = $('#mem-nav');
  
  $(document).scroll(function() {
  var headerScrollPos = $(this).scrollTop();
  	if (headerScrollPos >= 250) {
//  		console.log(headerScrollPos + " is over 300");
  		pageTop.addClass('smaller');
  	}else {
  		pageTop.removeClass('smaller');
  	}
  	if (headerScrollPos >=90) {
  		memNav.addClass('sticky');
  	}else {
  		memNav.removeClass('sticky');
  	}
  });
  
});
