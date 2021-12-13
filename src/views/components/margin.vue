<template>
    <div class="cu-docs-view">
        <cu-title depth="1" title="边距" isIcon/>
        <div class="pb-3">
            <span> 边距样式, Class控制。适用于任何组件元素。内边距使用 </span>
            <span class="ui-tag bg-blue-thin">.p</span>
            <span> 外边距使用 </span>
            <span class="ui-tag bg-blue-thin">.m</span>
            <span> ，可以混用。 </span>
        </div>

        <div class="mt-6">
            <cu-title depth="2" title="内边距" isIcon/>
            <div class="pb-4">
                <span>添加 </span>
                <span class="ui-tag bg-blue-thin">.p-{size}</span>
                <span> 控制内边距，支持参数 0 ~ 6</span>
            </div>
            <cu-grid spacing="20">
                <cu-col span="3" v-for="item in 7">
                    <div class="border radius" :class="'p-' + (item -1)">
                        <div class="bg-blue-thin text-center h-100 p-4">
                            <span class="text-lg">.p-{{(item -1)}}</span>
                        </div>
                    </div>
                </cu-col>
            </cu-grid>
        </div>

        <div class="mt-6">
            <cu-title depth="2" title="内单边距" isIcon/>
            <div class="pb-4">
                <span>添加 </span>
                <span class="ui-tag bg-blue-thin">.p{name}-{size}</span>
                <span> 控制方向内边距，支持边距参数 x、y、t、l、r、b，支持大小参数 0 ~ 6</span>
            </div>
            <cu-grid spacing="20">
                <cu-col span="2">
                    <div class="border radius px-3">
                        <div class="bg-blue-thin text-center h-100 p-4">
                            <span class="text-lg">.px-3</span>
                        </div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="border radius py-3">
                        <div class="bg-blue-thin text-center h-100 p-4">
                            <span class="text-lg">.py-3</span>
                        </div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="border radius pt-3">
                        <div class="bg-blue-thin text-center h-100 p-4">
                            <span class="text-lg">.pt-3</span>
                        </div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="border radius pl-3">
                        <div class="bg-blue-thin text-center h-100 p-4">
                            <span class="text-lg">.pl-3</span>
                        </div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="border radius pr-3">
                        <div class="bg-blue-thin text-center h-100 p-4">
                            <span class="text-lg">.pr-3</span>
                        </div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="border radius pb-3">
                        <div class="bg-blue-thin text-center h-100 p-4">
                            <span class="text-lg">.pb-3</span>
                        </div>
                    </div>
                </cu-col>
            </cu-grid>
        </div>

        <div class="mt-6">
            <cu-title depth="2" title="外边距" isIcon/>
            <div class="pb-4">
                <span>添加 </span>
                <span class="ui-tag bg-red-thin">.m-{size}</span>
                <span> 控制边距，支持参数 0 ~ 6</span>
            </div>
            <cu-grid spacing="20">
                <cu-col span="3" v-for="item in 7">
                    <div class="border radius">
                        <div style="display: flex;">
                            <div class="bg-red-thin text-center h-100 p-4" :class="'m-' + (item -1)" style="flex: 1;">
                                <span class="text-lg">.m-{{(item -1)}}</span>
                            </div>
                        </div>
                    </div>
                </cu-col>
            </cu-grid>
        </div>

        <div class="mt-6">
            <cu-title depth="2" title="外单边距" isIcon/>
            <div class="pb-4">
                <span>添加 </span>
                <span class="ui-tag bg-red-thin">.m{name}-{size}</span>
                <span> 控制方向外边距，支持边距参数 x、y、t、l、r、b，支持大小参数 0 ~ 6</span>
            </div>
            <cu-grid spacing="20">
                <cu-col span="2">
                    <div class="border radius">
                        <div style="display: flex;">
                            <div class="bg-red-thin text-center h-100 p-4 mx-3" style="flex: 1;">
                                <span class="text-lg">.mx-3</span>
                            </div>
                        </div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="border radius">
                        <div style="display: flex;">
                            <div class="bg-red-thin text-center h-100 p-4 my-3" style="flex: 1;">
                                <span class="text-lg">.my-3</span>
                            </div>
                        </div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="border radius">
                        <div style="display: flex;">
                            <div class="bg-red-thin text-center h-100 p-4 mt-3" style="flex: 1;">
                                <span class="text-lg">.mt-3</span>
                            </div>
                        </div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="border radius">
                        <div style="display: flex;">
                            <div class="bg-red-thin text-center h-100 p-4 ml-3" style="flex: 1;">
                                <span class="text-lg">.ml-3</span>
                            </div>
                        </div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="border radius">
                        <div style="display: flex;">
                            <div class="bg-red-thin text-center h-100 p-4 mr-3" style="flex: 1;">
                                <span class="text-lg">.mr-3</span>
                            </div>
                        </div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="border radius">
                        <div style="display: flex;">
                            <div class="bg-red-thin text-center h-100 p-4 mb-3" style="flex: 1;">
                                <span class="text-lg">.mb-3</span>
                            </div>
                        </div>
                    </div>
                </cu-col>
            </cu-grid>
        </div>

        <div class="mt-6">
            <cu-title depth="2" title="参数说明" isIcon/>
            <div class="ui-table table-border table-full mt-3 table-radius sm">
                <div class="ui-table-header">
                    <div class="ui-table-tr">
                        <div class="ui-table-th">值</div>
                        <div class="ui-table-th">对应尺寸</div>
                        <div class="ui-table-th">说明</div>
                    </div>
                </div>
                <div class="ui-table-body">
                    <div class="ui-table-tr">
                        <div class="ui-table-td">0</div>
                        <div class="ui-table-td">0px</div>
                        <div class="ui-table-td">如：m-0 、p-0</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">1</div>
                        <div class="ui-table-td">2.5px</div>
                        <div class="ui-table-td">如：m-1 、p-1</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">2</div>
                        <div class="ui-table-td">5px</div>
                        <div class="ui-table-td">如：m-2 、p-2</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">3</div>
                        <div class="ui-table-td">10px</div>
                        <div class="ui-table-td">如：m-3 、p-3</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">4</div>
                        <div class="ui-table-td">15px</div>
                        <div class="ui-table-td">如：m-4 、p-4</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">5</div>
                        <div class="ui-table-td">30px</div>
                        <div class="ui-table-td">如：m-5 、p-5</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">6</div>
                        <div class="ui-table-td">50px</div>
                        <div class="ui-table-td">如：m-6 、p-6</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-6">
            <cu-title depth="2" title="其它相关参数说明" isIcon/>
            <div class="ui-table table-border table-full mt-3 table-radius sm">
                <div class="ui-table-header">
                    <div class="ui-table-tr">
                        <div class="ui-table-th">class</div>
                        <div class="ui-table-th">对应css</div>
                        <div class="ui-table-th">说明</div>
                    </div>
                </div>
                <div class="ui-table-body">
                    <div class="ui-table-tr">
                        <div class="ui-table-td">.w-100</div>
                        <div class="ui-table-td">width: 100%</div>
                        <div class="ui-table-td">-</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">.h-100</div>
                        <div class="ui-table-td">height: 100%</div>
                        <div class="ui-table-td">-</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">.none</div>
                        <div class="ui-table-td">display: none</div>
                        <div class="ui-table-td">!important</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">.inline</div>
                        <div class="ui-table-td">display: inline</div>
                        <div class="ui-table-td">!important</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">.inline-block</div>
                        <div class="ui-table-td">display: inline-block</div>
                        <div class="ui-table-td">!important</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">.block</div>
                        <div class="ui-table-td">display: block</div>
                        <div class="ui-table-td">!important</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">.touch-none</div>
                        <div class="ui-table-td">pointer-events: none</div>
                        <div class="ui-table-td">允许点击穿透</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">.touch-all</div>
                        <div class="ui-table-td">pointer-events: all</div>
                        <div class="ui-table-td">
                            <span>只有鼠标指针在元素内部或边界时,元素才会成为鼠标事件的目标。</span>
                            <a href='https://developer.mozilla.org/zh-CN/docs/Web/CSS/pointer-events' target='_blank'>参考</a>
                        </div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">.flex</div>
                        <div class="ui-table-td">display: flex</div>
                        <div class="ui-table-td">!important</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">.inline-flex</div>
                        <div class="ui-table-td">display: inline-flex</div>
                        <div class="ui-table-td">!important</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>