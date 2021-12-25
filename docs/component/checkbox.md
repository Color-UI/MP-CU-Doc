<div class="mp-cu-doc-view">
<div class="mp-cu-doc">

# 复选框

```json
"usingComponents": {
    "ui-checkbox-group" : "/mp-cu/colorUI/components/ui-checkbox-group/ui-checkbox-group",
    "ui-checkbox" : "/mp-cu/colorUI/components/ui-checkbox/ui-checkbox"
}
```

## 基础用法

```html
<ui-form ui="ui-BG">
    <ui-form-group title="复选框" contentui="justify-end">
        modal1:{{modal1}} <ui-checkbox value="{{modal1}}" bind:change="modal1Change">选项</ui-checkbox>
    </ui-form-group>
</ui-form>
```

## 模糊状态

```html
<ui-form ui="ui-BG">
    <ui-form-group title="复选框" contentui="justify-end">
        modal2:{{modal2}}
        <ui-checkbox value="{{modal2}}" indeterminate bind:change="modal2Change">选项</ui-checkbox>
    </ui-form-group>
</ui-form>
```

## 大小

```html
<ui-form ui="ui-BG">
    <ui-form-group title="大" contentui="justify-end">
        <ui-checkbox ui="round lg" value="{{size1}}" bind:change="size1Change">选项1</ui-checkbox>
        <ui-checkbox ui="lg" value="{{size2}}" bind:change="size2Change">选项2</ui-checkbox>
    </ui-form-group>
    <ui-form-group title="更大" contentui="justify-end">
        <ui-checkbox ui="round text-xl" value="{{size3}}" bind:change="size3Change">选项1</ui-checkbox>
        <ui-checkbox ui="text-xl" value="{{size4}}" bind:change="size4Change">选项2</ui-checkbox>
    </ui-form-group>
</ui-form>
```

## 禁用

```html
<ui-form ui="ui-BG">
    <ui-form-group title="复选框" contentui="justify-end">
        <ui-checkbox disabled>选项</ui-checkbox>
    </ui-form-group>
</ui-form>
```

## 样式

```html
<ui-form ui="ui-BG">
    <ui-form-group title="背景" contentui="justify-end">
        <ui-checkbox value="{{style1}}" unbg="borders border-red" bg="bg-red" bind:change="style1Change">红色</ui-checkbox>
        <ui-checkbox value="{{style2}}" unbg="borders border-blue" bg="bg-blue-gradient" bind:change="style2Change">渐变</ui-checkbox>
        <ui-checkbox value="{{style3}}" unbg="borders border-blue shadow-blue" bg="bg-blue shadow-blue" bind:change="style3Change">阴影</ui-checkbox>
        <ui-checkbox value="{{style4}}" unbg="border-red-thin border border-red shadow-red shadow-sm"
                     bg="bg-red-thin border border-red shadow-red shadow-sm" bind:change="style4Change">红框阴影</ui-checkbox>
    </ui-form-group>
    <ui-form-group title="未选中" contentui="justify-end">
        <ui-checkbox value="{{unstyle1}}" unbg="borders border-red" bg="bg-red" bind:change="unstyle1Change">红色</ui-checkbox>
        <ui-checkbox value="{{unstyle2}}" unbg="borders border-blue" bg="bg-blue-gradient" bind:change="unstyle2Change">渐变</ui-checkbox>
        <ui-checkbox value="{{unstyle3}}" unbg="borders border-blue shadow-blue" bg="bg-blue shadow-blue"
                     bind:change="unstyle3Change">阴影</ui-checkbox>
        <ui-checkbox value="{{unstyle4}}" unbg="border-red-thin border border-red shadow-red shadow-sm"
                     bg="bg-red-thin border border-red shadow-red shadow-sm" bind:change="unstyle4Change">红框阴影</ui-checkbox>
    </ui-form-group>
</ui-form>
```

## 使用group

```html
<ui-form ui="ui-BG">
    <ui-form-group title="复选框" contentui="justify-end">
        <ui-checkbox-group bg="bg-green-gradient" value="{{group}}" bind:change="groupChange" bind:all="groupAllChange">
            <ui-checkbox indeterminate="{{isIndeterminate}}" value="{{isAllChecked}}" all>全选</ui-checkbox>
            <ui-checkbox value="1">选项1</ui-checkbox>
            <ui-checkbox value="2">选项2</ui-checkbox>
            <ui-checkbox value="3">选项3</ui-checkbox>
        </ui-checkbox-group>
    </ui-form-group>
</ui-form>
```


## 数据格式

```javascript
modal1:false,
modal2:false,
size1:true,
size2:true,
size3:true,
size4:true,
style1:true,
style2:true,
style3:true,
style4:true,
unstyle1:false,
unstyle2:false,
unstyle3:false,
unstyle4:false,
group:['1'],
isAllChecked: false,
isIndeterminate: true
```


## 参数

### ui-checkbox-group

|  参数  |  类型  |  可选值  |  默认值  |       说明       |
|----------|----------|----------|----------|----------|
| ui | String | - | - | 其它class样式 |
| bg | String | - | ui-BG-Main | 背景 |
| value | String/Array | - | - | 值 |
| disabled | Boolean | - | false | 禁用 |
| bind:input | Event | - | - | 选择事件 |
| bind:change | Event | - | - | 选择事件 |
| bind:all | Event | - | - | 全选事件 |


### ui-checkbox

|  参数  |  类型  |  可选值  |  默认值  |       说明       |
|----------|----------|----------|----------|----------|
| ui | String | - | - | 其它class样式 |
| bg | String | - | ui-BG-Main | 背景 |
| unbg | String | - | borderss | 附加样式 |
| value | String/Number/Boolean | - | - | 值 |
| disabled | Boolean | - | false | 禁用 |
| all | Boolean | - | false | 全选功能 |
| indeterminate | Boolean | - | false | 全选状态 |
| bind:input | Event | label | - | 事件 |
| bind:change | Event | label | - | 事件 |


</div>
<div class="mp-cu-doc-image" style="max-height: inherit;">

![mp-cu](https://colorui-assest.vercel.app/mp-cu-doc/checkbox.jpg)

</div>
</div>
