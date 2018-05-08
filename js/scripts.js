document.onreadystatechange = function () {
  /* From MDN: Using "interactive" because the document has finished loading and the document has been parsed but sub-resources such as images, stylesheets and frames are still loading. */
  if (document.readyState === "interactive") {

    let colors = [
      "#FF1E35", //red
      "#65FF56", //green
      "#0078FF", //blue
      "#FFEE35", //yellow
      "#FF8500", //orange
      "#782C7E", //indigo
      "#FF66FF" //violet
    ];

    for (var i = 0; i < 26; i++) {
      document.getElementsByClassName("letter")[i].style.color =
        colors[Math.floor(Math.random() * 7)];
    }

    // listen for letters pressed on keyboard
    document.addEventListener("keydown", function(pressed) {
      let pressedKey = pressed.keyCode-65;
      document.getElementsByClassName("letter")[pressedKey].style.transform = "scale(1.75)";
      document.addEventListener("keyup", function() {
        document.getElementsByClassName("letter")[pressedKey].style.transform = "initial";
      });
    });
  }
}
