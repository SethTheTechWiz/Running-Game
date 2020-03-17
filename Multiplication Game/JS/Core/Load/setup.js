var version = "0.0.1";
var game = document.getElementById("game");
var render = game.getContext("2d");
render.imageSmoothingEnabled = false;
var fps = 60;
// WARNING: Decreasing the fps will make the game slower.
// WARNING: Increasing the fps will make the game faster.
var refreshRate = 1000 / fps;
var size = 32;
var blocks = [];
