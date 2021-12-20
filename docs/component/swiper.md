# 轮播图

```json
"usingComponents": {
    "ui-swiper": "/mp-cu/colorUI/components/ui-swiper/ui-swiper"
}
```

## 默认

`dotStyle='default'`

![mp-cu](/images/swiper/swiper-1.png)

```html
<ui-swiper info="{{[{img:'xxx', type: 'url'}, {img:'xxx', type: 'path'}]}}" dotCur="ui-BG-Main"/>
```

## long

`dotStyle='long'`

![mp-cu](/images/swiper/swiper-2.png)

```html
<ui-swiper info="{{[{img:'xxx', type: 'url'}, {img:'xxx', type: 'path'}]}}" dotStyle="long" dotCur="bg-white"/>
```

## line

`dotStyle='line'`

![mp-cu](/images/swiper/swiper-3.png)

```html
<ui-swiper info="{{[{img:'xxx', type: 'url'}, {img:'xxx', type: 'path'}]}}" dotStyle="line" dotCur="bg-white"/>
```

## tag

`dotStyle='tag'`

![mp-cu](/images/swiper/swiper-4.png)

```html
<ui-swiper info="{{[{img:'xxx', type: 'url'}, {img:'xxx', type: 'path'}]}}" dotStyle="tag" dotCur="bg-mask-50"/>
```

## card

`mode='card'`

![mp-cu](/images/swiper/swiper-5.png)

```html
<ui-swiper info="{{[{img:'xxx', type: 'url'}, {img:'xxx', type: 'path'}]}}" 
           mode="card" dotStyle="long" dotCur="bg-blue" height="380rpx" imgHeight="300rpx"/>
```

## hotelCard

`mode='hotelCard'`

![mp-cu](/images/swiper/swiper-6.png)

```html
<ui-swiper info="{{[{img:'xxx', type: 'url'}, {img:'xxx', type: 'path'}]}}" mode="hotelCard" dotStyle="line" dotCur="bg-white"/>
```

## hotelDetail

`mode='hotelDetail'`

![mp-cu](/images/swiper/swiper-7.png)

```html
<ui-swiper info="{{[{img:'xxx', type: 'url'}, {img:'xxx', type: 'path'}]}}" mode="hotelDetail" 
           dotStyle="line" dotCur="bg-white" height="300rpx" imgHeight="300rpx"/>
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

