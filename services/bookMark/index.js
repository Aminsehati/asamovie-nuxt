let _this;
import api from "./api.json";

export default (context, inject) => {
  let app = context.app;
  _this = app;
  inject("bookmark", new App());
};
class App {
  getBookMarkItems(Data) {
    const token = localStorage.token || "";
    return _this.$call({
      url: api.getBookMarkItems.url,
      method: api.getBookMarkItems.method,
      data: Data,
      options: {
        headers: {
          Authorization: `bearer ${token}`
        }
      }
    });
  }
  getBookMarkItem(id) {
    const token = localStorage.token || "";
    return _this.$call({
      url: api.getBookMarkItem.url + id,
      method: api.getBookMarkItem.method,
      options: {
        headers: {
          Authorization: `bearer ${token}`
        }
      }
    });
  }
  addBookMark(id) {
    const token = localStorage.token || "";
    return _this.$call({
      url: api.addBookMark.url + id,
      method: api.addBookMark.method,
      options: {
        headers: {
          Authorization: `bearer ${token}`
        }
      }
    });
  }
  deleteBookMark(id) {
    const token = localStorage.token || "";
    return _this.$call({
      url: api.deleteBookMark.url + id,
      method: api.deleteBookMark.method,
      options: {
        headers: {
          Authorization: `bearer ${token}`
        }
      }
    });
  }
}
