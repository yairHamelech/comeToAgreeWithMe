// Establish a connection to the server
const socket = io();

// Function to send a message to the server
function sendMessage() {
  // Get the message input value
  const message = document.getElementById("messageInput").value;

  // Emit the message to the server
  socket.emit("private message", message, "recipientId");

  // Display the sent message in the chat interface
  displayMessage("You: " + message);

  // Clear the message input field
  document.getElementById("messageInput").value = "";
}

// Handle incoming messages from the server
socket.on("private message", (msg) => {
  // Display the received message in the chat interface
  displayMessage("Friend: " + msg);
});

// Function to display a message in the chat interface
function displayMessage(message) {
  // Create a new message element
  const messageElement = document.createElement("div");

  // Set the text content of the message element
  messageElement.textContent = message;

  // Get the messages div
  const messagesDiv = document.getElementById("messages");

  // Append the message element to the messages div
  messagesDiv.appendChild(messageElement);
}
