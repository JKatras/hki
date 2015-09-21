$(document).ready(function() {
	var $hsup = document.getElementById('#home-sign-up-prompt');
	var $hsur = document.getElementById('#home-sign-up-row');
	var $hfwb = document.getElementById('#home-free-week-btn a');
	
	function toggleDisplay() {
		$hfwb.click(function(){
		 $hfwb.toggleClass('hidden');
		 $hsur.toggleClass('hidden');
		});
	}
	
	toggleDisplay();
});