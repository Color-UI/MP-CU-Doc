<div class="mp-cu-doc-view">
<div class="mp-cu-doc">

# 布局

引用组件，请参考[说明](/laboratory/)文档，下面的引入只是作为演示，实际引入路径，请根据您的项目架构更改。

```json
"usingComponents": {
    "ui-row" : "/packageB/components/ui-row/ui-row",
    "ui-col" : "/packageB/components/ui-col/ui-col"
}
```

## 基础布局

通过 `ui-row` 和 `ui-col` 组件，并通过 `ui-col` 组件的 `span` 属性我们就可以自由地组合布局。

```html
<view class="m-2 text-center">
    <ui-row>
        <ui-col>
            <view class="ui-BG-Main-1 p-3 radius">24/24</view>
        </ui-col>
    </ui-row>
    <ui-row ui="mt-2">
        <ui-col span="12">
            <view class="ui-BG-Main-2 p-3 radius">12/24</view>
        </ui-col>
        <ui-col span="12">
            <view class="ui-BG-Main-4 p-3 radius">12/24</view>
        </ui-col>
    </ui-row>
    <ui-row ui="mt-2">
        <ui-col span="8">
            <view class="ui-BG-Main-4 p-3 radius">8/24</view>
        </ui-col>
        <ui-col span="8">
            <view class="ui-BG-Main-3 p-3 radius">8/24</view>
        </ui-col>
        <ui-col span="8">
            <view class="ui-BG-Main-4 p-3 radius">8/24</view>
        </ui-col>
    </ui-row>
    <ui-row ui="mt-2">
        <ui-col span="6">
            <view class="ui-BG-Main-3 p-3 radius">6/24</view>
        </ui-col>
        <ui-col span="6">
            <view class="ui-BG-Main-4 p-3 radius">6/24</view>
        </ui-col>
        <ui-col span="6">
            <view class="ui-BG-Main-3 p-3 radius">6/24</view>
        </ui-col>
        <ui-col span="6">
            <view class="ui-BG-Main-4 p-3 radius">6/24</view>
        </ui-col>
    </ui-row>
</view>
```


## 分栏间隔

`ui-col` 提供 `spacing` 属性来指定列之间的间距，其默认值为0。

```html
<view class="m-2 text-center">
    <ui-row ui="mt-2" spacing="20">
        <ui-col span="6">
            <view class="ui-BG-Main-3 p-3 radius">6/24</view>
        </ui-col>
        <ui-col span="6">
            <view class="ui-BG-Main-3 p-3 radius">6/24</view>
        </ui-col>
        <ui-col span="6">
            <view class="ui-BG-Main-3 p-3 radius">6/24</view>
        </ui-col>
        <ui-col span="6">
            <view class="ui-BG-Main-3 p-3 radius">6/24</view>
        </ui-col>
    </ui-row>
</view>
```

## 混合布局

```html
<view class="m-2 text-center">
    <ui-row ui="mt-2" spacing="20">
        <ui-col span="16">
            <view class="ui-BG-Main-4 p-3 radius">16/24</view>
        </ui-col>
        <ui-col span="8">
            <view class="ui-BG-Main-4 p-3 radius">8/24</view>
        </ui-col>
    </ui-row>
    <ui-row ui="mt-2" spacing="20">
        <ui-col span="8">
            <view class="ui-BG-Main-4 p-3 radius">8/24</view>
        </ui-col>
        <ui-col span="8">
            <view class="ui-BG-Main-4 p-3 radius">8/24</view>
        </ui-col>
        <ui-col span="4">
            <view class="ui-BG-Main-4 p-3 radius">4/24</view>
        </ui-col>
        <ui-col span="4">
            <view class="ui-BG-Main-4 p-3 radius">4/24</view>
        </ui-col>
    </ui-row>
    <ui-row ui="mt-2" spacing="20">
        <ui-col span="4">
            <view class="ui-BG-Main-4 p-3 radius">4/24</view>
        </ui-col>
        <ui-col span="16">
            <view class="ui-BG-Main-4 p-3 radius">16/24</view>
        </ui-col>
        <ui-col span="4">
            <view class="ui-BG-Main-4 p-3 radius">4/24</view>
        </ui-col>
    </ui-row>
</view>
```

## 对齐方式

可通过 `align` 属性来指定 `start`, `center`, `end`, `space-between`, `space-around` 其中的值来定义子元素的排版方式。

