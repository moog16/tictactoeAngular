'use strict';

angular.module('tictactoeAngularApp')
  .controller('MainCtrl', function ($scope, board) {
    $scope.size = 3;

    $scope.board = board.create($scope.size);
    $scope.player = true;  // true = p1, false = p2
    var moves = 0;
    var history = [];

    $scope.placePiece = function(row, col) {
      if($scope.board[row][col].value === undefined) {
        moves++;
        history.push([row,col]);
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
        } else if(moves === ($scope.board.length*$scope.board.length)) {
          $scope.gamelost = true;
        }
      }
    };

    $scope.undo = function() {
      var lastMove = history.pop();
      var row = lastMove[0];
      var col = lastMove[1];
      console.log(row, col);

      $scope.board[row][col].value = undefined;
      $scope.board[row][col].points = 0;
      $scope.player = !$scope.player;
    };

    $scope.newBoard = function() {
      if($scope.size > 14) {
        $scope.size = 14;
      }
      $scope.board = board.create($scope.size);
    };
  });
