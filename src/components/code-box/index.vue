<template>
    <div class="ui-code border radius">
        <pre :class="lang">
            <code>{{code}}</code>
        </pre>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    lang: {
        type: String,
        default: 'vue'
    },
    code: {
        type: String,
        default: ''
    },
})
</script>
