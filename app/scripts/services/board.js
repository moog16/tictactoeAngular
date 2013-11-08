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

    return {
      create: create
    };
  });