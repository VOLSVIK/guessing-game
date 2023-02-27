class GuessingGame {
    constructor(number) {
        this.number = number;
        this.min = null;
        this.max = null;
        this.res = null;
        this.maxEdit = null;
        this.minEdit = null;
    }

    setRange(min, max) {
      this.minEdit = min
      this.maxEdit = max
    }

    guess() {
        this.res = Math.round((this.maxEdit - this.minEdit) / 2 + this.minEdit)
        console.log(this.res)
        return this.res
    }

    lower(result) {
      this.maxEdit = this.res
      }

      greater(result) {
        this.minEdit = this.res
      }
}

module.exports = GuessingGame;
