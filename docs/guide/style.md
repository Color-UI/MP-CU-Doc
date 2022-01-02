<div class="mp-cu-doc-theme-content">

# 其它样式

其它的class样式，可在任何地方组合使用的。

## 边距

边距样式, class控制。适用于任何组件元素。内边距使用 `.p`  外边距使用 `.m` ，可以混用。


### 内边距

添加 `.p-{size}` 控制内边距，支持参数 0 ~ 6

<div class="ui-grid ui-cols-1 ui-cols-sm-2 ui-cols-md-2 ui-cols-lg-2 ui-cols-xl-4 ui-cols-xxl-8" style="margin: -10px;">
    <div class="p-3 ui-item" v-for="(item,index) in 7" :key="index">
        <div class="border radius item" :class="'p-' + (item -1)" @click="copyText('p-' + (item -1))">
            <div class="bg-blue-thin text-center h-100 p-4">
                <span class="text-lg">.p-{{(item -1)}}</span>
            </div>
        </div>
    </div>
</div>


### 内单边距

添加 `.p{name}-{size}` 控制方向内边距，支持边距参数 x、y、t、l、r、b，支持大小参数 0 ~ 6

<div class="ui-grid ui-cols-1 ui-cols-sm-2 ui-cols-md-2 ui-cols-lg-2 ui-cols-xl-4 ui-cols-xxl-8" style="margin: -10px;">
    <div class="p-3 ui-item">
        <div class="border radius item px-3" @click="copyText('px-3')">
            <div class="bg-blue-thin text-center h-100 p-4">
                <span class="text-lg">.px-3</span>
            </div>
        </div>
    </div>
    <div class="p-3 ui-item">
        <div class="border radius item py-3" @click="copyText('py-3')">
            <div class="bg-blue-thin text-center h-100 p-4">
                <span class="text-lg">.py-3</span>
            </div>
        </div>
    </div>
    <div class="p-3 ui-item">
        <div class="border radius item pt-3" @click="copyText('pt-3')">
            <div class="bg-blue-thin text-center h-100 p-4">
                <span class="text-lg">.pt-3</span>
            </div>
        </div>
    </div>
    <div class="p-3 ui-item">
        <div class="border radius item pl-3" @click="copyText('pl-3')">
            <div class="bg-blue-thin text-center h-100 p-4">
                <span class="text-lg">.pl-3</span>
            </div>
        </div>
    </div>
    <div class="p-3 ui-item">
        <div class="border radius item pr-3" @click="copyText('pr-3')">
            <div class="bg-blue-thin text-center h-100 p-4">
                <span class="text-lg">.pr-3</span>
            </div>
        </div>
    </div>
    <div class="p-3 ui-item">
        <div class="border radius item pb-3" @click="copyText('pb-3')">
            <div class="bg-blue-thin text-center h-100 p-4">
                <span class="text-lg">.pb-3</span>
            </div>
        </div>
    </div>
</div>


### 外边距

添加 `.m-{size}` 控制边距，支持参数 0 ~ 6

<div class="ui-grid ui-cols-1 ui-cols-sm-2 ui-cols-md-2 ui-cols-lg-2 ui-cols-xl-4 ui-cols-xxl-8" style="margin: -10px;">
    <div class="p-3 ui-item" v-for="(item,index) in 7" :key="index">
        <div class="border radius item" @click="copyText('m-' + (item -1))"  style="display: flex;">
            <div class="bg-red-thin text-center h-100 p-4" :class="'m-' + (item -1)" style="width: 100%;">
                <span class="text-lg">.m-{{(item -1)}}</span>
            </div>
        </div>
    </div>
</div>


###  外单边距

添加 `.m{name}-{size}` 控制方向外边距，支持边距参数 x、y、t、l、r、b，支持大小参数 0 ~ 6

<div class="ui-grid ui-cols-1 ui-cols-sm-2 ui-cols-md-2 ui-cols-lg-2 ui-cols-xl-4 ui-cols-xxl-8" style="margin: -10px;">
    <div class="p-3 ui-item">
        <div class="border radius item" @click="copyText('mx-3')"  style="display: flex;">
            <div class="bg-red-thin text-center h-100 p-4 mx-3" style="width: 100%;">
                <span class="text-lg">.mx-3</span>
            </div>
        </div>
    </div>
    <div class="p-3 ui-item">
        <div class="border radius item" @click="copyText('my-3')"  style="display: flex;">
            <div class="bg-red-thin text-center h-100 p-4 my-3" style="width: 100%;">
                <span class="text-lg">.my-3</span>
            </div>
        </div>
    </div>
    <div class="p-3 ui-item">
        <div class="border radius item" @click="copyText('mt-3')"  style="display: flex;">
            <div class="bg-red-thin text-center h-100 p-4 mt-3" style="width: 100%;">
                <span class="text-lg">.mt-3</span>
            </div>
        </div>
    </div>
    <div class="p-3 ui-item">
        <div class="border radius item" @click="copyText('ml-3')"  style="display: flex;">
            <div class="bg-red-thin text-center h-100 p-4 ml-3" style="width: 100%;">
                <span class="text-lg">.ml-3</span>
            </div>
        </div>
    </div>
    <div class="p-3 ui-item">
        <div class="border radius item" @click="copyText('mr-3')"  style="display: flex;">
            <div class="bg-red-thin text-center h-100 p-4 mr-3" style="width: 100%;">
                <span class="text-lg">.mr-3</span>
            </div>
        </div>
    </div>
    <div class="p-3 ui-item">
        <div class="border radius item" @click="copyText('mb-3')"  style="display: flex;">
            <div class="bg-red-thin text-center h-100 p-4 mb-3" style="width: 100%;">
                <span class="text-lg">.mb-3</span>
            </div>
        </div>
    </div>
