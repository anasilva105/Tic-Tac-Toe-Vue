export default {
  emits: ["checkGameStatus"],
  props: {
    active_player: "",
    ai_position: Object,
    is_new_game: Boolean,
    is_game_over: Boolean,
    MAX_COLUMNS: Number,
    MAX_ROWS: Number,
  },
  data: {
    board: [],
  },
  created: function () {
    this.board = initializeBoard(this.MAX_ROWS, this.MAX_COLUMNS);
  },
  methods: {
    cellClick({ row, column, char }) {
      if (!this.is_game_over && !this.board[row][column]) {
        this.board[row][column] = char;
        this.$emit("checkGameStatus", this.board);
      }
    },
  },
  watch: {
    is_new_game: function (new_value) {
      if (new_value) {
        this.board = initializeBoard(this.MAX_ROWS, this.MAX_COLUMNS);
      }
    },
    ai_position: function (new_value) {
      this.cellClick(new_value);
    },
  },
};

function initializeBoard(max_rows, max_columns) {
  return Array.from({ length: max_rows }, () =>
    Array.from({ length: max_columns }, () => "")
  );
}
