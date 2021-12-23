<div class="mp-cu-doc-theme-content">

# 导航栏

自定义顶部导航栏,适用于所有页面,小程序有返回胶囊样式可以使用。

```json
"usingComponents": {
    "ui-navbar": "/mp-cu/colorUI/components/ui-navbar/ui-navbar"
}
```

::: tip
默认导航栏,自动判断当前页面是否为首页而改变图标和跳转(请在 `config.js` 里配置首页)
:::

## 仅图标

![mp-cu](https://colorui-assest.vercel.app/mp-cu-doc/other/ozgly.jpg)


```html
<ui-navbar/>
```

## 返回文本

![mp-cu](https://colorui-assest.vercel.app/mp-cu-doc/other/i4ux8.jpg)

```html
<ui-navbar backtext="text"/>
```

## 有阴影

![mp-cu](https://colorui-assest.vercel.app/mp-cu-doc/other/7i87w.jpg)

```html
<ui-navbar shadow/>
<ui-navbar shadow="sm"/>
<ui-navbar shadow="lg"/>
```

## 参数

|  参数  |  类型  |  可选值  |  默认值  |       说明       |
|----------|----------|----------|----------|----------|
| back | Boolean | - | true | 是否显示返回 |
| backtext | String | - | - | 返回文本 |
| status | String | light,dark | - | 状态栏文本颜色 |
| opacity | Boolean | - | false | 开启滑动渐变后,文本样式是否翻转 |
| opacityBg | Boolean | - | false | 开启滑动渐变后,返回按钮是否添加背景 |
| fixed | Boolean | - | false | 是否浮动占位,为true时浮动不占位 |
| shadow | Boolean,String | true,false,sm,lg | - | 是否开启阴影 |
| capsule | Boolean | - | false | 是否开启胶囊返回 |
| bg | String | - | box-bg | 背景颜色 |
| img | String | - | box-bg | 背景图片 |
| isSlot | Boolean | - | true | 开启slot默认插槽 |
| isCenter | Boolean | - | false | 开启slot中间插槽 |
| isRight | Boolean | - | true | 开启slot右边插槽 |
| scrollTop | Number | - | 0 | 滚动条位置 |


## 插槽

|  参数  |       说明       |
|----------|----------|
| 无 | 自定义整条bar,需要将参数custom设置为true |
| left | 自定义bar的左边内容(默认带有back的部分,完全自定义左边部分请将参数back设置为false) |
| center | 自定义bar的中间内容 |
| right | 自定义bar的右边内容,排序从右开始的弹性布局,小程序端会自动生成胶囊的安全区域。做小程序及跨端的时候right表现的不是很理想，请以项目实际情况自定义right部分 |

</div>