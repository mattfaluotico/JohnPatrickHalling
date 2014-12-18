'use strict';

$(document).ready(function() {
	getTweets();		
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
	$.post('/getTweets', { index: tweetCount.toString()} , function(data) {
		$("#tweet").html(data);
		tweetCount++;
	});
}

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
