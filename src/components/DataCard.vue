<template>
  <div class="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-6 rounded-full shadow-lg flex items-center justify-center transform transition-transform hover:scale-105">
    <div class="text-center">
      <h3 class="text-xl font-bold mb-2">{{ title }}</h3>
      <p class="text-3xl font-semibold">{{ value }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DataCard',
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
</style>
