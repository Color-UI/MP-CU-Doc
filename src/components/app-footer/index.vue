<template>
    <div class="cu-page-footer-copyright">
        <view class="cu-page-footer">
            <img class="cu-copyright-img" src="@/assets/image/pa1m9.png" alt="colorui"/>
        </view>
        <div class="developer">ColorUI3 for Vue3 Developer ZaiZai And ColorUI-Team.</div>
    </div>
</template>

<style lang="scss" scoped>
.cu-page-footer-copyright {
    position: relative;
    padding: 22px 0;
    display: block;
    border-top: 1px solid #ececec;
    .cu-page-footer {
        height: 75px;
        display: flex;
        justify-content: center;
        .cu-copyright-img {
            opacity: 0.5;
            width: 247.5px;
            height: 75px;
        }
    }
    .developer {
        text-align: center;
        color: #b3b2b2;
        font-size: 14px;
        margin-top: 5px;
    }
}
</style>
