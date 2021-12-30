<div class="mp-cu-doc-theme-content">

# 日期时间

日期时间操作，可使用 `colorUISdk.isDate.xxx()`

## 获取日期时间变量

```javascript
console.log(colorUISdk.isDate.new_date) //new Date()
console.log(colorUISdk.isDate.year)     //当前年
console.log(colorUISdk.isDate.month)    //当前月
console.log(colorUISdk.isDate.date)     //当前日
console.log(colorUISdk.isDate.day)      //今天本周的第几天
```

## 当前日期

```javascript
console.log(colorUISdk.isDate.currentDate())
```

## 本周的开端日期

```javascript
console.log(colorUISdk.isDate.weekStartDate())
```

## 本周的停止日期

```javascript
console.log(colorUISdk.isDate.weekEndDate())
```

## 上周的停止日期

```javascript
console.log(colorUISdk.isDate.weekLastEndDate())
```

## 本月的开端日期

```javascript
console.log(colorUISdk.isDate.monthStartDate())
```

## 本月的停止日期

```javascript
console.log(colorUISdk.isDate.monthEndDate())
```

## 上月开端时候

```javascript
console.log(colorUISdk.isDate.monthLastStartDate())
```

## 上月停止时候

```javascript
console.log(colorUISdk.isDate.monthLastEndDate())
```

## 今年的开头

```javascript
console.log(colorUISdk.isDate.currentYear())
```

## 之前的日期

获取今天之前的多少天的日期

```javascript
console.log(colorUISdk.isDate.monthLastStartDate(7))
```

## 某月的天数

```javascript
console.log(colorUISdk.isDate.monthDays(2))
```

</div>