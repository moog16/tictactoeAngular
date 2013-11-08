'use strict';

angular.module('tictactoeAngularApp')
  .factory('board', function () {
    var create = function(size) {
      var board = [];
      for(var i=0; i<size; i++) {
        var row = new Array(size);
        board.push(row);
      }

      for(var i=0; i<size; i++) {
        for(var j=0; j<size; j++) {
          board[i][j] = {
            value: undefined,
            points: 0
          }
        }
      }
      return board;
    };

    var checkWinner = function(board) {
      var winner =  rowWin(board) ||
                    majDiag(board) ||
                    minDiag(board) ||
                    colWin(board);
      if(winner) {
        return winner;
      }
      return false;
    };

    var whichWinner = function(sum, board) {
      var p1Win = board.length*1;
      var p2Win = board.length*10;
      if(sum === p1Win) {
        return 'p1Win';
      } else if(sum === p2Win) {
        return 'p2Win';
      }
      return false;
    };

    var rowWin = function(board) {
      for(var i=0; i<board.length; i++) {
        var rowSum = _.reduce(board[i], function(sum, num) {
          return sum += num.points;
        }, 0);
        return whichWinner(rowSum, board);
      }
    };

    var majDiag = function(board) {
      var majDiagSum = _.reduce(board, function(sum, num, ind) {
        return sum += num[ind].points;
      }, 0);
      return whichWinner(majDiagSum, board);
    };

    var minDiag = function(board) {
      var minDiagSum = _.reduce(board, function(sum, num, ind) {
        var i = board.length - 1 - ind;
        return sum += num[i].points;
      }, 0);
      return whichWinner(minDiagSum, board);
    };

    var colWin = function(board) {
      var col = 0;
      for(var i=0; i<board.length; i++) {
        var colSum = _.reduce(board, function(sum, row) {
          return sum += row[col].points;
        }, 0);
        col++;
        return whichWinner(colSum, board);
      }
    };

    return {
      create: create,
      checkWinner: checkWinner
    };
  });