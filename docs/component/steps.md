<div class="mp-cu-doc-view">
<div class="mp-cu-doc">

# 步骤条 ui-steps

```json
"usingComponents": {
    "ui-steps" : "/mp-cu/colorUI/components/ui-steps/ui-steps"
}
```

## 图标

```html
<ui-steps cur="{{basics}}" info="{{basicsList}}"/>
<ui-steps cur="{{basics}}" info="{{basicsList}}" arrow curtext="text-red"/>
```

## 数字

```html
<ui-steps cur="{{num}}" info="{{numList}}" number err="{{3}}"/>
<ui-steps cur="{{num}}" info="{{numList}}" number err="{{3}}" arrow/>
```

## 竖向

```html
<ui-steps cur="{{basics}}" info="{{basicsList}}" column/>
<ui-steps cur="{{num}}" info="{{numList}}" number err="{{3}}" column/>
```


## 数据格式

```javascript
data: {
    basics: 0, column: 0, num: 0,
    numList: [
        {
            title: '开始',
            desc:'二〇二〇年十二月十七日'
        },
        {
            title: '等待',
            desc:'二〇二〇年十二月十七日'
        },
        {
            title: '错误',
            desc:'二〇二〇年十二月十七日'
        },
        {
            title: '完成',
            desc:'二〇二〇年十二月十七日'
        }
    ],
    basicsList: [
        {
            icon: '_icon-home',
            title: '开始',
            desc:'二〇二〇年十二月十七日'
        },
        {
            icon: '_icon-waiting',
            title: '等待',
            desc:'二〇二〇年十二月十七日'
        },
        {
            icon: '_icon-close-round',
            title: '错误',
            desc:'二〇二〇年十二月十七日'
        },
        {
            icon: '_icon-check-round',
            title: '完成',
            desc:'二〇二〇年十二月十七日'
        }
    ]
} 
```


## 参数

|  参数  |  类型  |  可选值  |  默认值  |       说明       |
|----------|----------|----------|----------|----------|
| ui | String | - | - | 其它class样式 |
| direction | String | - | row | - |
| arrow | Boolean | - | false | 箭头 |
| number | Boolean | - | false | 数字 |
| column | Boolean | - | false | 竖向 |
| cur | Number | - | 0 | 选中索引 |
| curStyle | String | - | ui-TC-Main | 选中样式 |
| err | Number | - | 0 | 错误索引 |
| info | Array | - | - | 数据数组 |


</div>
<div class="mp-cu-doc-image" style="max-height: inherit;">

![mp-cu](https://colorui-assest.vercel.app/mp-cu-doc/steps.jpg)

</div>
</div>
