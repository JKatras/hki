jQuery(function($) {

	function placeArrow()
	{
		var $target = $('.team-member-photo-overlay-active').parent('.team-member-show'),
			$arrow = $('#member-arrow'),
			targetWidth = $target.width(),
			targetPosition = $target.offset(),
			left = (targetPosition.left+(targetWidth/2)-($arrow.width()/2));

		$arrow.animate({
			'left' : left
		});
	}

	var first_load = true,
		$cloned;

	if(first_load)
	{
		$cloned = $('[data-member-info=1]').clone();
		
		$('#team-member-information-wrap').html($cloned);

		placeArrow();

		first_load = false;
	}

	$('.team-member-show').click(function(e) {
		e.preventDefault();

		$('.team-member-photo-overlay').removeClass('team-member-photo-overlay-active');

		var $overlay = $(this).children('.team-member-photo-overlay');

		$overlay.addClass('team-member-photo-overlay-active');

		var member = $(this).attr('data-member-target');

		$('#team-member-information-wrap').slideUp(function() {
			$(this).empty();
			$('[data-member-info='+member+']')
				.clone()
				.appendTo('#team-member-information-wrap');
			placeArrow();
		}).slideDown();
		
	});

});
