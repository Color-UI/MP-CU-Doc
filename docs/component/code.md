# 代码

代码组件是用来展示计算机代码文本的一个组件。

```json
"usingComponents": {
    "ui-code": "mp-cu/colorUI/components/ui-code/ui-code"
}
```

## 行内用法

默认是行内代码的用法。支持默认插槽与 `content` 参数引入,在包含一些特殊符号的时候请使用引入的方式。

`<ui-code></ui-code>`

![mp-cu](/images/code/code-1.jpg)

```html
<ui-code content="<ui-code>...</ui-code> \n<ui-code content='...'></ui-code>"/>
```

## 代码块用法

`tag` 参数设置为 `pre` 就可以使用代码块了。 `lang` 参数设置为指定语言。可以实现代码高亮。

代码高亮是使用了 `PrismJS` 暗色主题的高亮颜色是亮色主题的反转。


![mp-cu](/images/code/code-2.jpg)

```html
<ui-code tag="pre" lang="html" content="<ui-code>...</ui-code> \n<ui-code content='...'></ui-code>"/>
<ui-code tag="pre" lang="css" content=".ui-code { \n  white-space: pre-wrap; \n  word-break: break-all; \n  word-wrap: break-word; \n  font-size: 90%; \n}"/>
<ui-code tag="pre" lang="html" content="<ui-code tag='pre' lang='html' content='...'>\n</ui-code>\n<ui-code tag='pre' lang='css' content='...'>\n</ui-code>"/>
```


## 参数

|  参数  |  类型  |  可选值  |  默认值  |       说明       |
|----------|----------|----------|----------|----------|
| ui | String | - | - | 其他class |
| bg | String | - | ui-BG | 背景颜色 |
| title | Boolean/String | - | false | 标题 |
| content | String | - | - | 代码内容 |
| text | String | - | ui-TC-Main | 代码区样式 |
| tag | String | - | code | 类型 |
| lang | String | - | null | 语言 |
| scroll | Boolean | - | false | 滑动 |


## 插槽

|  参数  |       说明       |
|----------|----------|
| 默认 | 行内代码的内容 |
