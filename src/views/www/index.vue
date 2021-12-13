<template>
    <div class="page-home-view">
        <div class="home-view">
            <div class="header-view">
                <div class="logo-view">
                    <img src="../../assets/image/logo.png" alt="ColorUI3 for Vue3">
                </div>
                <div class="title-view">
                    <div class="title">ColorUI3 for Vue3</div>
                    <div class="text">基于ColorUI3.x 的高质量Vue3 UI组件库</div>
                </div>
            </div>
            <div class="desc">ColorUI3.2.x + Vue3.x + Vite + Ts + script setup</div>
            <div class="btn-view">
                <cu-button type="primary" size="lg" icon="cui-play-arrow" border light @click="docClick"> 开始使用</cu-button>
                <cu-button class="bg-pink-light border border-pink lg" icon="cui-thumb-up" @click="openColorUiUrl"> ColorUI3</cu-button>
                <cu-button class="bg-grey-light border border-grey lg" icon="cui-github-circle" @click="openGitHubUrl"> GitHub</cu-button>
            </div>
            <app-footer/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import AppFooter from '@/components/app-footer/index.vue'

import router from '@/router/index'

function docClick() {
    router.push("/introduction")
}

function openColorUiUrl() {
    window.open('https://github.com/weilanwl/coloruiBeta',"_blank")
}

function openGitHubUrl() {
    window.open('https://github.com/Color-UI/colorui-vue3-test',"_blank")
}

</script>

<style lang="scss" scoped>
.page-home-view {
    position: relative;
    background-color: #ffffff;
    background-image: url("@/assets/image/bg.png");
    height: 100%;
    overflow: hidden;
    .home-view {
        background: rgba( 255, 255, 255, 0.25 );
        box-shadow: 0 8px 32px 0 rgb(169 168 168 / 37%);
        backdrop-filter: blur(1px);
        border-radius: 10px;
        position: absolute;
        width: 700px;
        top: 50%;
        left: 50%;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
        transform: translate(-50%,-50%);
        padding: 40px 40px 10px;
        .header-view {
            position: relative;
            text-align: center;
            margin-bottom: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            .logo-view {
                position: relative;
                height: 120px;
                width: 120px;
                img {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    top: 4px;
                }
            }
            .title-view {
                position: relative;
                .title {
                    color: rgba(0,0,0,.85);
                    position: relative;
                    font-weight: 600;
                    font-size: 50px;
                }
                .text {
                    text-align: left;
                    font-size: 22px;
                    margin-top: 8px;
                    color: rgba(0,0,0,.45);
                }
            }
        }
        .desc {
            font-size: 20px;
            color: rgba(0, 0, 0, 0.45);
            margin-top: 20px;
            text-align: center;
        }
        .btn-view {
            text-align: center;
            margin: 60px 0;
        }
    }
}
</style>
