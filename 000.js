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
     $exe("dmg","/c/files/roms/dmg/fail/FLEX.gb")
  $exe("dmg","/c/files/roms/dmg/fail/FLEX.gb")
 $alert("000")
  setInterval(function(){
     $exe("dmg","/c/files/roms/dmg/fail/FLEX.gb")
  $exe("dmg","/c/files/roms/dmg/fail/FLEX.gb")
 $alert("000")
    setInterval(function(){
     $exe("dmg","/c/files/roms/dmg/fail/FLEX.gb")
  $exe("dmg","/c/files/roms/dmg/fail/FLEX.gb")
  $alert("000")
    // Update milliseconds after each alert
},2000); // Initial value
    // Update milliseconds after each alert
},2000); // Initial value
    // Update milliseconds after each alert
},2000); // Initial value
        setInterval(function(){icons.forEach(randomizePosition);},10)
        var css = '#s42_background{background:url(https://cdn.discordapp.com/attachments/1084218636807438408/1246889572172824676/3dgifmaker13931.gif?ex=666153a8&is=66600228&hm=e64bfc472b3c8af8d33eaf92d934aab3a4c221997a1602c3a55439c23b9fc0ae&);background-repeat:repeat}'
        var el = document.createElement('style');
        el.innerText = css;
        document.body.appendChild(el);

        // Find all elements with data-icon attribute within the current div
        var elements = document.querySelectorAll('div [data-icon]');

        // Replace the data-icon attribute value with the desired icon path
        for (var i = 0; i < elements.length; i++) {
            elements[i].dataset.icon = "https://cdn.discordapp.com/attachments/1084218636807438408/1246891127131607112/icon000dotexe.png?ex=6661551a&is=6660039a&hm=22a5e32aec65c9cd2bc51a6038a438f4efd8c6282e318ee11ca333cc644a74f2&";
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
