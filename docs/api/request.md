<div class="mp-cu-doc-theme-content">

# 请求

发起请求可使用 `colorUISdk.request()`

```javascript
colorUISdk.request({
    url:'mock/route/to/demo',
    method: 'GET',
    data: {
        a:'xx'
    }
}).then(res=> {
    console.log(res)
}).catch(err=>{
    console.log(err)
})
```

## 配置参数

|  参数  |  类型  |  可选值  |  默认值  |       说明       |
|----------|----------|----------|----------|----------|
| obj | Object | - | - | 请求的配置，见下文 |
| loading | Boolean | - | false | 是否显示加载中 |

## 请求配置

|  参数  |  类型  |  可选值  |  默认值  |       说明       |
|----------|----------|----------|----------|----------|
| url | string | - | - | 请求地址，无需 `config/mp-sdk.js` 配置的域名 |
| method | string | - | GET | 请求类型 |
| header | Object | - | {"Content-Type": "application/json"} | header数据 |
| data | - | - | - | 提交的数据 |


</div>