let ticTacToe = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],

  move(player, row, column) {
    // if (player === "X") { //no need to check as its clarified in the player value, also this program just updates the values in the given place, its not a full fledged game so it doesn't care who's playing.
    if (this.board[row][column] === null) {
      this.board[row][column] = player;
    }
    // }
    //  else if (player === "O") {
    //   if (this.board[row][column] === null) {
    //     this.board[row][column] = player;
    //   }
    // }
    return this.board;
  },

  clear() {
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        this.board[i][j] = null;
      }
    }
    return this.board;
  },
};

console.log(ticTacToe);
