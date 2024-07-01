<template>
  <div class="bg-gradient-to-r from-green-400 to-blue-500 text-white p-8 rounded-full shadow-lg flex items-center justify-center w-40 h-40">
    <div class="text-center">
      <h3 class="text-xl font-bold">{{ title }}</h3>
      <p class="text-3xl font-semibold">{{ value }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CircularCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Number],
      required: true,
    },
  },
});
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
