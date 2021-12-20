# 菜单

```json
"usingComponents": {
    "ui-menu": "mp-cu/colorUI/components/ui-menu/ui-menu",
    "ui-menu-item": "mp-cu/colorUI/components/ui-menu-item/ui-menu-item"
}
```

## 示例

![mp-cu](/images/menu/menu.png)

```html
<ui-menu ui="mt-5 border radius">
    <ui-menu-item title="Github" icon="cicon-github"/>
    <ui-menu-item arrow title="关于Colorui组件库" isIcon>
        <image slot="icon" src="/static/logo.png" mode="aspectFill" class="ui-menu-item-image"/>
    </ui-menu-item>
    <ui-menu-item arrow title="按钮" icon="cicon-ellipse" isAction>
        <button class="ui-btn border sm" slot="action">
            <text class="cicon-cloud-upload"/>
            <text>上传</text>
        </button>
    </ui-menu-item>
    <ui-menu-item arrow title="标签" icon="cicon-tag text-orange" isAction>
        <view slot="action">
            <ui-tag bg="bg-red" info="bg-red" src="/static/avatar/1001.jpg"/>
            <ui-tag bg="bg-red-thin" info="bg-red-thin" ui="sm"/>
        </view>
    </ui-menu-item>
    <ui-menu-item arrow title="头像组" icon="cicon-tag text-orange" isAction>
        <ui-avatar-stack ui="mx-3" slot="action">
            <ui-avatar ui="round" src="/static/avatar/1001.jpg" stack first/>
            <ui-avatar ui="round" src="/static/avatar/1002.jpg" stack/>
            <ui-avatar ui="round" src="/static/avatar/1003.jpg" stack/>
        </ui-avatar-stack>
    </ui-menu-item>
</ui-menu>
```

## 参数

### ui-menu

|  参数  |  类型  |  可选值  |  默认值  |       说明       |
|----------|----------|----------|----------|----------|
| ui | String | - | - | 其他class |
| bg | String | - | ui-BG | 背景颜色 |


### ui-menu-item

|  参数  |  类型  |  可选值  |  默认值  |       说明       |
|----------|----------|----------|----------|----------|
| ui | String | - | - | 其他class |
| title | String | - | - | 标题名称 |
| icon | String | - | - | 图标 |
| arrow | Boolean/String | - | false | 右边箭头 |
| isIcon | Boolean | - | false | 图标插槽 |
| isAction | Boolean | - | false | 右边内容插槽 |
