// MonitorPad 使用 flex 布局将多个 MonitorGroup 组件横向排列, 每个 MonitorGroup 组件之间有一定的间距, 每个 MonitorGroup 组件的宽度自适应屏幕宽度, 可以通过 flex 设置在一行中的宽度占比
// MonitorPad 的 slot 用于插入多个 MonitorGroup 组件
<template>
    <el-card>
        <template #header>
            <div class="monitor-pad-header">
                监控面板
            </div>
        </template>
        <div class="monitor-pad-content">
            <slot></slot>
        </div>
    </el-card>
</template>

<style scoped>
.monitor-pad-header {
    font-weight: bold;
    font-size: 16px;
    text-align: center;
}
.monitor-pad-content {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    padding: 10px 0;
    gap: 20px;
    flex-wrap: wrap;
}
</style>
