<script>
import "../css/GameMenu.css";
import GameMenu from "../scripts/GameMenu.js";
export default {
  created: GameMenu.created,
  data: () => ({ ...GameMenu.data }),
  emits: [...GameMenu.emits],
  methods: { ...GameMenu.methods },
  watch: { ...GameMenu.watch },
};
</script>
<template>
  <div class="containerMenu">
    <div>
      <v-btn
        class="d-inline mr-5 btnFixedSize"
        :variant="game_mode === 'p2p' ? undefined : 'outlined'"
        color="primary"
        @click="changeGameMode('p2p')"
      >
        Player vs Player
      </v-btn>
      <div class="d-inline text-h5">OR</div>
      <v-btn
        class="d-inline ml-5 btnFixedSize"
        :variant="game_mode === 'p2c' ? undefined : 'outlined'"
        color="primary"
        @click="changeGameMode('p2c')"
      >
        Player vs Computer
      </v-btn>
    </div>
    <v-btn class="mt-5" rounded="lg" color="primary" @click="startGame">
      Start Game
    </v-btn>
  </div>
</template>
