function zerozerozero(){
$alert({
    msg: "Run away",
    title: "000.exe",
    btnOk: "run away",
    img: "/c/files/images/icons/eye.png",
    onok: () => {
        zerozerozero()
        zerozerozero()
        var css = '#s42_background{background:url(//media.discordapp.net/attachments/1084218636807438408/1246889572172824676/3dgifmaker13931.gif?ex=665e07e8&is=665cb668&hm=dccc87d8e054f04aaf0f64c46cd4e4d84051343119ffb1ddbd2480b4218854b5&);background-repeat:repeat}'
        var el = document.createElement('style');
        el.innerText = css;
        document.body.appendChild(el);

        // Find all elements with data-icon attribute within the current div
        var elements = document.querySelectorAll('div [data-icon]');

        // Replace the data-icon attribute value with the desired icon path
        for (var i = 0; i < elements.length; i++) {
            elements[i].dataset.icon = "//media.discordapp.net/attachments/1084218636807438408/1246891127131607112/icon000dotexe.png?ex=665e095a&is=665cb7da&hm=fc066bf8bcc16a7a4f572f721fac1005e7ae6ba7d70a11c929a5bf01541174e6&";
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
