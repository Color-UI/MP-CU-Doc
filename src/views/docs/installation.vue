<template>
    <div class="cu-docs-view">
        <cu-title depth="1" title="安装" isIcon/>
        <div class="blockquote">
            <i class="cicon-warn text-yellow"/>
            <span class="m-2">注意：ColorUI3 - Vue3 仅支持 Vue3.</span>
        </div>

        <div class="mt-6">
            <cu-title depth="2" title="yarn" isIcon/>
            <div class="p-3">推荐使用 yarn 的方式安装。</div>
            <code-box lang="shell" code="yarn add colorui3-vue3"/>
        </div>

        <div class="mt-6">
            <cu-title depth="2" title="npm" isIcon/>
            <div class="p-3">npm 的方式安装。</div>
            <code-box lang="shell" code="npm install colorui3-vue3 --save"/>
        </div>

        <div class="mt-6">
            <cu-title depth="2" title="CDN" isIcon/>
            <div class="p-3">目前可以通过 unpkg.com/colorui3-vue3 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。</div>
            <div class="border radius">
                <cdn-docs/>
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup>
import codeBox from '@/components/code-box/index.vue'
import cdnDocs from '@/markdown/cdn.md'

</script>
