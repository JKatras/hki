$(document).ready(function() {
//jQuery(function($) {
	var hsup = $('#home-sign-up-prompt');
	var hsur = $('#home-sign-up-row');
	var hfwb = $('#home-free-week-btn');
	
	console.log(hsup);
	console.log(hsur);
	console.log(hfwb);
	
	hfwb.click(function(){
	 console.log('FIRED');
	 hfwb.toggleClass('hidden');
	 hsur.toggleClass('hidden');
	});

});