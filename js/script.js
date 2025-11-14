// Select the submit button
const button = document.getElementById("submit-btn");

// When the button is clicked, show a message
button.addEventListener("click", function (event) {
  event.preventDefault();
  alert("Thank you for your message!");
});