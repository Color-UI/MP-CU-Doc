# 背景颜色

容器的背景表现,class控制。一些组件包含了通用属性 `bg` 也是用的这些类。

## 基础背景色

`.bg-{color}` 基础的背景颜色。点击色块，可复制到剪切板

<div class="ui-grid ui-cols-1 ui-cols-sm-2 ui-cols-md-2 ui-cols-lg-2 ui-cols-xl-4 ui-cols-xxl-8" style="margin: -10px;">
    <div class="p-3 ui-item" v-for="(item,index) in color" :key="index">
        <div class="radius p-4 item" :class="'bg-' + item.name" @click="copyText('bg-' + item.name)">
            <div class="text-xl pb-3">{{ item.desc }}</div>
            <div class="text-sm flex-bar">
                <span class="text-ABC">#{{ item.value }}</span>
                <span>.bg-{{ item.name }}</span>
            </div>
        </div>
    </div>
</div>


## 淡色背景

`.bg-{color}-thin` 更浅的颜色。为适应暗色主题,注意有透明度。点击色块，可复制到剪切板

<div class="ui-grid ui-cols-1 ui-cols-sm-2 ui-cols-md-2 ui-cols-lg-2 ui-cols-xl-4 ui-cols-xxl-8" style="margin: -10px;">
    <div class="p-3 ui-item" v-for="(item,index) in color" :key="index">
        <div class="radius p-4 item" :class="'bg-' + item.name + '-thin'" @click="copyText('bg-' + item.name + '-thin')">
            <div class="text-xl pb-3">{{ item.desc }}</div>
            <div class="text-sm flex-bar">
                <span>.bg-{{ item.name }}-thin</span>
            </div>
        </div>
    </div>
</div>

## 渐变背景色

`.bg-{color}-gradient` 精心调整的色值，更加自然的过渡色。点击色块，可复制到剪切板

<div class="ui-grid ui-cols-1 ui-cols-sm-2 ui-cols-md-2 ui-cols-lg-2 ui-cols-xl-4 ui-cols-xxl-8" style="margin: -10px;">
    <div class="p-3 ui-item" v-for="(item,index) in color" :key="index">
        <div class="radius p-4 item" :class="'bg-' + item.name + '-gradient'" @click="copyText('bg-' + item.name + '-gradient')">
            <div class="text-xl pb-3">{{ item.desc }}</div>
            <div class="text-sm flex-bar">
                <span>.bg-{{ item.name }}-gradient</span>
            </div>
        </div>
    </div>
</div>

## 过渡渐变色

`.bg-{color}-{color}` 支持所有基础色到基础色的渐变。

## 高亮色

`.bg-{color}-light` 带有一定色彩的高亮背景。在深浅主题下保持一致。点击色块，可复制到剪切板

<div class="ui-grid ui-cols-1 ui-cols-sm-2 ui-cols-md-2 ui-cols-lg-2 ui-cols-xl-4 ui-cols-xxl-8" style="margin: -10px;">
    <div class="p-3 ui-item" v-for="(item,index) in color" :key="index">
        <div class="radius p-4 item" :class="'bg-' + item.name + '-light'" @click="copyText('bg-' + item.name + '-light')">
            <div class="text-xl pb-3">{{ item.desc }}</div>
            <div class="text-sm flex-bar">
                <span>.bg-{{ item.name }}-light</span>
            </div>
        </div>
    </div>
</div>

## 浅色灰度值

`.bg-{gray}` `#aaaaaa` ~ `#ffffff` 的浅色灰度值。点击色块，可复制到剪切板

<div class="ui-grid ui-cols-1 ui-cols-sm-2 ui-cols-md-2 ui-cols-lg-2 ui-cols-xl-4 ui-cols-xxl-8 bg-dark-3 radius">
    <div class="p-3 ui-item" v-for="(item,index) in gray" :key="index">
        <div class="radius p-4 item" :class="'bg-' + item.name" @click="copyText('bg-' + item.name)">{{ item.name }}</div>
    </div>
</div>

## 深色灰度值

`.bg-{dark}` `#999999` ~ `#000000` 的深色灰度值。点击色块，可复制到剪切板

