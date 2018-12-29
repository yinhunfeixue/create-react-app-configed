import axios from 'axios';

/**
 * 网络代理的配置类
 */
class ProxySetting {
  static init() {
    axios.defaults.baseURL = "./";
    axios.defaults.withCredentials = true;
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.interceptors.response.use(ProxySetting.successHandler, ProxySetting.errorHandler);
  }

  /**
   * 请求响应拦截器。
   * 通常，需要对一些消息做全局的错误处理，在此处进行。
   * 处理完成后，如果不希望
   */
  static successHandler(response) {
    //当出错时，执行全局响应处理，并不再向后执行
    // return new Promise(() => { });   表示不再向后（比如模块中的响应处理）执行
    if (false) {
      return new Promise(() => { });
    }
    return response;
  }

  /**
   * 全局错误拦截器
   * @param {*} error 
   */
  static errorHandler(error) {
    return new Promise(() => { });
  }
}

export default ProxySetting;