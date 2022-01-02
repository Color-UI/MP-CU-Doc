<div class="mp-cu-doc-view">
<div class="mp-cu-doc">

# 分割线 ui-divider

引用组件，请参考[说明文档](/laboratory/)，下面的引入只是作为演示，实际引入路径，请根据您的项目架构更改。

```json
"usingComponents": {
    "ui-divider" : "/packageB/components/ui-divider/ui-divider"
}
```

## 基础

```html
<ui-divider/>
<ui-divider title="文本"/>
```

## 位置

```html
<ui-divider title="居左" align="left"/>
<ui-divider title="居中"/>
<ui-divider title="居右" align="right"/>
```

## 虚线

```html
<ui-divider title="居左" align="left" dashed/>
<ui-divider title="居中" dashed/>
<ui-divider title="居右" align="right" dashed/>
```

## 宽度

```html
<ui-divider title="居左" width="90%"/>
<ui-divider title="居中" width="450rpx"/>
<ui-divider title="居右" width="200px"/>
```

## 粗细

```html
<ui-divider title="默认"/>
<ui-divider title="粗线" bold/>
<ui-divider title="默认虚线" dashed/>
<ui-divider title="粗虚线" dashed bold/>
```

## 动画

```html
<ui-divider title="默认虚线" dashed shine/>
<ui-divider title="粗虚线" dashed bold shine/>
```

## 颜色

颜色参考[背景颜色](/guide/background.md)，只是要注意，需要将 `bg-` 改为 `border-`

```html
<ui-divider title="默认" bg="border-blue" color="text-blue"/>
<ui-divider title="粗线" bold bg="border-red" color="text-red"/>
<ui-divider title="默认虚线" dashed bg="border-pink" color="text-pink" shine/>
<ui-divider title="粗虚线" dashed bold bg="border-green" color="text-green" shine/>
```

## 插槽自定义

```html
<ui-divider>
    <text class="_icon-warn-o mx-3"/>
</ui-divider>
<ui-divider>
    <view class="mx-3 text-red">
        <text class="_icon-warn-o"/>
        <text class="ml-2">文本文本</text>
    </view>
</ui-divider>
```

虚线、粗细、动画参数，参考[边框文档](/guide/border.md)


## 参数

|  参数  |  类型  |  可选值  |  默认值  |       说明       |
|----------|----------|----------|----------|----------|
| ui | String | - | - | 其它样式（class） |
| bg | String | - | border-gray-c | 线条颜色样式（class） |
| color | String | - | text-gray-a | 文本颜色样式（class） |
| title | String | - | - | 标题文本 |
| align | String | left，center，right | center | 对齐方向 |
| dashed | Boolean | - | false | 虚线 |
| bold | Boolean | - | false | 粗线 |
| shine | Boolean | - | false | 动画 |
| width | String | - | '100%' | 虚线宽度 |

</div>
<div class="mp-cu-doc-image" style="max-height: inherit;">

![mp-cu](https://colorui-assest.vercel.app/mp-cu-doc/test/divider.jpg)

</div>
</div>
