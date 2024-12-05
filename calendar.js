const calendar = document.querySelector('.calendar');
const messageCard = document.getElementById('messageCard');
const messageText = document.getElementById('messageText');

// Add an image container to the message card for photos
const imageContainer = document.createElement('img');
imageContainer.style.maxWidth = '100%'; // Responsive width
imageContainer.style.borderRadius = '10px'; // Rounded corners
imageContainer.style.marginTop = '10px'; // Space between text and image
messageCard.appendChild(imageContainer);

// Add a sub-message container for messages under images
const subMessage = document.createElement('p');
subMessage.style.marginTop = '10px'; // Space above the sub-message
subMessage.style.fontFamily = "'Times New Roman', serif"; // Ensure consistent font
subMessage.style.fontSize = "1.2rem"; // Match font size with others
subMessage.style.color = "#fff"; // Match the card text color
subMessage.style.textAlign = "center"; // Center-align the text
subMessage.style.margin = "0"; // Remove default margins
messageCard.appendChild(subMessage);

// Define personalized messages and photos for each day and each friend
const friendMessages = {
    friend1: [
        "message 1",
        "message 2",
        "message 3",
        {image: "images/img.jpg",
          subMessage: "you can also add images:)."
        },
        "message 4"
        // the rest of the messages
      ],
    
      friend2: [
        //messages
      ],
    
      friend3: [
        //messages
      ]
    
      //can add more friends!
};

// Get the friend's name from the URL
const params = new URLSearchParams(window.location.search);
const friend = params.get('friend');
const messages = friendMessages[friend] || Array(25).fill("Happy Holidays! 🎄");

// Generate 25 days (1 to 25)
for (let i = 1; i <= 25; i++) {
  const dayBox = document.createElement('div');
  dayBox.textContent = i;
  dayBox.classList.add('day-box');

  // Special styling for Day 25
  if (i === 25) {
    dayBox.classList.add('special-box');
  }

  dayBox.addEventListener('click', function () {
    // Hide the current message card if it's open
    if (messageCard.classList.contains('show')) {
      messageCard.classList.remove('show');
    }

    // Display either text, image, or image with sub-message
    const dayContent = messages[i - 1];
    if (typeof dayContent === "object" && dayContent.image) {
      // If it's an image
      messageText.textContent = ""; // Clear the message text
      imageContainer.src = dayContent.image; // Set the image source
      imageContainer.style.display = "block"; // Show the image
      subMessage.textContent = dayContent.subMessage || ""; // Set the sub-message if available
      subMessage.style.display = dayContent.subMessage ? "block" : "none"; // Show or hide sub-message
    } else {
      // If it's a text message
      messageText.textContent = dayContent; // Display the message
      imageContainer.style.display = "none"; // Hide the image
      subMessage.style.display = "none"; // Hide the sub-message
    }

    // Show the message card
    messageCard.classList.add('show');
  });

  calendar.appendChild(dayBox); // Add to the calendar
}

// Hide the message card when clicked
messageCard.addEventListener('click', function () {
  messageCard.classList.remove('show');
});
