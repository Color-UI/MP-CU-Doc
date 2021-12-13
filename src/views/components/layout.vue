<template>
    <div class="cu-docs-view">
        <cu-title depth="1" title="布局" subTitle="Layout" isIcon/>
        <div class="pb-3">用于布局的容器组件，方便快速搭建页面的基本结构</div>

        <div class="mt-6">
            <cu-title depth="2" title="常见布局" isIcon/>
            <div class="pb-4">一些常见的页面布局</div>
            <layout-docs/>
        </div>

        <div class="mt-6">
            <cu-title depth="2" title="cu-layout 参数说明" desc="basic" isIcon/>
            <div class="pb-3">
                <span>class方式可以使用</span>
                <span class="ui-tag bg-blue-thin">.cu-layout</span>
                <span> 类名</span>
            </div>
            <div class="ui-table table-border table-full mt-3 table-radius sm">
                <div class="ui-table-header">
                    <div class="ui-table-tr">
                        <div class="ui-table-th">属性名</div>
                        <div class="ui-table-th">说明</div>
                        <div class="ui-table-th">类型</div>
                        <div class="ui-table-th">可选值</div>
                        <div class="ui-table-th">默认值</div>
                        <div class="ui-table-th">class方式</div>
                    </div>
                </div>
                <div class="ui-table-body">
                    <div class="ui-table-tr">
                        <div class="ui-table-td">side</div>
                        <div class="ui-table-td">是否启用侧边栏</div>
                        <div class="ui-table-td">Boolean</div>
                        <div class="ui-table-td">false、true</div>
                        <div class="ui-table-td">false</div>
                        <div class="ui-table-td">.cu-layout-has-side</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">hFixed</div>
                        <div class="ui-table-td">是否固定头部</div>
                        <div class="ui-table-td">Boolean</div>
                        <div class="ui-table-td">false、true</div>
                        <div class="ui-table-td">false</div>
                        <div class="ui-table-td">.cu-layout-header-fixed</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">sFixed</div>
                        <div class="ui-table-td">是否固定侧边栏</div>
                        <div class="ui-table-td">Boolean</div>
                        <div class="ui-table-td">false、true</div>
                        <div class="ui-table-td">false</div>
                        <div class="ui-table-td">.cu-layout-side-fixed</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">sCollapsed</div>
                        <div class="ui-table-td">是否收起侧边栏</div>
                        <div class="ui-table-td">Boolean</div>
                        <div class="ui-table-td">false、true</div>
                        <div class="ui-table-td">false</div>
                        <div class="ui-table-td">.cu-layout-side-collapsed</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-6">
            <cu-title depth="2" title="cu-header 说明" isIcon/>
            <div class="pb-3">
                <span>class方式可以使用</span>
                <span class="ui-tag bg-blue-thin">.cu-layout-header</span>
                <span> 类名</span>
            </div>
        </div>

        <div class="mt-6">
            <cu-title depth="2" title="cu-side 说明" isIcon/>
            <div class="pb-3">
                <span>class方式可以使用</span>
                <span class="ui-tag bg-blue-thin">.cu-layout-side</span>
                <span> 类名</span>
            </div>
        </div>

        <div class="mt-6">
            <cu-title depth="2" title="cu-content 说明" isIcon/>
            <div class="pb-3">
                <span>class方式可以使用</span>
                <span class="ui-tag bg-blue-thin">.cu-layout-content</span>
                <span> 类名</span>
            </div>
        </div>

        <div class="mt-6">
            <cu-title depth="2" title="cu-footer 说明" isIcon/>
            <div class="pb-3">
                <span>class方式可以使用</span>
                <span class="ui-tag bg-blue-thin">.cu-layout-footer</span>
                <span> 类名</span>
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup>
import layoutDocs from '@/markdown/layout.md'

</script>

<style lang="scss">
.docs-layout-box {
    text-align: center;
    .bg-gray-e {
        min-height: 120px;
        line-height: 120px;
    }
    .cu-side-view {
        line-height: 120px;
    }
}
</style>
