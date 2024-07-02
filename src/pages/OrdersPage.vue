<template>
  <div class="p-4 px-12 w-full min-h-screen ml-7 bg-gray-100">
    <div class="flex items-start justify-start mb-6">
      <i class="fas fa-shopping-cart fa-2x text-blue-500 mr-2"></i>
      <h1 class="text-3xl flex justify-start font-bold text-start text-gray-800">Orders Page</h1>
    </div>
    <div class="flex flex-col lg:flex-row gap-6">
      <div class="lg:w-2/3 flex flex-col">
        <ProductList class="bg-white p-6 shadow-lg rounded-lg flex-grow" />
      </div>
      <div class="lg:w-1/3 lg:mb-[900px] flex flex-col space-y-4">
        <OrderSummary class="bg-white p-6 shadow-lg rounded-lg" />
        <AdditionalDiscount class="bg-white p-6 shadow-lg rounded-lg" />
        
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ProductList from '@/components/ProductList.vue';
import AdditionalDiscount from '@/components/AdditionalDiscount.vue';
import OrderSummary from '@/components/OrderSummary.vue';

export default defineComponent({
  components: {
    OrderSummary,
    ProductList,
    AdditionalDiscount,
    
  },
});
</script>


