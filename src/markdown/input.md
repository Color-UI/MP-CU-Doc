---
title: input
dics: input
---

<div class="mt-6">
    <cu-title depth="2" title="示例" isIcon/>
    <div class="pb-3">常用的输入框效果示例</div>
    <cu-grid spacing="14">
        <cu-col span="6">

```vue demo
<template>
    <div class="mb-3 text-xl">基础</div>
    <div class="mb-4">
        <span>输入框的 </span>
        <span class="ui-tag bg-blue-thin">type</span>
        <span> 都是H5原生属性类型 </span>
    </div>
    <div class="py-3">
        <div class="pb-2">输入框 v-model：{{val}}</div>
        <div class="pb-4">textarea v-model：{{textVal}}</div>
        <cu-input v-model="val" placeholder='基础输入框'/>
        <cu-input type="textarea" v-model="textVal" placeholder='textarea'/>
    </div>
</template>
<script lang="ts" setup>
import {ref} from "vue";
const val = ref<string|number>('');
const textVal = ref<string|number>('');
</script>
```

<div class="mt-6">

```vue demo
<template>
    <div class="mb-3 text-xl">带icon的输入框</div>
    <div class="mb-4">
        <span class="ui-tag bg-blue-thin">prefixIcon</span>
        <span> 为左边图标， </span>
        <span class="ui-tag bg-blue-thin">suffixIcon</span>
        <span> 为右边图标 </span>
    </div>
    <div class="py-3">
        <cu-input placeholder='左边图标' prefixIcon='cicon-search'/>
        <cu-input placeholder='右边图标' suffixIcon='cicon-search'/>
    </div>
</template>
```

</div>
<div class="mt-6">

```vue demo
<template>
    <div class="mb-3 text-xl">圆角</div>
    <div class="mb-4">
        <span> 添加 </span>
        <span class="ui-tag bg-blue-thin">round</span>
        <span> 开启圆角 </span>
    </div>
    <div class="py-3">
        <cu-input placeholder='sm' size="sm" block round/>
        <cu-input placeholder='默认大小' block round/>
        <cu-input placeholder='lg' size="lg" block round/>
        <cu-input placeholder='xl' size="xl" block round/>
    </div>
</template>
```

</div>
</cu-col>
<cu-col span="6">

```vue demo
<template>
    <div class="mb-3 text-xl">尺寸</div>
    <div class="mb-4">
        <span>添加 </span>
        <span class="ui-tag bg-blue-thin">size</span>
        <span> 属性，开启尺寸，尺寸值分别为 </span>
        <span class="ui-tag bg-blue-thin">sm、lg、xl</span>
    </div>
    <div class="py-3">
        <cu-input placeholder='sm' size="sm" block/>
        <cu-input placeholder='默认大小' block/>
        <cu-input placeholder='lg' size="lg" block/>
        <cu-input placeholder='xl' size="xl" block/>
    </div>
</template>
```

<div class="mt-6">

```vue demo
<template>
    <div class="mb-3 text-xl">复合型输入框</div>
    <div class="mb-4">
        <span class="ui-tag bg-blue-thin">v-slot:prepend</span>
        <span> 添加到左边， </span>
        <span class="ui-tag bg-blue-thin">v-slot:append</span>
        <span> 添加到右边 </span>
    </div>
    <div class="py-3">
        <cu-input placeholder='左边添加'>
            <template v-slot:prepend>
                https://
            </template>
        </cu-input>
        <cu-input placeholder='右边添加'>
            <template v-slot:append>
                .com
            </template>
        </cu-input>
    </div>
</template>
```

</div>
<div class="mt-6">

```vue demo
<template>
    <div class="mb-3 text-xl">杂项</div>
    <div class="mb-4">
        <span class="ui-tag bg-blue-thin">disabled</span>
        <span> 禁用， </span>
        <span class="ui-tag bg-blue-thin">clearable</span>
        <span> 清空 </span>
    </div>
    <div class="py-3">
        <cu-input placeholder='禁用的' disabled/>
        <cu-input placeholder='可清空' clearable/>
        <cu-input placeholder='焦点输入框' ref="cuInputRef" block/>
        <cu-button class="mt-3" type="primary" @click="setFocus">设置焦点</cu-button>
    </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";

const cuInputRef = ref<any>();

const setFocus = () => {
    cuInputRef.value.focus();
}
</script>
```

</div>

</cu-col>
</cu-grid>
</div>
