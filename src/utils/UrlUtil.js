/**
 * url辅助类
 */
class UrlUtil {
  /**
   * 跳转到指定的hash路径
   * @param {String} hash 路径
   * @param {Object} params 携带的参数，此参数在浏览器的Url中体现为 ?a=1&b=2
   */
  static toUrl(hash, params = null) {
    window.location.hash = UrlUtil.getUrl(hash, params);
  }

  /**
   * 通过hash和要传递的参数，获取URL路径。 此方法只返回路径，不跳转
   * @param {String} hash 路径，从#/后面填写，例如为http://a.com/#/x, 此参数只传x
   * @param {Object} params 携带的参数，此参数在浏览器的Url中体现为 ?a=1&b=2
   * 
   * @return {String} 路径
   */
  static getUrl(hash, params = null) {
    let arrParam = null;
    if (params) {
      arrParam = [];
      for (let key in params) {
        arrParam.push(`${key}=${params[key]}`);
      }
    }
    return "#/" + hash + (arrParam ? `?${arrParam.join('&')}` : '');
  }
}

export default UrlUtil;