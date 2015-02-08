jQuery(document).ready(function($) {
	
	adjustDisplay();

	// init variables
	var $header = $("header");

	var $button= $("#send").click(function(event) {
		sendEmail();
	});

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


	function adjustDisplay() { 
		if (window.innerWidth < 500) {
			$("#title").html("JPH");
		} 
	}

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

function sendEmail() {
	alert("sent");
}