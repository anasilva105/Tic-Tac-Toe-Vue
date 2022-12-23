<script>
import "../css/GamePlayers.css";
import GamePlayers from "../scripts/GamePlayers.js";
export default {
  created: GamePlayers.created,
  data: () => ({ ...GamePlayers.data }),
  emits: [...GamePlayers.emits],
  methods: { ...GamePlayers.methods },
  props: { ...GamePlayers.props },
  watch: { ...GamePlayers.watch },
};
</script>
<template>
  <div>Players: {{ players }}</div>
  <div class="containerPlayers" v-for="player in players" :key="player.id">
    <p :class="player.is_active_player ? 'selectedPlayer' : ''">
      {{ player.name }}: {{ player.symbol }}
    </p>
  </div>
</template>
