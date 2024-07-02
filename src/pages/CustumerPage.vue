<template>
   <div>
    <div class="flex ml-16 p-6 items-center justify-start mb-6">
      <i class="fas fa-users fa-2x text-blue-500 mr-3"></i>
      <h1 class="text-3xl font-bold text-gray-800">Customers</h1>
    </div>
    <div class="py-10 px-40 flex flex-col items-center bg-white rounded-lg shadow-md w-full">
      <div class="w-full flex flex-col md:flex-row max-w-md md:max-w-full">
        <div class="md:mr-4 w-full md:w-1/2 mb-4 md:mb-0">
          <div class="mb-4 flex justify-between items-center">
            <label for="customer" class="block text-lg font-semibold text-gray-700">Select Customer</label>
            <button @click="toggleAddCustomerForm" class="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600">
              Add Customer
            </button>
          </div>
          <div class="relative mb-4">
            <input
              type="text"
              v-model="searchQuery"
              @input="filterCustomers"
              placeholder="Search customers..."
              class="block w-full pl-10 pr-4 py-2 mb-4 text-base border-gray-300 focus:outline-1 focus:ring-slate-600 focus:border-slate-600 sm:text-sm rounded-md shadow-sm"
            />
            <i class="fas fa-search absolute left-3 top-3 text-gray-400"></i>
            <select
              id="customer"
              v-model="selected"
              @change="onCustomerChange"
              class="block w-full pl-10 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md shadow-sm"
            >
              <option v-for="customer in filteredCustomers" :key="customer.id" :value="customer.id">
                {{ customer.customer_name }}
              </option>
            </select>
            <i class="fas fa-user absolute left-3 top-3 text-gray-400"></i>
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <div v-if="showAddCustomerForm" class="mt-4 p-4 bg-gray-50 rounded-lg shadow-inner">
            <h3 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <i class="fas fa-plus-circle mr-2 text-green-500"></i> Add New Customer
            </h3>
            <div class="text-gray-700 space-y-3">
              <div class="flex items-center mb-2">
                <label for="newCustomerName" class="w-24"><strong>Name:</strong></label>
                <input type="text" id="newCustomerName" v-model="newCustomer.customer_name" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div class="flex items-center mb-2">
                <label for="newCustomerEmail" class="w-24"><strong>Email:</strong></label>
                <input type="email" id="newCustomerEmail" v-model="newCustomer.email" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div class="flex items-center mb-2">
                <label for="newCustomerPhone" class="w-24"><strong>Phone:</strong></label>
                <input type="text" id="newCustomerPhone" v-model="newCustomer.phone" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div class="flex items-center mb-2">
                <label for="newCustomerAddress" class="w-24"><strong>Address:</strong></label>
                <input type="text" id="newCustomerAddress" v-model="newCustomer.address" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div class="flex items-center mb-2">
                <label for="newCustomerCompany" class="w-24"><strong>Company:</strong></label>
                <input type="text" id="newCustomerCompany" v-model="newCustomer.company" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div class="flex items-center mb-2">
                <label for="newCustomerWebsite" class="w-24"><strong>Website:</strong></label>
                <input type="text" id="newCustomerWebsite" v-model="newCustomer.website" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
            </div>
            <div class="mt-4 flex justify-end space-x-2">
              <button @click="saveNewCustomer" class="bg-green-500 text-white px-4 py-2 rounded-md shadow hover:bg-green-600">
                Save
              </button>
              <button @click="toggleAddCustomerForm" class="bg-red-500 text-white px-4 py-2 rounded-md shadow hover:bg-red-600">
                Cancel
              </button>
            </div>
          </div>
          <div v-if="selectedCustomer" class="mt-4 p-4 bg-gray-50 rounded-lg shadow-inner">
            <h3 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <i class="fas fa-info-circle mr-2 text-blue-500"></i> Customer Details
            </h3>
            <div class="text-gray-700 space-y-3">
              <div class="flex items-center mb-2">
                <label for="updateCustomerName" class="w-24"><strong>Name:</strong></label>
                <input type="text" id="updateCustomerName" v-model="selectedCustomer.customer_name" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div class="flex items-center mb-2">
                <label for="updateCustomerEmail" class="w-24"><strong>Email:</strong></label>
                <input type="email" id="updateCustomerEmail" v-model="selectedCustomer.email" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div class="flex items-center mb-2">
                <label for="updateCustomerPhone" class="w-24"><strong>Phone:</strong></label>
                <input type="text" id="updateCustomerPhone" v-model="selectedCustomer.phone" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div class="flex items-center mb-2">
                <label for="updateCustomerAddress" class="w-24"><strong>Address:</strong></label>
                <input type="text" id="updateCustomerAddress" v-model="selectedCustomer.address" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div class="flex items-center mb-2">
                <label for="updateCustomerCompany" class="w-24"><strong>Company:</strong></label>
                <input type="text" id="updateCustomerCompany" v-model="selectedCustomer.company" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div class="flex items-center mb-2">
                <label for="updateCustomerWebsite" class="w-24"><strong>Website:</strong></label>
                <input type="text" id="updateCustomerWebsite" v-model="selectedCustomer.website" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
            </div>
            <div class="mt-4 flex justify-end space-x-2">
              <button @click="updateCustomer" class="bg-yellow-500 text-white px-4 py-2 rounded-md shadow hover:bg-yellow-600">
                Update
              </button>
              <button @click="deleteCustomer" class="bg-red-500 text-white px-4 py-2 rounded-md shadow hover:bg-red-600">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed, PropType } from 'vue';
