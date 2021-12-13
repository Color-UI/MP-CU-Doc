<template>
    <div class="cu-docs-view">
        <cu-title depth="1" title="阴影" subTitle="Shadow" isIcon/>
        <div class="pb-2">Css阴影，Class来控制。适用于任何组件元素。部分组件提供独立参数的阴影也是基于这个阴影体系。 </div>

        <div class="mt-6">
            <cu-title depth="2" title="尺寸" isIcon/>
            <div class="pb-4">
                <span>添加包含尺寸的Class来控制阴影大小，</span>
                <span class="ui-tag bg-blue-thin">.shadow-{size}</span>
            </div>
            <cu-grid spacing="20">
                <cu-col span="2">
                    <div class="text-center ui-BG-2 border radius p-4">
                        <div class="text-lg bg-white shadow-sm p-3">小阴影</div>
                        <div class="text-right mt-4">.shadow-sm</div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="text-center ui-BG-2 border radius p-4">
                        <div class="text-lg bg-white shadow p-3">默认阴影</div>
                        <div class="text-right mt-4">.shadow</div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="text-center ui-BG-2 border radius p-4">
                        <div class="text-lg bg-white shadow-lg p-3">长阴影</div>
                        <div class="text-right mt-4">.shadow-lg</div>
                    </div>
                </cu-col>
                <cu-col span="2">
                    <div class="text-center ui-BG-2 border radius p-4">
                        <div class="text-lg bg-white shadow-inset p-3">内阴影</div>
                        <div class="text-right mt-4">.shadow-inset</div>
                    </div>
                </cu-col>
            </cu-grid>
        </div>

        <div class="mt-6">
            <cu-title depth="2" title="颜色" isIcon/>
            <div class="pb-4">
                <span>添加包含颜色名的Class来控制阴影颜色，</span>
                <span class="ui-tag bg-blue-thin">.shadow-{color}</span>
                <span>颜色值，参考 背景</span>
            </div>
            <cu-grid spacing="20">
                <cu-col span="3">
                    <div class="text-center border radius p-4">
                        <div class="text-lg bg-blue shadow-blue shadow-sm p-3">bg-blue</div>
                        <div class="text-right mt-4">.shadow-sm .shadow-blue</div>
                    </div>
                </cu-col>
                <cu-col span="3">
                    <div class="text-center border radius p-4">
                        <div class="text-lg bg-primary shadow-primary shadow p-3">bg-primary</div>
                        <div class="text-right mt-4">.shadow .shadow-primary</div>
                    </div>
                </cu-col>
                <cu-col span="3">
                    <div class="text-center border radius p-4">
                        <div class="text-lg bg-red shadow-red shadow-lg p-3">bg-red</div>
                        <div class="text-right mt-4">.shadow-lg .shadow-red</div>
                    </div>
                </cu-col>
                <cu-col span="3">
                    <div class="text-center border radius p-4">
                        <div class="text-lg bg-red-gradient shadow-blur p-3">bg-red-gradient</div>
                        <div class="text-right mt-4">.bg-red-gradient .shadow-blur</div>
                    </div>
                </cu-col>
            </cu-grid>
        </div>

        <div class="mt-6">
            <cu-title depth="2" title="特殊" isIcon/>
            <cu-grid spacing="20">
                <cu-col span="3">
                    <div class="text-center ui-BG-2 border radius p-4">
                        <div class="text-lg bg-white shadow-warp p-3">翘边阴影</div>
                        <div class="text-right mt-4">.shadow-warp</div>
                    </div>
                </cu-col>
                <cu-col span="3">
                    <div class="text-center border radius p-4">
                        <div class="text-lg shadow-blur bg-img p-3" style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg');">
                            <span class="text-red">根据背景而改变的阴影</span>
                        </div>
                        <div class="text-right mt-4">.shadow-blur .bg-img</div>
                    </div>
                </cu-col>
                <cu-col span="3">
                    <div class="text-center border radius p-4">
                        <div class="text-lg bg-white drop-shadow-sm p-3">drop-shadow-sm</div>
                        <div class="text-right mt-4">.drop-shadow-sm</div>
                    </div>
                </cu-col>
                <cu-col span="3">
                    <div class="text-center border radius p-4">
                        <div class="text-lg bg-white drop-shadow p-3">drop-shadow</div>
                        <div class="text-right mt-4">.drop-shadow</div>
                    </div>
                </cu-col>
                <cu-col span="3">
                    <div class="text-center border radius p-4">
                        <div class="text-lg bg-white drop-shadow-lg p-3">drop-shadow-lg</div>
                        <div class="text-right mt-4">.drop-shadow-lg</div>
                    </div>
                </cu-col>
                <cu-col span="3">
                    <div class="text-center border radius p-4">
                        <div class="text-lg bg-blue drop-shadow-sm drop-shadow-blue p-3">drop-shadow-blue</div>
                        <div class="text-right mt-4">.drop-shadow-sm .drop-shadow-blue</div>
                    </div>
                </cu-col>
                <cu-col span="3">
                    <div class="text-center border radius p-4">
                        <div class="text-lg bg-red drop-shadow drop-shadow-red p-3">drop-shadow-red</div>
                        <div class="text-right mt-4">.drop-shadow .drop-shadow-red</div>
                    </div>
                </cu-col>
                <cu-col span="3">
                    <div class="text-center border radius p-4">
                        <div class="text-lg bg-pink drop-shadow-lg drop-shadow-pink p-3">drop-shadow-pink</div>
                        <div class="text-right mt-4">.drop-shadow-lg .drop-shadow-pink</div>
                    </div>
                </cu-col>
            </cu-grid>
        </div>
    </div>
</template>