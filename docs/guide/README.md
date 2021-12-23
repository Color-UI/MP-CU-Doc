<div class="mp-cu-doc-theme-content">

# 介绍

`MP-CU` 是为 `ColorUI3.x` 适配的微信原生小程序版本，如果您不需要微信原生小程序版本，你也可以使用 [ColorUI3.x](https://github.com/weilanwl/coloruiBeta) 原版（只支持`uni-app`），来开发项目。

ColorUI2.x 不能直接升级到 ColorUI3.x，因为 ColorUI3.x 是重构版本，跟2.x几乎完全不一样，ColorUI3.x 采用了组件化的方式，当然也提供了一些基础的class使用。

目前不建议 直接把 ColorUI3.x 用于生产环境，当前还是测试版本，并不是正式版本，组件可能会有改动。

## MP-CU

MP = miniprogram，CU = ColorUI, 在注册小程序名字时，又因为其它ColorUI相关的名字被抢注，无法注册，最终取名为MP-CU，意为ColorUI微信原生小程序版本。

## 生态

- [ColorUI - uni-app](https://github.com/weilanwl/coloruiBeta) (主要版本， 推荐使用)
- [MP-CU](https://github.com/Color-UI/MP-CU) - (微信原生小程序版)


## 社区

- [ColorUI官方社区网站](https://color-ui.com/)
- QQ群①：240787041 (已满)
- QQ群②：760786796 (已满)
- QQ群③：596179746 (已满)
- QQ群④：368471882

## 演示码

![mp-cu](https://colorui-assest.vercel.app/mp-cu-doc/mp-cu.jpg)

## 鸣谢

感谢 【文晓港(ColorUI作者 / [@weilanwl](https://github.com/weilanwl))】, 【胖虎([@bypanghu](https://github.com/bypanghu))】


## 版权

MP-CU 是 [ColorUI](https://color-ui.com/) 授权的项目，采用了 [MIT](https://opensource.org/licenses/MIT) 开源协议，免费的，开源的，由ColorUI团队维护更新，谨防上当受骗，如果被骗，请自行承担相关损失和责任。


## 说明

开源，不代表可以无底线的滥用，商用请保留代码里版权声明（代码注释区域内的相关版权信息），如果是开源项目，请加上出处和地址，我们希望，开源的同时，能尊重他人的劳动成果，谢谢支持


## :sparkling_heart: 支持这个项目

我们尽己所能地进行开源，并且我们尽量回复每个在使用项目时需要帮助的人。

很明显，这需要时间，但你可以免费享受这些。

然而, 如果你正在使用这个项目并感觉良好，或只是想要支持我们继续开发，你可以通过如下方式：

<div class="no-external-link-icon">

- 在你的 开源项目 中使用 MP-CU 时，链接指向这里[https://github.com/Color-UI/MP-CU](https://github.com/Color-UI/MP-CU) :D
- Star 并 分享这个项目 :rocket:
- [![paypal.me/iZaiZaiA](/images/paypal.svg)](https://paypal.me/iZaiZaiA) - 你可以通过 [PayPal](https://paypal.me/iZaiZaiA)、<span class='mp-cu-pay' @click='thanksShow()'>微信、支付宝</span> 打赏. 我们可能会买一杯 ~~咖啡~~ 茶. :tea:

<div class='mp-cu-pay-img' v-show="show">

![thanks](https://colorui-assest.vercel.app/mp-cu-doc/thanks.jpg)

</div>

谢谢！ :heart:

</div>
</div>

<script setup>
import { ref } from "vue";
const show = ref(false);
function thanksShow() {
    show.value = !show.value;
}
</script>