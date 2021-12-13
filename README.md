# colorui-vue-doc

#### vue3.x + vite2.x + ts + colorui3.x

#### 包管理 `yarn`

<hr/>

### 此仓库给 `colorui-vue` 编写文档。

### 本地开发时：

在 `colorui-vue` 项目下，编译后，执行 `yarn link`


然后，在此项目下，执行 `yarn link colorui-vue` 进行连接开发，这样不需要把 `colorui-vue` 发布到npm上。



编写完成后，使用 `yarn unlink colorui-vue` 解除链接，并安装 `yarn add colorui-vue` 即可


> webstorm.webpack.config.js 是为了让 webstorm 认识 @ 符号的，需要在 `Preferences | Languages & Frameworks | JavaScript | Webpack` 里面设定好，就可以点击进入引用的文件夹了

