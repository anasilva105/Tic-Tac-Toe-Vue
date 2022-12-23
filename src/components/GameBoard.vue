<script>
import "../css/GameBoard.css";
import GameBoard from "../scripts/GameBoard";
export default {
  created: GameBoard.created,
  data: () => ({ ...GameBoard.data }),
  emits: [...GameBoard.emits],
  methods: { ...GameBoard.methods },
  props: { ...GameBoard.props },
  watch: { ...GameBoard.watch },
};
</script>
<template>
    <div>{{ board }}</div>

  <table>
    <tr
      :class="rowIndex < board.length - 1 ? 'borderRow' : ''"
      v-for="(row, rowIndex) in board"
      :key="rowIndex"
    >
      <th
        :class="columnIndex < row.length - 1 ? 'borderColumn' : ''"
        v-for="(column, columnIndex) in row"
        :key="columnIndex"
        @click="
          cellClick({
            row: rowIndex,
            column: columnIndex,
            char: active_player,
          })
        "
      >
        <div class="symbol">{{ column }}</div>
      </th>
    </tr>
  </table>
</template>
