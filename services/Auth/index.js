let _this;
import api from "./api.json";

export default (context, inject) => {
  let app = context.app;
  _this = app;
  inject("auth", new App());
};
class App {
  Register(Data) {
    return _this.$call({
      url: api.register.url,
      method: api.register.method,
      data: Data,
    });
  }
  login(Data) {
    return _this.$call({
      url: api.login.url,
      method: api.login.method,
      data: Data,
    });
  }
}
