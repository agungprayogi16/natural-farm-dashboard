<template>
<h1 class="text-2xl font-bold mb-6">Dashboard</h1>
  <div class="flex w-full p-4">
 
  
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:flex-col lg:w-full gap-4 mt-4">
      <div>
      <LineChart class="p-4 bg-white shadow-md rounded-lg lg:mt-1 md:mt-16 mt-8" />
      </div>
      
        <CustomerSelection class="p-4 bg-white shadow-md rounded-lg" />
      </div>
    </div>
  </div>
</template>

<script>
import CustomerSelection from '@/components/CustomerSelection.vue';
import LineChart from '@/components/LineChart.vue';

export default {
  components: {
    CustomerSelection,
    LineChart,
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
