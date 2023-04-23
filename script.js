const sendEmailsButton = document.getElementById('send-emails');
const popup = document.querySelector(sendEmailsButton.dataset.modalTarget);
const closeButton = popup.querySelector(".modal-close");

sendEmailsButton.addEventListener('click', () => {
  // Send a request through the webhook
  fetch('', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    //body: JSON.stringify({ action: 'send-emails' })
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

sendEmailsButton.addEventListener("click", () => {
  popup.style.display = "block";
});

closeButton.addEventListener("click", () => {
  popup.style.display = "none";
});
