<div class="mp-cu-doc-theme-content">

# 阴影

ColorUI设定了类名来控制阴影，部分组件也有对应参数来控制阴影，实际上也是通过类名来控制。可以通过组合类名来表达多样性。


## 阴影尺寸

`.shadow/.shadow-{size}`

<div class="ui-grid ui-cols-2 opacity" style="margin: 0 -10px;">
    <div class="ui-item p-3" style="width: 45%;">
        <div class="shadow-sm ui-BG p-4 radius xl">sm</div>
    </div>
    <div class="ui-item p-3" style="width: 45%;">
        <div class="shadow ui-BG p-4 radius xl">df</div>
    </div>
    <div class="ui-item p-3" style="width: 45%;">
        <div class="shadow-lg ui-BG p-4 radius xl">lg</div>
    </div>
    <div class="ui-item p-3" style="width: 45%;">
        <div class="shadow-inset ui-BG p-4 radius xl">inset</div>
    </div>
</div>


## 有色阴影

`.shadow-{color}`

<div class="py-2 ui-grid ui-cols-4" style="margin: 0 -10px;">
    <div class="ui-item px-3" style="width: 22%;">
        <div class="shadow-blue radius xl bg-blue p-4">blue</div>
    </div>
    <div class="ui-item px-3" style="width: 22%;">
        <div class="shadow-green radius xl bg-green p-4">green</div>
    </div>
    <div class="ui-item px-3" style="width: 22%;">
        <div class="shadow-orange radius xl bg-orange p-4">orange</div>
    </div>
    <div class="ui-item px-3" style="width: 22%;">
        <div class="shadow-red radius xl bg-red p-4">red</div>
    </div>
</div>


## 背景阴影

`.shadow-blur`

<div class="ui-item px-3" style="margin: 0 -10px;">
    <div class="shadow-blur radius xl bg-red-gradient p-4" style="z-index: 1;">blur</div>
</div>


## 翘边阴影

`.shadow-warp`

![mp-cu](https://colorui-assest.vercel.app/mp-cu-doc/other/shadow-warp.png)

</div>