<template>
  <div class="flex h-screen bg-gray-800 w-full">
    <div class="flex-1 flex flex-col">
     
      <div class="flex-1 overflow-auto p-4">
        <div class="container mx-0.5">
          <!-- First row: CustomerSelection and PaymentSelection -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <CustomerSelection class="bg-white p-4 shadow rounded" />
            <PaymentSelection class="bg-white p-4 shadow rounded" />
          </div>
         
          
          <!-- Third row: AdditionalDiscount and LineChart -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AdditionalDiscount class="bg-white p-4 shadow rounded" />
            <LineChart class="bg-white p-4 shadow rounded" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import LineChart from '@/components/LineChart.vue';

export default {
  components: {

   
    LineChart
  }
}
</script>


