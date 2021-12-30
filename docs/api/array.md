<div class="mp-cu-doc-theme-content">

# 数组操作

数组操作，可使用 `colorUISdk.isArr.xxx()`

## 数组中是否存在

```javascript
console.log(colorUISdk.isArr.ifItemKey(arr, item))
```

## 数组对象深拷贝

```javascript
console.log(colorUISdk.isArr.nextArr(arr))
```

## 获取数组索引

```javascript
console.log(colorUISdk.isArr.getItemIndex(arr, item))
```

## 移除数组中指定元素

```javascript
console.log(colorUISdk.isArr.delItem(arr, item))
```

## 移除数组中其它元素

```javascript
console.log(colorUISdk.isArr.delItemKey(arr, item))
```

## 移除数组中左边的元素

```javascript
console.log(colorUISdk.isArr.delItemLeft(arr, item))
```

## 移除数组中右边的元素

```javascript
console.log(colorUISdk.isArr.delItemRight(arr, item))
```

## 替换数组中两个元素的位置

```javascript
console.log(colorUISdk.isArr.replaceItem(arr, item_a, item_b))
```

## 数组中是否存在

```javascript
console.log(colorUISdk.isArr.ifKey(arr, keyName, key))
```

## 获取数组索引

```javascript
console.log(colorUISdk.isArr.getIndex(arr, keyName, key))
```

## 移除数组中指定元素

```javascript
console.log(colorUISdk.isArr.del(arr, keyName, key))
```

## 移除数组中其它元素

```javascript
console.log(colorUISdk.isArr.delKey(arr, keyName, key))
```

## 移除数组中左边的元素

```javascript
console.log(colorUISdk.isArr.delLeft(arr, keyName, key))
```

## 移除数组中右边的元素

```javascript
console.log(colorUISdk.isArr.delRight(arr, keyName, key))
```

## isForEach

```javascript
console.log(colorUISdk.isArr.isForEach(arr, fn))
```

## 得到两个数组的交集

得到两个数组的交集, 两个数组的元素为数值或字符串

```javascript
console.log(colorUISdk.isArr.intersection(arr1, arr2))
```

## 得到两个数组的并集

得到两个数组的并集, 两个数组的元素为数值或字符串

```javascript
console.log(colorUISdk.isArr.getUnion(arr1, arr2))
```

## 包含在目标数组中

判断要查询的数组是否至少有一个元素包含在目标数组中

```javascript
console.log(colorUISdk.isArr.hasOneOf(arr1, arr2))
```

## 判断下级数组是否为空

```javascript
console.log(colorUISdk.isArr.hasChild(arr, key = 'children'))
```

</div>