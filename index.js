//$(document).ready(function() {
jQuery(function($) {
	var hsup = $('#home-sign-up-prompt');
	var hsur = $('#home-sign-up-row');
	var hfwb = $('#home-free-week-btn');
	
//	hfwb.click(function(){
//	 hsup.toggleClass('hidden');
//	 hsur.toggleClass('hidden');
//	});
	hfwb.click(function() {
	 hsup.fadeOut(500, function() {
	 	hsur.fadeIn(500);
	 });
	 return false;
	});
	
});