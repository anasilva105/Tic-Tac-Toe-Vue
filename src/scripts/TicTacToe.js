const WIN_MOVES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
export default {
  data: {
    title: "Tic Tac Toe",
    active_player: "",
    is_p2c: false,
    ai_position: {},
    ai_symbol: "",
    MAX_ROWS: 3,
    MAX_COLUMNS: 3,
    is_new_game: false,
    is_game_over: false,
  },
  methods: {
    getActivePlayer(player) {
      this.active_player = player;
    },
    getComputerSymbol(symbol) {
      this.ai_symbol = symbol;
    },
    checkGameStatus(board) {
      if (this.is_new_game) {
        this.is_new_game = false;
      }
      if (board && this.active_player) {
        const flat_board = board.flat();

        if (isBoardComplete(flat_board)) {
          this.is_game_over = true;
        } else if (isVictory(flat_board, this.active_player)) {
          this.is_game_over = true;
        } else {
          if (this.is_p2c) {
            if (this.active_player !== this.ai_symbol) {
              this.active_player = "";
              setTimeout(() => {
                const { position } = minimax(flat_board, this.ai_symbol);
                this.ai_position = {
                  row: Math.floor(position / this.MAX_ROWS),
                  column: Math.floor(position % this.MAX_COLUMNS),
                  char: this.ai_symbol,
                };
              }, 1500);
            } else {
              this.active_player = "";
            }
          } else {
            this.active_player = "";
          }
        }
      }
    },
    initNewGame() {
      this.is_game_over = false;
      this.is_new_game = true;
    },
    changeGameMode({ is_p2c }) {
      this.is_p2c = is_p2c;
    },
  },
};

function isBoardComplete(board) {
  return board.every((cell) => cell !== "");
}

function isVictory(board, player) {
  return WIN_MOVES.some((row) =>
    row.every((value) => player && board[value] === player)
  );
}

function getEmptyPositions(board) {
  return board
    .map((val, index) => {
      if (val === "") return index;
    })
    .filter((val) => val !== undefined);
}

function minimax(board, player) {
  const emptyPositions = getEmptyPositions(board);
  let bestMove;

  if (isVictory(board, player) && player === "X") {
    return { score: -10 };
  } else if (isVictory(board, player) && player === "O") {
    return { score: 10 };
  } else if (isBoardComplete(board)) {
    return { score: 0 };
  }

  const moves = emptyPositions.map((position) => {
    board[position] = player;
    const { score } =
      player === "O" ? minimax(board, "X") : minimax(board, "O");
    board[position] = "";
    return { position, score };
  });

  if (player === "O") {
    bestMove = moves.reduce(
      (max_index, val, i, arr) =>
        val.score > arr[max_index].score ? i : max_index,
      0
    );
  } else {
    bestMove = moves.reduce(
      (max_index, val, i, arr) =>
        val.score < arr[max_index].score ? i : max_index,
      0
    );
  }
  return moves[bestMove];
}
