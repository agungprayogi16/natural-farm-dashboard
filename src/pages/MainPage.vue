<template>

  <div class="flex w-screen">
  <LineChart class="w-full p-3 bg-white shadow-md rounded-lg lg:mt-1 " />
  </div>
</template>

<script>

import LineChart from '@/components/LineChart.vue'

export default {
  components: {
    
    LineChart,
  },
};
</script>
