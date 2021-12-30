<div class="mp-cu-doc-theme-content">

# 配置

## 目录结构

默认的MP-CU项目，目录结构是下面这样的。

```
├─ config (MP-CU配置文件)
│  ├─ ColorUI.js (UI框架核心配置文件)
│  └─ mp-sdk.js  (扩展方法函数配置)
├─ mp-cu (UI组件库核心文件夹)
│  ├─ colorUI
│  ├─ lib
│  ├─ store
│  └─ main.js
├─ mp-sdk (额外扩展的文件夹)
│  ├─ components
│  ├─ icon  (扩展图标)
│  │  └─ doc.scss
│  ├─ lib   (扩展方法函数库)
│  │  └─ ...
│  ├─ wxs
│  │  └─ tools.wxs
│  └─ index.js
├─ packageA (分包A = 模板模块)
├─ packageB (分包B = 实验室模块)
├─ pages
├─ static
├─ app.scss
├─ app.js
├─ app.json
└─ project.config.json
```

## 配置环境

MP-CU需要scss的支持，在根目录下，`project.config.json` 配置文件内的 `"setting"` 节点下，配置：

```json
"useCompilerPlugins": [
    "sass"
]
```

由于小程序默认开启了 `v2` 的样式，在v2模式下，`ColorUI` 部分样式会失效。
完整 `ColorUI` 样式，需要在 `app.json` 文件内，删除 `"style": "v2"` 即可

```json
"style": "v2"
```

然后，在根目录的 `app.scss` 文件里引入相关框架的css文件。
```css

@import './mp-cu/colorUI/scss/ui';

/*  实际项目中，可删除下面的相关文件和引用，因为图标太多，体积较大，
    可能你项目里并不需要这么多图标，建议自行添加需要的扩展icon图标引用。*/

/* @import './mp-sdk/icon/doc'; */
```


## 配置文件

您可单独设置一个 `config.js` 里面配置相关信息，然后暴露方法给 `app.js` 在全局引用，默认在 `config/ColorUI.js`

```javascript
import { colorUI } from './config/ColorUI'
App({
    colorUI,        //挂载到app上，此步骤必须要有！
    onLaunch() {
        
    }
})
```

