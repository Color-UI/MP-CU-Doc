---
title: grid
dics: grid
---

<div class="mt-6">
    <cu-title depth="2" title="基础栅格" isIcon/>
    <div class="pb-3">使用单一分栏创建基础的栅格布局。</div>

```vue demo
<template>
    <cu-grid class="mb-3">
        <cu-col span="12">
            <div class="ui-BG-Main-3 radius docs-div">1/1</div>
        </cu-col>
    </cu-grid>
    <cu-grid class="mb-3">
        <cu-col span="6">
            <div class="ui-BG-Main-4 radius docs-div">1/2</div>
        </cu-col>
        <cu-col span="6">
            <div class="ui-BG-Main-3 radius docs-div">1/2</div>
        </cu-col>
    </cu-grid>
    <cu-grid class="mb-3">
        <cu-col span="4">
            <div class="ui-BG-Main-3 radius docs-div">1/3</div>
        </cu-col>
        <cu-col span="4">
            <div class="ui-BG-Main-4 radius docs-div">1/3</div>
        </cu-col>
        <cu-col span="4">
            <div class="ui-BG-Main-3 radius docs-div">1/3</div>
        </cu-col>
    </cu-grid>
    <cu-grid>
        <cu-col span="2">
            <div class="ui-BG-Main-3 radius docs-div">1/6</div>
        </cu-col>
        <cu-col span="2">
            <div class="ui-BG-Main-4 radius docs-div">1/6</div>
        </cu-col>
        <cu-col span="2">
            <div class="ui-BG-Main-3 radius docs-div">1/6</div>
        </cu-col>
        <cu-col span="2">
            <div class="ui-BG-Main-4 radius docs-div">1/6</div>
        </cu-col>
        <cu-col span="2">
            <div class="ui-BG-Main-3 radius docs-div">1/6</div>
        </cu-col>
        <cu-col span="2">
            <div class="ui-BG-Main-4 radius docs-div">1/6</div>
        </cu-col>
    </cu-grid>
</template>
```

</div>

<div class="mt-6">
    <cu-title depth="2" title="栅栏间隔" isIcon/>
    <div class="pb-3">分栏之间存在间隔。</div>

```vue demo
<template>
    <cu-grid spacing="10">
        <cu-col span="12">
            <div class="ui-BG-Main-3 radius docs-div">12/12</div>
        </cu-col>

        <cu-col span="6">
            <div class="ui-BG-Main-4 radius docs-div">6/12</div>
        </cu-col>
        <cu-col span="6">
            <div class="ui-BG-Main-3 radius docs-div">6/12</div>
        </cu-col>

        <cu-col span="4">
            <div class="ui-BG-Main-3 radius docs-div">4/12</div>
        </cu-col>
        <cu-col span="4">
            <div class="ui-BG-Main-4 radius docs-div">4/12</div>
        </cu-col>
        <cu-col span="4">
            <div class="ui-BG-Main-3 radius docs-div">4/12</div>
        </cu-col>

        <cu-col span="2">
            <div class="ui-BG-Main-3 radius docs-div">2/12</div>
        </cu-col>
        <cu-col span="2">
            <div class="ui-BG-Main-4 radius docs-div">2/12</div>
        </cu-col>
        <cu-col span="2">
            <div class="ui-BG-Main-3 radius docs-div">2/12</div>
        </cu-col>
        <cu-col span="2">
            <div class="ui-BG-Main-4 radius docs-div">2/12</div>
        </cu-col>
        <cu-col span="2">
            <div class="ui-BG-Main-3 radius docs-div">2/12</div>
        </cu-col>
        <cu-col span="2">
            <div class="ui-BG-Main-4 radius docs-div">2/12</div>
        </cu-col>
    </cu-grid>
</template>
```

</div>

<div class="mt-6">
    <cu-title depth="2" title="混合布局" isIcon/>
    <div class="pb-3">任意搭配，达到较为复杂的混合布局。</div>

```vue demo
<template>
    <cu-grid spacing="10">
        <cu-col span="8">
            <div class="ui-BG-Main-3 radius docs-div">8/12</div>
        </cu-col>
        <cu-col span="4">
            <div class="ui-BG-Main-4 radius docs-div">4/12</div>
        </cu-col>

        <cu-col span="3">
            <div class="ui-BG-Main-3 radius docs-div">3/12</div>
        </cu-col>
        <cu-col span="3">
            <div class="ui-BG-Main-3 radius docs-div">3/12</div>
        </cu-col>
        <cu-col span="6">
            <div class="ui-BG-Main-4 radius docs-div">6/12</div>
        </cu-col>

        <cu-col span="2">
            <div class="ui-BG-Main-3 radius docs-div">2/12</div>
        </cu-col>
        <cu-col span="2">
            <div class="ui-BG-Main-3 radius docs-div">2/12</div>
        </cu-col>
        <cu-col span="4">
            <div class="ui-BG-Main-4 radius docs-div">4/12</div>
        </cu-col>
        <cu-col span="1">
            <div class="ui-BG-Main-3 radius docs-div">1/12</div>
        </cu-col>
        <cu-col span="1">
            <div class="ui-BG-Main-4 radius docs-div">1/12</div>
        </cu-col>
        <cu-col span="1">
            <div class="ui-BG-Main-3 radius docs-div">1/12</div>
        </cu-col>
        <cu-col span="1">
            <div class="ui-BG-Main-4 radius docs-div">1/12</div>
        </cu-col>
    </cu-grid>
</template>
```

</div>

<div class="mt-6">
    <cu-title depth="2" title="其它类型" isIcon/>
    <div class="pb-3">square 类型</div>

```vue demo
<template>
    <cu-grid class="grid-square ui-cols-6 p-3">
        <div class="ui-item bg-red radius " v-for="(item,index) in 12" :key="index">
            <div class="flex-center position-center ">
                {{index+1}}
            </div>
        </div>
    </cu-grid>
</template>
```

</div>
