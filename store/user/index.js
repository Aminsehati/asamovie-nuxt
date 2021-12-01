export const state = () => ({
  user: {
    phone: "",
    firstName: "",
    lastName: "",
    isLogin: !!localStorage.getItem("token"),
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
};
