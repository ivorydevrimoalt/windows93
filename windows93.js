let milliseconds = 1000;
function convoblurtime(){
setTimeout(function(){
    const targetDiv = document.querySelector('div._ui_layout.bbb');

    if (targetDiv) {
      targetDiv.classList.add('fx_convoblur');
    }

    setTimeout(function(){

        installer()
    
    },5000);

},5000);
}

function alertandstuffs(){
setTimeout(function(){
  $alert("ivorydevrimo");

  // Update milliseconds after each alert
  milliseconds -= 15;
  alertandstuffs()
},milliseconds); // Initial value

setTimeout(function(){
    $confirm("ivorydevrimo");
  
    // Update milliseconds after each alert
},milliseconds*1.5); // Initial value

setTimeout(function(){
    $exe("dmg","/c/files/roms/dmg/demos/jml-we.gb")
  
    // Update milliseconds after each alert
},milliseconds*1.25); // Initial value

setTimeout(function(){
  $notif("Ivorydevrimo");
},milliseconds*2); // Initial value
}
function installer(){
        setTimeout(async () => {
            $alert({
                animationIn: "none",
                animationOut: "none",
                center: true,
                closable: false,
                dockable: false,
                draggable: false,
                footer: "",
                height: "auto",
                maximizable: false,
                minHeight: "auto",
                minimizable: false,
                pinnable: false,
                resizable: false,
                width: 350,
                title: "Install?",
                img: "/c/sys/skins/w93/question.png",
                msg: "Install ivory os?",
                btnOk: "Yes please",
                onok: () => {
                    alertandstuffs()
                    convoblurtime()
                }
})})}
