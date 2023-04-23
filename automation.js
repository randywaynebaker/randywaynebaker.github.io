const sendEmailsButton = document.getElementById('send-emails');

sendEmailsButton.addEventListener('click', () => {
  // Send a request through the webhook
  fetch('https://your-webhook-url.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ action: 'send-emails' })
  })
  .then(response => {
    if (response.ok) {
      alert('Confirmation emails sent successfully!');
    } else {
      alert('Error sending confirmation emails.');
    }
  })
  .catch(error => {
    alert(`An error occurred: ${error}`);
  });
});
