<div class="mp-cu-doc-view">
<div class="mp-cu-doc">

# 加载 ui-loading

```json
"usingComponents": {
    "ui-loading": "mp-cu/colorUI/components/ui-loading/ui-loading"
}
```

## 示例

```html
<ui-loading/>
<ui-loading color/>
<ui-loading size="sm"/>
<ui-loading size="lg" color="text-blue"/>
<ui-loading size="xl" color="text-green"/>
<ui-loading size="xxl" color="text-green"/>
<ui-loading size="sl"/>

<ui-loading img="/static/logo.png"/>
<ui-loading color="text-red" img="/static/logo.png"/>

<ui-loading color img="/static/logo.png"/>
<ui-loading color isSlot>
    <text class="cicon-GooglePlaylogo text-sl text-red"/>
</ui-loading>
<ui-loading color isSlot>
    <text class="text-lg text-blue">ColorUI</text>
</ui-loading>
<ui-loading color isSlot>
    <ui-avatar ui="xxl ellipse ui-BG " src="/static/logo.png"/>
</ui-loading>
```


## 参数

|  参数  |  类型  |  可选值  |  默认值  |       说明       |
|----------|----------|----------|----------|----------|
| ui | String | - | - | 其他class |
| size | String | sm,lg,xl,xxl,sl | - | 尺寸 |
| img | String | - | - | 图片 |
| color | String/Boolean | - | - | 颜色 |
| isSlot | Boolean | - | false | 默认插槽 |

</div>
<div class="mp-cu-doc-image" style="max-height: inherit;">

![mp-cu](https://colorui-assest.vercel.app/mp-cu-doc/loading.jpg)

</div>
</div>
