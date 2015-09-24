//$(document).ready(function() {
jQuery(function($) {
	var hsup = $('#home-sign-up-prompt');
	var hsur = $('#home-sign-up-row');
	var hfwb = $('#home-free-week-btn');
	
	hfwb.click(function(){
	 console.log('FIRED');
	 hsup.toggleClass('hidden');
	 hsur.toggleClass('hidden');
	});

});