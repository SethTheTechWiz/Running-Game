var repeat;

const playGame = function() {
  // Remove the playButton from the body of the document
  document.body.removeChild(document.getElementById("playButton"));

  // Make the game visible
  document.getElementById("game").style.display = "block";

  // Initalize the startMenu
  startMenuInit();

  repeat = setInterval(startMenu, refreshRate);
}
