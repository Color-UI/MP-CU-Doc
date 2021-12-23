<div class="mp-cu-doc-theme-content">

# 气泡框

气泡框组件可以对目标元素进行更多的操作或者简要的介绍与提示。 气泡框的主体会根据目标元素在屏幕的上下半部分来显示在上面或者下面。

```json
"usingComponents": {
    "ui-popover" : "/mp-cu/colorUI/components/ui-popover/ui-popover"
}
```

## 提示

文字提示会自动关闭。

![mp-cu](https://colorui-assest.vercel.app/mp-cu-doc/popover/popover-1.png)

```html
<ui-popover tips="这里是提示文本">
    <button class="ui-btn">点击</button>
</ui-popover>
```

## 遮罩

默认无遮罩。

![mp-cu](https://colorui-assest.vercel.app/mp-cu-doc/popover/popover-2.png)

```html
<ui-popover tips="这里是提示文本" mask>
    <button class="ui-btn">点击</button>
</ui-popover>
```

## 背景

默认是`box-bg`菜单色。

![mp-cu](https://colorui-assest.vercel.app/mp-cu-doc/popover/popover-3.png)

```html
<ui-popover tips="这里是提示文本" bg="bg-red">
    <button class="ui-btn">点击</button>
</ui-popover>
```

## 自定义

设定 `content` 插槽可以自定义气泡框内容，由于微信小程序不存在mouseleave方法，如果不希望弹出层自动关闭，请设定为参数控制打开。

![mp-cu](https://colorui-assest.vercel.app/mp-cu-doc/popover/popover-4.png)

```html
<ui-popover show="{{isShow}}">
    <button class="ui-btn">点击</button>
    <view slot="content">
        <view class="p-3">
            <ui-title title="Hello Colorui" align="center" tpl="stack" hasLine/>
        </view>
    </view>
</ui-popover>
```

## 定时

可以更改时间自动关闭，单位毫秒。文字提示默认是3000毫秒，自定义内容默认需要点击空白处或者遮罩关闭

![mp-cu](https://colorui-assest.vercel.app/mp-cu-doc/popover/popover-1.png)

```html
<ui-popover tips="这里是提示文本" time="{{5000}}">
    <button class="ui-btn">点击</button>
</ui-popover>
```

## 触发

自定义触发方式,设定 `show` 来控制气泡框的显示，需要开启 `isChange`

![mp-cu](https://colorui-assest.vercel.app/mp-cu-doc/popover/popover-5.png)

```html
<view class="flex-bar p-3 radius ui-BG">
    <ui-popover tips="气泡框在这里出现哦" show="{{isShow}}" isChange>
        <button class="ui-btn ui-BG-Main">目标</button>
    </ui-popover>
    <button class="ui-btn ui-BG-Main" bindtap="isShow = true">点击</button>
</view>
```

## 参数

|  参数  |  类型  |  可选值  |  默认值  |       说明       |
|----------|----------|----------|----------|----------|
| ui | String | - | - | 其他class |
| bg | String | - | ui-BG | 背景颜色 |
| tips | String | - | - | 提示文本 |
| mask | Boolean | - | false | 遮罩 |
| show | Boolean/String | - | change | 自定义显示关闭 |
| time | Number | - | 3000 | 关闭时间，单位毫秒 |
| bottom | Boolean | - | false | 气泡框显示在下面 |
| isChange | Boolean | - | false | 自定义触发方式 |
| zIndex | Number/String | - | 0 | 层级 |


## 插槽

|  参数  |       说明       |
|----------|----------|
| 默认 | 包裹的元素 |
| content | 提示内容插槽 |

</div>