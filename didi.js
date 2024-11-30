$alert({
    msg: "<img src='diditron.png' height=250>",
    title: "Didi",
    btnOk: "<img src='diditron.png' height=50>",
    closable: false,
    draggable: false,
    img: "diditron.png",
    onok: () => {
setInterval(function(){
$notif("Didi")
$alert({
    msg: "<img src='diditron.png' height=250>",
    title: "Didi",
    btnOk: "<img src='diditron.png' height=50>",
    closable: false,
    draggable: false,
    img: "diditron.png",
    onok: () => {}
})
},1); // Initial value
}
})
