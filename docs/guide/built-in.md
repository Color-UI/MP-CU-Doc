# 内置

内置了一些变量、方法函数。

## 内置变量

内置了一些全局变量，可以直接全局使用的，这些变量是对一些系统API进行了封装。

### 系统信息

在 wxml 中使用：

```html
<view data-value="{{sys_info.statusBarHeight}}">
```

在 js 中使用：

```javascript
let sys_info = this.data.sys_info;
console.log(sys_info)
```

::: tip
sys_info 变量，获取系统信息，对应 `wx.getSystemInfoSync()`，参考 [微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSystemInfoSync.html)
:::

### 状态栏高度

在 wxml 中使用：

```html
<view data-value="{{sys_statusBar}}">
```

在 js 中使用：

```javascript
let sys_statusBar = this.data.sys_statusBar;
console.log(sys_statusBar)
```

::: tip
sys_statusBar 变量，获取系统状态栏高度，对应 `wx.getSystemInfoSync().statusBarHeight`
:::

### 顶部高度

在 wxml 中使用：

```html
<view data-value="{{sys_navBar}}">
```

在 js 中使用：

```javascript
let sys_navBar = this.data.sys_navBar;
console.log(sys_navBar)
```

::: tip
sys_navBar 变量，获取系统状态栏高度并+50，对应 `wx.getSystemInfoSync().statusBarHeight + 50`
:::

### 胶囊信息

在 wxml 中使用：

```html
<view data-value="{{sys_capsule.top}}">
```

在 js 中使用：

```javascript
let sys_capsule = this.data.sys_capsule;
console.log(sys_capsule)
```

```json
{ 
  bottom: 56, 
  height: 32, 
  left: 278, 
  right: 365, 
  top: 24, 
  width: 87
}
```

::: tip
sys_capsule 变量，获取胶囊信息，对应 `wx.getMenuButtonBoundingClientRect()`，参考 [微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/menu/wx.getMenuButtonBoundingClientRect.html)
:::



## 内置方法

### 页面返回函数

::: tip
ColorUI3.x 微信小程序版本因为所有页面都需要包裹 `ui-sys` ，所以对于大多数返回函数都无法使用，ColorUI为您在所有页面注册了返回函数，在需要返回的函数里调用 `this._backPage()` 注意this 作用域的问题。
:::

### 返回首页

::: tip
在需要返回的函数里调用 `this._toHome()` 注意this 作用域的问题。
:::

### 切换主题

::: tip
在需要切换主题的地方调用 `this._setTheme()` 注意this 作用域的问题。
:::

### 设置主颜色

::: tip
在需要设置主颜色的地方调用 `this._setMain()` 注意this 作用域的问题。
:::

### 设置字号等级

::: tip
在需要设置字号等级的地方调用 `this._setText()` 注意this 作用域的问题。
:::

