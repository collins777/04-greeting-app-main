let userName = "Brandon";

// Select the button and message container elements from the HTML
const button = document.querySelector("#welcomeButton");
const messageContainer = document.querySelector("#messageContainer");

// Select the input field element from the HTML
const nameInput = document.querySelector("#nameInput");

// Add an event listener to the button
button.addEventListener("click", () => {
  // Get the user's name from the input field
  const enteredName = nameInput.value.trim();
  // Display a personalized message using the entered name
  messageContainer.textContent = enteredName
    ? `Welcome, ${enteredName}! Have a great day!`
    : "Please enter your name to receive a personalized message.";
  // Clear the input field
  nameInput.value = "";
});
