setInterval(function(){
$notif("Didi")
$alert({
    msg: "<img src='https://onakro.com.tr/wp-content/uploads/2022/06/didi-limon.jpg' height=250>",
    title: "Didi",
    btnOk: "<img src='https://onakro.com.tr/wp-content/uploads/2022/06/didi-limon.jpg' height=50>",
    closable: false,
    draggable: false,
    img: "https://onakro.com.tr/wp-content/uploads/2022/06/didi-limon.jpg",
    onok: () => {}
})
},20); // Initial value
