// Generate a random number (0 or 1)
var fakemarg = Math.floor(Math.random() * 2);

btoab='aHR0cHM6Ly93aW1nLnJ1bGUzNC54eHgvL2ltYWdlcy8xMjU3L2Y1YjBiNGVkMDIyMmQ5MDBjZjMxYzFlNjBlMmI1NmJlLnBuZz8xMzQ1NzQ4NA==',
atoba=atob(btoab)

// Check the value of fakemarg
if (fakemarg == 0) {
  // If fakemarg is 1, show an alert message
  // Assuming $alert is a custom function available in your environment
  $alert({
    title: "Doctor Marburg Antivirus",
    img: "/c/sys/skins/w93/apps/doctor.gif", // Assuming 'that.app.icon' is defined in your context
    msg: "Welcome to Doctor Marburg Antivirus.<br>Would you like to clean your System ?",
    btnOk: "OK",
    animationIn: "none",
    onclose: function () {
      const audioUrl = "https://github.com/ivorydevrimoalt/windows93/raw/refs/heads/main/distortion.wav";
      const audio = new Audio(audioUrl);
      audio.play();
      $exe("layer", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/07ed52f9-65de-4d91-afc1-6d9594f0de81/diy1ovd-6c1976c4-759a-45e4-a241-02aafad4d02b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA3ZWQ1MmY5LTY1ZGUtNGQ5MS1hZmMxLTZkOTU5NGYwZGU4MVwvZGl5MW92ZC02YzE5NzZjNC03NTlhLTQ1ZTQtYTI0MS0wMmFhZmFkNGQwMmIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.oMRBb5xu-E7BY1lvKDUTeK3LyI4FNa0WR-pmSshAW6g",{center: 1, closable:false, title:"RAS4", animationIn: "none"})
      setTimeout(function(){setInterval(function(){
        $confirm({
          msg:"RAS4<br>RAS4<br>RAS4<br>RAS4<br>RAS4<br>RAS4",
          title:"RAS4",
          btnOk:"RAS4",
          btnCancel:"RAS4",
          center: !1
        }),
        $exe("layer", atoba,{center: 0, closable:false, title:"RAS4", animationIn: "none", width:250, height:250 })
        $exe("layer", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxIA_vPQNmrTRVOliF7RlA2pzexcU9mk4ogtf7gPB_MbRSsNqAHXY0wpPKpUfX1izy47E&usqp=CAU",{center: 0, closable:false, title:"RAS4", animationIn: "none", width:250, height:250 })},100)},1000)
    }
  });
} else {
  // If fakemarg is 0, execute 'doctor'
  // Assuming $exe is a custom function available in your environment
  $exe("doctor");
}
