<div class="mp-cu-doc-theme-content">

# 页面 ui-sys

ColorUI提供 `<ui-sys> </ui-sys>` 组件来控制页面的表现，内嵌ColorUI的交互反馈(模态框，轻提示等)，主题样式，页面加载等，是每个页面必须有的组件。

## 基础

```html
<ui-sys>
    ...业务代码
</ui-sys>
```

## 使用背景

默认背景是 `ui-BG-2` 背景色，你也可以使用，背景 里的背景颜色来配置页面颜色。关于主题的使用，请参考 ColorUI主题。

```html
<ui-sys bg="bg-white">
    ...业务代码
</ui-sys>
```

你也可以使用背景图片来填充你的页面：

```html
<ui-sys img="....">
    ...业务代码
</ui-sys>
```

或者根据图片宽度来加载背景：

```html
<ui-sys bg="bg-none" img="....">
    ...业务代码
</ui-sys>
```

## 参数

ui-sys 的参数如下

|  参数  |  类型  |  可选值  |  默认值  |       说明       |
|----------|----------|----------|----------|----------|
| styles | Object | - | - | 内部样式 |
| bg | String | - | ui-BG-1 | 背景颜色 |
| ui | String | - | - | 其他class |
| img | String | - | - | 背景图 |
| title | String | - | - | 引入文字以开启默认导航 |
| navBg | String | - | bg-blur | 默认导航的背景色 |
| loading | String/Boolean | - | auto | 是否加载中 |
| tabbar | Boolean | - | false | 是否开启tabbar |
| footer | Boolean | - | true | 是否开启footer |


::: tip
tabbar 非原生 tabbar，当 sys 内开启 tabbar 后，原生的 tabbar 将会被隐藏
:::


</div>