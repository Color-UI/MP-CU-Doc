<template>
    <div class="cu-docs-view">
        <cu-title depth="1" title="按钮" subTitle="button" isIcon/>
        <div class="pb-3">最常用的按钮。 </div>

        <button-docs/>

        <div class="mt-6">
            <cu-title depth="2" title="组件参数" subTitle="props" isIcon/>
            <div class="pb-3">
                <span>按钮也支持通过class，自行实现，添加 </span>
                <span class="ui-tag bg-blue-thin">.ui-btn</span>
                <span> 样式后，即可使用以下相关的class方式 </span>
            </div>
            <div class="ui-table table-border table-full mt-3 table-radius sm">
                <div class="ui-table-header">
                    <div class="ui-table-tr">
                        <div class="ui-table-th">属性名</div>
                        <div class="ui-table-th">类型</div>
                        <div class="ui-table-th">默认值</div>
                        <div class="ui-table-th">可选值</div>
                        <div class="ui-table-th">对应class</div>
                        <div class="ui-table-th">说明</div>
                    </div>
                </div>
                <div class="ui-table-body">
                    <div class="ui-table-tr">
                        <div class="ui-table-td">type</div>
                        <div class="ui-table-td">String</div>
                        <div class="ui-table-td">default</div>
                        <div class="ui-table-td">default,primary,info,success,warning,error,text,custom</div>
                        <div class="ui-table-td">
                            <span>对应 背景里的 </span>
                            <span class="ui-tag bg-blue-thin">.bg-{color}</span>
                        </div>
                        <div class="ui-table-td">按钮类型</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">thin</div>
                        <div class="ui-table-td">Boolean</div>
                        <div class="ui-table-td">false</div>
                        <div class="ui-table-td">false,true</div>
                        <div class="ui-table-td">
                            <span>对应 背景 里的 淡色背景 </span>
                            <span class="ui-tag bg-blue-thin">.bg-{color}-thin</span>
                        </div>
                        <div class="ui-table-td">是否开启浅（淡）色背景</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">gradient</div>
                        <div class="ui-table-td">Boolean</div>
                        <div class="ui-table-td">false</div>
                        <div class="ui-table-td">false,true</div>
                        <div class="ui-table-td">
                            <span>对应 背景 里的 特殊的渐变背景色 </span>
                            <span class="ui-tag bg-blue-thin">.bg-{color}-gradient</span>
                        </div>
                        <div class="ui-table-td">是否开启渐变背景</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">light</div>
                        <div class="ui-table-td">Boolean</div>
                        <div class="ui-table-td">false</div>
                        <div class="ui-table-td">false,true</div>
                        <div class="ui-table-td">
                            <span>对应 背景 里的 高亮色 </span>
                            <span class="ui-tag bg-blue-thin">.bg-{color}-light</span>
                        </div>
                        <div class="ui-table-td">是否开启浅色渐变</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">size</div>
                        <div class="ui-table-td">String</div>
                        <div class="ui-table-td">df</div>
                        <div class="ui-table-td">sm,df,lg,xl</div>
                        <div class="ui-table-td">
                            <span class="ui-tag bg-blue-thin">.sm</span>
                            <span class="ui-tag bg-blue-thin">.df</span>
                            <span class="ui-tag bg-blue-thin">.lg</span>
                            <span class="ui-tag bg-blue-thin">.xl</span>
                        </div>
                        <div class="ui-table-td">按钮尺寸</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">round</div>
                        <div class="ui-table-td">Boolean</div>
                        <div class="ui-table-td">false</div>
                        <div class="ui-table-td">false,true</div>
                        <div class="ui-table-td">
                            <span class="ui-tag bg-blue-thin">.round</span>
                        </div>
                        <div class="ui-table-td">是否开启圆角</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">border</div>
                        <div class="ui-table-td">Boolean / String</div>
                        <div class="ui-table-td">false</div>
                        <div class="ui-table-td">false,true,s,ss</div>
                        <div class="ui-table-td">
                            <span class="ui-tag bg-blue-thin">.border</span>
                            <span class="ui-tag bg-blue-thin">.borders</span>
                            <span class="ui-tag bg-blue-thin">.borderss</span>
                        </div>
                        <div class="ui-table-td">是否开启实线边框</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">dashed</div>
                        <div class="ui-table-td">Boolean</div>
                        <div class="ui-table-td">false</div>
                        <div class="ui-table-td">false,true</div>
                        <div class="ui-table-td">
                            <span class="ui-tag bg-blue-thin">.dashed</span>
                        </div>
                        <div class="ui-table-td">是否开启虚线边框</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">icon</div>
                        <div class="ui-table-td">String</div>
                        <div class="ui-table-td">-</div>
                        <div class="ui-table-td">字体图标</div>
                        <div class="ui-table-td">-</div>
                        <div class="ui-table-td">对应字体图标库的名称</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">iconRight</div>
                        <div class="ui-table-td">Boolean</div>
                        <div class="ui-table-td">false</div>
                        <div class="ui-table-td">false,true</div>
                        <div class="ui-table-td">
                            <span class="ui-tag bg-blue-thin">.icon-left</span>
                            <span class="ui-tag bg-blue-thin">.icon-right</span>
                        </div>
                        <div class="ui-table-td">图标是否在右边</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">disabled</div>
                        <div class="ui-table-td">Boolean</div>
                        <div class="ui-table-td">false</div>
                        <div class="ui-table-td">false,true</div>
                        <div class="ui-table-td">原生属性</div>
                        <div class="ui-table-td">是否禁用</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">block</div>
                        <div class="ui-table-td">Boolean</div>
                        <div class="ui-table-td">false</div>
                        <div class="ui-table-td">false,true</div>
                        <div class="ui-table-td">
                            <span class="ui-tag bg-blue-thin">.block</span>
                        </div>
                        <div class="ui-table-td">是否启用块状</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">loading</div>
                        <div class="ui-table-td">Boolean</div>
                        <div class="ui-table-td">false</div>
                        <div class="ui-table-td">false,true</div>
                        <div class="ui-table-td">-</div>
                        <div class="ui-table-td">是否启用加载状态</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">shadow</div>
                        <div class="ui-table-td">Boolean / String</div>
                        <div class="ui-table-td">false</div>
                        <div class="ui-table-td">false,true,df,sm,lg</div>
                        <div class="ui-table-td">
                            <span class="ui-tag bg-blue-thin">.shadow</span>
                            <span class="ui-tag bg-blue-thin">.shadow-sm</span>
                            <span class="ui-tag bg-blue-thin">.shadow-lg</span>
                        </div>
                        <div class="ui-table-td">是否启用阴影</div>
                    </div>
                    <div class="ui-table-tr">
                        <div class="ui-table-td">bgShadow</div>
                        <div class="ui-table-td">Boolean</div>
                        <div class="ui-table-td">false</div>
                        <div class="ui-table-td">false,true</div>
                        <div class="ui-table-td">
                            <span class="ui-tag bg-blue-thin">.shadow-{颜色名称}</span>
                        </div>
                        <div class="ui-table-td">是否启用背景色阴影</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-6">
            <cu-title depth="2" title="事件" subTitle="Emit" isIcon/>
            <div class="pb-3">按钮的事件为原生事件，参考 vue 和 HTML5 的按钮事件即可</div>
        </div>

    </div>
</template>

<script lang="ts" setup>
import buttonDocs from '@/markdown/button.md'

</script>