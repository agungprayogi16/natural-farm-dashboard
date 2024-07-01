import { createStore } from 'vuex';
import { Product } from '../types/products';

// Mutation Types
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const UPDATE_CART = 'UPDATE_CART';
const SET_ADDITIONAL_DISCOUNT = 'SET_ADDITIONAL_DISCOUNT';

export default createStore({
  // State
  state: {
    cart: [] as Product[],
    additionalDiscount: 0,
  },

  // Mutations
  mutations: {
    [ADD_TO_CART](state, product: Product) {
      const existingProduct = state.cart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += product.quantity;
        if (existingProduct.quantity % 2 === 0) {
          existingProduct.discount = 30;
        } else {
          existingProduct.discount = 0;
        }
      } else {
        product.discount = product.quantity % 2 === 0 ? 30 : 0;
        state.cart.push(product);
      }
    },
    [REMOVE_FROM_CART](state, productId: number) {
      state.cart = state.cart.filter(product => product.id !== productId);
    },
    [UPDATE_CART](state, product: Product) {
      const index = state.cart.findIndex(item => item.id === product.id);
      if (index !== -1) {
        state.cart[index] = product;
      }
    },
    [SET_ADDITIONAL_DISCOUNT](state, discount: number) {
      state.additionalDiscount = discount;
    }
  },

  // Actions
  actions: {
    addProductToCart({ commit }, product: Product) {
      commit(ADD_TO_CART, product);
    },
    removeProductFromCart({ commit }, productId: number) {
      commit(REMOVE_FROM_CART, productId);
    },
    updateProductInCart({ commit }, product: Product) {
      commit(UPDATE_CART, product);
    },
    applyAdditionalDiscount({ commit }, discount: number) {
      commit(SET_ADDITIONAL_DISCOUNT, discount);
    },
  },

  // Getters
  getters: {
    cart(state) {
      return state.cart;
    },
    additionalDiscount(state) {
      return state.additionalDiscount;
    },
    total(state) {
      return state.cart.reduce((sum, product) => {
        const discountAmount = (product.price * product.discount) / 100;
        const priceAfterDiscount = product.price - discountAmount;
        return sum + priceAfterDiscount * product.quantity;
      }, 0) - state.additionalDiscount;
    },
  },
});
  