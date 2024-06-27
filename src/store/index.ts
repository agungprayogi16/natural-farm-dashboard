import { createStore } from 'vuex';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  discount: number;
}

export default createStore({
  state: {
    cart: [] as Product[],
    additionalDiscount: 0,
  },
  mutations: {
    addProductToCart(state, product: Product) {
      const existingProduct = state.cart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += product.quantity;
        existingProduct.discount = product.discount;
      } else {
        state.cart.push(product);
      }
    },
    removeProductFromCart(state, productId: number) {
      state.cart = state.cart.filter(product => product.id !== productId);
    },
    updateProductInCart(state, product: Product) {
      const index = state.cart.findIndex(item => item.id === product.id);
      if (index !== -1) {
        state.cart[index] = product;
      }
    },
    setAdditionalDiscount(state, discount: number) {
      state.additionalDiscount = discount;
    }
  },
  actions: {
    addProductToCart({ commit }, product: Product) {
      commit('addProductToCart', product);
    },
    removeProductFromCart({ commit }, productId: number) {
      commit('removeProductFromCart', productId);
    },
    updateProductInCart({ commit }, product: Product) {
      commit('updateProductInCart', product);
    },
    applyAdditionalDiscount({ commit }, discount: number) {
      commit('setAdditionalDiscount', discount);
    }
  },
  getters: {
    cart(state) {
      return state.cart;
    },
    additionalDiscount(state) {
      return state.additionalDiscount;
    },
    total(state) {
      return state.cart.reduce((sum, product) => sum + product.price * product.quantity, 0) - state.additionalDiscount;
    }
  }
});
