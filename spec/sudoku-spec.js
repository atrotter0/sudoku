import { Sudoku } from './../src/sudoku';

describe('Sudoku', function() {
  var sudoku;

  beforeEach(function() {
    sudoku = new Sudoku();
  });

  it('should build game grid', function() {
    expect(sudoku.masterArray.length).toEqual(sudoku.MAX_ROWS);
  });

  it('should check if all rows are unique', function(){
    expect(sudoku.checkRows()).toEqual(true)
  });

});