</div>


## 圆角

为容器添加class `.radius` 或 `.round` 实现圆角。

<div class="ui-grid ui-cols-1 ui-cols-sm-2 ui-cols-md-2 ui-cols-lg-2 ui-cols-xl-4 ui-cols-xxl-8" style="margin: -10px;">
    <div class="p-3 ui-item">
        <div class="text-center border radius item p-4" @click="copyText('radius')">
            <div class="text-lg radius bg-blue p-3">默认圆角</div>
            <div class="text-right mt-3">.radius</div>
        </div>
    </div>
    <div class="p-3 ui-item">
        <div class="text-center border radius item p-4" @click="copyText('radius-sm')">
            <div class="text-lg radius-sm bg-blue p-3">小圆角</div>
            <div class="text-right mt-3">.radius-sm</div>
        </div>
    </div>
    <div class="p-3 ui-item">
        <div class="text-center border radius item p-4" @click="copyText('radius-lg')">
            <div class="text-lg radius-lg bg-blue p-3">大圆角</div>
            <div class="text-right mt-3">.radius-lg</div>
        </div>
    </div>
    <div class="p-3 ui-item">
        <div class="text-center border radius item p-4" @click="copyText('radius-0')">
            <div class="text-lg radius-0 bg-blue p-3">无圆角</div>
            <div class="text-right mt-3">.radius-0</div>
        </div>
    </div>
    <div class="p-3 ui-item">
        <div class="text-center border radius item p-4" @click="copyText('round')">
            <div class="text-lg round bg-blue p-3">大圆角</div>
            <div class="text-right mt-3">.round</div>
        </div>
    </div>
    <div class="p-3 ui-item">
        <div class="text-center border radius item p-4" @click="copyText('radius-top')">
            <div class="text-lg radius-top bg-blue p-3">上边圆角</div>
            <div class="text-right mt-3">.radius-top</div>
        </div>
    </div>
    <div class="p-3 ui-item">
        <div class="text-center border radius item p-4" @click="copyText('radius-right')">
            <div class="text-lg radius-right bg-blue p-3">右边圆角</div>
            <div class="text-right mt-3">.radius-right</div>
        </div>
    </div>
    <div class="p-3 ui-item">
        <div class="text-center border radius item p-4" @click="copyText('radius-bottom')">
            <div class="text-lg radius-bottom bg-blue p-3">底部圆角</div>
            <div class="text-right mt-3">.radius-bottom</div>
        </div>
    </div>
    <div class="p-3 ui-item">
        <div class="text-center border radius item p-4" @click="copyText('radius-left')">
            <div class="text-lg radius-left bg-blue p-3">左边圆角</div>
            <div class="text-right mt-3">.radius-left</div>
        </div>
    </div>
    <div class="p-3 ui-item">
        <div class="text-center border radius item p-4" @click="copyText('radius-lr')">
            <div class="text-lg radius-lr bg-blue p-3">左上 和 右下</div>
            <div class="text-right mt-3">.radius-lr</div>
        </div>
    </div>
    <div class="p-3 ui-item">
        <div class="text-center border radius item p-4" @click="copyText('radius-rl')">
            <div class="text-lg radius-rl bg-blue p-3">左下 和 右上</div>
            <div class="text-right mt-3">.radius-rl</div>
        </div>
    </div>
</div>


## 参数

|  参数  |  对应尺寸  |    说明     |
|----------|----------|----------|
| 0 | 0 | 如：m-0 、p-0 |
| 1 | 20rpx * 0.25 | 如：m-1 、p-1 |
| 2 | 20rpx * .5 | 如：m-2 、p-2 |
| 3 | 20rpx | 如：m-3 、p-3 |
| 4 | 20rpx * 1.5 | 如：m-4 、p-4 |
| 5 | 20rpx * 3 | 如：m-5 、p-5 |
| 6 | 20rpx * 5 | 如：m-6 、p-6 |

## 其它参数

|  class  |  对应css  |    说明     |
|----------|----------|----------|
| .w-100 | width: 100% | - |
| .h-100 | height: 100% | - |
| .none | display: none | !important |
| .inline | display: inline | !important |
| .inline-block | display: inline-block | !important |
| .block | display: block | !important |
| .touch-non | pointer-events: none | 允许点击穿透 |
| .touch-all | pointer-events: all | 只有鼠标指针在元素内部或边界时,元素才会成为鼠标事件的目标，[参考](https://developer.mozilla.org/zh-CN/docs/Web/CSS/pointer-events) |
| .flex | display: flex | !important |
| .inline-flex | display: inline-flex | !important |
| .cf | content: ''; display: table; clear: both; | 会生成 `::after` 和 `::before` |
| .fl | float: left; | 在左边浮动 |
| .fr | float: right; | 在右边浮动 |

</div>

<div class="mp-cu-toast" :class="isToast?'show':''">
    <div class="text">复制成功</div>
</div>

<script setup>
import { ref } from "vue";
const isToast = ref(false);

//复制文本
function copyText(text) {
    let createInput = document.createElement('textarea');
    createInput.value = text;
    document.body.appendChild(createInput);
    createInput.select();
    document.execCommand('Copy');
    createInput.className = 'createInput';
    createInput.style.display = 'none';
    toastShow();
};
function toastShow() {
    isToast.value = true;
    window.setTimeout(function() {
      isToast.value = false;
    },1000);
}
</script>