```html
<view class="m-2 text-center">
    <ui-row ui="mt-2 bg-white radius" spacing="20">
        <ui-col span="6">
            <view class="ui-BG-Main-4 p-3 radius">6/24</view>
        </ui-col>
        <ui-col span="6">
            <view class="ui-BG-Main-4 p-3 radius">6/24</view>
        </ui-col>
        <ui-col span="6">
            <view class="ui-BG-Main-4 p-3 radius">6/24</view>
        </ui-col>
    </ui-row>
    <ui-row ui="mt-2 mt-3 bg-white radius" spacing="20" align="center">
        <ui-col span="6">
            <view class="ui-BG-Main-4 p-3 radius">6/24</view>
        </ui-col>
        <ui-col span="6">
            <view class="ui-BG-Main-4 p-3 radius">6/24</view>
        </ui-col>
        <ui-col span="6">
            <view class="ui-BG-Main-4 p-3 radius">6/24</view>
        </ui-col>
    </ui-row>
    <ui-row ui="mt-2 mt-3 bg-white radius" spacing="20" align="end">
        <ui-col span="6">
            <view class="ui-BG-Main-4 p-3 radius">6/24</view>
        </ui-col>
        <ui-col span="6">
            <view class="ui-BG-Main-4 p-3 radius">6/24</view>
        </ui-col>
        <ui-col span="6">
            <view class="ui-BG-Main-4 p-3 radius">6/24</view>
        </ui-col>
    </ui-row>
    <ui-row ui="mt-2 mt-3 bg-white radius" spacing="20" align="space-between">
        <ui-col span="6">
            <view class="ui-BG-Main-4 p-3 radius">6/24</view>
        </ui-col>
        <ui-col span="6">
            <view class="ui-BG-Main-4 p-3 radius">6/24</view>
        </ui-col>
        <ui-col span="6">
            <view class="ui-BG-Main-4 p-3 radius">6/24</view>
        </ui-col>
    </ui-row>
    <ui-row ui="mt-2 mt-3 bg-white radius" spacing="20" align="space-around">
        <ui-col span="6">
            <view class="ui-BG-Main-4 p-3 radius">6/24</view>
        </ui-col>
        <ui-col span="6">
            <view class="ui-BG-Main-4 p-3 radius">6/24</view>
        </ui-col>
        <ui-col span="6">
            <view class="ui-BG-Main-4 p-3 radius">6/24</view>
        </ui-col>
    </ui-row>
</view>
```


## 布局对比

通过 `row` 组件，设置 `col` 参数，来设置24分栏，还是12分栏，默认为24分栏。

```html
<view class="m-2 text-center">
    <ui-row ui="mt-2" spacing="20">
        <ui-col span="4">
            <view class="ui-BG-Main-4 p-3 radius">4/24</view>
        </ui-col>
        <ui-col span="20">
            <view class="ui-BG-Main-4 p-3 radius">20/24</view>
        </ui-col>
    </ui-row>
    <ui-row ui="mt-2" spacing="20" col="12">
        <ui-col span="4">
            <view class="ui-BG-Main-4 p-3 radius">4/12</view>
        </ui-col>
        <ui-col span="8">
            <view class="ui-BG-Main-4 p-3 radius">8/12</view>
        </ui-col>
    </ui-row>
</view>
```

## 参数

### ui-row

|  参数  |  类型  |  可选值  |  默认值  |       说明       |
|----------|----------|----------|----------|----------|
| ui | String | - | - | 其它class样式 |
| bg | String | - | - | 背景class |
| spacing | Number/String | - | 0 | 栅格间隔 |
| col | Number/String | 12/24 | 24 | 分栏类型 |
| align | String | start, center, end, space-between, space-around | - | 对齐方向 |


### ui-col

|  参数  |  类型  |  可选值  |  默认值  |       说明       |
|----------|----------|----------|----------|----------|
| ui | String | - | - | 其它class样式 |
| bg | String | - | - | 背景class |
| span | Number/String | 1-24 | 24 | 栅格占据的列数 |

::: tip

当 ui-row 组件的 col 为12时，ui-col 组件的 span 最大值为12，超过12无效。

当 ui-row 组件的 col 为24时，ui-col 组件的 span 最大值为24，超过24无效。

ui-col 组件的 span 值不能为负数。

:::

</div>
<div class="mp-cu-doc-image" style="max-height: inherit;">

![mp-cu](https://colorui-assest.vercel.app/mp-cu-doc/test/layout.jpg)

</div>
</div>
