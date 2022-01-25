export const state = () => ({
  user: {
    isLogin: false,
    firstName : "",
    lastName : ""
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
  setUserInfo(state , item){
    state.user = {
      ...state.user,
      firstName:item.firstName,
      lastName:item.lastName,
    }
  },
  resetToken(state) {
    state.user = {
      isLogin:false
    };
  },
};
