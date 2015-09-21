jQuery(function($) {

	$('.faqpto-question').click(function(e) {
		e.preventDefault();

		var $q = $(this),
			target = $(this).attr('data-faqpto-target');

		$('[data-faqpto-answer='+target+']').slideToggle(function() {
			if( $q.hasClass('active') ) {
				$q.removeClass('active');
				$q.children('i').removeClass('fa-caret-up').addClass('fa-caret-down');
			} else {
				$q.addClass('active');
				$q.children('i').removeClass('fa-caret-down').addClass('fa-caret-up');
			}
		});
	});

});