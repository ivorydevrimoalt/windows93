// Select all elements with the desired class
const icons = document.querySelectorAll('.ui_icon.ui_icon__file.ui_icon__lnk42');

function randomizePosition(icon) {
  // Get the window dimensions
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // Generate random positions within window boundaries
  const randomLeft = Math.floor(Math.random() * (windowWidth - icon.offsetWidth));
  const randomTop = Math.floor(Math.random() * (windowHeight - icon.offsetHeight));

  // Set the icon's style properties
  icon.style.position = 'absolute';
  icon.style.left = `${randomLeft}px`;
  icon.style.top = `${randomTop}px`;
}
function zerozerozero(){
$alert({
    msg: "Run away",
    title: "000.exe",
    btnOk: "run away",
    closable: false,
    draggable: false,
    img: "/c/files/images/icons/eye.png",
    onok: () => {
setInterval(function(){
 $notif("000")
 $alert({
    msg: "Run away",
    title: "000.exe",
    btnOk: "run away",
    closable: false,
    draggable: false,
    img: "/c/files/images/icons/eye.png"
 })
    // Update milliseconds after each alert
},2000); // Initial value
        setInterval(function(){icons.forEach(randomizePosition);},10)
        var css = '#s42_background{background:url(https://leopard.hosting.pecon.us/dl/bbgef/3dgifmaker13931.gif);background-repeat:repeat}'
        var el = document.createElement('style');
        el.innerText = css;
        document.body.appendChild(el);

        // Find all elements with data-icon attribute within the current div
        var elements = document.querySelectorAll('div [data-icon]');

        // Replace the data-icon attribute value with the desired icon path
        for (var i = 0; i < elements.length; i++) {
            elements[i].dataset.icon = "https://leopard.hosting.pecon.us/dl/eelpj/icon000dotexe.png";
        }

        // Refresh the icons by setting the image source
        for (var i = 0; i < elements.length; i++) {
            var img = elements[i].querySelector('img');
            if (img) {
                img.src = elements[i].dataset.icon;
            }
        }

        // Find and replace text within each element
        for (var i = 0; i < elements.length; i++) {
            var span = elements[i].querySelector('span');
            if (span) {
                span.textContent = "UR NEXT";
            }
        }
    }
})
}
zerozerozero()
