jQuery(document).ready(function($) {
	
	// init variables
	var $header = $("header");

	var $menu = $("#menu").click(function(event) {
		if( $(this).hasClass('burger-closed')) {
			closeHeader(this);
		} else {
			openHeader(this);
		}
	});

	$(".menu-link").click(function(event) {
		closeHeader($menu);
	});

	function openHeader(button) {
		$(button).addClass('burger-closed');
		$header.removeClass('closed');
		$header.addClass('open');
	}

	function closeHeader(button) {
		$(button).removeClass('burger-closed');
		$header.removeClass('open');
		$header.addClass('closed');
	}

});
