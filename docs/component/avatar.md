# 头像

头像组件,可以适配文字,图片以及图标。

```json
"usingComponents": {
    "ui-avatar": "mp-cu/colorUI/components/ui-avatar/ui-avatar"
    "ui-avatar-stack": "mp-cu/colorUI/components/ui-avatar-stack/ui-avatar-stack"
}
```

## 形状

`radius`, `round`, `ellipse` 提供圆角,圆形,和超椭圆形状。

![mp-cu](https://color-ui.gitee.io/assest/mp-cu-doc/avatar/avatar.png)

```html
<ui-avatar ui="radius"/>
<ui-avatar ui="round"/>
<ui-avatar ui="ellipse"/>
```


## 大小

![mp-cu](https://color-ui.gitee.io/assest/mp-cu-doc/avatar/avatar1.png)

```html
<ui-avatar ui="ellipse sm">sm</ui-avatar>
<ui-avatar ui="ellipse ">df</ui-avatar>
<ui-avatar ui="ellipse lg">lg</ui-avatar>
<ui-avatar ui="ellipse xl">xl</ui-avatar>
<ui-avatar ui="ellipse xxl">xxl</ui-avatar>
<ui-avatar ui="ellipse sl">sl</ui-avatar>
```

## 背景

![mp-cu](https://color-ui.gitee.io/assest/mp-cu-doc/avatar/avatar2.png)

```html
<ui-avatar ui="ellipse" bg="bg-orange">Wg</ui-avatar>
<ui-avatar ui="ellipse" bg="bg-red">Wxm</ui-avatar>
<ui-avatar ui="ellipse" bg="bg-blue-thin">李</ui-avatar>
<ui-avatar ui="ellipse" bg="bg-orange-light">Dg</ui-avatar>
<ui-avatar ui="ellipse" bg="bg-orange-gradient">W</ui-avatar>
<ui-avatar ui="ellipse" bg="bg-blue-red">Zz</ui-avatar>
```

## 图像

![mp-cu](https://color-ui.gitee.io/assest/mp-cu-doc/avatar/avatar3.png)

```html
<ui-avatar ui="radius" src="/static/avatar/1001.jpg"/>
<ui-avatar ui="round" src="/static/avatar/1002.jpg"/>
<ui-avatar ui="ellipse" src="/static/avatar/1003.jpg"/>
```

## 图标

![mp-cu](https://color-ui.gitee.io/assest/mp-cu-doc/avatar/avatar4.png)

```html
<ui-avatar ui="radius" icon="cicon-android"/>
<ui-avatar ui="round" icon="cicon-link"/>
<ui-avatar ui="ellipse" icon="cicon-apple text-white" src="/static/avatar/1001.jpg"/>
```

## 角标

![mp-cu](https://color-ui.gitee.io/assest/mp-cu-doc/avatar/avatar5.png)

```html
<ui-avatar ui="radius xl" src="/static/avatar/1001.jpg">
    <ui-tag badge isSlot>3</ui-tag>
</ui-avatar>
<ui-avatar ui="round xl">
    <text>As</text>
    <ui-tag badge bg="bg-blue" isSlot>vip</ui-tag>
</ui-avatar>
<ui-avatar ui="round xl bg-blue">
    <text>Bf</text>
    <ui-tag badge="br" bg="shadow bg-white" isSlot>
        <text class="cicon-male text-blue"/>
    </ui-tag>
</ui-avatar>
<ui-avatar ui="round xl bg-pink">
    <text>Cv</text>
    <ui-tag badge="bl" bg="shadow bg-white" isSlot>
        <text class="cicon-female text-pink"/>
    </ui-tag>
</ui-avatar>
<ui-avatar ui="round xl bg-blue-thin borders border-blue">
    <text>Jx</text>
    <ui-tag badge="tl" ui="borders border-blue shadow-blue" bg="bg-blue-light" isSlot>user</ui-tag>
</ui-avatar>
```

## 多头像层叠

![mp-cu](https://color-ui.gitee.io/assest/mp-cu-doc/avatar/avatar6.png)

```html
<ui-avatar-stack>
    <ui-avatar ui="round xl" src="/static/avatar/1001.jpg" stack first/>
    <ui-avatar ui="round xl" src="/static/avatar/1002.jpg" stack/>
    <ui-avatar ui="round xl" src="/static/avatar/1003.jpg" stack/>
</ui-avatar-stack>
```

![mp-cu](https://color-ui.gitee.io/assest/mp-cu-doc/avatar/avatar7.png)

```html
<ui-avatar-stack reverse>
    <ui-avatar ui="round xl" bg="ui-BG-2" src="/static/avatar/1001.jpg" stack reverse first/>
    <ui-avatar ui="round xl" bg="ui-BG-2" src="/static/avatar/1002.jpg" stack reverse/>
    <ui-avatar ui="round xl" bg="ui-BG-2" src="/static/avatar/1003.jpg" stack reverse/>
</ui-avatar-stack>
```

## 头像组

![mp-cu](https://color-ui.gitee.io/assest/mp-cu-doc/avatar/avatar8.png)

```html
<view class="p-3 flex align-center">
    <ui-avatar ui="sl" srcs="{{srcData1}}"/>
    <ui-avatar ui="sl" srcs="{{srcData2}}"/>
    <ui-avatar ui="sl" srcs="{{srcData3}}"/>
    <ui-avatar ui="sl" srcs="{{srcData4}}"/>
    <ui-avatar ui="sl" srcs="{{srcData5}}"/>
</view>
<view class="p-3 flex align-center">
    <ui-avatar ui="sl" srcs="{{srcData6}}"/>
    <ui-avatar ui="sl" srcs="{{srcData7}}"/>
    <ui-avatar ui="sl" srcs="{{srcData8}}"/>
    <ui-avatar ui="sl" srcs="{{srcData9}}"/>
</view>
```

data 数据

```javascript
srcData1: ['/static/avatar/1001.jpg'],
srcData2: ['/static/avatar/1001.jpg', '/static/avatar/1002.jpg'],
srcData3: [
    '/static/avatar/1001.jpg', '/static/avatar/1002.jpg', '/static/avatar/1003.jpg'
],
srcData4: [
    '/static/avatar/1001.jpg', '/static/avatar/1002.jpg',
    '/static/avatar/1003.jpg', '/static/avatar/1004.jpg'
],
srcData5: [
    '/static/avatar/1001.jpg','/static/avatar/1002.jpg', '/static/avatar/1003.jpg',
    '/static/avatar/1004.jpg','/static/avatar/1001.jpg'
],
srcData6: [
    '/static/avatar/1001.jpg','/static/avatar/1002.jpg','/static/avatar/1003.jpg',
    '/static/avatar/1004.jpg','/static/avatar/1001.jpg','/static/avatar/1002.jpg'
],
srcData7: [
    '/static/avatar/1001.jpg','/static/avatar/1002.jpg','/static/avatar/1003.jpg',
    '/static/avatar/1004.jpg','/static/avatar/1001.jpg','/static/avatar/1002.jpg',
    '/static/avatar/1003.jpg'
],
srcData8: [
    '/static/avatar/1001.jpg','/static/avatar/1002.jpg','/static/avatar/1003.jpg',
    '/static/avatar/1004.jpg','/static/avatar/1001.jpg','/static/avatar/1002.jpg',
    '/static/avatar/1003.jpg','/static/avatar/1004.jpg'
],
srcData9: [
    '/static/avatar/1001.jpg','/static/avatar/1002.jpg','/static/avatar/1003.jpg',
    '/static/avatar/1004.jpg','/static/avatar/1001.jpg','/static/avatar/1002.jpg',
    '/static/avatar/1003.jpg','/static/avatar/1004.jpg','/static/avatar/1001.jpg'
]
```

## 参数

### ui-avatar 参数

|  参数  |  类型  |  可选值  |  默认值  |       说明       |
|----------|----------|----------|----------|----------|
| bg | String | - | ui-BG | 背景颜色 |
| ui | String | - | - | 其它样式 |
| src | String | - | - | 图片地址 |
| srcs | Array | - | - | 图片地址数组 |
| icon | String | - | - | 图标class |
| stack | Boolean | - | false | 多头像层叠 |
| reverse | Boolean | - | false | 多头像反向层叠 |
| first | Boolean | - | false | 是否为首个 |


### ui-avatar-stack 参数

|  参数  |  类型  |  可选值  |  默认值  |       说明       |
|----------|----------|----------|----------|----------|
| ui | String | - | - | 其它样式 |
| reverse | Boolean | - | false | 多头像反向层叠 |

