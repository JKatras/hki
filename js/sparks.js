jQuery(function($) {

	// Screen Width
	var screenWidth = $( window ).width();

	/**
	 * Functions to call when window width changes
	 */
	$(window).on("resize", function() {
		// Update width
		oldWidth = screenWidth;
		screenWidth = $( window ).width();

		$('#home-top-video-wrap video').height($('#home-top-row').height());
		$('#home-top-video-wrap video').width($('#home-top-row').width());

		if( screenWidth > oldWidth ) {

		}

		if( screenWidth < 601 ) {
			mobileFunctions();
		} else {
			revertMobile();
		}

		bonusCircle();
		loopImg();
		setSlideHeight();
		video169();
		//placeVideo();

		// Fix fonts
		// causeRepaintsOn = $("h1, h2, h3, p, div, input");
		// causeRepaintsOn.css("z-index", 1);
	});

	/**
	 * Mobile Functions
	 */
	function mobileFunctions() {

	}

	/**
	 * Functions to call to revert mobile stuff
	 */
	function revertMobile() {

	}


	function video169() {
		var $video = $('#home-story-video iframe, #meal-planner-video-wrap iframe');
		$video.height( $video.width() * 9/16 );
	}

	function videoList169() {
		var $video = $('.video-wrap iframe');
		$video.height( $video.width() * 9/16 );
	}

	/**
	 * Call on Load
	 */
	// setFeaturedImg();

	if( screenWidth < 601 ) {
		
	} else {
		
	}

	video169();
	videoList169();

	$('#header-menu-close-btn').click(function(e) {
		e.preventDefault();

		var $icon = $('#header-menu-close-btn i'),
			$header = $('header');

		if($icon.hasClass('fa-bars')) {
			$icon.removeClass('fa-bars');
			$icon.addClass('fa-times');
		} else {
			$icon.removeClass('fa-times');
			$icon.addClass('fa-bars');
		}

		if($header.hasClass('active')) {
			
			if( $('.container-fluid').offset().top < 0 ) {
				$('#header-menu-close-btn').addClass("scrolling");				
			}

			$header.removeClass('active');
			$('html, body').css('overflow', 'scroll');
		} else {
			$('#header-menu-close-btn').removeClass("scrolling");
			$header.addClass('active');
			$('html, body').css('overflow', 'hidden');
		}

		$('#header-nav').fadeToggle();

	});

	$('html, body').on("scroll", function() {

		var $btn = $( '#header-menu-close-btn' );
	
		if( $('.container-fluid').offset().top < 0 ) {
			if(!$('header').hasClass('active')) {
				$btn.addClass("scrolling");
			}
		} else {
			$btn.removeClass("scrolling");
		}
	});

	if( $('.container-fluid').offset().top < 0 ) {
		$('#header-menu-close-btn').addClass("scrolling");
	}

	$('#home-testimonials-slider').flexslider({
		animation: "slide",
		animationLoop: true,
		controlNav: false,
		directionNav: true,
		slideshow: false
	});

	$('#home-blog-slider').flexslider({
		animation: "slide",
		animationLoop: true,
		controlNav: false,
		directionNav: true,
		slideshow: false
	});

	function placeVideo() {
		if(screenWidth > 1080) {
			
			$('#home-top-row').css('background', 'none');

			$('#home-top-row').videoBG({
				mp4:'/wp-content/themes/healthy_kids/video/loop.mp4',
				webm:'/wp-content/themes/healthy_kids/video/loop.webm',
				poster:'',
				scale:true,
				zIndex:0
			});
			
		}
	}

	function bonusCircle() {
		$('.bonus').each(function() {
			var w = $(this).width();

			$(this).height(w);
		});
	}

	function loopImg() {
		$('.blog-post-loop-img img, .home-blog-wrap img').each(function() {
			var w = $(this).width();

			$(this).attr('style', '').attr('class', '').height(w);
		});
	}

	function setSlideHeight() {
		var h = $('#home-testimonials-slider .flex-active-slide').height(),
			pt = parseInt($('#home-testimonials').css('padding-top')),
			pb = parseInt($('#home-testimonials').css('padding-bottom'));

		$('home-testimonials-slider .slides, #home-testimonials').animate({
			'height': h+pt+pb
		});
	}

	$('#home-testimonials-slider .flex-next, #home-testimonials-slider .flex-prev').click(function(e) {
		e.preventDefault();

		setSlideHeight();
	});

	// $('.faq-question').click(function() {
	// 	var target = $(this).attr('data-faq-target');

	// 	$('div[data-faq-answer="'+target+'"]').slideToggle();
	// });

	$('.faqschool-question').click(function() {
		var target = $(this).attr('data-faqschool-target');

		$('div[data-faqschool-answer="'+target+'"]').slideToggle();
	 });
	
	$('.faqpto-question').click(function() {
	 	var target = $(this).attr('data-faqpto-target');

		$('div[data-faqpto-answer="'+target+'"]').slideToggle();
	 });
	
	placeVideo();	
	bonusCircle();
	setTimeout(loopImg, 500);
	//loopImg();

});