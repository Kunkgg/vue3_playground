// 将多个 Monitor 组件组合在一起，形成一个监控组, 每个 MonitorGroup 由一个 el-card 组件表示，包含标题和多个 Monitor 组件
// default slots 用于插入 Monitor 组件
// MonitorGroup 的标题通过 title 属性传入
// Monitor 组件通过 default slots 传入
// MonitorGroup 组件的样式通过 scoped style 定义
// MonitorGroup 的 el-card 组件的 header 部分用于显示标题
// MonitorGroup 的 el-card 组件的 content 部分用于显示 Monitor 组件, 多个 Monitor 组件横向排列，使用 flex 布局
// MonitorGroup 是 MonitorPad 的子组件，用于在 MonitorPad 中显示一组监控器, MonitorPad 组件会包含多个 MonitorGroup 组件
// MonitorPad 使用 flex 布局将多个 MonitorGroup 组件横向排列, 每个 MonitorGroup 组件之间有一定的间距, 每个 MonitorGroup 组件的宽度自适应屏幕宽度, 可以通过 flex 设置在一行中的宽度占比
<template>
  <el-card class="monitor-group-card">
    <template #header>
      <div class="monitor-group-header">
        {{ title }}
      </div>
    </template>
    <div class="monitor-group-content">
      <slot></slot>
    </div>
  </el-card>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  title: {
    type: String,
    required: true
  }
});

</script>
<style scoped>
.monitor-group-card ::v-deep(.el-card__header) {
  border-bottom: none;
}
.monitor-group-card {
    width: 100%;
    margin-bottom: 20px;
}
.monitor-group-header {
    font-weight: bold;
    font-size: 16px;
    text-align: center;
}
.monitor-group-content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
}
</style>


