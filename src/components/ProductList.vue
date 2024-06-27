<template>
  <div class="p-4 h-full">
    <div v-for="product in products" :key="product.id" class="flex flex-col md:flex-row items-center mb-4 p-4 rounded shadow">
      <span class="flex-1 mb-2 md:mb-0">{{ product.name }}</span>
      <input type="number" v-model="product.quantity" class="ml-0 md:ml-2 w-full md:w-16 p-2 border rounded mb-2 md:mb-0" />
      <input type="number" v-model="product.discount" class="ml-0 md:ml-2 w-full md:w-16 p-2 border rounded mb-2 md:mb-0" />
      <button @click="tambahProduct(product)" class="ml-0 md:ml-2 w-full md:w-auto p-2 bg-green-500 text-white rounded hover:bg-green-700 mb-2 md:mb-0">Tambah</button>
      <button @click="removeProduct(product.id)" class="ml-0 md:ml-2 w-full md:w-auto p-2 bg-red-500 text-white rounded hover:bg-red-700">Remove</button>
    </div>
    <button @click="addProduct" class="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700 w-full md:w-auto">Add Product</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import productsData from '../static/products.json';
import { Product } from "../types/products";

export default defineComponent({
  setup() {
    const store = useStore();
    const products = ref<Product[]>(productsData.map(product => ({
      ...product,
      quantity: 1,
      discount: 0,
    }) as Product));

    const addProduct = () => {
      products.value.push({ id: Date.now(), name: '', price: 0, quantity: 1, discount: 0 });
    }

    const removeProduct = (id: number) => {
      products.value = products.value.filter(product => product.id !== id);
      store.dispatch('removeProductFromCart', id);
    };

    const tambahProduct = (product: Product) => {
      store.dispatch('addProductToCart', { ...product });
    };

    return {
      products,
      addProduct,
      removeProduct,
      tambahProduct,
    };
  },
});
</script>
