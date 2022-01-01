let _this;
import api from "./api.json";
export default (context, inject) => {
  let app = context.app;
  _this = app;
  inject("category", new App());
}
class App {
  getCategoryItems(Data) {
    return _this.$call({
      url: api.category.url,
      method: api.category.method,
      data: Data,
    });
  }
}
