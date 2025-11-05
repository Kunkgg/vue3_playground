<template>
    <el-card class="card-box">
        <template #header>
            <div class="card-header">
                {{ title }}
            </div>
        </template>
        <div class="card-content">
            <span :class="statusClass">{{ statusText }}</span>
        </div>
    </el-card>
</template>
<script setup>
import { computed } from "vue"; 
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "normal"
    }
});

const statusText = computed(() => {
    return props.status === "normal" ? "正常" : "异常";
});
const statusClass = computed(() => {
    return props.status === "normal" ? "status-normal" : "status-abnormal";
});
</script>
<style scoped>
.card-box ::v-deep(.el-card__header) {
  border-bottom: none;
}
.card-box {
    width: 100%;
    margin-bottom: 20px;
}
.card-header {
    font-weight: bold;
    font-size: 16px;
    text-align: center;
}
.card-content {
    font-size: 14px;
    text-align: center;
    font-weight: bold;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.status-normal {
    color: green;
}
.status-abnormal {
    color: red;
}
</style>