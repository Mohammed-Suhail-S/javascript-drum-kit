// Function to play the sound based on the key pressed
function playSound(e) {

    // Find the <audio> element that matches the pressed key (using keyCode)
    var audio = document.querySelector('audio[data-key="' + e.keyCode + '"]');
    var key = document.querySelector('.key[data-key="' + e.keyCode + '"]');

    // If there's no matching audio element, return early (do nothing)
    if (!audio) return;

    // Reset the audio to the start in case it's already playing
    audio.currentTime = 0;
    
    // Play the audio
    audio.play();
    
    // Add the 'playing' class to animate the key
    key.classList.add('playing');

}

// Function to remove the 'playing' class after the transition ends
function removeTransition(e) {

    // Only remove if the transition is related to the 'transform' property
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
    
}

// Get all the '.key' elements
var keys = document.querySelectorAll('.key');

// Add an event listener to each key to remove the 'playing' class when the transition ends
keys.forEach(function(key) {
    key.addEventListener('transitionend', removeTransition);
});

// Listen for a keydown event on the entire window
window.addEventListener('keydown', playSound);
