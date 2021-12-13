<template>
    <div class="cu-docs-view">
        <cu-title depth="1" title="标题" subTitle="Title" isIcon/>
        <div class="pb-3">标题组件可以快速构建一个等级标题。包含多种样式。 </div>

        <title-docs/>
        
        <div class="mt-6">
            <cu-title depth="2" title="参数说明" isIcon/>
            <div class="ui-table table-border table-full mt-3 table-radius sm">
                <div class="ui-table-header">
                    <div class="ui-table-tr">
                        <div class="ui-table-th">属性名</div>
                        <div class="ui-table-th">类型</div>
                        <div class="ui-table-th">默认值</div>
                        <div class="ui-table-th">说明</div>
                    </div>
                </div>
                <div class="ui-table-body">
                    <div class="ui-table-tr">
                        <div class="ui-table-td">depth</div>
                        <div class="ui-table-td">Number</div>
                        <div class="ui-table-td">0</div>
                        <div class="ui-table-td">标题等级，1 ~ 6 不同等级文字和边距也不一样，对应着HTML的 h标签</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">title</div>
                        <div class="ui-table-td">String</div>
                        <div class="ui-table-td">-</div>
                        <div class="ui-table-td">标题文字</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">subTitle</div>
                        <div class="ui-table-td">String</div>
                        <div class="ui-table-td">-</div>
                        <div class="ui-table-td">辅助文字，首字母会自动大写</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">text</div>
                        <div class="ui-table-td">String</div>
                        <div class="ui-table-td">text-black</div>
                        <div class="ui-table-td">标题文字颜色</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">desc</div>
                        <div class="ui-table-td">String</div>
                        <div class="ui-table-td">text-dark-8</div>
                        <div class="ui-table-td">辅助文字颜色</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">isIcon</div>
                        <div class="ui-table-td">Boolean</div>
                        <div class="ui-table-td">false</div>
                        <div class="ui-table-td">是否显示前缀图标</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">hasDot</div>
                        <div class="ui-table-td">Boolean</div>
                        <div class="ui-table-td">false</div>
                        <div class="ui-table-td">是否显示圆点</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">hasLine</div>
                        <div class="ui-table-td">Boolean</div>
                        <div class="ui-table-td">false</div>
                        <div class="ui-table-td">是否显示下划线</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">tpl</div>
                        <div class="ui-table-td">String</div>
                        <div class="ui-table-td">default</div>
                        <div class="ui-table-td">样式：default / stack / center-column</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">align</div>
                        <div class="ui-table-td">String</div>
                        <div class="ui-table-td">left</div>
                        <div class="ui-table-td">对齐方式：left / center / right</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">show</div>
                        <div class="ui-table-td">Boolean</div>
                        <div class="ui-table-td">false</div>
                        <div class="ui-table-td">显示与隐藏</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">bg</div>
                        <div class="ui-table-td">String</div>
                        <div class="ui-table-td">bg-none</div>
                        <div class="ui-table-td">背景颜色</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-6">
            <cu-title depth="2" title="插槽" subTitle="slot" isIcon/>
            <div class="ui-table table-border table-full mt-3 table-radius sm">
                <div class="ui-table-header">
                    <div class="ui-table-tr">
                        <div class="ui-table-th">属性名</div>
                        <div class="ui-table-th">说明</div>
                    </div>
                </div>
                <div class="ui-table-body">
                    <div class="ui-table-tr">
                        <div class="ui-table-td">无</div>
                        <div class="ui-table-td">标题内容</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">more</div>
                        <div class="ui-table-td">更多内容</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">icon</div>
                        <div class="ui-table-td">图标内容</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup>
import titleDocs from '@/markdown/title.md'

</script>