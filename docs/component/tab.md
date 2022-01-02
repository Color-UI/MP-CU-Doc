<div class="mp-cu-doc-view">
<div class="mp-cu-doc">

# 选项卡 ui-tab

```json
"usingComponents": {
    "ui-tab": "/mp-cu/colorUI/components/ui-tab/ui-tab"
}
```

## 默认

```html
<ui-tab tab="{{['选项卡1','选项卡2','选项卡3']}}" ui="sm"/>
```

## 标记在上

```html
<ui-tab tab="{{['选项卡1','选项卡2','选项卡3']}}" tpl="topline" ui="sm"/>
```

## 点标记

```html
<ui-tab tab="{{['选项卡1','选项卡2','选项卡3']}}" tpl="dot" ui="sm"/>
```

## 短划线标记

```html
<ui-tab tab="{{['选项卡1','选项卡2','选项卡3']}}" tpl="long" ui="sm"/>
```

## 梯形标记

```html
<ui-tab tab="{{['选项卡1','选项卡2','选项卡3']}}" tpl="trapezoid" ui="sm"/>
```

## 按钮标记

```html
<ui-tab tab="{{['选项卡1','选项卡2','选项卡3']}}" tpl="btn" mark="bg-red round" curColor="text-white" ui="sm"/>
```

## 分段器1

```html
<view class="ui-BG-3 p-3 text-center">
    <ui-tab tab="{{['选项卡1','选项卡2','选项卡3','选项卡4']}}" tpl="btn" mark="bg-red radius" ui="radius" curColor="text-white" inline/>
</view>
```

## 分段器2

```html
<view class="p-3 text-center">
    <ui-tab tab="{{['选项卡1','选项卡2','选项卡3','选项卡4']}}" tpl="btn" mark="ui-BG radius" ui="radius ui-BG-4" inline/>
</view>
```

## 分段器3

```html
<view class="p-3 text-center">
    <ui-tab tab="{{['选项卡1','选项卡2','选项卡3','选项卡4','选项卡5','选项卡6','选项卡7']}}"
            tpl="btn" mark="ui-BG radius" ui="radius ui-BG-4 sm" inline scroll width="100%"/>
</view>
```

## 分段器4

```html
<ui-tab tab="{{['选项卡1','选项卡2','选项卡3','选项卡4']}}" tpl="btn" mark="bg-white radius" ui="bg-red radius sm" curColor="text-red" inline/>
```

## 等分

```html
<ui-tab tab="{{['选项卡1', '选项卡2', '选项卡3', '选项卡4']}}" value="{{2}}" align="flex-bar" ui="sm"/>
```

## 居中

```html
<ui-tab tab="{{['选项卡1', '选项卡2', '选项卡3']}}" align="flex-center" ui="sm"/>
```

## 滚动

```html
<ui-tab tab="{{['选项卡1', '选项卡2', '选项卡3', '选项卡4', '选项卡5', '选项卡6']}}" scroll ui="sm"/>
```

## 背景

```html
<ui-tab ui="bg-red sm" mark="text-white" tab="{{['选项卡1', '选项卡2', '选项卡3']}}" curColor="text-white"/>
```

## 绑定值

```html
<ui-tab tab="{{['选项卡1', '选项卡2', '选项卡3']}}" value="{{NavCur}}" ui="sm" bind:change="tabNavChange"/>
```

## 事件/多数据

```html
<ui-tab tab="{{[{name:'选项卡1',icon:'cicon-github text-red'},{name:'选项卡2',tag:''},{name:'选项卡3',tag:'hot'}]}}" bind:change="tabChange" ui="sm"/>
```

## 参数

|  参数  |  类型  |  可选值  |  默认值  |       说明       |
|----------|----------|----------|----------|----------|
| ui | String | - | - | 其它class样式 |
| bg | String | - | ui-BG | 背景颜色 |
| tpl | String | - | line | 模板样式（待定） |
| value | Number | - | 0 | 索引值 |
| tab | Array | - | - | tab数据 |
| mark | String | - | - | 其它class样式-1 |
| align | String | - | - | 其它class样式-2 |
| curColor | String | - | ui-TC | 选中的class样式 |
| scroll | Boolean | - | false | 滑动 |
| inline | Boolean | - | false | 分段 |
| bind:input | Event | - | index | 事件 |
| bind:change | Event | - | { index: index, data: item } | 事件 |

</div>
<div class="mp-cu-doc-image" style="max-height: inherit;">

![mp-cu](https://colorui-assest.vercel.app/mp-cu-doc/tab.jpg)

</div>
</div>
