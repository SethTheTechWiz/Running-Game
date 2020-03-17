class CanvasImage {
  constructor(data = {}) {
    if (!data.overrideDefaults) {
      this.image = data.image;
      this.x = data.x || 0;
      this.y = data.y || 0;
      this.width = data.width || this.image.width;
      this.height = data.height || this.image.height;
      this.scale = data.scale || 1;
      this.centerCorrected = data.centerCorrected || false;
    } else {
      this.image = data.image;
      this.x = data.x;
      this.y = data.y;
      this.width = data.width;
      this.height = data.height;
      this.scale = data.scale;
      this.centerCorrected = data.centerCorrected;
    }

    this.image.addEventListener("load", () => {
      if (this.scale) {
        this.width *= this.scale;
        this.height *= this.scale;
      }

      if (this.centerCorrected) {
        this.x -= this.width / 2;
        this.y -= this.height / 2;
      }
    });
  }

  render() {
    render.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  update() {
    if (this.scale) {
      this.width *= this.scale;
      this.height *= this.scale;
    }

    if (this.centerCorrected) {
      this.x -= this.width / 2;
      this.y -= this.height / 2;
    }
  }
}
