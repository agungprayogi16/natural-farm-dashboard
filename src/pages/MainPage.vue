<template>
  <div class="col  ml-5 items-center w-full min-h-screen ">
    <div class="flex ml-8 items-start justify-start mb-6">
      <i class="fa-solid fa-chart-simple fa-2x text-black mr-2 "></i>
      <h1 class="text-3xl flex justify-start font-bold text-start text-gray-800">Dashboard</h1>
    </div>
    <div>
    
    <LineChart class="w-full  p-6  rounded-lg" />
    </div>
  </div>
</template>

<script>
import LineChart from '../components/LineChartComponent.vue';

export default {
  components: {
    LineChart,
  },
};
</script>