`config.js` 配置文件需要您定义成类似以下的内容,  默认在 `config/ColorUI.js`
> 由于微信小程序无法使用vue.key来全局命名变量，导致习惯vue的用户很不习惯，而且微信内部并不存在像vuex这样的状态管理机制，为满足上述想法，colorUI  MP-CU 为您定制了一套自有的扩展包，你可以在全局导入变量、函数、方法，同时您也可以定义您自己的状态（` vuex `）.
> 内置的vuex 渲染引擎参考了 [wxMiniStore](https://github.com/xiaoyao96/wxMiniStore) 的项目。

```javascript
//引入框架的方法函数库
import ColorUI from './mp-cu/main'
export const colorUI = new ColorUI({
   config: {
       theme: 'auto',
       main: 'blue',
       text: 1,
       footer: true,
       share: true,
       shareTitle: 'MP CU**（ ColorUI3.x 原生小程序版）**',
       homePath: '/pages/home/home',
       tabBar: []
   },
   data: {
      //全局data
   }, 
   methods: {
      //全局函数
   }
})
```

## 配置说明

我们不建议您直接修改 `mp-cu` 文件夹下的相关文件，以免后续升级更新时，被覆盖，所以，建议在外部`config/ColorUI.js`里配置。

### config

你可能已经注意到了，在 ColorUI 配置中有一项 `config` 配置项。

|  参数  |  类型  |  可选值  |  默认值  |       说明       |
|----------|----------|----------|----------|----------|
| theme | string | auto, light, dark | auto | 设置默认主题 |
| main | string | - | blue | 设置默认强调色 |
| text | string | 0-4 | 1 | 设置默认字号等级 |
| footer | boolean | - | true | 显示底部colorUI版权 |
| homePath | string | - | /pages/index/index | 设置首页路径 |
| tabBar | array | - | - | 配置系统tabBar |
| share | boolean | - | false | 开启全局分享 |
| shareTitle | string | - | - | 全局分享标题 |

> 如果属于开源作品，请带上ColorUI版权，`footer: true`
>
> 一些组件会用到跳回主页，请每个项目设置好 `homePath`
>
> 自动跟随系统主题功能，需要在 `app.json` 文件里配置：

```json
"darkmode": true
```

> 开启自动跟随后，在安卓机端切换主题时，会重载小程序，具体原因，[参考微信官方说明](https://developers.weixin.qq.com/community/develop/doc/000a88c66f00183d414c9879451400)

::: tip
配置的config你可以在 `page`，`components` 中通过 `this.data.$cuConfig` 获得
:::


#### tabBar

此处的tabBar，非原生的tabBar。

```javascript
tabBar: [{
        title: '文档',
        icon: '/static/tab_icon/document.png',
        curIcon: '/static/tab_icon/document_cur.png',
        url: '/pages/home/home',
        type: 'tab'
    },
    {
        title: '我的',
        icon: '/static/tab_icon/my.png',
        curIcon: '/static/tab_icon/my_cur.png',
        url: '/pages/my/home',
        type: 'tab'
    }
]
```

|  参数  |  类型  |  可选值  |  默认值  |       说明       |
|----------|----------|----------|----------|----------|
| title | string | - | - | 标题名称 |
| icon | string | - | - | 默认图标 |
| curIcon | string | - | - | 选中的图标 |
| url | string | - | - | 跳转路径 |
| type | string | tab, nav, tap | - | 跳转类型 |

> 跳转类型: `tab` = `wx.switchTab()`
>
> 跳转类型: `nav` = `wx.navigateTo()`
>
> 跳转类型: `tap` = `this.triggerEvent("tap")` (此模式下，非跳转，而是触发事件)


### data

只要您在 `app.js` 里面挂载上ColorUI以后，您不需要在 `page`，`components` 中获取系统信息，因为ColorUI已经帮您写好在对应的data里面了，您只需要使用就可以了。

> 例如在demo的home 页面中，在page的data中并没有定义sys_navBar，但是在页面和js中仍然可以使用，这些数据是根据手机状态实时变化的！

```
// ColorUI 为您在data中事先定义好的数据
sys_info
sys_navBar
sys_statusBar
sys_capsule
```

```javascript
//引入框架的方法函数库
import ColorUI from './mp-cu/main'
export const colorUI = new ColorUI({
   config: {
       
   },
   data: {
      //全局data
       name: 'hello'
   },
   methods: {
      //全局函数
   }
})
```

您在 `config/ColorUI.js` 里面配置的data数据，也可以在页面的data里面访问到，ColorUI将配置的数据定义到$cuData属性里面中了。

::: tip
 配置的data内容你可以在 `page`，`components` 中通过 `this.data.$cuData` 获得
:::

### methods

注意，您设置的函数，data，等配置名称不能存在以下情况，[`"data"` ,
` "onLoad" `,
` "onShow" `,
` "onReady" `,
` "onHide" `,
` "onUnload" `,
` "onPullDownRefresh" `,
` "onReachBottom" `,
` "onShareAppMessage" `,
` "onPageScroll" `,
` "onTabItemTap" `,
` "setTheme" `,
` "setMain" `,
` "setText" `,
` "_toHome" `,
` "_toPath" `,
` "_backPage" `,
` "sys_isFirstPage"`
]


```javascript
//引入框架的方法函数库
import ColorUI from './mp-cu/main'
export const colorUI = new ColorUI({
   config: {
       
   },
   data: {
      //全局data
   },
   methods: {
      //全局函数
       cuLog (message, ...optionalParams) {
           console.log(message, ...optionalParams)
       }
   }
})
```

在项目所有页面中，都可以直接调用`this.cuLog ()`,就可以调用该config 文件中的函数体

::: tip
配置的函数方法，都会在`page`，`components`里面注册在相应位置，您只需要调用即可
:::

</div>
