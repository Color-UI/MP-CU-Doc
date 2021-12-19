# 文本字体

文本字体样式,Class控制。适用于任何组件元素。

## 文字大小

`.text-{size}` 添加包含尺寸的Class来控制文字大小。

<div style="display: flex; flex-wrap: wrap;">
    <div class="p-3 mt-1 flex-bar border radius" style="width: 400px;" v-for="(item,index) in size" :key="index" @click="copyText(item.class)">
        <div class="p-3">{{ item.size }}</div>
        <div class="flex-sub text-center px-4">
            <div class="p-3" :class="item.class">
                <span class="bg-blue round" v-if="item.tag">{{ item.tag }}</span>
                <span v-if="item.desc">{{ item.desc }}</span>
                <span v-if="item.icon" :class="item.icon"></span>
                <span v-if="item.price">
                    <span class="mr-5">价格</span>
                    <span class="text-price text-red">{{ item.price }}</span>
                </span>
            </div>
            <div class="text-grey border-top p-3 text-sm">{{ item.info }}</div>
        </div>
    </div>
</div>


## 文字颜色

`.text-{color}` 添加包含颜色的Class来控制文字颜色。

<div class="ui-grid ui-cols-1 ui-cols-sm-2 ui-cols-md-2 ui-cols-lg-2 ui-cols-xl-4 ui-cols-xxl-8" style="margin: -10px;">
    <div class="p-3 ui-item" v-for="(item,index) in color" :key="index">
        <div class="radius p-4 item border" :class="'text-' + item.name" @click="copyText('text-' + item.name)">
            <div class="text-xl pb-3">{{ item.desc }}</div>
            <div class="text-sm flex-bar">
                <span class="text-ABC">#{{ item.value }}</span>
                <span>.text-{{ item.name }}</span>
            </div>
        </div>
    </div>
    <div class="p-3 ui-item" v-for="(item,index) in gray" :key="index">
        <div class="radius p-4 item border" :class="'text-' + item.name" style="background-color: #333;" @click="copyText('text-' + item.name)">
            <div class="text-xl pb-3">.text-{{ item.name }}</div>
        </div>
    </div>
    <div class="p-3 ui-item" v-for="(item,index) in dark" :key="index">
        <div class="radius p-4 item border" :class="'text-' + item.name" style="background-color: #fff;" @click="copyText('text-' + item.name)">
            <div class="text-xl pb-3">.text-{{ item.name }}</div>
        </div>
    </div>
</div>

![mp-cu](/images/text.png)


## 文字截断

添加 `.text-cut` 来控制段落的截断。

<div class="border radius p-3 my-4" style="width: 300px;">
    <div class="text-cut">{{ longText }}</div>
</div>

多行截断使用 `.text-linecut-{line}` 支持2~10行的截断

想实现更多行的截断可以试试在行内样式里写 `-webkit-line-clamp: 11;`

<div class="border radius p-3 my-4" style="width: 300px;">
    <div class="text-linecut">{{ longText }}</div>
</div>


## 文本对齐

添加 `.text-{ align }` 来控制文本的对齐。

<div class="border radius p-3 my-4">
    <div class="text-left">{{ sortText }}</div>
</div>
<div class="border radius p-3 my-4">
    <div class="text-center">{{ sortText }}</div>
</div>
<div class="border radius p-3 my-4">
    <div class="text-right">{{ sortText }}</div>
</div>
<div class="border radius p-3 my-4">
    <div class="text-justify">{{ longText }}</div>
</div>
<div class="border radius p-3 my-4">
    <div class="text-justify-line">{{ sortText }}</div>
</div>

## 辅助类

<div style="display: flex; flex-wrap: wrap;">
    <div class="p-3 my-3 radius text-center border"  style="width: 400px;" v-for="(item,index) in util" :key="index" @click="copyText(item.class)">
        <div class="p-3">
            <span :class="item.class" v-if="item.desc">{{ item.desc }}</span>
            <div v-if="item.break">
                默认：
                <span class="text-left border p-3 border-blue inline-block mx-4" style="width: 40px;">{{ item.break }}</span>
                自动换行：
                <span class="text-left border p-3 border-blue inline-block mx-4" :class="item.class" style="width: 40px;">{{ item.break }}</span>
            </div>
            <div v-if="item.nowrap">
                默认：
                <span class="text-left border p-3 border-blue inline-block mx-4" style="width: 40px;">{{ item.nowrap }}</span>
                不换行：
                <span class="text-left border p-3 border-blue inline-block mx-4" :class="item.class" style="width: 40px;">{{ item.nowrap }}</span>
            </div>
        </div>
        <div class="text-grey border-top p-3 text-sm">{{ item.info }}: {{item.class}}</div>
    </div>
</div>


<script setup>
const size = [
    { class: 'text-xs', size: 10, info: '说明文本，标签文字或关注度低的文字', tag: '组件库' },
    { class: 'text-sm', size: 12, info: '页面辅助信息，次级内容等', desc: '@weilanwl.com by:color-ui.com' },
    { class: 'text-df', size: 14, info: '页面默认字号，用于摘要或阅读文本', desc: '专注视觉的小程序组件库' },
    { class: 'text-lg', size: 16, info: '页面三级标题，首要层级显示内容', desc: 'ColorUI组件库' },
    { class: 'text-xl', size: 18, info: '页面二级标题，用于结果页等单一信息页', desc: '您的订单已提交成功！' },
    { class: 'text-xxl', size: 22, info: '页面一级标题,或者用于金额数字等信息', price: '80.00' },
    { class: 'text-sl', size: 40, info: '用于较大图标、数字等较大显示', icon: 'text-red _icon-check-round-o' },
    { class: 'text-xsl', size: 60, info: '用于超大图标、数字等特大显示', icon: 'text-green _icon-check-round-o' }
];
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

const longText = '发光的翅萤在暮色中翩翩起舞，身后留下夜光残影，但女孩重重地将它们从面前拍走，毫不在意这转瞬即逝的优雅。她双眼垂向地面，踢开一块石头，任其在盘错的树根间跳跃，毫不理会茂密华盖间透过的夕阳。紫夜貂的花瓣缓缓张开，向温润的暮色吐出微光的花粉，但匆匆路过的她却顺手将花茎扭断。';
const sortText = '我的潜能无穷无尽。休想压住我。';
const util = [
    { class: 'text-light', info: '细文本', desc: '《赛博朋克2077》' },
    { class: 'text-lighter', info: '超细文本', desc: '《赛博朋克2077》' },
    { class: 'text-normal', info: '默认粗细文本', desc: '《赛博朋克2077》' },
    { class: 'text-bold', info: '加粗文本', desc: '《赛博朋克2077》' },
    { class: 'text-bolder', info: '超粗文本', desc: '《赛博朋克2077》' },
    { class: 'text-Abc', info: '首字母大写', desc: 'weilanwl' },
    { class: 'text-ABC', info: '所有字母大写', desc: 'weilanwl' },
    { class: 'text-del', info: '删除线', desc: 'weilanwl' },
    { class: 'text-bottomline', info: '下划线', desc: 'weilanwl' },
    { class: 'text-italic', info: '斜体', desc: 'weilanwl' },
    { class: 'text-style-none', info: '清除所有样式', desc: 'weilanwl' },
    { class: 'text-break', info: '单词自动换行', break: 'weilanwl' },
    { class: 'text-nowrap', info: '不自动换行', nowrap: 'ABC to abc ' },
    { class: 'text-price', info: '人民币价格文本', desc: '80.00' }
]
        
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