<div class="ui-grid ui-cols-1 ui-cols-sm-2 ui-cols-md-2 ui-cols-lg-2 ui-cols-xl-4 ui-cols-xxl-8" style="margin: -10px;">
    <div class="p-3 ui-item" v-for="(item,index) in dark" :key="index">
        <div class="radius p-4 item" :class="'bg-' + item.name" @click="copyText('bg-' + item.name)">{{ item.name }}</div>
    </div>
</div>

## 主题主色背景

`.ui-BG-Main-{No}`

<div class="ui-grid ui-cols-1 ui-cols-sm-2 ui-cols-md-2 ui-cols-lg-2 ui-cols-xl-4 ui-cols-xxl-8" style="margin: -10px;">
    <div class="p-3 ui-item" v-for="(item,index) in themeColor" :key="index">
        <div class="radius p-4 item" :class="'ui-BG-Main-' + (index + 1)" @click="copyText('ui-BG-Main-' + (index + 1))">{{ item.name }}</div>
    </div>
</div>

## 主题层级背景

`.{level}-bg` `.{level}-bg-sub`

<div class="ui-grid ui-cols-1 ui-cols-sm-2 ui-cols-md-2 ui-cols-lg-2 ui-cols-xl-4 ui-cols-xxl-8" style="margin: -10px;">
    <div class="p-3 ui-item" v-for="(item,index) in level" :key="index">
        <div class="radius p-4 item border" :class="item + '-bg'" @click="copyText(item + '-bg')">{{ item }}</div>
    </div>
    <div class="p-3 ui-item" v-for="(item,index) in level" :key="index">
        <div class="radius p-4 item border" :class="item + '-bg-sub'" @click="copyText(item + '-bg-sub')">{{ item }}</div>
    </div>
</div>

## 背景遮罩

`.bg-mask-{opacity}` 占用after伪元素的遮罩层

![mp-cu](/images/background/background1.png)


## 背景图片

`.bg-img` 自适应背景图片

![mp-cu](/images/background/background2.png)

## 模糊背景

`.bg-blur` 高斯模糊背景。 (存在兼容性！ios设备和安卓10以上才支持。)

![mp-cu](/images/background/background3.png)


<script setup>
const color = [
    { name: 'yellow', value: 'fbbd08', desc: '明黄' },
    { name: 'orange', value: 'f37b1d', desc: '橘橙' },
    { name: 'red', value: 'e54d42', desc: '嫣红' },
    { name: 'pink', value: 'e03997', desc: '桃粉' },
    { name: 'mauve', value: 'b745cb', desc: '木槿' },
    { name: 'purple', value: '905ddf', desc: '姹紫' },
    { name: 'blue', value: '0081ff', desc: '海蓝' },
    { name: 'cyan', value: '1cbbb4', desc: '天青' },
    { name: 'green', value: '3eb93b', desc: '森绿' },
    { name: 'olive', value: '8dc63f', desc: '橄榄' },
    { name: 'grey', value: '8799a3', desc: '玄灰' },
    { name: 'brown', value: 'a5673f', desc: '棕褐' }
];
const gray = [
    { name: 'white', value: 'ffffff' },
    { name: 'gray-f', value: 'f8f9fa' },
    { name: 'gray-e', value: 'eeeeee' },
    { name: 'gray-d', value: 'dddddd' },
    { name: 'gray-c', value: 'cccccc' },
    { name: 'gray-b', value: 'bbbbbb' },
    { name: 'gray-a', value: 'aaaaaa' }
];
const dark = [
    { name: 'dark-9', value: '999999' },
    { name: 'dark-8', value: '888888' },
    { name: 'dark-7', value: '777777' },
    { name: 'dark-6', value: '666666' },
    { name: 'dark-5', value: '555555' },
    { name: 'dark-4', value: '444444' },
    { name: 'dark-3', value: '333333' },
    { name: 'dark-2', value: '222222' },
    { name: 'dark-1', value: '111111' },
    { name: 'black', value: '000000' }
];
const themeColor = [
    { name: 'a', value: '0081ff' }, 
    { name: 'b', value: '2ca5f9' }, 
    { name: 'c', value: '2ccbf9' }, 
    { name: 'd', value: 'b2d4fe' }
];
const level = ['page', 'box', 'menu'];


//复制文本
function copyText(text) {
    let createInput = document.createElement('textarea');
    createInput.value = text;
    document.body.appendChild(createInput);
    createInput.select();
    document.execCommand('Copy');
    createInput.className = 'createInput';
    createInput.style.display = 'none';
};
</script>
