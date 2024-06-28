import { createStore } from 'vuex';
import { Product } from '../types/products';

export default createStore({
    state: {
        cart: [] as Product[],
    },
    mutations: {
        ADD_PRODUCT_TO_CART(state, product: Product) {
            state.cart.push(product);
        },
        REMOVE_PRODUCT_FROM_CART(state, productId: number) {
            state.cart = state.cart.filter(product => product.id !== productId);
        },
    },
    actions: {
        addProductToCart({ commit }, product: Product) {
            commit('', product);
        },
        removeProductFromCart({ commit }, productId: number) {
            commit('REMOVE_PRODUCT_FROM_CART', productId);
        },
    },
    getters: {
        cartProducts: state => state.cart,
    },
});
