<div class="mp-cu-doc-theme-content">

# 其它方法函数

其它方法函数可使用 `colorUISdk.xxx()`

## 金额处理

关于金额数值的处理用这个方法,以防金额计算出错

```javascript
var decimal = 2; //保留几位小数
console.log(colorUISdk.priceFormat("10",decimal))
// 10.00
```


## 数字格式化

大于1000，转为k单位，大于10000，转w单位。

```javascript
console.log(colorUISdk.numberFormat(1000000))
// 100W
```

</div>