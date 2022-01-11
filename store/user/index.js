export const state = () => ({
  user: {
    isLogin: !!localStorage.getItem("token"),
    token: localStorage["token"],
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
      isLogin:false,
      token:""
    };
  },
};
