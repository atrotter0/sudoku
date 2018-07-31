import { Sudoku } from './sudoku';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function buildGrid() {
  for(var i = 1; i <= 81; i++) {
    var divToAppend = "<div class='grid-item'>" +
                        "<input type='text' class='form-control' id='" + i + "' maxLength='1'>" +
                      "</div>";
    $(".grid-container").append(divToAppend);
  }
}

function runGame(arrayOfInput) {
  var puzzle = new Sudoku(arrayOfInput);
  console.log(puzzle.checkUniqueness(puzzle.rowsArray));
  console.log(puzzle.checkUniqueness(puzzle.columnsArray));
  puzzle.buildNonets();
  console.log(puzzle.checkUniqueness(puzzle.nonetsArray));
}

function getUserInput() {
  var masterArray = [];
  var rowArray = [];
  for(var i = 1; i <= 81; i++) {
    var value = parseInt($("#" + i).val());
    rowArray.push(value);

    if (rowArray.length == 9) {
      masterArray.push(rowArray);
      rowArray = [];
    }
  }
  console.log(masterArray);
  return masterArray;
}

$(document).ready(function() {
  buildGrid();
  $("#submit").click(function() {
    var arrayOfInput = getUserInput();
    runGame(arrayOfInput);
  });
});
