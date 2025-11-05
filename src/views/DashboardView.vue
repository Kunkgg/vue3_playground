<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="12">
          <el-form :inline="true">
            <el-form-item label="关注列表">
              <el-select
                v-model="selectedFollowers"
                placeholder="请选择关注列表"
              >
                <el-option
                  v-for="item in followersOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">刷新</el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="12" style="text-align: right">
          <el-form :inline="true">
            <el-form-item label="分组">
              <el-select v-model="selectedGroup" placeholder="请选择分组">
                <el-option
                  v-for="item in groupList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="子分组">
              <el-select v-model="selectedSubGroup" placeholder="请选择子分组">
                <el-option
                  v-for="item in subGroupList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item>
              <el-button type="primary">关注</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-row id="header-card-row" :gutter="20" style="margin-bottom: 20px">
        <el-col :span="8">
          <HeaderCard title="系统A" status="normal" />
        </el-col>
        <el-col :span="8">
          <HeaderCard title="系统B" status="abnormal" />
        </el-col>
        <el-col :span="8">
          <HeaderCard title="SSP" status="normal" />
        </el-col>
      </el-row>
      <el-row id="data-line-1">
        <MonitorPad>
          <MonitorGroup title="系统A 监控组">
            <Monitor title="CPU 使用率" :alertCount="2" />
            <Monitor title="内存使用率" :alertCount="0" />
            <Monitor title="磁盘空间" :alertCount="1" />
          </MonitorGroup>
          <MonitorGroup title="系统B 监控组">
            <Monitor title="网络流量" :alertCount="0" />
            <Monitor title="服务响应时间" :alertCount="3" />
            <Monitor title="错误率" :alertCount="0" />
          </MonitorGroup>
          <MonitorGroup title="SSP 监控组">
            <Monitor title="请求数" :alertCount="0" />
            <Monitor title="延迟" :alertCount="0" />
            <Monitor title="丢包率" :alertCount="1" />
          </MonitorGroup>
        </MonitorPad>
      </el-row>
      <el-row id="data-line-2">
        <MonitorPad>
            <MonitorGroup title="系统A 监控组">
                <Monitor title="服务状态" :alertCount="0" />
                <Monitor title="数据库连接数" :alertCount="2" />
                <Monitor title="缓存命中率" :alertCount="0" />
            </MonitorGroup>
            <MonitorGroup title="系统B 监控组">
                <Monitor title="API 调用次数" :alertCount="1" />
                <Monitor title="用户登录数" :alertCount="0" />
                <Monitor title="交易成功率" :alertCount="0" />
            </MonitorGroup>
            <MonitorGroup title="SSP 监控组">
                <Monitor title="广告请求数" :alertCount="0" />
                <Monitor title="填充率" :alertCount="0" />
                <Monitor title="收入统计" :alertCount="0" />
            </MonitorGroup>
        </MonitorPad>
        <MonitorPad>
            <MonitorGroup title="系统C 监控组">
                <Monitor title="CPU 使用率" :alertCount="0" />
                <Monitor title="内存使用率" :alertCount="1" />
                <Monitor title="磁盘空间" :alertCount="0" />
            </MonitorGroup>
            <MonitorGroup title="系统D 监控组">
                <Monitor title="网络流量" :alertCount="2" />
                <Monitor title="服务响应时间" :alertCount="0" />
                <Monitor title="错误率" :alertCount="0" />
            </MonitorGroup>
            <MonitorGroup title="系统E 监控组">
                <Monitor title="请求数" :alertCount="0" />
                <Monitor title="延迟" :alertCount="0" />
                <Monitor title="丢包率" :alertCount="3" />
            </MonitorGroup>
        </MonitorPad>
      </el-row>
      <el-row id="data-line-3">
        <MonitorPad>
            <MonitorGroup title="系统F 监控组">
                <Monitor title="服务状态" :alertCount="1" />
                <Monitor title="数据库连接数" :alertCount="0" />
                <Monitor title="缓存命中率" :alertCount="0" />
            </MonitorGroup>
            <MonitorGroup title="系统G 监控组">
                <Monitor title="API 调用次数" :alertCount="0" />
                <Monitor title="用户登录数" :alertCount="2" />
                <Monitor title="交易成功率" :alertCount="0" />
            </MonitorGroup>
            <MonitorGroup title="系统H 监控组">
                <Monitor title="广告请求数" :alertCount="0" />
                <Monitor title="填充率" :alertCount="1" />
                <Monitor title="收入统计" :alertCount="0" />
            </MonitorGroup>
        </MonitorPad>
      </el-row>
    </el-main>
  </el-container>
</template>
<script setup>
import { ref } from "vue";
import HeaderCard from "@/components/HeaderCard.vue";
import MonitorPad from "@/components/MonitorPad.vue";
import MonitorGroup from "@/components/MonitorGroup.vue";
import Monitor from "@/components/Monitor.vue";

const followersOptions = [
  { value: "systemA -> systemA", label: "systemA -> systemA" },
  { value: "systemA -> CRM", label: "systemA -> CRM" },
  { value: "systemA -> BSP", label: "systemA -> BSP" },
  { value: "SSP -> SSP", label: "SSP -> SSP" },
  { value: "systemB -> software", label: "systemB -> software" },
  { value: "systemB -> hardware", label: "systemB -> hardware" },
];
const groupList = [
  { value: "systemA", label: "systemA" },
  { value: "systemB", label: "systemB" },
  { value: "SSP", label: "SSP" },
];
const subGroupList = [
  { value: "systemA", label: "systemA" },
  { value: "CRM", label: "CRM" },
  { value: "BSP", label: "BSP" },
  { value: "software", label: "software" },
  { value: "hardware", label: "hardware" },
];

const selectedFollowers = ref("systemA -> systemA");
const selectedGroup = ref("systemA");
const selectedSubGroup = ref("systemA");

</script>
