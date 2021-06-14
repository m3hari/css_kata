<template>
  <div :style="{ background: color }" class="card">
    {{ id }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Card",
  props: {
    id: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="css" scoped>
.card {
  @apply cursor-pointer hover:shadow-lg flex justify-center items-center text-xl font-bold  text-white shadow rounded;
}
</style>
