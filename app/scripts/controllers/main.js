'use strict';

angular.module('tictactoeAngularApp')
  .controller('MainCtrl', function ($scope) {
    var size = 3;
    $scope.board = [];
    var createBoard = function() {
      for(var i=0; i<size; i++) {
        var row = new Array(size);
        $scope.board.push(row);
      }

      for(var i=0; i<size; i++) {
        for(var j=0; j<size; j++) {
          $scope.board[i][j] = {
            value: undefined,
            points: 0
          }
        }
      }
    };

    createBoard();
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
      }
    };
  });
