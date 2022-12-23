export default {
  emits: ["updatePlayerSymbol", "updateComputerSymbol"],
  props: {
    active_player: String,
    is_new_game: Boolean,
    is_p2c: Boolean,
  },
  data: {
    players: [
      {
        id: "p1",
        name: "Player 1",
        symbol: "X",
        is_active_player: true,
      },
      {
        id: "p2",
        name: "Player 2",
        symbol: "O",
        is_active_player: false,
      },
    ],
  },
  created: function () {
    const [{ symbol }] = this.players.filter(
      (player) => player.is_active_player
    );
    if (symbol) {
      this.$emit("updatePlayerSymbol", symbol);
    }
  },
  watch: {
    active_player: function (new_value) {
      if (!new_value) {
        this.players = this.players.map((player) => ({
          ...player,
          is_active_player: !player.is_active_player,
        }));
        const [{ symbol }] = this.players.filter(
          (player) => player.is_active_player
        );
        this.$emit("updatePlayerSymbol", symbol);
      }
    },
    is_new_game: function () {
      this.players = this.players.map((player, index) => ({
        ...player,
        is_active_player: index === 0,
      }));
      const [{ symbol }] = this.players.filter(
        (player) => player.is_active_player
      );
      this.$emit("updatePlayerSymbol", symbol);
    },
    is_p2c: function (value) {
      this.players = this.players.map((player) => {
        if (player.id === "p2") {
          player.name = value ? "Computer" : "Player 2";
        }
        return player;
      });
      const [{ symbol }] = this.players.filter((player) => player.id === "p2");
      this.$emit("updateComputerSymbol", symbol);
    },
  },
};
