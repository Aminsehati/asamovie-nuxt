let _this;
import api from "./api.json";

export default (context, inject) => {
  let app = context.app;
  _this = app;
  inject("bookmark", new App());
};
class App {
  getBookMarkItems(Data) {
    return _this.$call({
      url: api.getBookMarkItems.url,
      method: api.getBookMarkItems.method,
      data: Data,
    });
  }
  getBookMarkItem(id) {
    return _this.$call({
      url: api.getBookMarkItem.url + id,
      method: api.getBookMarkItem.method
    });
  }
  addBookMark(id) {
    return _this.$call({
      url: api.addBookMark.url + id,
      method: api.addBookMark.method
    });
  }
}
