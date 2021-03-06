const axios = require('axios');
//添加响应拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.resolve(error.response);
  }
);
// axios.defaults.baseURL = process.env.VUE_APP_BASEURL
axios.defaults.baseURL = 'http://mensvsp.thinkerx.com/api/'

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.put["Content-Type"] = "application/json";
axios.defaults.headers.put["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.delete["Content-Type"] = "application/json";
axios.defaults.headers.delete["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.timeout = 20000;

function checkStatus(response) {
  return new Promise((resolve, reject) => {
    if (
      response &&
      (response.status === 200 ||
        response.status === 304 ||
        response.status === 400)
    ) {
        resolve(response.data);
    } else {
      reject({
        status: response.status,
        message: response.data.message,
        error: response.data.errors[Object.keys(response.data.errors)[0]][0]
      });
    }
  });
}
export default {
  post(url, params) {
    return axios({
      method: "post",
      url,
      data: params
    }).then(response => {
      return checkStatus(response);
    });
  },
  get(url, params) {
    return axios({
      method: "get",
      url,
      params
    }).then(response => {
      return checkStatus(response);
    });
  },
  put(url, params) {
    return axios({
      method: "put",
      url,
      data: params
    }).then(response => {
      return checkStatus(response);
    });
  },
  delete(url, params) {
    return axios({
      method: "delete",
      url,
      data: params
    }).then(response => {
      return checkStatus(response);
    });
  }
};