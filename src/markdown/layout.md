---
title: layout
dics: layout
---

```vue demo
<template>
    <div class="docs-layout-box">
        <cu-layout>
            <cu-header class='ui-BG-Main-4'>header</cu-header>
            <cu-content class='bg-gray-e'>content</cu-content>
        </cu-layout>
        <div class="mt-5">
            <cu-layout>
                <cu-header class='ui-BG-Main-4'>header</cu-header>
                <cu-content class='bg-gray-e'>content</cu-content>
                <cu-footer class='ui-BG-Main-4 p-3'>footer</cu-footer>
            </cu-layout>
        </div>
        <div class="mt-5">
            <cu-layout side>
                <cu-side class="ui-BG-Main-4 cu-side-view">side</cu-side>
                <cu-content class='bg-gray-e'>content</cu-content>
            </cu-layout>
        </div>
        <div class="mt-5">
            <cu-layout>
                <cu-header class='ui-BG-Main-4'>header</cu-header>
                <cu-layout side>
                    <cu-side class="bg-gray-c cu-side-view">side</cu-side>
                    <cu-content class='bg-gray-e'>content</cu-content>
                </cu-layout>
            </cu-layout>
        </div>
        <div class="mt-5">
            <cu-layout>
                <cu-header class='ui-BG-Main-4'>header</cu-header>
                <cu-layout side>
                    <cu-side class="bg-gray-c cu-side-view">side</cu-side>
                    <cu-content class='bg-gray-e'>content</cu-content>
                </cu-layout>
                <cu-footer class='ui-BG-Main-4 p-3'>footer</cu-footer>
            </cu-layout>
        </div>
        <div class="mt-5">
            <cu-layout>
                <cu-header class='ui-BG-Main-4'>header</cu-header>
                <cu-layout side>
                    <cu-side class="bg-gray-c cu-side-view">side</cu-side>
                    <cu-content class='bg-gray-e'>
                        content
                        <cu-footer class='ui-BG-Main-4'>footer</cu-footer>
                    </cu-content>
                </cu-layout>
            </cu-layout>
        </div>
        <div class="mt-5">
            <cu-layout side>
                <cu-side class="bg-gray-c cu-side-view">side</cu-side>
                <cu-layout>
                    <cu-header class='ui-BG-Main-4'>header</cu-header>
                    <cu-content class='bg-gray-e'>content</cu-content>
                </cu-layout>
            </cu-layout>
        </div>
        <div class="mt-5">
            <cu-layout side>
                <cu-side class="bg-gray-c cu-side-view">side</cu-side>
                <cu-layout>
                    <cu-header class='ui-BG-Main-4'>header</cu-header>
                    <cu-content class='bg-gray-e'>content</cu-content>
                    <cu-footer class='ui-BG-Main-4 p-3'>footer</cu-footer>
                </cu-layout>
            </cu-layout>
        </div>
    </div>
</template>
```
