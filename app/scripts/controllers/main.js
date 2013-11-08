'use strict';

angular.module('tictactoeAngularApp')
  .controller('MainCtrl', function ($scope, board) {
    var size = 3;

    $scope.board = board.create(size);
    $scope.player = true;  // true = p1, false = p2
    var moves = 0;

    $scope.placePiece = function(row, col) {
      if($scope.board[row][col].value === undefined) {
        moves++;
        if($scope.player) {
          $scope.board[row][col].value = 'X';
          $scope.board[row][col].points = 1;
        } else if(!$scope.player) {
          $scope.board[row][col].value = 'O';
          $scope.board[row][col].points = 10;
        }
        $scope.player = !$scope.player;
        console.log(board.checkWinner($scope.board));
        if(board.checkWinner($scope.board) === 'p1Win') {
          $scope.gamewinP1 = true;
        } else if(board.checkWinner($scope.board) === 'p2Win') {
          $scope.gamewinP2 = true;
        } else if(moves === ($scope.board.length*$scope.board.length-1)) {
          $scope.gamelost = true;
        }
      }
    };
  });
