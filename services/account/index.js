let _this;
import api from "./api.json";

export default (context, inject) => {
  let app = context.app;
  _this = app;
  inject("account", new App());
};
class App {
  getAccountUser(Data) {
    const token = localStorage.token || "";
    return _this.$call({
      url: api.userInfo.url,
      method: api.userInfo.method,
      data: Data,
      options: {
        headers: {
          Authorization: `bearer ${token}`
        }
      }
    });
  }
}
