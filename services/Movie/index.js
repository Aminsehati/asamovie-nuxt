let _this;
import api from "./api.json";
export default (context, inject) => {
  let app = context.app;
  _this = app;
  inject("Movie", new App());
}
class App {
  getMovieItems(Data) {
    return _this.$call({
      url: api.movieItmes.url,
      method: api.movieItmes.method,
      data: Data,
    });
  }
  getMovieItem(id){
    return _this.$call({
      url: api.movieItem.url + id ,
      method: api.movieItem.method
    });
  }
}
