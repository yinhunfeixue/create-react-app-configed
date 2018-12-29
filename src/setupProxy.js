const proxy = require('http-proxy-middleware');

const config = {
  '/baiduApi': {
    target: 'http://www.baidu.com/',
    changeOrigin: true,
    pathRewrite: { "^/baiduApi": "/s" },
  },
  "/services": {
    "target": "http://172.16.66.75/",
    "changeOrigin": true
  }
};

module.exports = (app) => {
  if (config) {
    for (let key in config) {
      app.use(proxy(key, config[key]));
    }
  }
};