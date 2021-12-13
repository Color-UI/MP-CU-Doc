---
title: button
dics: button
---

<div class="mt-6">
    <cu-title depth="2" title="示例" isIcon/>
    <div class="pb-3">各种类型的按钮示例效果</div>
    <cu-grid spacing="14">
        <cu-col span="6">

```vue demo
<template>
    <div class="mb-3 text-xl">基础</div>
    <div class="mb-4">
        <span>按钮的 </span>
        <span class="ui-tag bg-blue-thin">type</span>
        <span> 分别为 </span>
        <span class="ui-tag bg-blue-thin">default、primary、info、success、warning、error</span>
    </div>
    <div class="p-3 ui-BG-2 radius">
        <cu-button>default</cu-button>
        <cu-button type="primary">primary</cu-button>
        <cu-button type="info">info</cu-button>
        <cu-button type="success">success</cu-button>
        <cu-button type="warning">warning</cu-button>
        <cu-button type="error">error</cu-button>
    </div>
</template>
```

<div class="mt-6">

```vue demo
<template>
    <div class="mb-3 text-xl">渐变色</div>
    <div class="mb-4">
        <span>添加 </span>
        <span class="ui-tag bg-blue-thin">gradient</span>
        <span> 属性，开启渐变色 </span>
    </div>
    <div class="py-3">
        <cu-button type="primary" gradient>primary</cu-button>
        <cu-button type="info" gradient>info</cu-button>
        <cu-button type="success" gradient>success</cu-button>
        <cu-button type="warning" gradient>warning</cu-button>
        <cu-button type="error" gradient>error</cu-button>
        <cu-button class="bg-pink-gradient">pink</cu-button>
    </div>
</template>
```

</div>
<div class="mt-6">

```vue demo
<template>
    <div class="mb-3 text-xl">尺寸</div>
    <div class="mb-4">
        <span>添加 </span>
        <span class="ui-tag bg-blue-thin">size</span>
        <span> 属性，开启尺寸，尺寸值分别为 </span>
        <span class="ui-tag bg-blue-thin">sm、df、lg、xl</span>
    </div>
    <div class="py-3">
        <cu-button type="primary" size="sm">sm(已经很小了)</cu-button>
        <cu-button type="info" size="df">df(默认尺寸)</cu-button>
        <cu-button type="success" size="lg">lg(大了一点)</cu-button>
        <cu-button type="warning" size="xl">xl(好大好大)</cu-button>
    </div>
</template>
```

</div>
<div class="mt-6">

```vue demo
<template>
    <div class="mb-3 text-xl">实线边框</div>
    <div class="mb-4">
        <span>添加 </span>
        <span class="ui-tag bg-blue-thin">border</span>
        <span> 属性，开启实线边框，相关值为 </span>
        <span class="ui-tag bg-blue-thin">s、ss</span>
    </div>
    <div class="py-3">
        <cu-button border>细边框</cu-button>
        <cu-button type="primary" border="s" thin>中边框</cu-button>
        <cu-button type="info" border="ss" thin>粗边框</cu-button>
        <cu-button type="success" border light>细边框</cu-button>
        <cu-button type="warning" border="s" light>中边框</cu-button>
        <cu-button type="error" border="ss" light>粗边框</cu-button>
    </div>
</template>
```

</div>

<div class="mt-6">

```vue demo
<template>
    <div class="mb-3 text-xl">块状</div>
    <div class="mb-4">
        <span>添加 </span>
        <span class="ui-tag bg-blue-thin">block</span>
        <span> 属性，实现块状 </span>
    </div>
    <div class="py-3">
        <cu-button type="primary" block>primary</cu-button>
    </div>
</template>
```

</div>

</cu-col>
<cu-col span="6">

```vue demo
<template>
    <div class="mb-3 text-xl">浅色</div>
    <div class="mb-4">
        <span>添加 </span>
        <span class="ui-tag bg-blue-thin">thin</span>
        <span> 属性，实现浅色效果 </span>
    </div>
    <div class="py-3">
        <cu-button type="primary" thin>primary</cu-button>
        <cu-button type="info" thin>info</cu-button>
        <cu-button type="success" thin>success</cu-button>
        <cu-button type="warning" thin>warning</cu-button>
        <cu-button type="error" thin>error</cu-button>
        <cu-button class="bg-pink-thin">pink</cu-button>
    </div>
</template>
```

<div class="mt-6">

```vue demo
<template>
    <div class="mb-3 text-xl">浅色渐变</div>
    <div class="mb-4">
        <span>添加 </span>
        <span class="ui-tag bg-blue-thin">light</span>
        <span> 属性，实现浅色渐变效果 </span>
    </div>
    <div class="py-3">
        <cu-button type="primary" light>primary</cu-button>
        <cu-button type="info" light>info</cu-button>
        <cu-button type="success" light>success</cu-button>
        <cu-button type="warning" light>warning</cu-button>
        <cu-button type="error" light>error</cu-button>
        <cu-button class="bg-pink-light">pink</cu-button>
    </div>
</template>
```

</div>
<div class="mt-6">

```vue demo
<template>
    <div class="mb-3 text-xl">阴影</div>
    <div class="mb-4">
        <span>添加 </span>
        <span class="ui-tag bg-blue-thin">shadow</span>
        <span> 属性，实现阴影效果，值分别为： </span>
        <span class="ui-tag bg-blue-thin">sm、lg</span>
        <span> ，添加 </span>
        <span class="ui-tag bg-blue-thin">bgShadow</span>
        <span> 属性，实现背景阴影效果</span>
    </div>
    <div class="py-3">
        <cu-button shadow="sm">小阴影</cu-button>
        <cu-button type="primary" shadow>默认阴影</cu-button>
        <cu-button type="info" shadow="lg">大阴影</cu-button>
        <cu-button type="success" shadow bgShadow>背景阴影</cu-button>
        <cu-button type="warning" shadow="lg" bgShadow>背景大阴影</cu-button>
    </div>
</template>
```

</div>
<div class="mt-6">

```vue demo
<template>
    <div class="mb-3 text-xl">虚线边框</div>
    <div class="mb-4">
        <span>添加 </span>
        <span class="ui-tag bg-blue-thin">dashed</span>
        <span> 属性，实现虚线边框效果 </span>
    </div>
    <div class="py-3">
        <cu-button dashed>default</cu-button>
        <cu-button type="primary" thin dashed>primary</cu-button>
        <cu-button type="info" thin dashed>info</cu-button>
        <cu-button type="success" thin dashed>success</cu-button>
        <cu-button type="warning" light dashed>warning</cu-button>
        <cu-button type="error" light dashed>error</cu-button>
    </div>
</template>
```
</div>
<div class="mt-6">

```vue demo
<template>
    <div class="mb-5 text-xl">杂项</div>
    <div class="py-3">
        <cu-button type="text">text</cu-button>
        <cu-button type="primary" icon="cicon-waiting">图标</cu-button>
        <cu-button type="info" loading>加载中</cu-button>
        <cu-button type="success" round>圆角</cu-button>
        <cu-button type="warning" icon="cicon-loader"/>
        <cu-button type="error" icon="cicon-search" round/>
        <cu-button type="custom" class="ml-4">原生按钮</cu-button>
    </div>
</template>
```
</div>

</cu-col>
</cu-grid>
</div>
