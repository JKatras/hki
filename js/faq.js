jQuery(function($) {

	$('.faq-question').click(function(e) {
		e.preventDefault();

		var $q = $(this),
			target = $(this).attr('data-faq-target');

		$('[data-faq-answer='+target+']').slideToggle(function() {
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
