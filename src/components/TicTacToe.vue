<script>
import GamePanel from "../components/GamePanel.vue";
import GameBoard from "../components/GameBoard.vue";
import GamePlayers from "../components/GamePlayers.vue";
import GameMenu from "../components/GameMenu.vue";
import TicTacToe from "../scripts/TicTacToe.js";
import "../css/TicTacToe.css";
export default {
  components: {
    "game-panel": GamePanel,
    "game-board": GameBoard,
    "game-players": GamePlayers,
    "game-menu": GameMenu,
  },
  data: () => ({ ...TicTacToe.data }),
  methods: { ...TicTacToe.methods },
};
</script>

<template>
  <h3 class="title">{{ title }}</h3>
  <game-panel>
    <template #game
      ><game-board
        :ai_position="ai_position"
        :active_player="active_player"
        :is_new_game="is_new_game"
        :is_game_over="is_game_over"
        :MAX_ROWS="MAX_ROWS"
        :MAX_COLUMNS="MAX_COLUMNS"
        @checkGameStatus="checkGameStatus"
    /></template>
    <template #players
      ><game-players
        :active_player="active_player"
        :is_p2c="is_p2c"
        :is_new_game="is_new_game"
        @updatePlayerSymbol="getActivePlayer"
        @updateComputerSymbol="getAISymbol"
    /></template>
    <template #menu
      ><game-menu
        @initializeNewGame="initNewGame"
        @changeGameMode="changeGameMode"
      ></game-menu>
    </template>
  </game-panel>
</template>
