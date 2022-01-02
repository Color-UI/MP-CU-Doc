<div class="mp-cu-doc-view">
<div class="mp-cu-doc">

# 悬浮工具栏 fixed-tools

引用组件，请参考[说明](/laboratory/)文档，下面的引入只是作为演示，实际引入路径，请根据您的项目架构更改。

```json
"usingComponents": {
    "fixed-tools" : "/packageB/components/fixed-tools/fixed-tools"
}
```

## 用法

```html
<fixed-tools data="{{list}}" isIcon="{{isIcon}}" scrollTop="{{scrollTop}}" bind:tapBar="tapToolsBar"/>
```


## 数据格式

```javascript
Page({
    data: {
        list: [{icon: '_icon-loading', num: 0},{icon: '_icon-search', num: 0}],
        isIcon: {down: 'cicon-unfold-less', top: 'cicon-eject', up: 'cicon-unfold-more'},
        scrollTop: 0,
    },
    onLoad() {
        
    },
    tapToolsBar(e) {
        console.log(e.detail)
    },
    // 监听用户滑动页面事件。
    onPageScroll(e) {
        // 注意：请只在需要的时候才在 page 中定义此方法，不要定义空方法。以减少不必要的事件派发对渲染层-逻辑层通信的影响。
        // 注意：请避免在 onPageScroll 中过于频繁的执行 setData 等引起逻辑层-渲染层通信的操作。尤其是每次传输大量数据，会影响通信耗时。
        // https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onPageScroll-Object-object
        this.setData({
            scrollTop: e.scrollTop
        })
    }
})
```


## 参数

|  参数  |  类型  |  可选值  |  默认值  |       说明       |
|----------|----------|----------|----------|----------|
| ui | String | - | - | 其它class样式 |
| data | Array | - | - | 数据 |
| scrollTop | Number/String | - | 0 | 当前滚动位置 |
| top | Number/String | - | 30 | 距离顶部多少显示滚动到顶部的图标 |
| show | Boolean | - | true | 收起展开状态 |
| isIcon | Object | - | - | 图标配置 |
| isSlotDown | Boolean | - | false | 自定义收起图标的插槽 |
| isSlotTop | Boolean | - | false | 自定义到顶部图标的插槽 |
| isSlotUp | Boolean | - | false | 自定义展开图标的插槽 |
| bind:tapShow | Event | - | event.detail = true/false | 显示/隐藏事件 |
| bind:tapBar | Event | - | event.detail = {item, index} | 工具栏被点击事件 |
| bind:tapScrollTop | Event | - | - | 滚动到顶部事件 |


## 插槽

|  参数  |       说明       |
|----------|----------|
| iconDown | 收起图标，isSlotDown 开启时有效 |
| iconTop | 滚动到顶部，isSlotTop 开启时有效 |
| iconUp | 展开图标，isSlotUp 开启时有效 |



</div>
<div class="mp-cu-doc-image" style="max-height: inherit;">

![mp-cu](https://colorui-assest.vercel.app/mp-cu-doc/test/fixed-tools.jpg)

</div>
</div>
