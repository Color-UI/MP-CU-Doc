<div class="mp-cu-doc-theme-content">

# 轻提示 $tips

sys组件内置了，一般不需要再次挂载该组件。

## Tips

![mp-cu](https://colorui-assest.vercel.app/mp-cu-doc/toast/toast-1.png)

```javascript
//普通，默认1500毫秒关闭
this.$tips('你好呀');
//倒计时关闭
this.$tips({
    title :'您好呀！',
    duration : 5000
});
//多内容
this.$tips({
    title : 'Android Studio1.4 \r\n以后官方重做了新建Activity的模板展现, 其中默认的那一个, 就很好的演示了新系统的一些交互逻辑, 点击FAB的时候, 会从底部滑出来一个SnackBar, 其中默认的那一个, 就很好的演示了新系统的一些交互逻辑, 点击FAB的时候, 会从底部滑出来一个SnackBar, 不妨新建一个默认的体验一下官方的设计思想.适用于只是告诉用户发生了什么, 常见于系统的通知, 但是有很大的局限性,就是只能通知用户, 而做不到和用户进行交互, 比如你不小心删除了一张照片而没有通过二次确认, 仅仅是toast通知你"已删除", 对用户而言是很难接受的事情.'
});
```

## Toast

### 状态框

![mp-cu](https://colorui-assest.vercel.app/mp-cu-doc/toast/toast-2.png)

```html
<button class="ui-btn" bindtap="$success">Success</button>
<button class="ui-btn" bindtap="$error">Error</button>
```

### 加载框 

![mp-cu](https://colorui-assest.vercel.app/mp-cu-doc/toast/toast-3.png)

```javascript
Loading() {
    //显示加载框
    this.$loading()
    //倒计时关闭加载
    setTimeout(()=>{
        this.$hideLoading()
    },1500)
}
```


## Tips参数

 可以使用 `this.$tips('你好呀');` 和 `this.$tips({..});` 的方式，下文为 object 方式的参数说明。

|  参数  |  类型  |  可选值  |  默认值  |       说明       |
|----------|----------|----------|----------|----------|
| title | String | - | - | 标题 |
| duration | Number | - | 1500 | 关闭倒计时 |
| icon | String | - | - | 图标 |
| mask | Boolean/String | false,true,80,20,40 | false | 遮罩 |
| success | Event | - | res | 事件 |


## Toast 方法

|  参数  |     说明    |
|----------|----------|
| $success | 成功提示框 |
| $error | 错误提示框 |
| $loading | 加载框 |
| $hideLoading | 关闭加载框 |

</div>