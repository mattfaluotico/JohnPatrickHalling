'use strict';

var twitterdivContent;

$(document).ready(function() {
	twitterdivContent = $("#tweet").html();
	// getTweets();		
});

var tweetCount = 0;

function sendEmail() {
	$.post('/contact', {
			name: 'John Smith',
			email: 'JS@GMAIL.COM',
			subject: 'Birthday Paty',
			content: 'Content....'
		}, function() {
			console.log("Email Sent");
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
			twitterdiv.html(data);
			tweetCount++;
		});
	}
};

function validateEmailForm() {
	var email = $("input[name='email'");
}

function validateSubject() {
	var subject = $("input[name='subject");
	if (subject.value.length > 180) {
		
	}

}

function clearFields() {
	$(".email-field").attr('value', '');
}
