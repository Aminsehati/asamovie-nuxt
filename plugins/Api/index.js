import api from '@/store/api.json'

var application

// inject api methods and properties in nuxt app
export default function ({ app, store }, inject) {
  application = app
  inject('call', call)
  inject('api', api)
}

// api call method
const call = (arg) => {
  // arguments
  let method = arg.method || "get",
    url = arg.url,
    data = arg?.data || {},
    msg = arg.msg,
    options = arg.options || {},
    // read user phone from localStorage
    storageName = arg.storage || false

  // prepare api call url

  if (url.indexOf('?') > 0) {
    url = url + "&Version=" + Date.now();
  } else {
    url = url + "?Version=" + Date.now();
  }
  return new Promise((resolve, reject) => {
    // check connectivity
    if (navigator.onLine) {
      application.$axios({
        method: method,
        url: url,
        // data: method != "get" ? data : {},
        data: method != "get" ? data : {},
        params: method == "get" ? data : {},
        headers: options && options.headers ? options.headers : {}
      })
        .then(res => {
          if (method != "get" && msg) {
            // success message after submit
          }
          if (res.data.statusCode != 200) {
          }
          if (storageName) {
            if (localStorage.getItem('call_' + storageName)) {
              updateWithExpiry('call_' + storageName, res.data)
            } else {
              setWithExpiry('call_' + storageName, res.data, 7)
            }
          }
          resolve(res?.data);
        })
        .catch(err => {
          let message = ''
          if (err.response) {
            message = err?.response?.data?.message;
          } else {
            message = 'خطا در برقراری ارتباط با سرور'
          }

          if (err?.response?.status == 401) {
            localStorage.removeItem('auth.loggedIn');
            localStorage.removeItem('token');
            window.location.href = window.location.origin + '/';
          }
          else if (err?.response?.status != 200) {
            if (err?.response?.data?.message) {
            }
            else {
            }

          }
          reject(err);
        });
    } else {
      let local = getWithExpiry("call_" + storageName)
      if (local) {
        resolve(local)
      } else {
        reject(true)
      }

    }
  });
}

// set localStorage with Expiry
const setWithExpiry = (key, value, ttl) => {
  const now = new Date()
  // `item` is an object which contains the original value
  // as well as the time when it's supposed to expire
  const item = {
    value: value,
    expiry: now.getTime() + (ttl * 1000 * 60 * 60 * 24),
  }
  localStorage.setItem(key, JSON.stringify(item))
}

const updateWithExpiry = (key, value) => {
  let x = localStorage.getItem(key)
  x = JSON.parse(x)
  x.value = value
  localStorage.setItem(key, JSON.stringify(x))
}

// get localStorage with Expiry
const getWithExpiry = (key) => {
  const itemStr = localStorage.getItem(key)
  // if the item doesn't exist, return null
  if (!itemStr) {
    return null
  }
  const item = JSON.parse(itemStr)
  const now = new Date()
  // compare the expiry time of the item with the current time
  if (now.getTime() > item.expiry) {
    // If the item is expired, delete the item from storage
    // and return null
    localStorage.removeItem(key)
    return null
  }
  return item.value
}

const dxCreateStore = (options) => {
  options.onBeforeSend = function (method, ajaxOptions) {
    if (application.store.state.loggedIn)
      ajaxOptions.headers = {
        "Authorization": "headerValue"
      }
  }
  return
}