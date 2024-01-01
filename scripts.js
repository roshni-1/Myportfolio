// scripts.js

// Toggle Chatbox
function toggleChatbox() {
    var chatbox = document.getElementById('chatbox');
    chatbox.style.display = chatbox.style.display === 'none' ? 'flex' : 'none';

    // Scroll to the bottom of the chatbox when it's opened
    if (chatbox.style.display !== 'none') {
        var chatMessages = document.getElementById('chat-messages');
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

// Send Message in Chatbox
function sendMessage() {
    var userInput = document.getElementById('user-input').value;
    var chatMessages = document.getElementById('chat-messages');

    // Display user message
    chatMessages.innerHTML += `<div class="user-message">User: ${userInput}</div>`;

    // Simulate a simple chatbot response
    setTimeout(function() {
        chatMessages.innerHTML += `<div class="chatbot-message">Chatbot: Thanks for your message!</div>`;
        // Scroll to the bottom of the chatbox after receiving a message
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 500);

    // Clear user input
    document.getElementById('user-input').value = '';
}
