export default {
  emits: ["initializeNewGame", "changeGameMode"],
  data: {
    game_mode: "p2p", // p2p = Player vs Player p2c = Player vs Computer
  },
  methods: {
    startGame() {
      this.$emit("initializeNewGame");
    },
    changeGameMode(mode) {
      this.game_mode = mode;
    },
  },
  created: function () {
    this.startGame();
  },
  watch: {
    game_mode: function (new_value) {
      this.$emit("changeGameMode", { is_p2c: new_value === "p2c" });
    },
  },
};
