// Make the sky gradient
var skyGradient = render.createLinearGradient(0, game.height - size, 0, 0);
skyGradient.addColorStop(0, "#4d4dff");
skyGradient.addColorStop(0.6, "skyblue");
skyGradient.addColorStop(1, "white");

// Initalize the variables
var sky = new CanvasRectangle({
  x: 0,
  y: 0,
  width: game.width,
  height: game.height,
  color: skyGradient
});;

var sun = new CanvasRectangle({
  x: game.width - (size * 3),
  y: size,
  width: size / 2,
  height: size / 2,
  color: "yellow"
});

var playButton = new CanvasImage({
  image: loadedImages[2],
  x: game.width / 2,
  y: game.height / 2,
  scale: 2
});

var playText = new CanvasText({
  text: "Play",
  color: "white",
  x: game.width / 2,
  y: game.height / 2,
  fontSize: "25px",
  alignment: "center"
});

var versionText = new CanvasText({
  text: "v" + version,
  x: game.width,
  y: game.height - 2,
  fontSize: "15px",
  font: "Arial, Helvetica, sans-serif",
  color: "white",
  alignment: "end"
});

var startMenuMusic = new Sound({
  src: "Music/wav/startMenuMusic.wav",
  loop: true
});

const startMenuInit = function() {
  // Grass
  for (var i = 0; i < 11; i++) {
    blocks.push(new CanvasImage({
      image: loadedImages[1],
      x: i * size,
      y: game.height - size
    }));
  }

  // Music
  startMenuMusic.play();
}

const startMenu = function() {
  clearCanvas();
  // Sky
  sky.render();

  // Sun
  shadowBlur(20, "yellow");
  sun.render();
  shadowBlur(0);

  // Blocks
  // Move the blocks endlessly
  for (var i = 0; i < blocks.length; i++) {
    blocks[i].x -= 1;

    if ((blocks.map((element) => { return element.x }).every((element) => { return element % 32 === 0 }))) {
      blocks.map((element) => { element.x += 31; return element; });
    }
  }

  // Render the blocks
  for (var i = 0; i < blocks.length; i++) {
    blocks[i].render();
  }

  // Play button
  // playButton.render();
  // playText.render();

  // Version Text
  versionText.render();
}
