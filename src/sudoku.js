export function Sudoku() {
  this.MAX_ROWS = 9;
  this.masterArray = [];
  this.buildKey();
}

Sudoku.prototype.buildKey = function() {
  var initialArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  this.masterArray.push(initialArray);
  var newArray = initialArray.map(x => x);
  for(var i = 1; i < this.MAX_ROWS; i++) {
    var firstItem = newArray.shift();
    newArray.push(firstItem);
    var newerArray = newArray.map(x => x);
    this.masterArray.push(newerArray);
  }
};

Sudoku.prototype.checkRows = function() {
  var check = true;
  for(x = 0; x < this.masterArray.length; x++) {
    if (check === true) {
      for(y = 0; y < this.masterArray.length; y++) {
        if (x !== y) {
          for(z = 0; z <this.masterArray[x].length; z++) {
            if (this.masterArray[x][z] == this.masterArray[y][z]) {
              check = false;
            }
          }
        }
      }
    } else {

    }
  }
};
