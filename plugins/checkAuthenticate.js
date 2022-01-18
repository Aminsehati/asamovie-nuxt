import axios from "axios";

if (localStorage.token ) {
  axios.defaults.headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Authorization": `bearer ${localStorage.token}`
  }
}
let _this;
export default function (context, inject) {
  let app = context.app
  _this = app;
  inject('checkAuthenticate', new Application())
  _this.router.afterEach(() => {
    //do something to validate
    _this.$checkAuthenticate.checkRouterAndAuthenticate();
  })
}

class Application {
  constructor() {
    //Application.prototype.lockDevTools()
    Application.prototype.checkRouterAndAuthenticate()
  }

  checkRouterAndAuthenticate() {
    // if (localStorage.token) {
    //   axios.defaults.headers = {
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Headers": "*",
    //     "authorization": `Bearer ${localStorage.token}`
    //   }

    //   if (window.location.pathname.indexOf('login') > -1) {
    //     window.location.href = window.location.origin
    //   }
    // } else {
    //   localStorage.clear()
    //   axios.defaults.headers = {
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Headers": "*",
    //     "authorization": ""
    //   }
    //   if (window.location.pathname.indexOf('login') <= -1) {
    //     window.location.href = window.location.origin + '/login';
    //   }
    // }
  }

  logOut() {
    localStorage.clear();
    axios.defaults.headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Authorization": "",
      "Access-Control-Allow-Credentials":true,
    }
    if (window.location.pathname.indexOf('login') <= -1) {
      window.location.href = window.location.origin + '/login';
    }
  }
}
