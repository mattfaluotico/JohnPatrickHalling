var $header;

jQuery(document).ready(function($) {
	
	// init variables
	$header = $("header");

	$(".title").click(function(event) {
		if ($header.hasClass('open')) {
			closeHeader();
		} else {
			openHeader();
		}
	});

		function openHeader() {
			$header.removeClass('closed');
			$header.addClass('open');
		}

		function closeHeader() {
			$header.removeClass('open');
			$header.addClass('closed');
		}

});




