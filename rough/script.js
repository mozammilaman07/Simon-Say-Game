const popup = document.getElementById('popup');
const closeButton = document.getElementById('close-popup');

// Function to show the pop-up
function showPopup() {
    popup.style.display = 'block';
}

// Function to hide the pop-up
function hidePopup() {
    popup.style.display = 'none';
}

// Show the pop-up on page load
showPopup();

// Hide the pop-up when the close button is clicked
closeButton.addEventListener('click', hidePopup);