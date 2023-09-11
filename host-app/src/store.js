import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      items: [],
    };
  },
  getters: {
    totalAmount(state) {
      return Math.round(state.items.reduce((acc, x) => acc + x.price * x.quantity, 0));
    },
  },
  mutations: {
    add(state, payload) {
      if (state.items.some((x) => x.id == payload.id)) {
        state.items = state.items.map((x) => {
          if (x.id == payload.id) {
            x.quantity++;
          }
          return x;
        });
      } else {
        state.items = state.items.concat({ ...payload, quantity: 1 });
      }
    },
    remove(state, id) {
      state.items = state.items.filter((x) => x.id != id);
    },
    clear(state) {
      state.items = [];
    },
  },
});
