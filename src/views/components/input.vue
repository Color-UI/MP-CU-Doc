<template>
    <div class="cu-docs-view">
        <cu-title depth="1" title="输入框" subTitle="input" isIcon/>
        <div class="pb-3">常用的输入框。 </div>
        
        <input-docs/>

        <div class="mt-6">
            <cu-title depth="2" title="组件参数" subTitle="props" isIcon/>
            <div class="ui-table table-border table-full mt-3 table-radius sm">
                <div class="ui-table-header">
                    <div class="ui-table-tr">
                        <div class="ui-table-th">属性名</div>
                        <div class="ui-table-th">类型</div>
                        <div class="ui-table-th">默认值</div>
                        <div class="ui-table-th">可选值</div>
                        <div class="ui-table-th">说明</div>
                    </div>
                </div>
                <div class="ui-table-body">
                    <div class="ui-table-tr">
                        <div class="ui-table-td">type</div>
                        <div class="ui-table-td">String</div>
                        <div class="ui-table-td">text</div>
                        <div class="ui-table-td">text,textarea 和其他 原生 input 的 type 值</div>
                        <div class="ui-table-td">输入框类型</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">v-model</div>
                        <div class="ui-table-td">String</div>
                        <div class="ui-table-td">-</div>
                        <div class="ui-table-td">-</div>
                        <div class="ui-table-td">双向绑定 语法糖</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">modelType</div>
                        <div class="ui-table-td">String</div>
                        <div class="ui-table-td">input(实时更新)</div>
                        <div class="ui-table-td">
                            <span class="ui-tag bg-blue-thin">input</span>
                            <span> 实时更新 </span>
                            <span class="ui-tag bg-blue-thin">change</span>
                            <span> 失去焦点后更新 </span>
                            <span class="ui-tag bg-blue-thin">enter</span>
                            <span> 按下回车后更新 </span>
                        </div>
                        <div class="ui-table-td">v-model 更新类型</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">placeholder</div>
                        <div class="ui-table-td">String</div>
                        <div class="ui-table-td">-</div>
                        <div class="ui-table-td">-</div>
                        <div class="ui-table-td">输入框占位文本</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">size</div>
                        <div class="ui-table-td">String</div>
                        <div class="ui-table-td">-</div>
                        <div class="ui-table-td">
                            <span class="ui-tag bg-blue-thin">sm</span>
                            <span class="ui-tag bg-blue-thin">lg</span>
                            <span class="ui-tag bg-blue-thin">xl</span>
                        </div>
                        <div class="ui-table-td">输入框尺寸</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">block</div>
                        <div class="ui-table-td">Boolean</div>
                        <div class="ui-table-td">false</div>
                        <div class="ui-table-td">false,true</div>
                        <div class="ui-table-td">是否启用块状</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">round</div>
                        <div class="ui-table-td">Boolean</div>
                        <div class="ui-table-td">false</div>
                        <div class="ui-table-td">false,true</div>
                        <div class="ui-table-td">是否开启圆角</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">disabled</div>
                        <div class="ui-table-td">Boolean</div>
                        <div class="ui-table-td">false</div>
                        <div class="ui-table-td">false,true</div>
                        <div class="ui-table-td">是否禁用（原生属性）</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">clearable</div>
                        <div class="ui-table-td">Boolean</div>
                        <div class="ui-table-td">false</div>
                        <div class="ui-table-td">false,true</div>
                        <div class="ui-table-td">是否可清空</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">prefixIcon</div>
                        <div class="ui-table-td">String</div>
                        <div class="ui-table-td">-</div>
                        <div class="ui-table-td">-</div>
                        <div class="ui-table-td">输入框左边图标</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">suffixIcon</div>
                        <div class="ui-table-td">String</div>
                        <div class="ui-table-td">-</div>
                        <div class="ui-table-td">-</div>
                        <div class="ui-table-td">输入框右边图标</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">rows</div>
                        <div class="ui-table-td">Number / String</div>
                        <div class="ui-table-td">3</div>
                        <div class="ui-table-td">-</div>
                        <div class="ui-table-td">输入框行数，只对 type="textarea" 有效</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-6">
            <cu-title depth="2" title="组件插槽" subTitle="slot" isIcon/>
            <div class="ui-table table-border table-full mt-3 table-radius sm">
                <div class="ui-table-header">
                    <div class="ui-table-tr">
                        <div class="ui-table-th">名称</div>
                        <div class="ui-table-th">说明</div>
                    </div>
                </div>
                <div class="ui-table-body">
                    <div class="ui-table-tr">
                        <div class="ui-table-td">prepend</div>
                        <div class="ui-table-td">输入框前置内容，type="textarea" 时，无效</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">append</div>
                        <div class="ui-table-td">输入框后置内容，type="textarea" 时，无效</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-6">
            <cu-title depth="2" title="组件事件" subTitle="Emit" isIcon/>
            <div class="ui-table table-border table-full mt-3 table-radius sm">
                <div class="ui-table-header">
                    <div class="ui-table-tr">
                        <div class="ui-table-th">事件名称</div>
                        <div class="ui-table-th">说明</div>
                        <div class="ui-table-th">回调参数</div>
                    </div>
                </div>
                <div class="ui-table-body">
                    <div class="ui-table-tr">
                        <div class="ui-table-td">input</div>
                        <div class="ui-table-td">内容改变时触发</div>
                        <div class="ui-table-td">
                            <span class="ui-tag bg-blue-thin">Event</span>
                        </div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">focus</div>
                        <div class="ui-table-td">得焦点时触发</div>
                        <div class="ui-table-td">
                            <span class="ui-tag bg-blue-thin">Event</span>
                        </div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">blur</div>
                        <div class="ui-table-td">失去焦点时触发</div>
                        <div class="ui-table-td">
                            <span class="ui-tag bg-blue-thin">Event</span>
                        </div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">enter</div>
                        <div class="ui-table-td">按下回车时触发</div>
                        <div class="ui-table-td">
                            <span class="ui-tag bg-blue-thin">Event</span>
                        </div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">change</div>
                        <div class="ui-table-td">在失去焦点时触发</div>
                        <div class="ui-table-td">
                            <span class="ui-tag bg-blue-thin">Event</span>
                        </div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">clear</div>
                        <div class="ui-table-td">点击清空按钮时触发</div>
                        <div class="ui-table-td">
                            <span class="ui-tag bg-blue-thin">Event</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-6">
            <cu-title depth="2" title="组件方法" subTitle="Methods" isIcon/>
            <div class="ui-table table-border table-full mt-3 table-radius sm">
                <div class="ui-table-header">
                    <div class="ui-table-tr">
                        <div class="ui-table-th">方法名</div>
                        <div class="ui-table-th">说明</div>
                        <div class="ui-table-th">参数</div>
                    </div>
                </div>
                <div class="ui-table-body">
                    <div class="ui-table-tr">
                        <div class="ui-table-td">focus</div>
                        <div class="ui-table-td">设置焦点</div>
                        <div class="ui-table-td">-</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup>
import inputDocs from '@/markdown/input.md'
</script>