

/**
 * 链接配置，通过修改Model的值设置不同的链接
 * model可以设置，也可以从url参数中获取
 * @author : xujunjie (yinhunfeixue@163.com)
 * @date   : 2018-2-8 14:16:03
 */
class UrlConfig {

	/**
	 * 当前链接模式，通过设置此参数，可以更换各个链接的值，此值可显式设置也可以从URL参数中获取
	 * 返回值必须在URL_DIC存在对应的键
	 */
	static get Model() {
		return 'product';
	}

	/**
	 * 在此处配置所有链接
	 * @private
	 */
	static URL_DIC = {
		'dev': {
			rootUrl: 'http://www.test.com',
			imgUrl: 'http://www.test-img.com',
		},
		'product': {
			rootUrl: 'http://www.p.com',
			imgUrl: 'http://www.p-img.com',
		}
	}

	static get rootUrl() {
		return UrlConfig._getUrl('rootUrl');
	}

	static _getUrl(name) {
		return UrlConfig.URL_DIC[UrlConfig.Model][name];
	}
}
export default UrlConfig;