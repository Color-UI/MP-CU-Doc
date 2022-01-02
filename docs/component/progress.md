<div class="mp-cu-doc-view">
<div class="mp-cu-doc">

# 进度条 ui-progress

进度条组件

```json
"usingComponents": {
    "ui-progress": "/mp-cu/colorUI/components/ui-progress/ui-progress"
}
```

## 默认

```html
<ui-progress progress="40"/>
```

## 形状

```html
<ui-progress progress="61.8"/>
<ui-progress round progress="30.8"/>
```

## 尺寸

```html
<ui-progress sm progress="61.8"/>
<ui-progress progress="61.8"/>
<ui-progress lg progress="61.8"/>
```

## 颜色

```html
<ui-progress bg="bg-green" progress="61.8"/>
<ui-progress  bg="bg-green-light" progress="61.8"/>
<ui-progress  bg="bg-green-thin" progress="61.8"/>
<ui-progress  bg="bg-green-gradient" progress="61.8"/>
```

## 条纹

```html
<ui-progress striped progress="61.8"/>
<ui-progress striped active progress="40.8"/>
```

## 组合

```html
<ui-progress progressArray="{{[40.8,20,8]}}" bgArray="{{['bg-red','bg-green','bg-blue']}}" striped active round/>
```

## 布局

```html
<ui-progress border progressArray="{{[40.8,20,8]}}" bgArray="{{['bg-red','bg-green','bg-blue']}}" striped active round/>
```

## 参数

|  参数  |  类型  |  可选值  |  默认值  |       说明       |
|----------|----------|----------|----------|----------|
| ui | String | - | - | 其他class |
| bg | String/Array | - | ui-BG-Main | 背景颜色 |
| progress | Number/String | - | 0 | 进度 |
| round | Boolean | - | false | 椭圆 |
| radius | Boolean | - | true | 圆角 |
| sm | Boolean | - | false | 小尺寸 |
| lg | Boolean | - | false | 大尺寸 |
| striped | Boolean | - | false | 条纹 |
| active | Boolean | - | false | 条纹动起来 |
| shadow | String/Boolean | true,false,sm,lg | - | 阴影 |
| border | Boolean | - | false | 边框 |
| progressArray | Array | - | - | 数组数据 |
| bgArray | Array | - | 见下文 | 数组颜色 |

`bgArray` 默认值：`['ui-BG-Main', 'ui-BG-Main-1', 'ui-BG-Main-2', 'ui-BG-Main-3']`


</div>
<div class="mp-cu-doc-image" style="max-height: inherit;">

![mp-cu](https://colorui-assest.vercel.app/mp-cu-doc/progress.jpg)

</div>
</div>
