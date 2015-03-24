jQuery(document).ready(function($) {
	
	adjustDisplay();

	// init variables
	var $header = $("header");

	var $button= $("#send").click(function(event) {
		event.preventDefault();
		if (canSendEmail()) {
			sendEmail();
		} else {
			inputError();
		}
	});

	$("#email").focus(function(event) {
		$(this).removeClass('error');
	}).blur(function(event) {
		if (!canSendEmail()) {
			inputError();
		}
	});;



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

function canSendEmail() {
	var email = $("#email").val();
	var emailRegex = /[a-zA-Z0-9.+%-]+[@][a-zA-Z0-9.+%-]+[.][A-Za-z]+/
	return email.match(emailRegex);

}

function inputError() {
	$("#email").addClass('error');
}

function sendEmail() {
	$.post('/contact', 
	{
		email: $("#email").val(),
		subject: $("#subject").val(),
		phone: $("#number").val(),
		content: $("#message").val()
	}, function(data) {
		alert("John will get back to you soon!")
		
	});
}