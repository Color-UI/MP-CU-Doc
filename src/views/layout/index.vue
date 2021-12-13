<template>
    <cu-layout hFixed>
        <cu-header class="bg-white shadow-sm cu-header-view">
            <div class="header-logo" @click="goHome">
                <img src="../../assets/image/logo.png" alt="ColorUI3 - Vue3">
                <span>ColorUI3 - Vue3</span>
            </div>
            <div class="header-content">
                <cu-input placeholder='搜索' prefixIcon='cicon-search'/>
            </div>
            <div class="header-end">
                右边区域（ 相关导航，主题设置 ）
            </div>
        </cu-header>
        <cu-layout side sFixed class="cu-layout-view">
            <cu-side class="bg-white cu-side-view">

                <div class="cu-nav-title">
                    <cu-title depth="2" title="使用之前" desc="basic" isIcon/>
                </div>
                <cu-nav :data="useData" :keys="navKey" :cur-class="curClass" @click="navClick"/>

                <div class="cu-nav-title">
                    <cu-title depth="2" title="基础组件" desc="basic" isIcon/>
                </div>
                <cu-nav :data="basicData" :keys="navKey" :cur-class="curClass" @click="navClick"/>

                <div class="cu-nav-title">
                    <cu-title depth="2" title="视图组件" desc="basic" isIcon/>
                </div>
                <cu-nav :data="viewData" :keys="navKey" :cur-class="curClass" @click="navClick"/>

            </cu-side>

            <cu-content>
                <router-view/>

                <cu-footer>
                    <app-footer/>
                </cu-footer>

            </cu-content>
        </cu-layout>
    </cu-layout>
</template>

<script lang="ts" setup>
import AppFooter from '@/components/app-footer/index.vue'
import { useData, basicData, viewData } from '@/router/nav-data'
import router from '@/router/index'
import { useRoute } from 'vue-router'
import { ref } from "vue";

//变量
const curClass = 'bg-blue-gradient'
const navKey = ref(useRoute().name);

//跳转
function navClick(item: { key: string; }) {
    router.push(item.key)
    navKey.value = item.key
}

function goHome(){
  router.push("/")
}

</script>

<style lang="scss" scoped>
.cu-header-view {
    display: grid;
    padding: 0 14px;
    align-items: center;
    grid-template-rows: calc(64px - 1px);
    grid-template-columns: calc(260px - 14px) 1fr auto;
    .header-logo {
        cursor: pointer;
        display: flex;
        font-size: 16px;
        align-items: center;
        img {
            width: 44px;
            height: 44px;
            margin-right: 10px;
        }
    }
    .header-content {
        display: flex;
        align-items: center;
        padding-left: 36px;
    }
    .header-end {
        display: flex;
        align-items: center;
    }
}
.cu-side-view {
    width: 260px;
    flex: 0 0 260px;
    border-right: 1px solid #d4d4d4;
    &::-webkit-scrollbar {
        width: 0 !important;
        height: 0 !important;
    }
    .cu-nav-title {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 15px;
        padding-top: 5px;
        padding-bottom: 5px;
    }
}
</style>
