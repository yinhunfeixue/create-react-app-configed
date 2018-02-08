## 基于create-react-app，添加了常配置

1. 支持：less、Map/Set、支持打包后的文件放在非根目录下
2. 添加：多模式Url配置功能，Route配置功能,添加了常用的依赖配置


## 使用方法
### 先通过git获取此项目，按如下步骤操作
1. 修改 src/App.js 搭建页面框架
2. 修改 src/config/UrlConfig.js 修改开发和生产模式（也允许更多模式）中使用到的链接
3. 在src/views中创建子页面，并在 src/config/RouteConfig.js 中配置页面的路由
4. 安装依赖包：npm i  /  cnpm i
5. 运行： npm start 
6. 打包：npm run build