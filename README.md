# vue-base-project

> A base Vue.js project

## 环境依赖

```
 "node": ">= 6.0.0",
 "npm": ">= 3.0.0"
```

## 项目构建及运行

``` bash
# 安装淘宝镜像，如果已经安装可以换忽略，如果有vpn可以忽略(npm包一般需要翻墙下载，故选择淘宝镜像安装)
npm i cnpm -g

# 安装项目依赖
cnpm i

# 启动项目及代码热更新，访问路径localhost:8080（默认端口8080可以在config/index.js修改端口）
npm run dev

# 构建生产发布（此步骤一般在服务器端完成）
npm run build

```

## 项目说明

### 项目文档

- [vue](https://cn.vuejs.org/v2/guide/)
- [vuex](https://vuex.vuejs.org/zh-cn/) 状态管理模式
- [ES6](http://es6.ruanyifeng.com/) 
- [iview](https://www.iviewui.com/docs/guide/install)基础组件
- [sass](https://www.sass.hk/docs/) css语法
- [vue-router](https://router.vuejs.org/zh-cn/) 路由
- [axios](https://github.com/axios/axios) http请求
- [lodash](https://www.lodashjs.com/) JavaScript 实用工具库

### 文件目录

```bash
project/
|
├── build           //项目构建目录
|  ├── build.js
|  ├── check-versions.js
|  ├── utils.js
|  ├── vue-loader.conf.js
|  ├── webpack.base.conf.js
|  ├── webpack.dev.conf.js
|  └── webpack.prod.conf.js
|
├── config
|   ├── dev.env.js
|   ├── index.js
|   └── rod.env.js
|
├── node_modules
|
├── src
|   ├── assets
|   |   ├── css   
|   |   ├── images
|   |   └── js
|   |
|   ├── components
|   ├── mock
|   ├── pages
|   ├── router
|   ├── template
|   └── vuex
|
├── App.vue
|
├── main.js
|
├── static
|
├── .babelrc
|
├── .gitignore
|
├── index.html
|
├── package.json
|
├── package-lock.json
|
└── README.md
```
