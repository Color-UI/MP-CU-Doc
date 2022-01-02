<div class="mp-cu-doc-theme-content">

# 边框 border

ColorUI设定了类名来控制边框，部分组件也有对应参数来控制边框，实际上也是通过类名来控制。

>为达到高分屏更细的边框，ColorUI采用的是伪元素定位的方案。有时候没有显示边框，请检查块的定位以及溢出情况。


## 普通边框

`.border/.border-{direction}`

<div class="radius text-center" style="display: flex; margin: -10px; width: 100%;">
    <div class="p-3" style="width: 45%;">
        <div class="border p-3">四周全边框</div>
    </div>
    <div class="p-3" style="width: 45%;">
        <div class="border-top p-3">顶部边框</div>
    </div>
    <div class="p-3" style="width: 45%;">
        <div class="border-right p-3">右边边框</div>
    </div>
    <div class="p-3" style="width: 45%;">
        <div class="border-bottom p-3">底部边框</div>
    </div>
    <div class="p-3" style="width: 45%;">
        <div class="border-left p-3">左边边框</div>
    </div>
</div>


## 粗边框

`.borders/.borders-{direction}`

<div class="radius text-center" style="display: flex; margin: -10px; width: 100%;">
    <div class="p-3" style="width: 45%;">
        <div class="borders p-3">四周全粗边框</div>
    </div>
    <div class="p-3" style="width: 45%;">
        <div class="borders-top p-3">顶部粗边框</div>
    </div>
    <div class="p-3" style="width: 45%;">
        <div class="borders-right p-3">右边粗边框</div>
    </div>
    <div class="p-3" style="width: 45%;">
        <div class="borders-bottom p-3">底部粗边框</div>
    </div>
    <div class="p-3" style="width: 45%;">
        <div class="borders-left p-3">左边粗边框</div>
    </div>
</div>


## 虚线边框

`.dashed/.dashed-{direction}`

<div class="radius text-center" style="display: flex; margin: -10px; width: 100%;">
    <div class="p-3" style="width: 45%;">
        <div class="dashed p-3">四周全虚线边框</div>
    </div>
    <div class="p-3" style="width: 45%;">
        <div class="dashed-top p-3">顶部虚线边框</div>
    </div>
    <div class="p-3" style="width: 45%;">
        <div class="dashed-right p-3">右边虚线边框</div>
    </div>
    <div class="p-3" style="width: 45%;">
        <div class="dashed-bottom p-3">底部虚线边框</div>
    </div>
    <div class="p-3" style="width: 45%;">
        <div class="dashed-left p-3">左边虚线边框</div>
    </div>
</div>


## 粗虚线边框

`.dasheds/.dasheds-{direction}`

<div class="radius text-center" style="display: flex; margin: -10px; width: 100%;">
    <div class="p-3" style="width: 45%;">
        <div class="dasheds p-3">四周全粗虚线边框</div>
    </div>
    <div class="p-3" style="width: 45%;">
        <div class="dasheds-top p-3">顶部粗虚线边框</div>
    </div>
    <div class="p-3" style="width: 45%;">
        <div class="dasheds-right p-3">右边粗虚线边框</div>
    </div>
    <div class="p-3" style="width: 45%;">
        <div class="dasheds-bottom p-3">底部粗虚线边框</div>
    </div>
    <div class="p-3" style="width: 45%;">
        <div class="dasheds-left p-3">左边粗虚线边框</div>
    </div>
</div>

## 边框颜色

`.border.border-{color}` `.borders.border-{color}` `.dashed.border-{color}` `.dasheds.border-{color}`

<div class="radius text-center" style="display: flex; margin: -10px; width: 100%;">
    <div class="p-3" style="width: 45%;">
        <div class="border border-red p-3">红色边框</div>
    </div>
    <div class="p-3" style="width: 45%;">
        <div class="borders border-blue p-3">蓝色边框</div>
    </div>
    <div class="p-3" style="width: 45%;">
        <div class="dasheds border-orange p-3">橙色虚线边框</div>
    </div>
    <div class="p-3" style="width: 45%;">
        <div class="borders main-a-border p-3">主颜色边框</div>
    </div>
</div>


## 动感边框

`.{border}-shine` `.dasheds-shine` `.dashed-shine.border-blue`

<div class="radius text-center" style="display: flex; margin: -10px; width: 100%;">
    <div class="p-3" style="width: 45%;">
        <div class="dasheds-shine p-3">粗虚线边框动画</div>
    </div>
    <div class="p-3" style="width: 45%;">
        <div class="dashed-shine border-blue p-3">蓝色虚线边框动画</div>
    </div>
</div>

</div>