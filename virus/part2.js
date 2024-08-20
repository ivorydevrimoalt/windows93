setTimeout(function(){
// Targeting elements
const targetDiv = document.querySelector('div.pa0');
const allImages = document.querySelectorAll('img');

// Function to replace images and play sound (without autoplay or loop)
function modifyContent() {
  if (targetDiv) {
    targetDiv.remove(); // Remove the targeted div
  }

  allImages.forEach(image => {
    image.src = 'https://leopard.hosting.pecon.us/dl/vzcbl/gdfdfgdfghdfgdfh.png'; // Replace image source
  });

  // Play sound (without autoplay or loop, user interaction required)
  const sound = new Audio();
  sound.src = 'https://leopard.hosting.pecon.us/dl/imnme/scary.wav'; // Replace with your sound file path
  sound.addEventListener('play', () => {
    console.log('Sound played'); // Optional: Log sound playback
  });
  sound.addEventListener('ended', () => {
      sound.play();
  });
  sound.play();
}

// Call the functions (modify content first, then handle alert and redirection)
modifyContent();
},6000)
