'use strict';

var twitterdivContent;

$(document).ready(function() {
	twitterdivContent = $("#tweet").html();
	getTweets();
	
	$("#email").focus(function(event) {
		$(this).css('color', 'white');	
	});

	$("#email").blur(function(event) {
		if (isValidEmail(this.value)) {
			$(this).css('color', 'white');	
		} else {
			$(this).css('color', 'red');	
		}
	});

});

var tweetCount = 0;

function sendEmail() {

	$.post('/contact', {
			name: 'John Smith',
			email: 'JS@GMAIL.COM',
			subject: 'Birthday Paty',
			content: 'Content....'
		}, function() {
			var button = $("#submit");
			console.log("hello");
			button.html("Email Sent");
			button.width(160);
			button.prop('disabled', 'true');
			button.blur();
			button.css('color', '#33b5e5');
			// Disable Button until fields change
	});
}

function getTweets() {
	var twitterdiv = $("#tweet");
	if (twitterdiv.length) {
		twitterdiv.html(twitterdivContent);
		// twitterdiv.css('visibility', 'hidden');
		$.post('/getTweets', { index: tweetCount.toString()} , function(data) {
			twitterdiv.css('visibility', 'visible');
			twitterdiv.html("\"" + data + "\" <br>- @JPHalling");
			tweetCount++;
		});
	}
};

function isValidEmail(email) {
	console.log(email);
	var emailRegex = /[a-zA-Z0-9.+%-]+[@][a-zA-Z0-9.+%-]+[.][A-Za-z]+/
	return email.match(emailRegex);
}

function validateSubject() {
	var subject = $("input[name='subject");
	if (subject.value.length > 180) {
		
	}

}

function clearFields() {
	$(".email-field").attr('value', '');
}
