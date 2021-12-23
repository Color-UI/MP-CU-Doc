<div class="mp-cu-doc-view">
<div class="mp-cu-doc">

# 浮动

```json
"usingComponents": {
    "ui-fixed": "mp-cu/colorUI/components/ui-fixed/ui-fixed"
}
```

## 示例

```html
<ui-fixed bg="bg-mask-20" scrollTop="0">
    <view class="flex-center p-5">Top</view>
</ui-fixed>
<ui-fixed bg="bg-red" sticky scrollTop="0">
    <view class="flex-center p-5">sticky</view>
</ui-fixed>
```

## 参数

|  参数  |  类型  |  可选值  |  默认值  |       说明       |
|----------|----------|----------|----------|----------|
| ui | String | - | - | 其他class |
| bg | String | - | bg-none | 背景颜色 |
| noNav | Boolean | - | false | - |
| noSafe | Boolean | - | false | - |
| bottom | Boolean | - | false | 固定底部 |
| val | Number | - | 0 | - |
| width | Number/String | - | 0 | 宽度 |
| opacity | Boolean | - | false | 透明 |
| opacityVal | Number | - | 0 | 透明值 |
| zIndex | Number/String | - | 0 | 层级 |
| placeholder | Boolean | - | false | - |
| sticky | Boolean | - | false | 吸顶 |
| noFixed | Boolean | - | false | - |
| clickTo | Boolean | - | false | - |
| scrollTop | Number/String | - | 0 | 页面滚动位置 |

</div>
<div class="mp-cu-doc-image" style="max-height: inherit;">

![mp-cu](https://colorui-assest.vercel.app/mp-cu-doc/fixed.jpg)

</div>
</div>