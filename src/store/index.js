import Vue from "vue";
import Vuex from "vuex";

import createPersistedState from "vuex-persistedstate";
import { auth, cars } from "./modules";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    cars,
  },
  plugins: [
    createPersistedState({
      paths: ["auth"],
    }),
  ],
});