import { Customers } from '../types/customers';
import customersData from '../static/customers.json';

interface ExtendedCustomer extends Customers {
  company?: string;
  website?: string;
}

export default defineComponent({
  props: {
    value: {
      type: Object as PropType<ExtendedCustomer>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const customers = ref<ExtendedCustomer[]>(customersData.data);
    const searchQuery = ref('');
    const selected = ref<ExtendedCustomer>(props.value || customers.value[0]);
    const filteredCustomers = ref<ExtendedCustomer[]>(customers.value);
    const showAddCustomerForm = ref(false);
    const newCustomer = ref<ExtendedCustomer>({
      id: 0,
      customer_name: '',
      email: '',
      phone: '',
      address: '',
      company: '',
      website: '',
      member_id: 0,
      address_id: 0,
    });

    watch(selected, (newVal: ExtendedCustomer) => {
      emit('update:value', newVal);
    });

    const onCustomerChange = (event: Event) => {
      const target = event.target as HTMLSelectElement;
      const selectedCustomer = customers.value.find(customer => customer.id === Number(target.value));
      if (selectedCustomer) {
        selected.value = selectedCustomer;
      }
    };

    const filterCustomers = () => {
      if (searchQuery.value) {
        filteredCustomers.value = customers.value.filter(customer =>
          customer.customer_name.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
      } else {
        filteredCustomers.value = customers.value;
      }
    };

    const selectedCustomer = computed(() => customers.value.find(customer => customer.id === selected.value?.id));

    const toggleAddCustomerForm = () => {
      showAddCustomerForm.value = !showAddCustomerForm.value;
      if (!showAddCustomerForm.value) {
        resetNewCustomerForm();
      }
    };

    const resetNewCustomerForm = () => {
      newCustomer.value = {
        id: 0,
        customer_name: '',
        email: '',
        phone: '',
        address: '',
        company: '',
        website: '',
        member_id: 0,
        address_id: 0,
      };
    };

    const saveNewCustomer = () => {
      const customerToAdd = { ...newCustomer.value, id: Date.now() };
      customers.value.push(customerToAdd);
      filteredCustomers.value.push(customerToAdd);
      selected.value = customerToAdd;
      toggleAddCustomerForm();
    };

    const updateCustomer = () => {
      if (selectedCustomer.value) {
        const index = customers.value.findIndex(customer => customer.id === selectedCustomer.value?.id);
        if (index !== -1) {
          customers.value[index] = { ...selectedCustomer.value };
          filteredCustomers.value[index] = { ...selectedCustomer.value };
        }
      }
    };

    const deleteCustomer = () => {
      if (selectedCustomer.value) {
        customers.value = customers.value.filter(customer => customer.id !== selectedCustomer.value?.id);
        filteredCustomers.value = filteredCustomers.value.filter(customer => customer.id !== selectedCustomer.value?.id);
        selected.value = customers.value[0] || null;
      }
    };

    return {
      customers,
      selected,
      filteredCustomers,
      searchQuery,
      onCustomerChange,
      filterCustomers,
      selectedCustomer,
      showAddCustomerForm,
      toggleAddCustomerForm,
      newCustomer,
      saveNewCustomer,
      updateCustomer,
      deleteCustomer,
    };
  },
});
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

input[type="text"],
input[type="email"],
input[type="number"],
input[type="password"],
input[type="search"],
input[type="tel"],
input[type="url"],
textarea {
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}
input[type="text"]:focus,
input[type="email"]:focus,
input[type="number"]:focus,
input[type="password"]:focus,
input[type="search"]:focus,
input[type="tel"]:focus,
input[type="url"]:focus,
textarea:focus {
  border-color: #6366f1;
  box-shadow: 0 0 0 1px #6366f1;
}
</style>
