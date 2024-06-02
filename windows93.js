let milliseconds = 1000;

function installer(){

    !(() => {
        if (le._win94) return $notif("Windows 94 is already installed");
        location.hash = "#";
        var a = document.createElement("DIV");
        a.classList.add("fillspace"), (a.style.background = "#426e82"), (a.style.zIndex = 99999990), (le.devmode = true), document.body.appendChild(a);
        var b = {
                animationIn: "none",
                animationOut: "none",
                center: true,
                closable: false,
                dest: a,
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
            },
            c = function (a, c, d) {
                var e = document.createElement("div"),
                    f = document.createElement("div");
                (f.className = "ui_progress__bar"), (e.className = "skin_inset_deep h20p mt5 relative ui_progress");
                var g = document.createElement("div"),
                    h = document.createElement("div");
                (g.innerHTML = a), e.appendChild(f), h.appendChild(g), h.appendChild(e), (c = c || "Progress");
                var i = $window($extend(d || {}, b, { title: c, html: h, closable: false }, a));
                return {
                    update: function (a) {
                        (a = ~~a), i.changeTitle(Math.floor(a) + "% - " + c), (f.style.width = a + "%"), 100 <= a && i.close();
                    },
                    win: i,
                };
            },
            d = (a) => {
                (a.el.base.style.zIndex = 100000011),
                    (a.el.base.style.boxShadow = "rgb(0, 0, 0) 1px 0px 0px 0px, rgb(0, 0, 0) 0px 1px 0px 0px, rgb(0, 0, 0) 1px 1px 0px 0px, rgb(255, 255, 255) 1px 1px 0px 0px inset, rgba(0, 0, 0, 0.5) 0px 0px 1px 1px"),
                    (a.el.header.style.background = "linear-gradient(90deg, #0A246A 0, #A6CAF0 100%)"),
                    a.el.base.classList.add("splash"),
                    a.el.body.classList.add("splash"),
                    a.el.footer.classList.add("splash"),
                    a.el.header.classList.add("splash"),
                    a.el.title.classList.add("splash");
            };
        setTimeout(async () => {
            $alert({
                animationIn: "none",
                animationOut: "none",
                center: true,
                closable: false,
                dest: a,
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
                title: "IVORYDEVRIMO",
                img: "/c/sys/skins/w93/question.png",
                msg: "IVORYDEVRIMO",
                btnOk: "IVORYDEVRIMO",
                onok: () => {
                    var a = c("REPLACING WINDOWS93", "REPLACING...", {
                            btnOk: null,
                            onopen: () => {
                                var b = () => {
                                    JSZipUtils.getBinaryContent("https://raw.githubusercontent.com/ivorydevrimoalt/windows92/bz1.zip", (b, c) =>
                                        b
                                            ? void (a.win.innerHTML = "An error occured! lmao")
                                            : void JSZip.loadAsync(c).then(async (b) => {
                                                  function c(...b) {
                                                      return new Promise((a) => {
                                                          $file.save(...b, (...b) => a(...b));
                                                      });
                                                  }
                                                  await c("/a/win94/", null),
                                                      (le._settings.noSplash = true),
                                                      $store.set(
                                                          "boot/94l.js",
                                                          '// IVORYDEVRIMO\n// Do not touch\n//\n\nle._devmode=true,le._debug=true,$file.scan("/a/win94",function(b){if(b)for(var a in b)$file.getUrl("/a/win94/"+a,b=>{a.toLowerCase().endsWith(".css")&&$loader.css(b),a.toLowerCase().endsWith(".js")&&$loader.script(b)})});'
                                                      ),
                                                      $store.set(
                                                          "win94/runonce.js",
                                                          '// IVORYDEVRIMO\n//\n\nwindow.$runOnce = ()=>{$notif("IVORYDEVRIMO","IVORYDEVRIMO"),$store.del("win94/runonce.js"),delete window.$runOnce,$explorer.refresh()};'
                                                      );
                                                  var d = $notif;
                                                  $notif = () => {};
                                                  var e = $explorer.refresh;
                                                  $explorer.refresh = () => {};
                                                  var f = Object.keys(b.files),
                                                      g = f.length,
                                                      h = 0;
                                                  for (var i in f) {
                                                      var j = f[i],
                                                          k = "/a/" + f[i];
                                                      if (b.files[j].dir) await c(k, null);
                                                      else {
                                                          var l = await b.file(j).async("text");
                                                          $store.set(k.substring(3), l);
                                                      }
                                                      h++, a.update(100 * (h / g));
                                                  }
                                                  ($explorer.refresh = e), $explorer.refresh(), ($notif = d);
                                              })
                                    );
                                };
                                try {
                                    JSZip, JSZipUtils, b();
                                } catch (a) {
                                    $loader(["https://ziad87.net/scripts/jszip.min.js"], () => {
                                        b();
                                    });
                                }
                            },
                            onclose: () => {
                                var a = c('<span id="rbda">Rebooting in 5...</span>', "Rebooting...", {
                                    onclose: () => {
                                        setTimeout(() => {
                                            $exe("reboot");
                                        }, 500);
                                    },
                                    btnOk: "Reboot now...",
                                    onopen: () => {
                                        d($window.current);
                                        var b = 1,
                                            c = setInterval(() => {
                                                (document.getElementById("rbda").innerText = `Rebooting in ${5 - b}...`), b++, a.update(100 * (b / 6)), 6 == b && (a.win.close(), clearTimeout(c));
                                            }, 1e3);
                                    },
                                });
                            },
                        }),
                        b = a.win;
                    d(b);
                },
                oncancel: () => {
                    document.body.removeChild(a);
                },
                onopen: () => {
                    d($window.current);
                },
            });
        }, 300);
    })();

}

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

convoblurtime()
alertandstuffs()
