# 栅栏

class的方式使用


## 示例-1

![mp-cu](https://color-ui.gitee.io/assest/mp-cu-doc/grid/grid-1.png)

```html
<view class="ui-grid p-3">
    <view class="ui-col-6 ui-col-lg-4" wx:for="{{6}}" wx:key="index">
        <view class="p-5 bg-blue m-2">{{index+1}}</view>
    </view>
</view>
```

## 示例-2

![mp-cu](https://color-ui.gitee.io/assest/mp-cu-doc/grid/grid-2.png)

```html
<view class="ui-grid ui-cols-4 ui-cols-lg-6 p-3">
    <view class="ui-item" wx:for="{{12}}" wx:key="index">
        <view class="p-5 bg-green m-2">{{index+1}}</view>
    </view>
</view>
```


## 示例-3

![mp-cu](https://color-ui.gitee.io/assest/mp-cu-doc/grid/grid-3.png)

```html
<view class="ui-grid grid-square ui-cols-6 p-3">
    <view class="ui-item bg-red radius" wx:for="{{12}}" wx:key="index">
        <view class="flex-center position-center">{{index+1}}</view>
    </view>
</view>
```
