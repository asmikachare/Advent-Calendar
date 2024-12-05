// Get the URL parameters from the current page's query string
const params = new URLSearchParams(window.location.search);
const friend = params.get('friend'); // Extract the 'friend' parameter for personalization

// Ensure the envelope element is present in the DOM
const envelope = document.querySelector('.envelope');
if (envelope) {
    // Automatically flip the envelope after 1 second to add a cool effect
    setTimeout(() => {
        envelope.classList.add('flip'); // Apply the flip animation class
    }, 1000);

    // Add a click event listener to the envelope
    envelope.addEventListener('click', () => {
        // Add a tap-expand animation to make the interaction more dynamic
        envelope.classList.add('tap-expand');

        // After the animation finishes, redirect to the personalized calendar
        setTimeout(() => {
            if (friend) {
                // Redirect to the specific friend's calendar if the 'friend' parameter exists
                window.location.href = `calendar.html?friend=${friend}`;
            } else {
                // If the 'friend' parameter is missing, redirect to a default calendar page
                window.location.href = 'calendar.html';
            }
        }, 1000); // Match this with the duration of the tap-expand animation
    });
} else {
    // Log an error if the envelope element is not found
    console.error("Envelope element not found!");
}
