<div class="mp-cu-doc-theme-content">

# 随机字符串 isRandom

随机字符串操作，可使用 `colorUISdk.isRandom.xxx()`

## 全部

生成随机字符串,默认为全部类型，`大小写字母、数字`

```javascript
console.log(colorUISdk.isRandom.getRandom(6))
// AsR09u
```


## 数字

```javascript
console.log(colorUISdk.isRandom.getRandomNUM(6))
// 236980
```

## 小写字母

```javascript
console.log(colorUISdk.isRandom.getRandomXEU(6))
// acsfer
```

## 大写字母

```javascript
console.log(colorUISdk.isRandom.getRandomDEU(6))
// ACSFER
```

## 数字小写字母

```javascript
console.log(colorUISdk.isRandom.getRandomNUM_XEU(6))
// 980fer
```

## 数字大写字母

```javascript
console.log(colorUISdk.isRandom.getRandomNUM_XEU(6))
// 980FER
```

## 大小写字母

```javascript
console.log(colorUISdk.isRandom.getRandomXEU_DEU(6))
// ferFER
```

## 范围随机数

取6-12之间的一位随机数

```javascript
console.log(colorUISdk.isRandom.getRandomFrom(6,12))
// 8
```

</div>