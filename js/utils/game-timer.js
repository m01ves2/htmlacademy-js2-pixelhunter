const gameTimer = function (time, callback) {
  this.time = time;
  this.tick = () => {
    if (this.time > 0) {
      this.time--;
    } else {
      return callback();
    }
    return this.time;
  };
};

export default gameTimer;
