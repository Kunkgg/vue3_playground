<template>
  <div class="dashboard-view">
    <!-- 顶部统计卡片区 -->
    <el-row :gutter="20" class="stats-row">
      <el-col :xs="24" :sm="12" :md="6" v-for="(item, index) in stats" :key="index">
        <el-card class="stat-card" shadow="hover">
          <div class="card-header">
            <span class="card-title">{{ item.title }}</span>
            <el-icon :size="20" class="card-icon" :style="{ color: item.color }">
              <component :is="item.icon" />
            </el-icon>
          </div>
          <div class="card-content">
            <div class="card-value">{{ item.value }}</div>
            <div class="card-subtext">{{ item.subtitle }}</div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 下方内容区 -->
    <el-row :gutter="20" class="main-content-row">
      <el-col :xs="24" :md="12">
        <el-card class="content-card" shadow="hover">
          <template #header>
            <div class="content-header">近期任务</div>
          </template>
          <ul class="content-list">
            <li v-for="(task, index) in tasks" :key="index" class="content-item">
              <el-tag :type="task.status">{{ task.name }}</el-tag>
              <span class="content-date">{{ task.date }}</span>
            </li>
          </ul>
        </el-card>
      </el-col>

      <el-col :xs="24" :md="12">
        <el-card class="content-card" shadow="hover">
          <template #header>
            <div class="content-header">系统状态</div>
          </template>
          <ul class="content-list">
            <li v-for="(sys, index) in systems" :key="index" class="content-item">
              <span>{{ sys.name }}</span>
              <el-progress :percentage="sys.usage" :stroke-width="10" :color="sys.color" />
            </li>
          </ul>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Cpu, Clock, Files, User } from '@element-plus/icons-vue'

// 顶部统计卡片数据
const stats = ref([
  { title: '活跃用户', value: '1,245', subtitle: '较上周 +12%', color: '#409EFF', icon: User },
  { title: '任务数', value: '326', subtitle: '进行中 58%', color: '#67C23A', icon: Files },
  { title: '平均延迟', value: '120ms', subtitle: '比昨日 -5ms', color: '#E6A23C', icon: Clock },
  { title: 'CPU 占用', value: '42%', subtitle: '低负载', color: '#F56C6C', icon: Cpu }
])

// 示例数据：任务与系统状态
const tasks = ref([
  { name: '数据清洗任务', status: 'success', date: '2025-11-05' },
  { name: '报表生成任务', status: 'info', date: '2025-11-04' },
  { name: '日志同步任务', status: 'warning', date: '2025-11-03' },
])

const systems = ref([
  { name: '数据库', usage: 70, color: '#409EFF' },
  { name: '缓存服务', usage: 50, color: '#67C23A' },
  { name: '文件存储', usage: 80, color: '#E6A23C' },
])
</script>

<style scoped>
/* 整体背景与布局 */
.dashboard-view {
  padding: 24px;
  background-color: #f5f7fa;
  min-height: 100vh;
  box-sizing: border-box;
}

/* 卡片整体风格 */
.stat-card {
  border-radius: 12px;
  padding: 12px 20px;
  transition: all 0.25s ease;
}
.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
}

/* 顶部卡片内部结构 */
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card-title {
  font-size: 14px;
  color: #606266;
}
.card-icon {
  opacity: 0.85;
}
.card-content {
  margin-top: 8px;
}
.card-value {
  font-size: 24px;
  font-weight: 600;
  color: #303133;
}
.card-subtext {
  font-size: 13px;
  color: #909399;
  margin-top: 4px;
}

/* 内容区卡片 */
.content-card {
  border-radius: 12px;
  transition: box-shadow 0.25s;
  margin-bottom: 20px;
}
.content-header {
  font-weight: 600;
  color: #303133;
}
.content-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.content-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #ebeef5;
}
.content-item:last-child {
  border-bottom: none;
}
.content-date {
  font-size: 13px;
  color: #909399;
}

/* 响应式优化 */
@media (max-width: 768px) {
  .card-value {
    font-size: 20px;
  }
}
</style>
