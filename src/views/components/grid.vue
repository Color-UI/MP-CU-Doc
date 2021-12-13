<template>
    <div class="cu-docs-view">
        <cu-title depth="1" title="栅栏" subTitle="Grid" isIcon/>
        <div class="pb-3">基于 CSS flex，采用的是12格布局方式。</div>

        <grid-docs/>

        <div class="mt-6">
            <cu-title depth="2" title="class参数说明" isIcon/>
            <div class="pb-3">
                <span>class的方式，直接使用如： </span>
                <span class="ui-tag bg-blue-thin">.ui-col-{x}</span>
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
                        <div class="ui-table-td">ui-grid</div>
                        <div class="ui-table-td">栅栏外层容器</div>
                        <div class="ui-table-td">-</div>
                        <div class="ui-table-td">-</div>
                        <div class="ui-table-td">-</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">ui-col-值</div>
                        <div class="ui-table-td">栅栏比例，如：class="ui-col-6"</div>
                        <div class="ui-table-td">-</div>
                        <div class="ui-table-td">1至12</div>
                        <div class="ui-table-td">-</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">ui-col-lg-值</div>
                        <div class="ui-table-td">栅栏比例，当页面宽度超过1025px时，才会使用此class，实际上，跟 ui-col-值 是一样的</div>
                        <div class="ui-table-td">-</div>
                        <div class="ui-table-td">1至12</div>
                        <div class="ui-table-td">-</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup>
import gridDocs from '@/markdown/grid.md'

</script>

<style lang="scss">
.docs-div {
    height: 40px;
    line-height: 40px;
    text-align: center;
}
</style>
