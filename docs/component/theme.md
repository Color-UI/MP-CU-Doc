# 主题

ColorUI支持多款配色的主题方案,也支持根据系统来适配暗色主题。

```json
"usingComponents": {
    "ui-change-theme": "/mp-cu/colorUI/components/ui-change-theme/ui-change-theme"
}
```

## 主题切换

引用组件来切换系统的主题以及强调色

```html
<ui-change-theme/>
```

自动跟随系统主题功能，需要在 app.json 中配置：

```json
"darkmode": true
```

::: tip
在安卓上，切换系统主题时，会重载小程序，具体原因，[参考微信官方说明](https://developers.weixin.qq.com/community/develop/doc/000a88c66f00183d414c9879451400)
:::

![mp-cu](/images/theme.png)


## 参数

|  参数  |  类型  |  可选值  |  默认值  |       说明       |
|----------|----------|----------|----------|----------|
| radius | String,Boolean | - | - | 是否圆角,可选sm/lg |
| border | Boolean | - | - | 是否显示下划线 |
