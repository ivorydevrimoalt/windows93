$alert({
    msg: "<img src='https://raw.githubusercontent.com/ivorydevrimoalt/windows93/refs/heads/main/diditron.png' height=150>",
    title: "Didi",
    btnOk: "<img src='https://raw.githubusercontent.com/ivorydevrimoalt/windows93/refs/heads/main/diditron.png' height=50>",
    closable: false,
    draggable: false,
    img: "https://raw.githubusercontent.com/ivorydevrimoalt/windows93/refs/heads/main/diditron.png",
    onok: () => {
setInterval(function(){
$notif("Didi")
$alert({
    msg: "<img src='https://raw.githubusercontent.com/ivorydevrimoalt/windows93/refs/heads/main/diditron.png' height="+ (Math.random() * 250) +">",
    title: "Didi",
    btnOk: "<img src='https://raw.githubusercontent.com/ivorydevrimoalt/windows93/refs/heads/main/diditron.png' height="+ (Math.random() * 250) +">",
    closable: false,
    draggable: false,
    img: "https://raw.githubusercontent.com/ivorydevrimoalt/windows93/refs/heads/main/diditron.png",
    onok: () => {}
})
},1); // Initial value
}
})
