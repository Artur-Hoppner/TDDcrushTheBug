var fly = {
  x: 255,
  y: 255,
  dx: 5,
  dy: 5,
  draw: function() {
    if (this.state == 0) {
      this.draw.circle(this.x + 10, this.y, 10, 'white', 'black');
      this.draw.circle(this.x - 10, this.y, 10, 'white', 'black');
    } else if (this.state == 1 || this.state == 3) {
      this.draw.circle(this.x - 15, this.y, 15, 7, 'white', 'black');
      this.draw.circle(this.x + 15, this.y, 15, 7, 'white', 'black');
    } else if (this.state == 2) {
      this.draw.line(this.x, this.y, this.x + 21, this.y);
      this.draw.line(this.x, this.y, this.x - 21, this.y);
    } else if (this.state == -1) {
      this.draw.circle(this.x, this.y, 14, 'red');
    }
    this.draw.circle(this.x, this.y, 9, 'black');
  },

  advance: function() {
    if (this.state >= 0) {
      this.state++;
    }
    if (this.state > 3) {
      this.state = 0;
    }
    var r = Math.random();
    if (r < 0.05) {
      this.dy = 5;
    } else if (r < 0.01) {
      this.dy = -5;
    } else if (r < 0.15) {
      this.dx = 5;
    } else if (r < 0.2) {
      this.dx = -5;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.x = Math.min(this.x, 500);
    this.y = Math.min(this.y, 500);
    this.x = Math.max(this.x, 30);
    this.y = Math.max(this.y, 30);
  }
};

function click(x, y) {
  if (x < this.x + 10 && x > this.x - 10) {
    if (y < this.y + 10 && y > this.y - 10) {
      this.state = -1;
      this.dx = 0;
      this.dy = 0;
    }
  }
}

onclick = function(evt) {
  //console.log("click at " +evt.x + ","+evt.y);
  fly.click(evt.x, evt.y);
};

function loop() {
  draw.rectangle(5, 5, 520, 520, 'white', 'purple');
  fly.draw();
  setTimeout(loop, 100);
}
