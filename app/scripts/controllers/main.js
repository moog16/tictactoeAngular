'use strict';

angular.module('tictactoeAngularApp')
  .controller('MainCtrl', function ($scope, board) {
    var size = 3;

    $scope.board = board.create(size);
    $scope.player = true;  // true = p1, false = p2

    $scope.placePiece = function(row, col) {
      if($scope.board[row][col].value === undefined) {
        if($scope.player) {
          $scope.board[row][col].value = 'X';
          $scope.board[row][col].points = 1;
        } else if(!$scope.player) {
          $scope.board[row][col].value = 'O';
          $scope.board[row][col].points = 10;
        }
        $scope.player = !$scope.player;
        checkWinner();
      }
    };

    var p1Win = $scope.board.length*1;
    var p2Win = $scope.board.length*10;

    var checkWinner = function() {
      rowWin($scope.board);
      majDiag($scope.board);
      colWin($scope.board);
    };

    var whichWinner = function(sum) {
      if(sum === p1Win) {
        announceWin(p1Win);
      } else if(sum === p2Win) {
        announceWin(p2Win);
      }
    };

    var announceWin = function(score) {
      console.log(score);
    };

    var rowWin = function(board) {
      for(var i=0; i<board.length; i++) {
        var rowSum = _.reduce(board[i], function(sum, num) {
          return sum += num.points;
        }, 0);
        whichWinner(rowSum);
      }
    };

    var majDiag = function(board) {
      var majDiagSum = _.reduce(board, function(sum, num, ind) {
        return sum += num[ind].points;
      }, 0);
      whichWinner(majDiagSum);
    };

    var colWin = function(board) {
      var col = 0;
      for(var i=0; i<board.length; i++) {
        var colSum = _.reduce(board, function(sum, row) {
          return sum += row[col].points;
        }, 0);
        col++;
        whichWinner(colSum);
      }
    };

    var minDiag = function() {

    };
  });
