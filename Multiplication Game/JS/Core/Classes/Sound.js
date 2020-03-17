class Sound {
  constructor(data) {
    this.sound = document.createElement("audio");
    this.sound.src = data.src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.loop = data.loop || false;
    this.playing = false;

    if (this.loop) {
      this.sound.loop = true;
    }
  }

  play() {
    this.sound.play();
    this.playing = true;
  }

  pause() {
    this.sound.pause();
    this.playing = false;
  }

  update() {
    this.sound.loop = this.loop;
  }

  getPlaybackTime() {
    return this.sound.currentTime;
  }
}
