---
title: title
dics: title
---

<div class="mt-6">
    <cu-title depth="2" title="基础" isIcon/>

```vue demo
<template>
    <cu-grid spacing="10">
        <cu-col span="2">
            <div class="radius border p-4">
                <cu-title depth="1" title="基础" subTitle="basic" isIcon/>
            </div>
        </cu-col>
        <cu-col span="2">
            <div class="radius border p-4">
                <cu-title depth="2" title="基础" subTitle="basic" isIcon/>
            </div>
        </cu-col>
        <cu-col span="2">
            <div class="radius border p-4">
                <cu-title title="基础" subTitle="basic" isIcon/>
            </div>
        </cu-col>
        <cu-col span="2">
            <div class="radius border p-4">
                <cu-title depth="3" title="基础" subTitle="basic" isIcon/>
            </div>
        </cu-col>
        <cu-col span="2">
            <div class="radius border p-4">
                <cu-title depth="4" title="基础" subTitle="basic" isIcon/>
            </div>
        </cu-col>
        <cu-col span="2">
            <div class="radius border p-4">
                <cu-title depth="5" title="基础" subTitle="basic" isIcon/>
            </div>
        </cu-col>
        <cu-col span="2">
            <div class="radius border p-4">
                <cu-title title="基础" subTitle="basic">
                    <template v-slot:icon>
                        <i class="cicon-warn"/>
                    </template>
                </cu-title>
            </div>
        </cu-col>
        <cu-col span="2">
            <div class="radius border p-4">
                <cu-title title="基础" subTitle='basic'/>
            </div>
        </cu-col>
        <cu-col span="2">
            <div class="radius border p-4">
                <cu-title title="圆点" subTitle="dot" hasDot/>
            </div>
        </cu-col>
        <cu-col span="2">
            <div class="radius border p-4">
                <cu-title title="短线" subTitle='line' hasLine/>
            </div>
        </cu-col>
        <cu-col span="2">
            <div class="radius border p-4">
                <cu-title title="基础" subTitle='basic' tpl="stack"/>
            </div>
        </cu-col>
        <cu-col span="2">
            <div class="radius border p-4">
                <cu-title title="圆点" subTitle='dot' tpl="stack" hasDot/>
            </div>
        </cu-col>
        <cu-col span="2">
            <div class="radius border p-4">
                <cu-title title="短线" subTitle='line' tpl="stack" hasLine/>
            </div>
        </cu-col>
    </cu-grid>
</template>
```

</div>

<div class="mt-6">
    <cu-title depth="2" title="居中" isIcon/>

```vue demo
<template>
    <cu-grid spacing="10">
        <cu-col span="6">
            <div class="radius border p-4">
                <cu-title title="基础" subTitle="basic" align="center"/>
            </div>
        </cu-col>
        <cu-col span="6">
            <div class="radius border p-4">
                <cu-title title="圆点" subTitle="dot" align="center" hasDot/>
            </div>
        </cu-col>
        <cu-col span="6">
            <div class="radius border p-4">
                <cu-title title="短线" subTitle="line" align="center" hasLine/>
            </div>
        </cu-col>
        <cu-col span="6">
            <div class="radius border p-4">
                <cu-title title="基础" subTitle="basic" align="center" tpl="stack"/>
            </div>
        </cu-col>
        <cu-col span="6">
            <div class="radius border p-4">
                <cu-title title="圆点" subTitle="dot" align="center" tpl="stack" hasDot/>
            </div>
        </cu-col>
        <cu-col span="6">
            <div class="radius border p-4">
                <cu-title title="短线" subTitle="line" align="center" tpl="stack" hasLine/>
            </div>
        </cu-col>
        <cu-col span="6">
            <div class="radius border p-4">
                <cu-title title="精选推荐" text="text-blue" desc="text-cyan" subTitle="Carefully chosen" tpl="center-column" hasDot/>
            </div>
        </cu-col>
        <cu-col span="6">
            <div class="radius border p-4">
                <cu-title title="精选推荐" text="text-blue" tpl="center-column" hasDot/>
            </div>
        </cu-col>
        <cu-col span="6">
            <div class="radius border p-4">
                <cu-title title="猜你喜欢" text="text-red" desc="text-orange" subTitle="Guess you like" tpl="center-column" hasLine/>
            </div>
        </cu-col>
        <cu-col span="6">
            <div class="radius border p-4">
                <cu-title title="猜你喜欢" text="text-red" tpl="center-column" hasLine/>
            </div>
        </cu-col>
    </cu-grid>
</template>
```

</div>
