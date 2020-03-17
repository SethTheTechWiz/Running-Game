class CanvasRectangle {
  constructor(data = {}) {
    if (!data.overrideDefaults) {
      this.x = data.x || 0;
      this.y = data.y || 0;
      this.width = data.width || size;
      this.height = data.height || size;
      this.color = data.color || "black";
    } else {
      this.x = data.x;
      this.y = data.y;
      this.width = data.width;
      this.height = data.height;
      this.color = data.color;
    }
  }

  render() {
    render.fillStyle = this.color;
    render.fillRect(this.x, this.y, this.width, this.height);
  }
}
