var loadedImages = [];

const addToLoadedImages = function(name) {
  loadedImages.push(new Image());
  loadedImages[loadedImages.length - 1].src = "Images/png/" + name + ".png";
}

addToLoadedImages("dirt");
addToLoadedImages("grass");
addToLoadedImages("button");
