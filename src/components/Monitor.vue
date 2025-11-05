// 用一个 el-card 来展示监控器的标题和告警数量
<template>
  <el-card class="monitor-card">
    <template #header>
      <div class="monitor-header">
        {{ title }}
      </div>
    </template>
    <div class="monitor-content">
      <span :class="alertClass">{{ alertText }}</span>
    </div>
  </el-card>
</template>

<script setup>
import { computed } from "vue";
import { defineProps } from "vue";
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  alertCount: {
    type: Number,
    default: 0
  }
});
const alertText = computed(() => {
  return props.alertCount > 0 ? `告警数量: ${props.alertCount}` : "无告警";
});

</script>
<style scoped>
.monitor-card ::v-deep(.el-card__header) {
  border-bottom: none;
}
.monitor-card {
    width: 100%;
    margin-bottom: 20px;
}
.monitor-header {
    font-weight: bold;
    font-size: 16px;
    text-align: center;
}
.monitor-content {
    font-size: 14px;
    text-align: center;
    font-weight: bold;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.alert-normal {
    color: green;
}
.alert-warning {
    color: red;
}
</style>