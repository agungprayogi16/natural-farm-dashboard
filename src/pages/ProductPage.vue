import { Product } from './../types/products';
<template>
  <div class="product-page p-4 w-full min-h-screen bg-gray-100">
        <div class="flex items-start justify-start ml-3 mb-6">
      <i class="fas fa-box fa-2x text-black mr-2"></i>
      <h1 class="text-3xl flex justify-start font-bold text-start text-gray-800">Orders Page</h1>
    </div>
     
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="product in products" :key="product.id" class="bg-white p-4 shadow-lg rounded-lg">
        <img :src="product.image" alt="Product Image" class="w-full h-48 object-cover rounded-t-lg mb-4" />
        <div class="text-lg font-semibold mb-2">{{ product.name }}</div>
        <div class="text-gray-700 mb-4">{{ formatCurrency(product.price) }}</div>
        <div class="flex justify-between items-center">
          <button @click="addProductToCart(product)" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out">Add</button>
          <button @click="removeProduct(product.id)" class="ml-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">Remove</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
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
      addProduct,
      removeProduct,
      addProductToCart,
      formatCurrency,
    };
  },
});
</script>

<style scoped>
.product-page {
  max-width: 1200px;
  margin: auto;
}

.product-page img {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.product-page .text-lg {
  font-size: 1.125rem;
}

.product-page .text-gray-700 {
  color: #4a5568;
}

.bg-blue-500:hover {
  background-color: #2563eb;
}

.bg-red-500:hover {
  background-color: #dc2626;
}
</style>
