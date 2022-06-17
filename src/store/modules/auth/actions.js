import { authService } from "../../../services";

const actions = {
  async setLogin(vuexContext, payload) {
    const res = await authService.login();
    if (
      payload.userName === res.data.userName &&
      payload.password === res.data.password
    ) {
      vuexContext.commit("SET_LOGIN", res.data);
      return {
        ...res.data,
        success: true,
      };
    } else {
      return {
        success: false,
      };
    }
  },
};
export default actions;
