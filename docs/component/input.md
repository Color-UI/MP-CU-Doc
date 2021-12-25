<div class="mp-cu-doc-view">
<div class="mp-cu-doc">

# 输入框

由于input等相关组件的参数太多，涉及的组件也多，封装的时候，考虑到各种场景和业务逻辑，所以，目前的输入框，并不是完整封装的，只是封装了个form的容器，提供一些样式，仅此而已，后期看情况再决定是否重新完整封装。

```json
"usingComponents": {
    "ui-form" : "/mp-cu/colorUI/components/ui-form/ui-form",
    "ui-form-group" : "/mp-cu/colorUI/components/ui-form-group/ui-form-group",
    "ui-input-box" : "/mp-cu/colorUI/components/ui-input-box/ui-input-box"
}
```

## 基础用法

```html
<ui-form-group title="文本">
    <ui-input-box>
        <input class="ui-input-wrapper" placeholder="请输入文本"/>
    </ui-input-box>
</ui-form-group>
```

## 自定义类型

```html
<ui-form ui="ui-BG">
    <!-- 输入任意文本 -->
    <ui-form-group title="文本">
        <ui-input-box>
            <input class="ui-input-wrapper" placeholder="请输入文本"/>
        </ui-input-box>
    </ui-form-group>
    <!-- 带小数点的数字键盘 -->
    <ui-form-group title="整数">
        <ui-input-box>
            <input class="ui-input-wrapper" type="digit" placeholder="请输入整数"/>
        </ui-input-box>
    </ui-form-group>
    <!-- 数字输入键盘 -->
    <ui-form-group title="数字">
        <ui-input-box>
            <input class="ui-input-wrapper" type="number" placeholder="请输入数字"/>
        </ui-input-box>
    </ui-form-group>
    <!-- 输入密码 -->
    <ui-form-group title="密码">
        <ui-input-box isType="password">
            <input class="ui-input-wrapper" type="password" placeholder="请输入密码"/>
        </ui-input-box>
    </ui-form-group>
</ui-form>
```

## 禁用输入框

```html
<ui-form ui="ui-BG">
    <ui-form-group title="文本" disabled>
        <ui-input-box isDisabled>
            <input class="ui-input-wrapper" disabled placeholder="请输入文本"/>
        </ui-input-box>
    </ui-form-group>
</ui-form>
```

## 显示图标

```html
<ui-form ui="ui-BG">
    <ui-form-group title="图标" icon="cicon-safe-check">
        <ui-input-box>
            <input class="ui-input-wrapper" placeholder="请输入文本"/>
        </ui-input-box>
    </ui-form-group>

    <ui-form-group icon="cicon-safe-check">
        <ui-input-box>
            <input class="ui-input-wrapper" placeholder="请输入文本"/>
        </ui-input-box>
    </ui-form-group>

    <ui-form-group title="图标" isAction>
        <ui-input-box>
            <input class="ui-input-wrapper" placeholder="请输入文本"/>
        </ui-input-box>
        <block slot="action">
            <text class="cicon-place icon-xl"/>
        </block>
    </ui-form-group>
</ui-form>
```


## 必填项

```html
<ui-form ui="ui-BG">
    <ui-form-group required icon="cicon-mobile" type="phone">
        <ui-input-box>
            <input class="ui-input-wrapper" placeholder="请输入手机号"/>
        </ui-input-box>
    </ui-form-group>
</ui-form>
```

## 插槽

```html
<ui-form ui="ui-BG">
    <ui-form-group title="短信验证" isAction>
        <ui-input-box>
            <input class="ui-input-wrapper" placeholder="请输入短信验证码"/>
        </ui-input-box>
        <view slot="action">
            <button class="ui-btn bg-blue-gradient sm">发送验证码</button>
        </view>
    </ui-form-group>
</ui-form>
```

## 文本域

