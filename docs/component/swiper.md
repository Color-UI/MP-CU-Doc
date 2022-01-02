<div class="mp-cu-doc-theme-content">

# 轮播图 ui-swiper

```json
"usingComponents": {
    "ui-swiper": "/mp-cu/colorUI/components/ui-swiper/ui-swiper"
}
```

## 默认

`dotStyle='default'`

![mp-cu](https://colorui-assest.vercel.app/mp-cu-doc/swiper/swiper-1.png)

```html
<ui-swiper info="{{[{img:'xxx', type: 'url'}, {img:'xxx', type: 'path'}]}}" dotCur="ui-BG-Main"/>
```

## long

`dotStyle='long'`

![mp-cu](https://colorui-assest.vercel.app/mp-cu-doc/swiper/swiper-2.png)

```html
<ui-swiper info="{{[{img:'xxx', type: 'url'}, {img:'xxx', type: 'path'}]}}" dotStyle="long" dotCur="bg-white"/>
```

## line

`dotStyle='line'`

![mp-cu](https://colorui-assest.vercel.app/mp-cu-doc/swiper/swiper-3.png)

```html
<ui-swiper info="{{[{img:'xxx', type: 'url'}, {img:'xxx', type: 'path'}]}}" dotStyle="line" dotCur="bg-white"/>
```

## tag

`dotStyle='tag'`

![mp-cu](https://colorui-assest.vercel.app/mp-cu-doc/swiper/swiper-4.png)

```html
<ui-swiper info="{{[{img:'xxx', type: 'url'}, {img:'xxx', type: 'path'}]}}" dotStyle="tag" dotCur="bg-mask-50"/>
```

## card

`mode='card'`

![mp-cu](https://colorui-assest.vercel.app/mp-cu-doc/swiper/swiper-5.png)

```html
<ui-swiper info="{{[{img:'xxx', type: 'url'}, {img:'xxx', type: 'path'}]}}" 
           mode="card" dotStyle="long" dotCur="bg-blue" height="380rpx" imgHeight="300rpx"/>
```

## hotelCard

`mode='hotelCard'`

![mp-cu](https://colorui-assest.vercel.app/mp-cu-doc/swiper/swiper-6.png)

```html
<ui-swiper info="{{[{img:'xxx', type: 'url'}, {img:'xxx', type: 'path'}]}}" mode="hotelCard" dotStyle="line" dotCur="bg-white"/>
```

## hotelDetail

`mode='hotelDetail'`

![mp-cu](https://colorui-assest.vercel.app/mp-cu-doc/swiper/swiper-7.png)

```html
<ui-swiper info="{{[{img:'xxx', type: 'url'}, {img:'xxx', type: 'path'}]}}" mode="hotelDetail" 
           dotStyle="line" dotCur="bg-white" height="300rpx" imgHeight="300rpx"/>
```


## 数据格式

```html
<ui-swiper info="{{swiperList}}" dotCur="ui-BG-Main" bind:uiTap="swiperTap"/>
```

type: `switchTab` `reLaunch` `redirectTo` `navigateTo` `eve`

```javascript
//type: switchTab/reLaunch/redirectTo/navigateTo/eve
swiperList: [
    {
        img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
        url: '/pages/document/system/system',
        type: 'navigateTo' //直接跳转类型
    },
    {
        img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
        url: '/pages/custom/home',
        type: 'switchTab' //直接跳转类型
    },
    {
        img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg',
        type: 'eve' //事件方式
    },
    {
        img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
        type: 'eve'
    },
]
```



## 参数

|  参数  |  类型  |  可选值  |  默认值  |       说明       |
|----------|----------|----------|----------|----------|
| circular | Boolean | - | true | - |
| autoplay | Boolean | - | true | - |
| interval | Number | - | 3000 | - |
| duration | Number | - | 800 | - |
| info | Array | - | - | 数据 |
| swiperCss | String | - | bg-none | - |
| mode | String | - | default | - |
| dotStyle | String | - | default | - |
| dotCur | String | - | bg-black | - |
| height | String | - | 272rpx | - |
| imgHeight | String | - | 272rpx | - |
| imgName | String | - | img | - |
| bind:uiTap | Event | - | - | 点击事件 |

</div>
