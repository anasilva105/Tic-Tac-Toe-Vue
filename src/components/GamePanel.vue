<script>
import "../css/GamePanel.css";
</script>
<template>
  <div class="game"><slot name="game"></slot></div>
  <div class="players"><slot name="players"></slot></div>
  <div class="menu"><slot name="menu"></slot></div>
</template>
