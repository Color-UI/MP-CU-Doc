<template>
    <div class="cu-docs-view">
        <cu-title depth="1" title="图标" subTitle="Icon" isIcon/>
        <div class="pb-3">内置了一套基础的图标集合，业务图标，请自行按需扩展。</div>

        <div class="mt-6">
            <cu-title depth="2" title="使用方法" isIcon/>
            <div class="mb-2">
                <span>直接通过设置类名为 </span>
                <span class="ui-tag bg-blue-thin">.cicon-{name}</span>
                <span> 来使用即可</span>
            </div>
            <div class="mb-4">
                <span>关于图标大小，你可以使用类名 </span>
                <span class="ui-tag bg-blue-thin">.icon-{xxl}</span>
                <span> ，也可以通过 </span>
                <span class="ui-tag bg-blue-thin">font-size: 24px</span>
                <span> 的方式，进行设置，如果要实现转圈圈的效果，类名加上 </span>
                <span class="ui-tag bg-blue-thin">.icon-spin</span>
                <span> 即可。</span>
            </div>

            <icon-docs/>
        </div>

        <div class="mt-6">
            <cu-title depth="2" title="内置图标" isIcon/>
            <div class="pb-3">点击相应的图标，可直接复制到剪贴板</div>
            <div class="mt-2">
                <cu-grid spacing="24">
                    <cu-col span="2" v-for="item in iconList">
                        <div class="border radius py-4 text-center icon-docs-list-view" @click="copyClick(item)">
                            <div class="text-cut mt-2 p-4">
                                <i class="icon-xxl" :class="[`cicon-${item}`]"/>
                            </div>
                            <div class="text-cut mt-2 text-xs text-grey">{{item}}</div>
                        </div>
                    </cu-col>
                </cu-grid>
            </div>
        </div>

        <div class="mt-6">
            <cu-title depth="2" title="图标类名说明" isIcon/>
            <div class="pb-3">
                <span>图标大小相关值，使用类名 </span>
                <span class="ui-tag bg-blue-thin">.icon-{df}</span>
                <span> ，也可以通过 </span>
                <span class="ui-tag bg-blue-thin">font-size: 24px</span>
                <span> 的方式，进行设置 </span>
            </div>
            <div class="ui-table table-border table-full mt-3 table-radius sm">
                <div class="ui-table-header">
                    <div class="ui-table-tr">
                        <div class="ui-table-th">属性名</div>
                        <div class="ui-table-th">说明</div>
                        <div class="ui-table-th">类型</div>
                        <div class="ui-table-th">可选值</div>
                        <div class="ui-table-th">默认值</div>
                    </div>
                </div>
                <div class="ui-table-body">
                    <div class="ui-table-tr">
                        <div class="ui-table-td">.icon-{df}</div>
                        <div class="ui-table-td"><i class="cicon-search icon-lg"/> 通过 transform 处理大小</div>
                        <div class="ui-table-td">-</div>
                        <div class="ui-table-td">xs、sm、df、lg、xl、xxl、sl、xsl</div>
                        <div class="ui-table-td">df</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">.icon-spin</div>
                        <div class="ui-table-td"><i class="cicon-search icon-spin"/> 旋转</div>
                        <div class="ui-table-td">-</div>
                        <div class="ui-table-td">-</div>
                        <div class="ui-table-td">-</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">.icon-pulse</div>
                        <div class="ui-table-td"><i class="cicon-search icon-pulse"/> 也是旋转</div>
                        <div class="ui-table-td">-</div>
                        <div class="ui-table-td">-</div>
                        <div class="ui-table-td">-</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">.icon-90</div>
                        <div class="ui-table-td"><i class="cicon-search icon-90"/> 左右镜像</div>
                        <div class="ui-table-td">-</div>
                        <div class="ui-table-td">-</div>
                        <div class="ui-table-td">-</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">.icon-180</div>
                        <div class="ui-table-td"><i class="cicon-search icon-180"/> 左右镜像并上下翻转</div>
                        <div class="ui-table-td">-</div>
                        <div class="ui-table-td">-</div>
                        <div class="ui-table-td">-</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">.icon-270</div>
                        <div class="ui-table-td"><i class="cicon-search icon-270"/> 上下翻转</div>
                        <div class="ui-table-td">-</div>
                        <div class="ui-table-td">-</div>
                        <div class="ui-table-td">-</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">.icon-x</div>
                        <div class="ui-table-td"><i class="cicon-search icon-x"/> 也是左右镜像</div>
                        <div class="ui-table-td">-</div>
                        <div class="ui-table-td">-</div>
                        <div class="ui-table-td">-</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">.icon-y</div>
                        <div class="ui-table-td"><i class="cicon-search icon-y"/> 也是上下翻转</div>
                        <div class="ui-table-td">-</div>
                        <div class="ui-table-td">-</div>
                        <div class="ui-table-td">-</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">.icon-fw</div>
                        <div class="ui-table-td"><i class="cicon-search icon-fw"/></div>
                        <div class="ui-table-td">-</div>
                        <div class="ui-table-td">-</div>
                        <div class="ui-table-td">-</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup>
import iconDocs from '@/markdown/icon.md'
import {copyText} from '@/utils/util'

const iconList = [
    'home',
    'home-o',
    'search',
    'arrow',
    'checkbox',
    'checkbox-o',
    'box',
    'round',
    'check',
    'check-round',
    'check-round-o',
    'more',
    'close',
    'close-round',
    'close-round-o',
    'edit',
    'info',
    'info-o',
    'warn',
    'warn-o',
    'waiting',
    'waiting-o',
    'delete',
    'delete-o',
    'add',
    'add-round',
    'add-round-o',
    'title',
    'move',
    'move-round',
    'move-round-o',
    'titles',
    'copy',
    'copy-o',
    'loading',
    'loader',
    'back',
    'forward',
    'drop-down',
    'drop-up',
]

//复制
function copyClick(item:any) {
    copyText('cicon-' + item);
    console.log('复制成功');
}

</script>

<style lang="scss">
.docs-icon-view {
    position: relative;
    margin-left: 14px;
    display: flex;
    align-items: center;
    i + i {
        margin-left: 34px;
    }
    .cicon-search, .cicon-loader {
        font-size: 28px;
    }
}
.icon-docs-list-view:hover {
    &:after {
        border-color: var(--ui-BG-Main);
    }
}
</style>
