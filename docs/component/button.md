# 按钮

原生组件，并未封装，只是提供了样式 

## 默认

![mp-cu](/images/button/button-1.jpg)

```html
<button class="ui-btn">按钮</button>
```

## 颜色

![mp-cu](/images/button/button-2.jpg)

```html
<view class="p-3 flex-between">
    <button class="ui-btn bg-orange">按钮</button>
    <button class="ui-btn bg-orange-thin">按钮</button>
    <button class="ui-btn bg-orange-gradient">按钮</button>
    <button class="ui-btn bg-orange-light">按钮</button>
</view>
<view class="p-3 flex-between">
    <button class="ui-btn bg-blue">按钮</button>
    <button class="ui-btn bg-blue-thin">按钮</button>
    <button class="ui-btn bg-blue-gradient">按钮</button>
    <button class="ui-btn bg-blue-light">按钮</button>
</view>
<view class="p-3 flex-between">
    <button class="ui-btn bg-green">按钮</button>
    <button class="ui-btn bg-green-thin">按钮</button>
    <button class="ui-btn bg-green-gradient">按钮</button>
    <button class="ui-btn bg-green-light">按钮</button>
</view>
```

## 尺寸

![mp-cu](/images/button/button-3.jpg)

```html
<view class="p-3 flex-between">
    <button class="ui-btn sm">按钮</button>
    <button class="ui-btn df">按钮</button>
    <button class="ui-btn lg">按钮</button>
    <button class="ui-btn xl">按钮</button>
</view>
```

## 形状

![mp-cu](/images/button/button-4.jpg)

```html
<view class="p-3 flex-between">
    <button class="ui-btn">按钮</button>
    <button class="ui-btn">按钮</button>
    <button class="ui-btn round">按钮</button>
    <button class="ui-btn icon">
        <text class="cicon-link"/>
    </button>
</view>
```


## 块状

![mp-cu](/images/button/button-5.jpg)

```html
<view class="p-3">
    <button class="ui-btn block">按钮</button>
</view>
```

## 阴影

![mp-cu](/images/button/button-6.jpg)

```html
<view class="p-4">
    <button class="ui-btn block shadow-sm">按钮</button>
</view>
<view class="p-4">
    <button class="ui-btn block shadow">按钮</button>
</view>
<view class="p-4">
    <button class="ui-btn block bg-blue shadow shadow-blue">按钮</button>
</view>
<view class="p-4">
    <button class="ui-btn block shadow-lg">按钮</button>
</view>
```

## 边框

![mp-cu](/images/button/button-7.jpg)

```html
<view class="p-3 flex-between">
    <button class="ui-btn border bg-none">按钮</button>
    <button class="ui-btn borders bg-none">按钮</button>
    <button class="ui-btn borderss bg-none">按钮</button>
    <button class="ui-btn dashed bg-none">按钮</button>
</view>
<view class="p-3 flex-between">
    <button class="ui-btn bg-orange-thin">按钮</button>
    <button class="ui-btn border border-orange  bg-orange-thin">按钮</button>
    <button class="ui-btn borders border-orange bg-orange-thin">按钮</button>
    <button class="ui-btn borderss border-orange bg-orange-thin">按钮</button>
</view>
<view class="p-3 flex-between">
    <button class="ui-btn bg-blue-light">按钮</button>
    <button class="ui-btn border border-blue bg-blue-light">按钮</button>
    <button class="ui-btn borders border-blue bg-blue-light">按钮</button>
    <button class="ui-btn borderss border-blue bg-blue-light">按钮</button>
</view>
<view class="p-3 flex-between">
    <button class="ui-btn dashed border-green bg-green-thin">按钮</button>
    <button class="ui-btn dashed border-green bg-green-thin">按钮</button>
    <button class="ui-btn dashed border-green bg-green-thin">按钮</button>
    <button class="ui-btn dashed border-green bg-green-light">按钮</button>
</view>
<view class="p-3 flex-between">
    <button class="ui-btn border border-red bg-red-light">按钮</button>
    <button class="ui-btn border border-yellow bg-yellow-light">按钮</button>
    <button class="ui-btn border border-green bg-green-light">按钮</button>
    <button class="ui-btn border border-blue bg-blue-light">按钮</button>
</view>
<view class="p-3 flex-between">
    <button class="ui-btn icon bg-none border border-blue">
        <text class="cicon-link text-blue"/>
    </button>
    <button class="ui-btn icon lg borders bg-none border-bluegreen">
        <text class="cicon-link text-green/"></text>
    </button>
    <button class="ui-btn icon round xl borderss bg-none border-yellow">
        <text class="cicon-link text-yellow"/>
    </button>
</view>
```

## 无效

![mp-cu](/images/button/button-8.jpg)

```html
<view class="p-3 flex-between">
    <button class="ui-btn" disabled>按钮</button>
    <button class="ui-btn" disabled>按钮</button>
    <button class="ui-btn" disabled>按钮</button>
    <button class="ui-btn" disabled>按钮</button>
</view>
```

## 图标

![mp-cu](/images/button/button-9.jpg)

```html
<view class="p-3">
    <button class="ui-btn block">
        <text>按钮</text>
        <text class="_icon-add-round"/>
    </button>
</view>
<view class="p-3">
    <button class="ui-btn block">
        <text>按钮</text>
        <text class="_icon-add-round"/>
    </button>
</view>
<view class="p-3">
    <button class="ui-btn xl">
        <text>按钮</text>
        <text class="_icon-add-round"/>
    </button>
    <button class="ui-btn xxl">
        <text>按钮</text>
        <text class="_icon-add-round"/>
    </button>
</view>
<view class="p-3">
    <button class="ui-btn block">按钮 </button>
</view>
<view class="p-3">
    <button class="ui-btn block">按钮 </button>
</view>
<view class="p-3">
    <button class="ui-btn xl">按钮 </button>
    <button class="ui-btn xxl">按钮 </button>
</view>
```

## 加载

![mp-cu](/images/button/button-10.jpg)

```html
<view class="p-3">
    <button class="ui-btn block">
        <text>按钮</text>
        <text class="_icon-loader icon-spin"/>
    </button>
</view>
<view class="p-3">
    <button class="ui-btn block">
        <text>按钮</text>
        <ui-loading color/>
    </button>
</view>

<view class="p-3">
    <button class="ui-btn xl">
        <text>按钮</text>
        <text class="_icon-loader icon-spin"/>
    </button>
    <button class="ui-btn xxl">
        <text>按钮</text>
        <text class="_icon-loader icon-spin"/>
    </button>
</view>
```

## 无样式

![mp-cu](/images/button/button-11.jpg)

```html
<view class="position-relative p-5">
    <button class="ui-btn none-style">sx</button>
</view>
```