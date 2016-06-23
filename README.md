<<<<<<< HEAD
# Simple Redux Production

=======
>>>>>>> 975b42c3ec6bdc12d2a5d8e27d769d540e4552c0
### 1.简介
这是一个React, Redux, React Router, CSS Modules, Icon font, Webpack生成器。

### 2.使用
1. git clone git@git.oschina.net:yangmingyuan/simple-redux-starter.git
2. npm install
3. npm start
4. rm -rf .git
5. git remote add origin [你的git地址]

### 3.项目结构
```
├── /blueprints/                 # redux-cli配置, 用于自动生成文件
├── /dist/                       # 编译之后的文件目录
├── /node_modules/               # 第三方依赖
├── /src/                        # 项目主目录
│   ├── /components/             # React组件
│   ├── /containers/             # 页面容器
│   ├── /redux/                  # 主要的业务逻辑
│   |   ├── /middleware/         # Redux中间件
│   |   ├── /modules/            # Actions、Reducers和Constant
│   |   |   ├── /rootreducer.js  # rootReducer
│   |   ├── /store/              # 创建store
│   ├── /static/                 # 静态资源目录
│   |   ├── /fonts/              # 字体图标库，推荐使用 [阿里巴巴矢量图标库](http://www.iconfont.cn/)
│   ├── /styles/                 # 全局的css样式
│   ├── /utils/                  # 公共的方法
│   ├── index.html               # 首页入口
│   ├── index.js                 # JS入口
│   ├── routes.js                # react-router配置
│── devServer.js                 # 开发环境启动文件
│── webpack.config.js            # Webpack开发环境配置文件
└── webpack.config.prod.js       # Webpack生产环境配置文件
```

### 4.开发与部署
- 全局安装npm i redux-cli -g, 然后在项目根目录运行
```bash
    #生成组件模版文件
    redux g dumb componentName

    #生成容器模版文件
    redux g smart moduleName
```

- 部署
```bash
    npm run build
```
<<<<<<< HEAD

### 5.todo
1. 登录之后auth问题
=======
=======
#ssp_partner
>>>>>>> 0f949cd66d0bf423cfc067cb137d70a19358cb92
>>>>>>> 975b42c3ec6bdc12d2a5d8e27d769d540e4552c0
