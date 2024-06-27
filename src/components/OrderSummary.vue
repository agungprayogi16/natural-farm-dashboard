<template>
  <div class="order-summary  shadow-md rounded-lg p-4 mb-4 max-w-lg mx-auto">
    <div class="text-xl font-semibold mb-4">Order Summary</div>
    <ul>
      <li v-for="item in cart" :key="item.id" class="flex justify-between items-center mb-2">
        <div>
          <div class="font-medium">{{ item.name }}</div>
          <div class="text-sm text-gray-500">{{ formatCurrency(item.price) }} x {{ item.quantity }}</div>
        </div>
        <button @click="removeProduct(item.id)" class="text-red-500 hover:text-red-700">Remove</button>
      </li>
    </ul>
    <hr class="my-4" />
    <div class="text-right text-lg font-semibold">Total: {{ formatCurrency(total) }}</div>

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

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
}
.order-summary .text-xl {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
}
.order-summary ul {
  list-style: none;
  padding: 0;
}
.order-summary li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}
.order-summary li div {
  display: flex;
  flex-direction: column;
}
.order-summary li .font-medium {
  font-weight: 500;
}
.order-summary li .text-gray-500 {
  color: #6b7280;
}
.order-summary hr {
  margin: 1rem 0;
}
.order-summary .text-right {
  text-align: right;
}
.order-summary .text-lg {
  font-size: 1.125rem;
  font-weight: 600;
}
.order-summary button {
  background: none;
  border: none;
  color: #ef4444;
  cursor: pointer;
  transition: color 0.2s;
}
.order-summary button:hover {
  color: #dc2626;
}
</style>
