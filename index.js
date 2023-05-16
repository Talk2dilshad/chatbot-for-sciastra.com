// HTML markup for the chatbot widget
var chatbotWidget = `
  <div id="chatbot-widget">
    <div id="chatbot-header">
      <h4>Chatbot</h4>
      <button id="chatbot-close-btn">&times;</button>
    </div>
    <div id="chatbot-body">
      <div id="chatbot-messages"></div>
      <input type="text" id="chatbot-input" placeholder="Do you need help? Just type help..." />
      <button id="chatbot-send-btn">Send</button>
    </div>
  </div>
`;

// Chatbot object
var chatbot = {
  // Array to store chatbot responses
  messages: [],

  // Initialize the chatbot
  init: function() {
    // Append the chatbot widget to the body
    document.body.innerHTML += chatbotWidget;

    // Set event listeners for chatbot actions
    var closeBtn = document.getElementById("chatbot-close-btn");
    closeBtn.addEventListener("click", chatbot.closeChatbot);

    var sendBtn = document.getElementById("chatbot-send-btn");
    sendBtn.addEventListener("click", chatbot.processUserInput);

    var inputBox = document.getElementById("chatbot-input");
    inputBox.addEventListener("keypress", function(e) {
      if (e.keyCode === 13) {
        chatbot.processUserInput();
      }
    });
  },

  // Process user input
  processUserInput: function() {
    var inputBox = document.getElementById("chatbot-input");
    var message = inputBox.value;
    chatbot.displayUserMessage(message);
    chatbot.handleUserQuery(message);
    inputBox.value = "";
  },

  // Display user message
  displayUserMessage: function(message) {
    var messagesDiv = document.getElementById("chatbot-messages");
    messagesDiv.innerHTML += `<div class="user-message">${message}</div>`;
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  },

  // Display chatbot message
  displayChatbotMessage: function(message) {
    var messagesDiv = document.getElementById("chatbot-messages");
    messagesDiv.innerHTML += `<div class="chatbot-message">${message}</div>`;
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  },

  // Handle user query and provide appropriate response
  handleUserQuery: function(message) {
    // Check the user's message and provide a response accordingly
    if (message.toLowerCase() === "home") {
      chatbot.redirectToPage("/");
    }
    else if (message.toLowerCase() === "courses") {
      chatbot.redirectToPage("courses");
    } 
    else if (message.toLowerCase() === "selections") {
      chatbot.redirectToPage("selections");
    } 
    else if (message.toLowerCase() === "blogs") {
      chatbot.redirectToPage("blog");
    } 
    else if (message.toLowerCase() === "materials") {
      chatbot.redirectToPage("materials");
    } 
    else if (message.toLowerCase() === "team") {
      chatbot.redirectToPage("team");
    } 
    else if (message.toLowerCase() === "login") {
      chatbot.redirectToPage("app");
    } 
    
    else if (message.toLowerCase() === "contact") {
      chatbot.redirectToPage("contact");
    } else if (message.toLowerCase() === "help") {
      chatbot.displayHelpOptions();
    } else if (message.toLowerCase() === "close") {
      chatbot.closeChatbot();
    } else {
      chatbot.displayChatbotMessage("Sorry, I couldn't understand your query. Please try again.");
    }
  },

  // Display help options
  displayHelpOptions: function() {
    var helpMessage = "You can navigate to the following pages:\n<br>";
    helpMessage += "- Home\n<br>";
    helpMessage += "- blogs\n<br>";
    
    helpMessage += "- courses\n<br>";
    helpMessage += "- materials\n<br>";
    helpMessage += "- team\n<br>";
    helpMessage += "- selections\n<br>";
    helpMessage += "- login\n<br>";
    
    helpMessage += "- Contact\n<br>";
    helpMessage += "To close the chatbot,<br>type 'close'.";
    chatbot.displayChatbotMessage(helpMessage);
  },

  // Redirect to a specific page
  redirectToPage: function(page) {
    chatbot.displayChatbotMessage(`Redirecting you to the ${page} page...`);
    // Replace the following line
    // with the appropriate code based on your website's implementation
    window.location.href = "https://sciastra.com/" + page;
  },

  // Close the chatbot
  closeChatbot: function(){
    var chatbotWidget = document.getElementById("chatbot-widget");
    chatbotWidget.style.display = "none";
    chatbot.init();
  }
};

// Initialize the chatbot when the page loads
window.addEventListener("load", function() {
  chatbot.init();
});