```html
<ui-form ui="ui-BG mt-4">
    <ui-form-group title="高度自适应" titleTop>
        <ui-input-box isType="textarea">
            <textarea class="ui-textarea-wrapper" placeholder="请输入用户名" maxlength="140" auto-height/>
        </ui-input-box>
    </ui-form-group>
</ui-form>
```

## 显示字数统计

```html
<ui-form ui="ui-BG mt-4">
    <ui-form-group title="显示字数统计" titleTop>
        <ui-input-box isType="textarea" showTag>
            <textarea class="ui-textarea-wrapper" placeholder="请输入用户名" maxlength="50" auto-height/>
        </ui-input-box>
    </ui-form-group>
</ui-form>
```

## 内容对齐

```html
<ui-form-group title="右对齐">
    <ui-input-box ui="text-right">
        <input class="ui-input-wrapper" placeholder="输入框内容右对齐"/>
    </ui-input-box>
</ui-form-group>
<ui-form-group title="居中">
    <ui-input-box ui="text-center">
        <input class="ui-input-wrapper" placeholder="输入框内容居中"/>
    </ui-input-box>
</ui-form-group>
```

## 组

```html
<ui-form ui="ui-BG mt-4">
    <ui-form-group icon="cicon-avatar">
        <ui-input-box>
            <input class="ui-input-wrapper" placeholder="请输入用户名"/>
        </ui-input-box>
    </ui-form-group>
    <ui-form-group icon="cicon-mobile" required>
        <ui-input-box>
            <input class="ui-input-wrapper" type="number" placeholder="请输入手机号"/>
        </ui-input-box>
    </ui-form-group>
    <ui-form-group icon="cicon-lock" required>
        <ui-input-box isType="password">
            <input class="ui-input-wrapper" type="password" placeholder="请输入密码" name="password"/>
        </ui-input-box>
    </ui-form-group>
    <ui-form-group icon="cicon-numcode" isAction>
        <ui-input-box>
            <input class="ui-input-wrapper" placeholder="请输入验证码"/>
        </ui-input-box>
        <view slot="action">
            <button class="ui-btn bg-blue-gradient sm">发送验证码</button>
        </view>
    </ui-form-group>
</ui-form>
```


## 参数

### ui-form

|  参数  |  类型  |  可选值  |  默认值  |       说明       |
|----------|----------|----------|----------|----------|
| ui | String | - | - | 其它class样式 |

### ui-form-group

|  参数  |  类型  |  可选值  |  默认值  |       说明       |
|----------|----------|----------|----------|----------|
| ui | String | - | - | 其它class样式 |
| contentui | String | - | - | 内容区自定义class |
| icon | String | - | - | 图标class |
| disabled | Boolean | - | false | 禁用 |
| required | Boolean | - | false | 必填项 |
| titleTop | Boolean | - | false | 高度自适应 |
| title | String | - | - | 标题 |
| isAction | Boolean | - | false | 右边插槽 |

### ui-input-box

|  参数  |  类型  |  可选值  |  默认值  |       说明       |
|----------|----------|----------|----------|----------|
| ui | String | - | - | 其它class样式 |
| isType | String | text/textarea/password | text | 类型 |
| value | String/Number | - | - | 内容 |
| showTag | Boolean | - | false | 显示统计，textarea下有效 |
| maxlength | Number/String | - | 140 | 字数 |
| clear | Boolean | - | false | 可否清空 |
| isDisabled | Boolean | - | false | 禁用 |
| bind:clear | Event | - | - | 清空事件 |
| bind:visible | Event | true,false | - | 显示/隐藏事件 |


## 插槽

### ui-form-group

|  参数  |       说明       |
|----------|----------|
| 默认 | 默认插槽 |
| action | 右边插槽 |


</div>
<div class="mp-cu-doc-image" style="max-height: inherit;">

![mp-cu](https://colorui-assest.vercel.app/mp-cu-doc/input.jpg)

</div>
</div>
