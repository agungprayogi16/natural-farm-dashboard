<template>
  <div class="p-6   flex flex-col items-center">
    <div class="w-full max-w-md relative">
     
      <div class=" mb-4">
        <label for="customer" class="block text-lg font-semibold text-gray-700 mb-2">Select Customer</label>
        <div class="relative">
          <select
            id="customer"
            v-model="selected"
            @change="onCustomerChange"
            class="block w-full pl-10  pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md shadow-sm"
          >
            <option v-for="customer in customers" :key="customer.id" :value="customer">
              {{ customer.customer_name }}
            </option>
          </select>
          <i class="fas fa-user absolute left-3 top-3 text-gray-400"></i>
          
        </div>
      </div>
      <div v-if="selected" class="mt-4 p-4 bg-white rounded-lg ">
        <h3 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <i class="fas fa-info-circle mr-2 text-blue-500"></i> Customer Details
        </h3>
        <div class="text-gray-700 gap-20w space-y-3">
          <p class="flex items-center"><i class="fas fa-user mr-2 text-green-500"></i> <strong >Name    :</strong> {{ selected.customer_name }}</p>
          <p class="flex items-center"><i class="fas fa-envelope mr-2 text-yellow-500"></i> <strong>Email :</strong> {{ selected.email }}</p>
          <p class="flex items-center"><i class="fas fa-phone mr-2 text-blue-500"></i> <strong>Phone:</strong> {{ selected.phone }}</p>
          <p class="flex items-center"><i class="fas fa-map-marker-alt mr-2 text-red-500"></i> <strong>Address :</strong> {{ selected.address }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, PropType } from 'vue';
import { Customers } from '../types/customers';
import customersData from '../static/customers.json';

export default defineComponent({
  props: {
    value: {
      type: Object as PropType<Customers>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const customers = ref<Customers[]>(customersData.data);
    const selected = ref<Customers>(props.value || customers.value[0]);

    watch(selected, (newVal: Customers) => {
      emit('update:value', newVal);
    });

    const onCustomerChange = (event: Event) => {
      const target = event.target as HTMLSelectElement;
      const selectedCustomer = customers.value.find(customer => customer.id === Number(target.value));
      if (selectedCustomer) {
        selected.value = selectedCustomer;
      }
    };

    return {
      customers,
      selected,
      onCustomerChange,
    };
  },
});
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');



</style>
