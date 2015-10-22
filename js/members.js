function load(){
	var blog = document.getElementById('blog');
	
	if (window.innerWidth <= 991px) {
		blog.addClass('no-display');
	}else {
		blog.removeClass('no-display');
	}
}

window.onload = load;