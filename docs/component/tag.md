# 标签

标签组件

```json
"usingComponents": {
    "ui-tag": "/mp-cu/colorUI/components/ui-tag/ui-tag"
}
```

## 默认

![mp-cu](https://color-ui.gitee.io/assest/mp-cu-doc/tag/tag-1.jpg)

```html
<ui-tag info="30"/>
```

## 形状

`ui="round"`

![mp-cu](https://color-ui.gitee.io/assest/mp-cu-doc/tag/tag-2.jpg)

```html
<ui-tag ui="" info="春风"/>
<ui-tag ui="round" info="秋日"/>
```

## 大小

`ui="{size}"`

![mp-cu](https://color-ui.gitee.io/assest/mp-cu-doc/tag/tag-3.jpg)

```html
<ui-tag ui="sm" info="sm"/>
<ui-tag ui="" info="df"/>
<ui-tag ui="lg" info="lg"/>
<ui-tag ui="xl" info="xl"/>
<ui-tag ui="xxl" info="xxl"/>
```

## 带图片

`src="{src}"`

![mp-cu](https://color-ui.gitee.io/assest/mp-cu-doc/tag/tag-4.jpg)

```html
<ui-tag info="糖果炸弹" src="/static/avatar/1004.jpg"/>
```


## 背景

`bg="{bg}"`

![mp-cu](https://color-ui.gitee.io/assest/mp-cu-doc/tag/tag-5.jpg)

```html
<ui-tag info="bg-red" bg="bg-red" src="/static/avatar/1001.jpg"/>
<ui-tag bg="ui-BG-Main" info="ui-BG-Main"/>
<ui-tag bg="bg-mask-50" info="bg-mask-50"/>
<ui-tag bg="bg-red-gradient" info="bg-red-gradient"/>
<ui-tag bg="bg-red-thin" info="bg-red-thin"/>
<ui-tag bg="bg-red-light" info="bg-red-light"/>
```

## 浮动

`badge="{direction: tl(左上) / tr(右上) / bl(左下) / br(右下)}"`

![mp-cu](https://color-ui.gitee.io/assest/mp-cu-doc/tag/tag-6.jpg)

info置空并且不设置插槽的情况下设置badge,标签默认为小红点

```html
<view class="p-4 ui-grid ui-cols-5">
    <view class="ui-item">
        <ui-avatar ui="radius xl" src="/static/avatar/1002.jpg">
            <ui-tag badge/>
        </ui-avatar>
    </view>
    <view class="ui-item">
        <ui-avatar ui="round xl">
            <text>As</text>
            <ui-tag badge bg="bg-blue" isSlot>vip</ui-tag>
        </ui-avatar>
    </view>
    <view class="ui-item">
        <ui-avatar ui="round xl bg-blue">
            <text>Bf</text>
            <ui-tag badge="br" icon bg="shadow bg-white" isSlot>
                <text class="cicon-male text-blue"/>
            </ui-tag>
        </ui-avatar>
    </view>
    <view class="ui-item">
        <ui-avatar ui="round xl bg-pink">
            <text>Cv</text>
            <ui-tag badge="bl" bg="shadow bg-white" isSlot>
                <text class="cicon-female text-pink"/>
            </ui-tag>
        </ui-avatar>
    </view>
    <view class="ui-item">
        <ui-avatar ui="round xl bg-blue-thin borders border-blue">
            <text>Jx</text>
            <ui-tag badge="tl" ui="borders border-blue shadow-blue" bg="bg-blue-light" isSlot>user</ui-tag>
        </ui-avatar>
    </view>
</view>
```


## 参数

info置空并且不设置插槽的情况下设置badge,标签默认为小红点

|  参数  |  类型  |  可选值  |  默认值  |       说明       |
|----------|----------|----------|----------|----------|
| ui | String | - | - | 其他class |
| bg | String | - | ui-BG-3 | 背景颜色 |
| info | String | - | - | 标签内容 |
| src | String | - | - | 标签图片 |
| badge | Boolean/String | - | false | 角标 |
| icon | Boolean | - | false | 图标标签 |
| isSlot | Boolean | - | false | 插槽 |

## 插槽

|  参数  |       说明       |
|----------|----------|
| 默认 | 标签内容区的内容 |
