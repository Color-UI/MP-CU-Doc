<template>
    <div class="cu-docs-view">
        <cu-title depth="1" title="边框" subTitle="Border" isIcon/>
        <div class="pb-2">容器的边框样式,使用Class控制，适用于任何组件元素。 </div>
        <div class="pb-3">Colorui采用的是伪元素缩放的方案,请注意容器的定位类型以及伪元素的使用。 </div>

        <div class="mt-6">
            <cu-title depth="2" title="边框样式" isIcon/>
            <div class="ui-table table-border table-full mt-3 table-radius sm">
                <div class="ui-table-header">
                    <div class="ui-table-tr">
                        <div class="ui-table-th">class</div>
                        <div class="ui-table-th">说明</div>
                        <div class="ui-table-th">尺寸</div>
                        <div class="ui-table-th">示例</div>
                    </div>
                </div>
                <div class="ui-table-body">
                    <div class="ui-table-tr">
                        <div class="ui-table-td">.border</div>
                        <div class="ui-table-td">实线边框</div>
                        <div class="ui-table-td">1px</div>
                        <div class="ui-table-td">
                            <div class="border"></div>
                        </div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">.dashed</div>
                        <div class="ui-table-td">虚线边框</div>
                        <div class="ui-table-td">1px</div>
                        <div class="ui-table-td">
                            <div class="dashed"></div>
                        </div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">.radius</div>
                        <div class="ui-table-td">小圆角</div>
                        <div class="ui-table-td">5px</div>
                        <div class="ui-table-td">
                            <span class="ui-tag bg-blue-thin radius">.radius</span>
                        </div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">.round</div>
                        <div class="ui-table-td">大圆角</div>
                        <div class="ui-table-td">500px</div>
                        <div class="ui-table-td">
                            <span class="ui-tag bg-blue-thin round">.round</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="mt-6">
            <cu-title depth="2" title="实线" isIcon/>
            <div class="pb-4">
                <span>为容器添加class </span>
                <span class="ui-tag bg-blue-thin">.border</span>
                <span> 来使容器添加实线边框。</span>
            </div>
            <cu-grid spacing="20">
                <cu-col span="2">
                    <div class="text-center border radius p-4">
                        <div class="text-lg border border-blue p-3">四周全边框</div>
                        <div class="text-right mt-3">.border</div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="text-center border radius p-4">
                        <div class="text-lg border-top border-blue p-3">顶部边框</div>
                        <div class="text-right mt-3">.border-top</div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="text-center border radius p-4">
                        <div class="text-lg border-left border-blue p-3">左边边框</div>
                        <div class="text-right mt-3">.border-left</div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="text-center border radius p-4">
                        <div class="text-lg border-right border-blue p-3">右边边框</div>
                        <div class="text-right mt-3">.border-right</div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="text-center border radius p-4">
                        <div class="text-lg border-bottom border-blue p-3">底部边框</div>
                        <div class="text-right mt-3">.border-bottom</div>
                    </div>
                </cu-col>
            </cu-grid>
            <cu-grid spacing="20">
                <cu-col span="2">
                    <div class="text-center border radius p-4">
                        <div class="text-lg borders border-blue p-3">四周全粗边框</div>
                        <div class="text-right mt-3">.borders</div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="text-center border radius p-4">
                        <div class="text-lg borders-top border-blue p-3">顶部粗边框</div>
                        <div class="text-right mt-3">.borders-top</div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="text-center border radius p-4">
                        <div class="text-lg borders-left border-blue p-3">左边粗边框</div>
                        <div class="text-right mt-3">.borders-left</div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="text-center border radius p-4">
                        <div class="text-lg borders-right border-blue p-3">右边粗边框</div>
                        <div class="text-right mt-3">.borders-right</div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="text-center border radius p-4">
                        <div class="text-lg borders-bottom border-blue p-3">底部粗边框</div>
                        <div class="text-right mt-3">.borders-bottom</div>
                    </div>
                </cu-col>
            </cu-grid>
        </div>

        <div class="mt-6">
            <cu-title depth="2" title="虚线" isIcon/>
            <div class="pb-4">
                <span>为容器添加class </span>
                <span class="ui-tag bg-blue-thin">.dashed</span>
                <span> 来使容器添加虚线边框。</span>
            </div>
            <cu-grid spacing="20">
                <cu-col span="2">
                    <div class="text-center border radius p-4">
                        <div class="text-lg dashed border-blue p-3">四周全虚线边框</div>
                        <div class="text-right mt-3">.dashed</div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="text-center border radius p-4">
                        <div class="text-lg dashed-top border-blue p-3">顶部虚线边框</div>
                        <div class="text-right mt-3">.dashed-top</div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="text-center border radius p-4">
                        <div class="text-lg dashed-left border-blue p-3">左边虚线边框</div>
                        <div class="text-right mt-3">.dashed-left</div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="text-center border radius p-4">
                        <div class="text-lg dashed-right border-blue p-3">右边虚线边框</div>
                        <div class="text-right mt-3">.dashed-right</div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="text-center border radius p-4">
                        <div class="text-lg dashed-bottom border-blue p-3">底部虚线边框</div>
                        <div class="text-right mt-3">.dashed-bottom</div>
                    </div>
                </cu-col>
            </cu-grid>
            <cu-grid spacing="20">
                <cu-col span="2">
                    <div class="text-center border radius p-4">
                        <div class="text-lg dasheds border-blue p-3">四周全粗虚线边框</div>
                        <div class="text-right mt-3">.dasheds</div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="text-center border radius p-4">
                        <div class="text-lg dasheds-top border-blue p-3">顶部粗虚线边框</div>
                        <div class="text-right mt-3">.dasheds-top</div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="text-center border radius p-4">
                        <div class="text-lg dasheds-left border-blue p-3">左边粗虚线边框</div>
                        <div class="text-right mt-3">.dasheds-left</div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="text-center border radius p-4">
                        <div class="text-lg dasheds-right border-blue p-3">右边粗虚线边框</div>
                        <div class="text-right mt-3">.dasheds-right</div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="text-center border radius p-4">
                        <div class="text-lg dasheds-bottom border-blue p-3">底部粗虚线边框</div>
                        <div class="text-right mt-3">.dasheds-bottom</div>
                    </div>
                </cu-col>
            </cu-grid>
        </div>

        <div class="mt-6">
            <cu-title depth="2" title="颜色" isIcon/>
            <div class="pb-4">
                <span>添加包含颜色名的Class来控制边框颜色,</span>
                <span class="ui-tag bg-blue-thin">.border-{color}</span>
                <span> 颜色值，和背景颜色的类名差不多，只是去除.bg-</span>
            </div>
            <cu-grid spacing="20">
                <cu-col span="3">
                    <div class="text-center border radius p-4">
                        <div class="text-lg border border-red p-3">红色边框</div>
                        <div class="text-right mt-3">.border-red</div>
                    </div>
                </cu-col>
                <cu-col span="3">
                    <div class="text-center border radius p-4">
                        <div class="text-lg borders border-blue p-3">蓝色边框</div>
                        <div class="text-right mt-3">.border-blue</div>
                    </div>
                </cu-col>
                <cu-col span="3">
                    <div class="text-center border radius p-4">
                        <div class="text-lg dasheds border-orange p-3">橙色虚线边框</div>
                        <div class="text-right mt-3">.border-orange</div>
                    </div>
                </cu-col>
            </cu-grid>
        </div>

        <div class="mt-6">
            <cu-title depth="2" title="虚线边框动画" isIcon/>
            <div class="pb-2">
                <span>为容器添加class </span>
                <span class="ui-tag bg-blue-thin">.dasheds-shine</span>
                <span> 来实现虚线边框动画。</span>
            </div>
            <div class="pb-4">
                <span>注意：虚线边框动画容器占用了 </span>
                <span class="ui-tag bg-blue-thin">:after</span>
                <span class="ui-tag bg-blue-thin">:before</span>
                <span> 伪元素。</span>
            </div>
            <cu-grid spacing="20">
                <cu-col span="5">
                    <div class="text-center border radius p-4">
                        <div class="text-lg dasheds-shine p-3">粗虚线边框动画</div>
                        <div class="text-right mt-3">.dasheds-shine</div>
                    </div>
                </cu-col>
                <cu-col span="5">
                    <div class="text-center border radius p-4">
                        <div class="text-lg dashed-shine border-blue p-3">蓝色虚线边框动画</div>
                        <div class="text-right mt-3">.dashed-shine .border-blue</div>
                    </div>
                </cu-col>
            </cu-grid>
        </div>

        <div class="mt-6">
            <cu-title depth="2" title="圆角" isIcon/>
            <div class="pb-4">
                <span>为容器添加class </span>
                <span class="ui-tag bg-blue-thin">.radius</span>
                <span> 实现圆角。</span>
            </div>
            <cu-grid spacing="20">
                <cu-col span="2">
                    <div class="text-center border radius p-4">
                        <div class="text-lg radius bg-blue p-3">默认圆角</div>
                        <div class="text-right mt-3">.radius</div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="text-center border radius p-4">
                        <div class="text-lg radius-sm bg-blue p-3">小圆角</div>
                        <div class="text-right mt-3">.radius-sm </div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="text-center border radius p-4">
                        <div class="text-lg radius-lg bg-blue p-3">大圆角</div>
                        <div class="text-right mt-3">.radius-lg</div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="text-center border radius p-4">
                        <div class="text-lg radius-0 bg-blue p-3">无圆角</div>
                        <div class="text-right mt-3">.radius-0</div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="text-center border radius p-4">
                        <div class="text-lg round bg-blue p-3">大圆角</div>
                        <div class="text-right mt-3">.round</div>
                    </div>
                </cu-col>
            </cu-grid>
            <cu-grid spacing="20">
                <cu-col span="2">
                    <div class="text-center border radius p-4">
                        <div class="text-lg radius-top bg-blue p-3">上边圆角</div>
                        <div class="text-right mt-3">.radius-top</div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="text-center border radius p-4">
                        <div class="text-lg radius-right bg-blue p-3">右边圆角</div>
                        <div class="text-right mt-3">.radius-right </div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="text-center border radius p-4">
                        <div class="text-lg radius-bottom bg-blue p-3">底部圆角</div>
                        <div class="text-right mt-3">.radius-bottom</div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="text-center border radius p-4">
                        <div class="text-lg radius-left bg-blue p-3">左边圆角</div>
                        <div class="text-right mt-3">.radius-left</div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="text-center border radius p-4">
                        <div class="text-lg radius-lr bg-blue p-3">左上 和 右下</div>
                        <div class="text-right mt-3">.radius-lr</div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="text-center border radius p-4">
                        <div class="text-lg radius radius-rl bg-blue p-3">左下 和 右上</div>
                        <div class="text-right mt-3">.radius-rl</div>
                    </div>
                </cu-col>
            </cu-grid>
        </div>
    </div>
</template>