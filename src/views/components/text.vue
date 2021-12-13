<template>
    <div class="cu-docs-view">
        <cu-title depth="1" title="文本" subTitle="Text" isIcon/>
        <div class="pb-3">文本字体样式,Class控制。适用于任何组件元素。 </div>

        <div class="mt-6">
            <cu-title depth="2" title="文本尺寸" isIcon/>
            <div class="pb-3">
                <span class="ui-tag bg-blue-thin">.text-{size}</span>
                <span> 添加包含尺寸的Class来控制文字大小。</span>
                <span class="ui-tag bg-red-thin">注意：在谷歌内核中，.text-xs 跟 .text-sm是一致的，font-size 小于12px时，不会生效。</span>
            </div>
            <cu-grid spacing="20">
                <cu-col span="2">
                    <div class="border radius p-4">
                        <div class="text-docs">
                            <span class="text-xs">ColorUI3-文晓港</span>
                        </div>
                        <div class="flex-bar">
                            <span>10px</span>
                            <span>.text-xs / .text-10</span>
                        </div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="border radius p-4">
                        <div class="text-docs">
                            <span class="text-sm">ColorUI3-文晓港</span>
                        </div>
                        <div class="flex-bar">
                            <span>12px</span>
                            <span>.text-sm / .text-12</span>
                        </div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="border radius p-4">
                        <div class="text-docs">
                            <span class="text-df">ColorUI3-文晓港 (默认)</span>
                        </div>
                        <div class="flex-bar">
                            <span>14px</span>
                            <span>.text-df / .text-14</span>
                        </div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="border radius p-4">
                        <div class="text-docs">
                            <span class="text-lg">ColorUI3-文晓港</span>
                        </div>
                        <div class="flex-bar">
                            <span>16px</span>
                            <span>.text-lg / .text-16</span>
                        </div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="border radius p-4">
                        <div class="text-docs">
                            <span class="text-xl">ColorUI3-文晓港</span>
                        </div>
                        <div class="flex-bar">
                            <span>18px</span>
                            <span>.text-xl / .text-18</span>
                        </div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="border radius p-4">
                        <div class="text-docs">
                            <span class="text-xxl">ColorUI3-文晓港</span>
                        </div>
                        <div class="flex-bar">
                            <span>22px</span>
                            <span>.text-xxl / .text-22</span>
                        </div>
                    </div>
                </cu-col>
                <cu-col span="6">
                    <div class="border radius p-4">
                        <div class="text-docs">
                            <span class="text-sl">ColorUI3-文晓港</span>
                        </div>
                        <div class="flex-bar">
                            <span>40px</span>
                            <span>.text-sl / .text-40</span>
                        </div>
                    </div>
                </cu-col>
                <cu-col span="6">
                    <div class="border radius p-4">
                        <div class="text-docs">
                            <span class="text-xsl">ColorUI3-文晓港</span>
                        </div>
                        <div class="flex-bar">
                            <span>60px</span>
                            <span>.text-xsl / .text-60</span>
                        </div>
                    </div>
                </cu-col>
            </cu-grid>
        </div>

        <div class="mt-6">
            <cu-title depth="2" title="文本颜色" isIcon/>
            <div class="pb-3">
                <span> 添加包含颜色的Class来控制文字颜色。</span>
                <span class="ui-tag bg-blue-thin">.text-{color}</span>
            </div>
            <cu-title depth="4" title="基础颜色" isIcon/>
            <cu-grid spacing="20">
                <cu-col span="2" v-for="item in color">
                    <div class="border radius p-4">
                        <div class="pb-4">
                            <span :class="'text-' + item.name">ColorUI3-文晓港</span>
                        </div>
                        <div class="flex-bar">
                            <span>{{ item.desc }}</span>
                            <span>.text-{{ item.name }}</span>
                        </div>
                    </div>
                </cu-col>
            </cu-grid>
            <div class="mt-5">
                <cu-title depth="4" title="浅色灰色" isIcon/>
                <cu-grid spacing="20">
                    <cu-col span="2" v-for="item in gray">
                        <div class="bg-dark-3 border radius p-4">
                            <div class="pb-4">
                                <span :class="'text-' + item.name">ColorUI3-文晓港</span>
                            </div>
                            <div class="flex-bar">
                                <span>#{{ item.value }}</span>
                                <span>.text-{{ item.name }}</span>
                            </div>
                        </div>
                    </cu-col>
                </cu-grid>
            </div>
            <div class="mt-5">
                <cu-title depth="4" title="深色灰度值" isIcon/>
                <cu-grid spacing="20">
                    <cu-col span="2" v-for="item in dark">
                        <div class="bg-white border radius p-4">
                            <div class="pb-4">
                                <span :class="'text-' + item.name">ColorUI3-文晓港</span>
                            </div>
                            <div class="flex-bar">
                                <span>#{{ item.value }}</span>
                                <span>.text-{{ item.name }}</span>
                            </div>
                        </div>
                    </cu-col>
                </cu-grid>
            </div>
        </div>

        <div class="mt-6">
            <cu-title depth="2" title="文本截断" isIcon/>
            <div class="pb-2">
                <span> 添加</span>
                <span class="ui-tag bg-blue-thin">.text-cut</span>
                <span> 来控制单行段落的截断。</span>
            </div>
            <div class="pb-3">
                <span> 多行截断使用</span>
                <span class="ui-tag bg-blue-thin">.text-linecut-{line}</span>
                <span> 支持2~10行的截断，想实现更多行的截断可以试试在行内样式里写</span>
                <span class="ui-tag bg-blue-thin">-webkit-line-clamp: 11;</span>
            </div>
            <cu-grid spacing="20">
                <cu-col span="2">
                    <div class="border radius p-4">
                        <div class="mb-5 text-cut">ColorUI3-文晓港，一款高质量的组件库。</div>
                        <div class="flex-bar">
                            <span>单行截断</span>
                            <span>.text-cut</span>
                        </div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="border radius p-4">
                        <div class="mb-4 text-linecut-2">ColorUI3-文晓港，一款非常不错的高质量，高颜值的UI组件库。</div>
                        <div class="flex-bar">
                            <span>多行截断</span>
                            <span>.text-linecut-2</span>
                        </div>
                    </div>
                </cu-col>
            </cu-grid>
        </div>

        <div class="mt-6">
            <cu-title depth="2" title="文本对齐" isIcon/>
            <div class="pb-3">
                <span> 添加</span>
                <span class="ui-tag bg-blue-thin">.text-{ align }</span>
                <span> 来控制文本的对齐。</span>
            </div>
            <cu-grid spacing="20">
                <cu-col span="2">
                    <div class="border radius p-4">
                        <div class="mb-5 text-left">ColorUI3-文晓港</div>
                        <div class="text-right">.text-left</div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="border radius p-4">
                        <div class="mb-5 text-center">ColorUI3-文晓港</div>
                        <div class="text-right">.text-center</div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="border radius p-4">
                        <div class="mb-5 text-right">ColorUI3-文晓港</div>
                        <div class="text-right">.text-right</div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="border radius p-4">
                        <div class="mb-3 text-justify">ColorUI3-文晓港，一款高质量，高颜值的组件库</div>
                        <div class="text-right">.text-justify</div>
                    </div>
                </cu-col>
                <cu-col span="3">
                    <div class="border radius p-4">
                        <div class="mb-5 text-justify-line">高质量，高颜值的组件库</div>
                        <div class="text-right">.text-justify-line</div>
                    </div>
                </cu-col>
            </cu-grid>
        </div>

        <div class="mt-6">
            <cu-title depth="2" title="文本辅助类" isIcon/>
            <cu-grid spacing="20">
                <cu-col span="2" v-for="item in textAssist">
                    <div class="border radius p-4">
                        <div class="mb-3" :class="'text-' + item.value">ColorUI3-文晓港</div>
                        <div class="flex-bar">
                            <span>{{ item.name }}</span>
                            <span>.text-{{ item.value }}</span>
                        </div>
                    </div>
                </cu-col>

                <cu-col span="4">
                    <div class="border radius p-4">
                        <div class="mb-5 text-style-none">ColorUI3-文晓港</div>
                        <div class="flex-bar">
                            <span>清除所有样式</span>
                            <span>.text-style-none</span>
                        </div>
                    </div>
                </cu-col>
                <cu-col span="4">
                    <div class="border radius p-4">
                        <div class="mb-3 text-break">ColorUI3，作者：文晓港。 ColorUI3是一款非常不错的高质量，高颜值的UI组件库。</div>
                        <div class="flex-bar">
                            <span>自动换行</span>
                            <span>.text-break</span>
                        </div>
                    </div>
                </cu-col>
                <cu-col span="4">
                    <div class="border radius p-4">
                        <div class="mb-5 text-nowrap">ColorUI3，作者：文晓港， 是一款非常棒的高质量，高颜值的UI组件库。</div>
                        <div class="flex-bar">
                            <span>不自动换行</span>
                            <span>.text-nowrap</span>
                        </div>
                    </div>
                </cu-col>

            </cu-grid>
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

const textAssist = [
    { name: '细文本', value: 'light' },
    { name: '超细文本', value: 'lighter' },
    { name: '默认粗细', value: 'normal' },
    { name: '加粗文本', value: 'bold' },
    { name: '超粗文本', value: 'bolder' },
    { name: '首字母大写', value: 'Abc' },
    { name: '所有字母大写', value: 'ABC' },
    { name: '删除线', value: 'del' },
    { name: '下划线', value: 'bottomline' },
    { name: '斜体', value: 'italic' },
    { name: '人民币价格', value: 'price' }
];
</script>

<style lang="scss" scoped>
.text-docs {
    height: 75px;
    line-height: 75px;
    margin-bottom: 16px;
}
</style>