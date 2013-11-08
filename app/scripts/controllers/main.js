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
    };

    createBoard();
  });
