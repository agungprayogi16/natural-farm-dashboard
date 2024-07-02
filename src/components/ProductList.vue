<template>
  <Table class="p-4 h-full" :items="products">
    <div v-for="product in products" :key="product.id" class="flex flex-col md:flex-row items-center p-3 rounded shadow">
      <img :src="product.image" alt="Product Image" class="w-20 h-20 object-cover mb-2 md:mb-0 md:mr-4" />
      <span class="flex-1 p-2 text-lg font-bold mb-2 md:mb-0">{{ product.id }}</span>
      <div class="flex-1 mb-2 md:mb-0">
        <span>{{ product.name }}</span>
      </div>
      <div class="flex-1 ml-9 mb-2 md:mb-0">
        <span>$ {{ product.price }}</span>
      </div>
      <button @click="tambahProduct(product)" class="ml-0 md:ml-2 w-full md:w-auto p-2 bg-green-500 text-white rounded hover:bg-green-700 mb-2 md:mb-0">
        <font-awesome-icon icon="cart-plus" class="mr-2" />Tambah
      </button>
    <button @click="removeProduct(product.id)" class=" ml-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
      <font-awesome-icon icon="trash" class="mr-2" />Remove</button>
    </div>
    <div class="flex w-full flex-col justify-end md:flex-row items-center p-3 rounded shadow">
    
    <button @click="addProduct" class="mt-4 p-2 flex items-center  bg-blue-500 text-white rounded hover:bg-blue-700 w-full md:w-auto">
      <font-awesome-icon icon="plus" class="mr-2" />Add Product
    </button>
    </div>
  </Table>
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
      products.value.push({ id: Date.now(), name: '', price: 0, quantity: 1, discount: 0 ,image: ''});
    };

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

<style scoped>
.w-20 {
  width: 5rem;
}

.h-20 {
  height: 5rem;
}

.object-cover {
  object-fit: cover;
}

.md\\:mr-4 {
  margin-right: 1rem;
}
</style>
