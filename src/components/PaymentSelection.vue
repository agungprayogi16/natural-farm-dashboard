<template>
  <div class="p-4">
    <label for="payment" class="block text-sm font-medium text-gray-700">Payment</label>
    <select
      id="payment"
      v-model="selected"
      @change="onPaymentChange"
      class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
    >
      <option
        v-for="payment in payments"
        :key="payment.id"
        :value="payment"
        class="text-gray-900"
      >
        {{ payment.name }}
      </option>
    </select>
    <div v-if="discountedPrice !== null" class="mt-4">
      <p class="text-lg font-semibold text-gray-900">Original Price: {{ originalPrice }}</p>
      <p class="text-lg font-semibold text-green-600">Discounted Price: {{ discountedPrice }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, PropType } from 'vue';
import paymentsData from '../static/payments.json';
import { Payments } from '../types/payment';

export default defineComponent({
  props: {
    value: {
      type: Object as PropType<Payments>,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  setup(props, { emit }) {
    const payments = ref<Payments[]>(paymentsData as Payments[]);
    const selected = ref<Payments>(props.value ?? payments.value[0]);
    const originalPrice = ref<number>(props.price);
    const discountedPrice = ref<number | null>(null);

    const applyDiscount = (payment: Payments) => {
      if (payment.name.toLowerCase() === 'shopeepay') {
        discountedPrice.value = originalPrice.value * 0.5;
      } else {
        discountedPrice.value = null;
      }
    };

    const onPaymentChange = (event: Event) => {
      const target = event.target as HTMLSelectElement;
      const selectedPayment = payments.value.find(
        (payment) => payment.id === Number(target.value)
      );
      if (selectedPayment) {
        selected.value = selectedPayment;
        emit('update:value', selectedPayment);
        applyDiscount(selectedPayment);
      }
    };

    watch(selected, (newVal: Payments) => {
      emit('update:value', newVal); // Emit update event with updated selected value
      applyDiscount(newVal);
    });

    return {
      payments,
      selected,
      originalPrice,
      discountedPrice,
      onPaymentChange,
    };
  },
});
</script>

<style scoped>
/* Additional styles are not necessary with Tailwind, but can be added here if needed */
</style>
