<template>
  <div class="product-page lg:px-16 w-full ">
    <div class="flex items-center justify-between mb-6 p-3  rounded-lg">
      <div class="flex items-center">
        <i class="fas fa-box-open fa-2x text-blue-500 mr-2"></i>
        <h1 class="text-3xl font-bold text-gray-800">Product Page</h1>
      </div>
      </div>
    <div class ="flex items-center justify-end mb-6 p-3  rounded-lg">
      
     <div class="relative w-full max-w-md justify-end">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search products..."
          class="w-full flex justify-end p-2 pl-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none "
        />
        <i class="fas fa-search absolute left-3 top-3 text-gray-400"></i>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105"
      >
        <img
          :src="product.image"
          alt="Product Image"
          class="w-full h-48 object-cover rounded-t-lg mb-4"
        />
        <div class="text-lg font-semibold mb-2 text-gray-800">{{ product.name }}</div>
        <div class="text-gray-700 mb-4">{{ formatCurrency(product.price) }}</div>
        <div class="flex justify-end gap-4 items-center">
          <button
            @click="addProductToCart(product)"
            class="bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Add
          </button>
          <button
            @click="removeProduct(product.id)"
            class="bg-red-500 text-white px-2 py-2 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useStore } from 'vuex';
import { Product } from '../types/products';
import productsData from '../static/products.json';

export default defineComponent({
  name: 'ProductPage',
  setup() {
    const store = useStore();
    const products = ref<Product[]>(productsData.map(product => ({
      ...product,
      quantity: 1,
      discount: 0,
    })));
    const searchQuery = ref('');

    const filteredProducts = computed(() => {
      return products.value.filter(product =>
        product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });

    const addProduct = () => {
      products.value.push({ id: Date.now(), name: '', price: 0, quantity: 1, discount: 0, image: '' });
    };

    const removeProduct = (id: number) => {
      products.value = products.value.filter(product => product.id !== id);
      store.dispatch('removeProductFromCart', id);
    };

    const addProductToCart = (product: Product) => {
      store.dispatch('addProductToCart', product);
    };

    const formatCurrency = (price: number) => {
      return `$${price.toFixed(2)}`;
    };

    return {
      products,
      searchQuery,
      filteredProducts,
      addProduct,
      removeProduct,
      addProductToCart,
      formatCurrency,
    };
  },
});
</script>

<style scoped>
</style>
