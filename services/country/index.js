let _this;
import api from "./api.json";
export default (context, inject) => {
  let app = context.app;
  _this = app;
  inject("country", new App());
}
class App {
  getCountryItems(Data) {
    return _this.$call({
      url: api.country.url,
      method: api.country.method,
      data: Data,
    });
  }
}
