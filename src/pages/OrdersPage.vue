<template>
  <div class="p-4 w-full h-screen">
    <h1 class="text-2xl font-bold mb-6">Orders Page</h1>
    <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mb-4">
      <div class="lg:col-span-2 md:col-span-2">
        <ProductList class="bg-white p-4 shadow rounded-lg" />
      </div>
      <div class="lg:col-span-1  md:col-span-2">
        <OrderSummary class="bg-white p-4 shadow rounded-lg mb-4" />
        <AdditionalDiscount class="bg-white p-4 shadow rounded-lg" />
        <CustomerSelectionVue class="bg-white mt-11 p-4 shadow rounded-lg" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import CustomerSelectionVue from '@/components/CustomerSelection.vue'
import ProductList from '@/components/ProductList.vue';
import AdditionalDiscount from '@/components/AdditionalDiscount.vue';
import OrderSummary from '@/components/OrderSummary.vue';

export default {
  components: {
    OrderSummary,
    ProductList,
    AdditionalDiscount,
    CustomerSelectionVue,
  },
};
</script>
