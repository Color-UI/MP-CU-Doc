<div class="mp-cu-doc-theme-content">

# Api 说明

对应的 `mp-sdk`  文件夹，目录结构是下面这样的。

```
├─ config (MP-CU配置文件)
│  └─ mp-sdk.js  (扩展方法函数配置)
└─ mp-sdk (额外扩展的文件夹)
   ├─ components
   ├─ icon  (扩展图标)
   │  └─ doc.scss
   ├─ lib   (扩展方法函数库)
   │  ├─ array.js
   │  ├─ dataType.js
   │  ├─ date.js
   │  ├─ object.js
   │  ├─ random.js
   │  ├─ request.js
   │  ├─ tools.js
   │  └─ index.js
   ├─ wxs   (wxml文件中使用的)
   │  └─ tools.wxs
   └─ index.js
```

::: tip
!!! 注意，当前文件夹不是必须的，只是作为扩展项存在，如果您的实际项目中，使用不上，可删除。

如果您需要移除当前扩展项，需要将 `config/mp-sdk.js` 一同删除，并更改 `app.js` 的配置。

如果是新项目，不配置即可。
:::



## 配置文件

您可单独设置一个 `config.js` 里面配置相关信息，然后暴露方法给 `app.js` 在全局引用，默认在 `config/mp-sdk.js`

```javascript
import { colorUISdk } from './config/mp-sdk'
App({
    colorUISdk,
    onLaunch() {
        
    }
})
```

`config.js` 配置文件需要您定义成类似以下的内容,  默认在 `config/mp-sdk.js`

```javascript
//扩展方法函数配置
import ColorUISdk from '../mp-sdk/index'
export const colorUISdk = new ColorUISdk({
    //当前环境，produce，dev，host
    env: 'dev',
    //实际项目版本
    version: '1.0.0',
    api: {
        //生产环境
        produce: {
            url: '域名'
        },
        //开发环境
        dev: {
            url: '域名'
        },
        //本地环境
        host: {
            url: '域名'
        },
        header: {
            "Content-Type": "application/json"
        },
    },
})
```

## 配置说明

我们不建议您直接修改 `mp-sdk/lib` 文件夹下的相关文件，以免后续升级更新时，被覆盖，建议在外部`config/mp-sdk.js`里配置。


## 使用方式

在需要使用的地方，使用 `colorUISdk.xxxx` 即可。

```javascript
console.log(colorUISdk.isRandom.getRandom(6)) //方法函数调用
console.log(colorUISdk.version) //版本
console.log(colorUISdk.env) //环境
```


## 配置参数

|  参数  |  类型  |  可选值  |  默认值  |       说明       |
|----------|----------|----------|----------|----------|
| env | string | produce，dev，host | dev | 当前环境 |
| version | string | - | 1.0.0 | 实际项目版本 |
| api | string | 见下文 | 见下文 | 请求配置，详细配置见下文 |


## 请求环境

|  参数  |  类型  |  可选值  |  默认值  |       说明       |
|----------|----------|----------|----------|----------|
| produce | - | - | - | 生产环境 |
| dev | - | - | - | 开发环境 |
| host | - | - | - | 本地环境 |


## 请求配置参数

|  参数  |   可选值  |  默认值  |       说明       |
|----------|----------|----------|----------|
| url | - | - | 请求域名 |
| header | - | Content-Type: application/json | 配置header |


::: tip
目前配置项还比较少，方法函数也没有测试完，如有bug，或者好的提议，欢迎[issues](https://github.com/Color-UI/MP-CU/issues)
:::

</div>