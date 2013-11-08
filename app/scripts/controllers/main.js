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
        board.checkWinner($scope.board);
      }
    };
  });
