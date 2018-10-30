const proxy = require('http-proxy-middleware');

const config = {
  '/services': {
    target: 'http://www.baidu.com/',
    changeOrigin: true,
    pathRewrite: { "^/services": "/s" },
  },
};

module.exports = (app) => {
  if (config) {
    for (let key in config) {
      app.use(proxy(key, config[key]));
    }
  }
};