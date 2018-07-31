export function Sudoku(userInput) {
  this.MAX_ROWS = 9;
  this.key = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  this.masterArray = [];
  this.rowsArray = userInput;
  this.columnsArray = [];
  this.nonetsArray = [];
  //this.buildRows();
  this.buildColumns();
}

Sudoku.prototype.buildRows = function() {
  var initialArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  this.rowsArray.push(initialArray);
  var newArray = initialArray.map(x => x);
  for(var i = 1; i < this.MAX_ROWS; i++) {
    var firstItem = newArray.shift();
    newArray.push(firstItem);
    var newerArray = newArray.map(x => x);
    this.rowsArray.push(newerArray);
  }
  this.masterArray.push(this.rowsArray);
};

Sudoku.prototype.buildColumns = function() {
  for(var x = 0; x < this.rowsArray.length; x++) {
    var newColumnArray = [];
    for(var y = 0; y < this.rowsArray[x].length; y++) {
      newColumnArray.push(this.rowsArray[y][x]);
    }
    this.columnsArray.push(newColumnArray.map(x => x));
  }
};

Sudoku.prototype.validateNumbers = function(arrays) {
  var valid = true;
  for(var i = 0; i < arrays.length; i++) {
    for(var j = 0; j < this.MAX_ROWS; j++) {
      if (!this.key.includes(arrays[i][j])) {
        valid = false;
      }
    }
  }
  return valid;
};

Sudoku.prototype.buildNonets = function() {
  for(var h = 0; h < 9; h += 3) {
    var nonetBlock = [];
    for(var i = 0; i < 9; i++) {
      for(var j = h; j < (h + 3); j++) {
        nonetBlock.push(this.rowsArray[i][j]);
      }
      if (nonetBlock.length === 9) {
        this.nonetsArray.push(nonetBlock.map(x => x));
        nonetBlock = [];
      }
    }
  }
};

Sudoku.prototype.checkUniqueness = function(arrays) {
  var check = true;
  for(var x = 0; x < arrays.length; x++) {
    if (check === true) {
      for(var y = 0; y < arrays.length; y++) {
        if (x !== y) {
          for(var z = 0; z < arrays[x].length; z++) {
            if (arrays[x][z] == arrays[y][z]) {
              check = false;
              z = arrays[x].length;
            }
          }
        }
      }
    }
  }
  return check;
};
