<div class="mp-cu-doc-theme-content">

# 数据类型 isDataType

判断数据类型可使用 `colorUISdk.isDataType.xxx()`

## ifNull

判断数据是否为空，`undefined`，`null`，`''`

```javascript
console.log(colorUISdk.isDataType.ifNull("内容"))
// false
```


## ifBoolean

判断数据是否为Boolean类型，`boolean`

```javascript
var mp_cu = false;
console.log(colorUISdk.isDataType.ifBoolean(mp_cu))
// true
```

## ifFunction

判断数据是否为方法函数类型，`function`

```javascript
function mp_cu() {
    return 'xxx';
};
console.log(colorUISdk.isDataType.ifFunction(mp_cu))
// true
```


## ifObject

判断数据是否为对象（json）类型，`Object`

```javascript
var mp_cu = {xx:'xx'};
console.log(colorUISdk.isDataType.ifObject(mp_cu))
// true
```

## ifArray

判断数据是否为数组类型，`Array`

```javascript
var mp_cu = [1,2,3];
console.log(colorUISdk.isDataType.ifArray(mp_cu))
// true
```


## ifDate

判断数据是否为时间日期类型，`Date`

```javascript
var mp_cu = '2021-12-30 23:30:00';
console.log(colorUISdk.isDataType.ifDate(mp_cu))
// true
```


## ifNumber

判断数据是否为数字类型，`Number`

```javascript
var mp_cu = 2021;
console.log(colorUISdk.isDataType.ifNumber(mp_cu))
// true
```

## ifString

判断数据是否为字符串类型，`String`

```javascript
var mp_cu = 'mp-cu';
console.log(colorUISdk.isDataType.ifString(mp_cu))
// true
```

</div>