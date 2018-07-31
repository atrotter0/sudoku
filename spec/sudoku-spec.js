import { Sudoku } from './../src/sudoku';

describe('Sudoku', function() {
  var sudoku;

  beforeEach(function() {
    sudoku = new Sudoku();
  });

  it('should build game rows', function() {
    expect(sudoku.rowsArray.length).toEqual(sudoku.MAX_ROWS);
  });

  it('should build game columns', function() {
    expect(sudoku.columnsArray.length).toEqual(sudoku.MAX_ROWS);
  });

  it('should check if all rows and columns only include 1-9', function(){
    expect(sudoku.validateNumbers(sudoku.rowsArray)).toEqual(true);
    expect(sudoku.validateNumbers(sudoku.columnsArray)).toEqual(true);
  });

  it('should check if all rows and columns are unique', function() {
    expect(sudoku.checkUniqueness(sudoku.rowsArray)).toEqual(true);
    expect(sudoku.checkUniqueness(sudoku.columnsArray)).toEqual(true);
    sudoku.buildNonets();
    expect(sudoku.checkUniqueness(sudoku.nonetsArray)).toEqual(false);
  });
});
