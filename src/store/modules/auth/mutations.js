const mutations = {
  SET_LOGIN(state, payload) {
    state.isLogin = true;
    state.loginUser = payload;
  },
};

export default mutations;
