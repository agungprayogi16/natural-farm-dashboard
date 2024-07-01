<template>
  <div class="order-summary w-full shadow-lg rounded-lg p-6 mb-6 max-w-lg mx-auto bg-white">
    <div class="text-2xl font-semibold mb-6 text-gray-800">Order Summary</div>
    <ul>
      <li v-for="item in cart" :key="item.id" class="flex justify-between items-center mb-4 p-2 border-b">
        <div>
          <div class="font-medium text-gray-700">{{ item.name }}</div>
          <div class="text-sm text-gray-500">{{ formatCurrency(item.price) }} x {{ item.quantity }}</div>
        </div>
        <button @click="removeProduct(item.id)" class="text-red-500 hover:text-red-700">Remove</button>
      </li>
    </ul>
    <hr class="my-4" />
    <div class="text-right text-xl font-semibold text-gray-800">Total: {{ formatCurrency(total) }}</div>

    <PaymentSelection :price="total" :value="selectedPayment" @update:value="updatePayment" />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import PaymentSelection from './PaymentSelection.vue';

export default {
  components: {
    PaymentSelection,
  },
  data() {
    return {
      selectedPayment: null,
    };
  },
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['total']),
  },
  methods: {
    ...mapActions(['removeProductFromCart']),
    removeProduct(productId) {
      this.removeProductFromCart(productId);
    },
    formatCurrency(value) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(value);
    },
    updatePayment(payment) {
      this.selectedPayment = payment;
    },
  },
};
</script>

<style scoped>
.order-summary {
  max-width: 400px;
  margin: auto;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  border-radius: 0.75rem;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  background-color: #ffffff;
}

.order-summary .text-2xl {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #2d3748;
}

.order-summary ul {
  list-style: none;
  padding: 0;
}

.order-summary li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-bottom: 1px solid #e2e8f0;
}

.order-summary li div {
  display: flex;
  flex-direction: column;
}

.order-summary li .font-medium {
  font-weight: 500;
  color: #4a5568;
}

.order-summary li .text-gray-500 {
  color: #a0aec0;
}

.order-summary hr {
  margin: 1.5rem 0;
}

.order-summary .text-right {
  text-align: right;
}

.order-summary .text-xl {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
}

.order-summary button {
  background: none;
  border: none;
  color: #f56565;
  cursor: pointer;
  transition: color 0.2s;
}

.order-summary button:hover {
  color: #e53e3e;
}
</style>
