class CanvasText {
  constructor(data = {}) {
    if (!data.overrideDefaults) {
      this.text = data.text || "You didn't enter any text!";
      this.x = data.x || 0;
      this.y = data.y || 0;
      this.fontSize = data.fontSize || "15px";
      this.font = data.font || "Arial, Helvetica, sans-serif";
      this.alignment = data.alignment || "start";
      this.color = data.color || "black";
    } else {
      this.text = data.text;
      this.x = data.x;
      this.y = data.y;
      this.fontSize = data.fontSize;
      this.font = data.font;
      this.alignment = data.alignment;
      this.color = data.color;
    }
    this.maxPixels = data.maxPixels;
  }

  render() {
    render.font = this.fontSize + " " + this.font;
    render.fillStyle = this.color;
    render.textAlign = this.alignment;
    if (this.maxPixels !== undefined) {
      render.fillText(this.text, this.x, this.y);
    } else {
      render.fillText(this.text, this.x, this.y, this.maxPixels);
    }
  }
}
