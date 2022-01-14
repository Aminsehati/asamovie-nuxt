export const state = () => ({
  user: {
    isLogin: false,
  },
});
export const getters = {
  getUser(state) {
    return state.user;
  },
};
export const mutations = {
  setStatusLogin(state, item) {
    state.user.isLogin = item;
  },
  resetToken(state) {
    state.user = {
      isLogin:false
    };
  },
};
