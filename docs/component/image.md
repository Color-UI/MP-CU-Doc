<div class="mp-cu-doc-theme-content">

# 图片 ui-img

图片组件

```json
"usingComponents": {
    "ui-img": "mp-cu/colorUI/components/ui-img/ui-img"
}
```

## 示例

![mp-cu](https://colorui-assest.vercel.app/mp-cu-doc/image/image.jpg)

```html
<ui-img preview ui="radius border" src="xxx" urls="{{['xxx','xxx']}}" current="0"/>
```


## 参数

|  参数  |  类型  |  可选值  |  默认值  |       说明       |
|----------|----------|----------|----------|----------|
| ui | String | - | - | 其他class |
| src | String | - | - | 图片地址 |
| urls | Array | - | - | 图片数组 |
| current | Number | - | -1 | 图片索引 |
| preview | Boolean | - | false | 开启图片点击预览 |
| mode | String | width,cover,self | cover | 缩放模式 |
| width | String | - | - | 宽度 |
| height | String | - | - | 高度 |
| local | Boolean | - | false | 是否为本地图片 |

</div>