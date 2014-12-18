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
