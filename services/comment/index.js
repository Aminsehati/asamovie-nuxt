let _this;
import api from "./api.json";
export default (context, inject) => {
  let app = context.app;
  _this = app;
  inject("comment", new App());
}
class App {
  getListComments(Data) {
    return _this.$call({
      url: api.listComments.url,
      method: api.listComments.method,
      data: Data,
    });
  }
  addCommnet(Data) {
    return _this.$call({
      url: api.addComment.url,
      method: api.addComment.method,
      data: Data,
    });
  }
}
