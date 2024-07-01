<template>
  <div class="flex flex-col items-start gap-2">
    <label for="discount" class="font-bold text-lg">Enter Discount:</label>
    <input 
      v-model="discount" 
      type="number" 
      id="discount" 
      min="0" 
      max="100" 
      class="p-2 border border-gray-300 rounded w-24"
    />
    <button @click="applyDiscount" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
      Apply Discount
    </button>
    <p class="text-sm text-gray-700">Current Discount: {{ discount }}%</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'DiscountInput',
  setup() {
    const store = useStore();
    const discount = ref<number>(0);

    const applyDiscount = () => {
      if (discount.value < 0) discount.value = 0;
      if (discount.value > 100) discount.value = 100;
      store.dispatch('applyAdditionalDiscount', discount.value);
      console.log(`Discount applied: ${discount.value}%`);
    };

    return { discount, applyDiscount };
  }
});
</script>
