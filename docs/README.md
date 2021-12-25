---
home: true
heroImage: /images/logo.png
actions:
- text: 开始使用
  link: /guide/
  type: primary
- text: GitHub
  link: https://github.com/Color-UI/MP-CU
  type: secondary github
- text: Gitee
  link: https://gitee.com/color-ui/MP-CU
  type: secondary
features:
- title: 组件
  details: ColorUI3.x 对比 ColorUI2.x，从之前的class方式，转为了组件化的方式，并提供了丰富的自定义参数以及插槽
- title: 颜色
  details: 漂亮及丰富的色彩，一直是ColorUI的亮点，ColorUI3.x内置了比ColorUI2.x更多的预设颜色（普通色、渐变色等）
- title: 主题
  details: 内置了两种主题，白色和深色，在开发使用时，只需要简单的调用，即可在微信原生小程序上拥有全局主题功能
footer: Copyright © weilanwl.com Design. colorui-team Development.  All Rights Reservecd
---

<svg class="mp-bg-svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
    <defs>
      <radialGradient id="Gradient1" cx="50%" cy="50%" fx="10%" fy="50%" r=".5">
        <animate attributeName="fx" dur="34s" values="0%;3%;0%" repeatCount="indefinite" />
        <stop offset="0%" stop-color="#ff0" />
        <stop offset="100%" stop-color="#ff00" />
      </radialGradient>
       <radialGradient id="Gradient2" cx="50%" cy="50%" fx="10%" fy="50%" r=".5">
        <animate attributeName="fx" dur="23.5s" values="0%;3%;0%" repeatCount="indefinite" />
        <stop offset="0%" stop-color="#0ff" />
        <stop offset="100%" stop-color="#0ff0" />
      </radialGradient>
      <radialGradient id="Gradient3" cx="50%" cy="50%" fx="50%" fy="50%" r=".5">
        <animate attributeName="fx" dur="21.5s" values="0%;3%;0%" repeatCount="indefinite" />
        <stop offset="0%" stop-color="#f0f" />
        <stop offset="100%" stop-color="#f0f0" />
      </radialGradient>
    </defs>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient1)">
      <animate attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite" />
      <animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite" />
      <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="17s" repeatCount="indefinite"/>
    </rect>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient2)">
      <animate attributeName="x" dur="23s" values="-25%;0%;-25%" repeatCount="indefinite" />
      <animate attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite" />
      <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="18s" repeatCount="indefinite"/>
    </rect>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient3)">
      <animate attributeName="x" dur="25s" values="0%;25%;0%" repeatCount="indefinite" />
      <animate attributeName="y" dur="26s" values="0%;25%;0%" repeatCount="indefinite" />
      <animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="19s" repeatCount="indefinite"/>
    </rect>
  </svg>

<script>
import { onMounted, onBeforeUnmount } from 'vue';
export default {
  setup() {
    onMounted(() => {
        let t1 = window.setTimeout(function() {
          document.querySelector('body').setAttribute('style', 'background-color:initial;');
          document.querySelector('header').setAttribute('style', 'background-color:initial;');
        },1);
    });
    onBeforeUnmount(() => {
        document.querySelector('body').setAttribute('style', '');
        document.querySelector('header').setAttribute('style', '');
    });
  }
}
</script>

<style>
.home .theme-default-content.custom {
    width: 100%;
    height: 100%;
}
.mp-bg-svg {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    left: 0;
    bottom: 0;
    opacity: 0.1;
}
</style>