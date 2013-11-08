'use strict';

angular.module('tictactoeAngularApp')
  .controller('MainCtrl', function ($scope) {
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

    return {
      create: create
    }
  });