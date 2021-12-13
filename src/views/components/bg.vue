<template>
    <div class="cu-docs-view">
        <cu-title depth="1" title="背景" subTitle="Bg" isIcon/>
        <div class="pb-3">
            <span>容器的背景表现，class控制。 一些组件包含了通用属性 </span>
            <span class="ui-tag bg-blue-thin">bg</span>
            <span> 也是用的这些类。</span>
        </div>

        <div class="mt-6">
            <cu-title depth="2" title="基础背景色" isIcon/>
            <div class="pb-3">
                <span class="ui-tag bg-blue-thin">.bg-{color}</span>
                <span> 基础的背景颜色。</span>
            </div>
            <div class="radius border p-4">
                <cu-grid spacing="20">
                    <cu-col span="2" v-for="(item , index) in color" :key="index">
                        <div class="radius p-4" :class="'bg-' + item.name">
                            <div class="text-xl pb-3">{{ item.desc }}</div>
                            <div class="text-sm flex-bar">
                                <span class="text-ABC">#{{ item.value }}</span>
                                <span>.bg-{{ item.name }}</span>
                            </div>
                        </div>
                    </cu-col>
                </cu-grid>
            </div>
        </div>

        <div class="mt-6">
            <cu-title depth="2" title="淡色背景" isIcon/>
            <div class="pb-3">
                <span class="ui-tag bg-blue-thin">.bg-{color}-thin</span>
                <span> 更浅的颜色。为适应暗色主题,注意有透明度！</span>
            </div>
            <div class="radius border p-4">
                <cu-grid spacing="20">
                    <cu-col span="2" v-for="(item , index) in color" :key="index">
                        <div class="radius p-4" :class="'bg-' + item.name + '-thin'">
                            <div class="text-xl pb-3">{{ item.desc }}</div>
                            <div class="text-sm flex-bar">
                                <span class="text-ABC">#{{ item.value }}</span>
                                <span>.bg-{{ item.name }}-thin</span>
                            </div>
                        </div>
                    </cu-col>
                </cu-grid>
            </div>
        </div>

        <div class="mt-6">
            <cu-title depth="2" title="特殊的渐变背景色" isIcon/>
            <div class="pb-3">
                <span class="ui-tag bg-blue-thin">.bg-{color}-gradient</span>
                <span> 精心调整的色值，更加自然的过渡色。</span>
            </div>
            <div class="radius border p-4">
                <cu-grid spacing="20">
                    <cu-col span="2" v-for="(item , index) in color" :key="index">
                        <div class="radius p-4" :class="'bg-' + item.name + '-gradient'">
                            <div class="text-xl pb-3">{{ item.desc }}</div>
                            <div class="text-sm flex-bar">
                                <span>.bg-{{ item.name }}-gradient</span>
                            </div>
                        </div>
                    </cu-col>
                </cu-grid>
            </div>
        </div>

        <div class="mt-6">
            <cu-title depth="2" title="高亮色" isIcon/>
            <div class="pb-3">
                <span class="ui-tag bg-blue-thin">.bg-{color}-light</span>
                <span> 带有一定色彩的高亮背景。在深浅主题下保持一致。</span>
            </div>
            <div class="radius border p-4 ui-BG-1">
                <cu-grid spacing="20">
                    <cu-col span="2" v-for="(item , index) in color" :key="index">
                        <div class="radius p-4" :class="'bg-' + item.name + '-light'">
                            <div class="text-xl pb-3">{{ item.desc }}</div>
                            <div class="text-sm flex-bar">
                                <span>.bg-{{ item.name }}-light</span>
                            </div>
                        </div>
                    </cu-col>
                </cu-grid>
            </div>
        </div>

        <div class="mt-6">
            <cu-title depth="2" title="浅色灰度值" isIcon/>
            <div class="pb-3">
                <span class="ui-tag bg-blue-thin">.bg-{gray}</span>
                <span class="ui-tag bg-blue-thin">#aaaaaa</span>
                <span> ~ </span>
                <span class="ui-tag bg-blue-thin">#ffffff</span>
                <span> 的浅色灰度值</span>
            </div>
            <div class="radius border p-4 bg-dark-3">
                <cu-grid spacing="20">
                    <cu-col span="2" v-for="(item  , index) in gray" :key="index">
                        <div class="radius p-4" :class="'bg-' + item.name">
                            <div class="text-xl pb-3">{{ item.name }}</div>
                            <div class="text-sm flex-bar">
                                <span>.bg-{{ item.name }}</span>
                            </div>
                        </div>
                    </cu-col>
                </cu-grid>
            </div>
        </div>

        <div class="mt-6">
            <cu-title depth="2" title="深色灰度值" isIcon/>
            <div class="pb-3">
                <span class="ui-tag bg-blue-thin">.bg-{dark}</span>
                <span class="ui-tag bg-blue-thin">#999999</span>
                <span> ~ </span>
                <span class="ui-tag bg-blue-thin">#000000</span>
                <span> 的深色灰度值</span>
            </div>
            <div class="radius border p-4 bg-white">
                <cu-grid spacing="20">
                    <cu-col span="2" v-for="(item , index) in dark" :key="index">
                        <div class="radius p-4" :class="'bg-' + item.name">
                            <div class="text-xl pb-3">{{ item.name }}</div>
                            <div class="text-sm flex-bar">
                                <span>.bg-{{ item.name }}</span>
                            </div>
                        </div>
                    </cu-col>
                </cu-grid>
            </div>
        </div>

        <div class="mt-6">
            <cu-title depth="2" title="主题主色背景" isIcon/>
            <div class="pb-3">
                <span class="ui-tag bg-blue-thin">.ui-BG-Main-{No}</span>
            </div>
            <div class="radius border p-4 ui-BG">
                <cu-grid spacing="20">
                    <cu-col span="2" v-for="(item, index) in themeColor" :key="index">
                        <div class="radius p-4" :class="'ui-BG-Main-' + (index + 1)">
                            <div class="text-xl pb-3">{{ item.name }}</div>
                            <div class="text-sm flex-bar">
                                <span>.ui-BG-Main-{{ index + 1 }}</span>
                            </div>
                        </div>
                    </cu-col>
                </cu-grid>
            </div>
        </div>

        <div class="mt-6">
            <cu-title depth="2" title="主题层级背景" isIcon/>
            <div class="pb-3">
                <span class="ui-tag bg-blue-thin">.{level}-bg</span>
                <span class="ui-tag bg-blue-thin">.{level}-bg-sub</span>
            </div>
            <div class="radius border p-4 ui-BG">
                <cu-grid spacing="20">
                    <cu-col span="2" v-for="(item , index) in level" :key="index">
                        <div class="radius p-4 border" :class="item + '-bg'">
                            <div class="text-xl pb-3">{{ item }}</div>
                            <div class="text-sm flex-bar">
                                <span>.{{ item }}-bg</span>
                            </div>
                        </div>
                    </cu-col>
                    <cu-col span="2" v-for="(item , index) in level" :key="index">
                        <div class="radius p-4 border" :class="item + '-bg-sub'">
                            <div class="text-xl pb-3">{{ item }}</div>
                            <div class="text-sm flex-bar">
                                <span>.{{ item }}-bg-sub</span>
                            </div>
                        </div>
                    </cu-col>
                </cu-grid>
            </div>
        </div>

        <div class="mt-6">
            <cu-title depth="2" title="背景遮罩" isIcon/>
            <div class="pb-3">
                <span class="ui-tag bg-blue-thin">.bg-mask-{opacity}</span>
                <span> 占用after伪元素的遮罩层</span>
            </div>
            <div class="radius border p-4 ui-BG">
                <cu-grid spacing="20">
                    <cu-col span="2">
                        <div class="radius p-4 border bg-mask-80 text-white">
                            <div class="text-xl pb-3">80%</div>
                            <div class="text-sm flex-bar">
                                <span>.bg-mask-80</span>
                            </div>
                        </div>
                    </cu-col>
                    <cu-col span="2">
                        <div class="radius p-4 border bg-mask-50 text-white">
                            <div class="text-xl pb-3">50%</div>
                            <div class="text-sm flex-bar">
                                <span>.bg-mask-50</span>
                            </div>
                        </div>
                    </cu-col>
                    <cu-col span="2">
                        <div class="radius p-4 border bg-mask text-white">
                            <div class="text-xl pb-3">默认40%</div>
                            <div class="text-sm flex-bar">
                                <span>.bg-mask</span>
                            </div>
                        </div>
                    </cu-col>
                    <cu-col span="2">
                        <div class="radius p-4 border bg-mask-20 text-white">
                            <div class="text-xl pb-3">20%</div>
                            <div class="text-sm flex-bar">
                                <span>.bg-mask-20</span>
                            </div>
                        </div>
                    </cu-col>
                    <cu-col span="2">
                        <div class="radius p-4 border bg-img bg-mask-top text-white" style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg');">
                            <div class="text-xl pb-3" style="position: relative;">顶部</div>
                            <div class="text-sm flex-bar">
                                <span>.bg-mask-top</span>
                            </div>
                        </div>
                    </cu-col>
                    <cu-col span="2">
                        <div class="radius p-4 border bg-img bg-mask-bottom text-white" style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg');">
                            <div class="text-xl pb-3" style="position: relative;">底部</div>
                            <div class="text-sm flex-bar">
                                <span>.bg-mask-bottom</span>
                            </div>
                        </div>
                    </cu-col>
                </cu-grid>
            </div>
        </div>

        <div class="mt-6">
            <cu-title depth="2" title="背景图片" isIcon/>
            <div class="pb-3">
                <span class="ui-tag bg-blue-thin">.bg-img</span>
                <span> 自适应背景图片</span>
            </div>
            <div class="radius border p-4 ui-BG">
                <cu-grid spacing="20">
                    <cu-col span="2">
                        <div class="radius p-4 border bg-img bg-mask text-white" style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg');">
                            <div class="text-xl pb-3" style="position: relative;">钢铁之翼</div>
                            <div class="text-sm flex-bar">
                                <span>Only the guilty need fear me.</span>
                            </div>
                        </div>
                    </cu-col>
                </cu-grid>
            </div>
        </div>

        <div class="mt-6">
            <cu-title depth="2" title="模糊背景" isIcon/>
            <div class="pb-3">
                <span class="ui-tag bg-blue-thin">.bg-blur</span>
                <span> 高斯模糊背景。</span>
            </div>
            <div class="radius border p-4 ui-BG">
                <cu-grid spacing="20">
                    <cu-col span="2" class="text-center">
                        <div class="bg-img pt-5 radius" style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg');">
                            <div class="mt-5 p-4 bg-blur radius-bottom">
                                <div style="position: relative;">.bg-blur</div>
                            </div>
                        </div>
                    </cu-col>
                    <cu-col span="2" class="text-center">
                        <div class="bg-img pt-5 radius border" style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg');">
                            <div class="mt-5 p-4 ui-BG radius-bottom">
                                <div style="position: relative;">.bg-blur 不兼容时</div>
                            </div>
                        </div>
                    </cu-col>
                </cu-grid>
            </div>
        </div>

        <div class="mt-6">
            <cu-title depth="2" title="过渡渐变色" isIcon/>
            <div class="pb-3">
                <span class="ui-tag bg-blue-thin">.bg-{color}-{color}</span>
                <span> 支持所有基础色到基础色的渐变。</span>
            </div>
            <div class="radius border p-4">
                <cu-grid spacing="20">
                    <template v-for="(item, index) in color" :key="index">
                        <template v-for="(sub , index) in color" :key="index">
                            <cu-col span="2" v-if="item.name != sub.name && index < 6">
                                <div class="radius p-4" :class="'bg-' + item.name + '-' + sub.name">
                                    <div class="text-xl pb-3">.bg-{{ item.name }}-{{ sub.name }}</div>
                                    <div class="text-sm flex-bar">
                                        <span>#{{ item.value }} - #{{ sub.value }}</span>
                                    </div>
                                </div>
                            </cu-col>
                        </template>
                    </template>
                </cu-grid>
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup>
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
]
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
]
const themeColor = [{ name: 'a', value: '0081ff' }, { name: 'b', value: '2ca5f9' }, { name: 'c', value: '2ccbf9' }, { name: 'd', value: 'b2d4fe' }]
const level = ['page', 'box', 'menu']
</script>