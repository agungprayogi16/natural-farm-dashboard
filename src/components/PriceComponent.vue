<template>
  <div>
    <PaymentSelection :value="selectedPayment" :price="1000" @update:value="updatePayment" />
  </div>
</template>

<script>
import PaymentSelection from './components/PaymentSelection.vue';

export default {
  components: {
    PaymentSelection
  },
  
  data() {
    return {
      selectedPayment: 'Cash'


    };
  },
  methods: {
    updatePayment(newPayment) {
      this.selectedPayment = newPayment;

      
    }
    



  }
};
</script>
