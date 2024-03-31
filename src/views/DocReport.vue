<template>
  <h1 class="title-center">Doc Report</h1>
  <div class="page-width">
    <el-header>
      <el-row :span="24" :gutter="20">
        <el-col :span="8">
          <el-select
            v-model="search_version"
            placeholder="请选择 Search Version"
          >
            <el-option
              v-for="item in search_version_options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-col>
        <el-col :span="8">
          <el-select v-model="group_name" placeholder="请选择 group_name">
            <el-option
              v-for="item in group_name_options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-col>
        <el-col :span="8">
          <el-select v-model="b_version" placeholder="请选择 b_version">
            <el-option
              v-for="item in b_version_options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-col>
      </el-row>
    </el-header>

    <el-main>
      <!-- 主任务信息 -->
      <el-row :span="24">
        <el-col :span="24">
          <h3>主任务信息</h3>
        </el-col>
        <el-col :span="6">
          <p>任务状态: {{ task.status }}</p>
        </el-col>
        <el-col :span="6">
          <p>创建人: {{ task.starter_user }}</p>
        </el-col>
        <el-col :span="6">
          <p>开始时间: {{ task.create_time }}</p>
        </el-col>
        <el-col :span="6">
          <p>结束时间: {{ task.end_time }}</p>
        </el-col>
      </el-row>
      <!-- 生成 DOC 报告按钮 -->
      <el-row>
          <el-button type="success" @click="refreshTaskInfo">刷新任务信息</el-button>
          <el-button type="primary" @click="generateDocReport" >生成报告</el-button>
          <el-button
            v-for="report in task.doc_reports"
            :key="report.file_name"
            :href="report.url"
            @click="open_url(report.url)"
          >
            {{ report.file_name }}
          </el-button>
      </el-row>

      <!-- 子任务信息 -->
      <el-row>
        <el-col :span="24">
          <h3>子任务信息</h3>
        </el-col>
        <el-col :span="24">
          <el-table :data="task.sub_tasks" border>
            <el-table-column prop="check_option" label="检查项" width="180" />
            <el-table-column prop="status" label="状态" width="180" />
            <el-table-column prop="create_time" label="创建时间" />
            <el-table-column prop="end_time" label="结束时间" />
          </el-table>
        </el-col>
      </el-row>

      <!-- 报告内容 -->
      <h3>代码质量</h3>
      <!-- 代码质量报告内容 -->
      <h3>可信构建</h3>
      <!-- 代码度量报告内容 -->
      <h3>代码度量</h3>
      <!-- 代码度量报告内容 -->
      <h3>生命周期检查</h3>
      <!-- 生命周期检查报告内容 -->
    </el-main>
  </div>
  <el-dialog title="生成报告" v-model="reportModalVisible">
    <el-form :model="reportForm" label-width="120px">
      <el-form-item label="报告生成时间">
        <el-date-picker
          v-model="reportForm.reportTime"
          type="date"
          placeholder="选择日期"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="仓库信息">
        <el-input
          v-model="reportForm.repository"
          placeholder="请输入仓库信息"
        ></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="confirmGenerateReport">确认</el-button>
      <el-button @click="reportModalVisible = false">取消</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      search_version_options: [
        {
          value: "23B",
          label: "23B",
        },
        {
          value: "24B",
          label: "24B",
        },
        {
          value: "25A",
          label: "25A",
        },
      ],
      search_version: "23B",
      group_name_options: [
        {
          value: "GROUP A",
          label: "GROUP A",
        },
        {
          value: "GROUP B",
          label: "GROUP B",
        },
      ],
      group_name: "GROUP A",
      b_version_options: [
        {
          value: "B033",
          label: "B033",
        },
        {
          value: "B032",
          label: "B032",
        },
        {
          value: "B031",
          label: "B031",
        },
      ],
      b_version: "B033",
      task: {
        // 主任务信息
        // 请根据接口返回的数据结构填写
        id: "main_task_id_1",
        status: "init",
        starter_user: "gk07",
        create_time: "2021-08-01 12:00:00",
        end_time: "2021-08-02 11:00:00",
        sub_tasks: [
          {
            id: "sub_task_id_1",
            check_option: "code_quality",
            status: "init",
            create_time: "2021-08-01 12:00:00",
            end_time: "2021-08-02 11:00:00",
          },
          {
            id: "sub_task_id_2",
            check_option: "code_metrics",
            status: "init",
            create_time: "2021-08-01 12:00:00",
            end_time: "2021-08-02 11:00:00",
          },
        ],
        doc_reports: [
          {
            file_name: "质量检查报告.docx",
            url: "https://pandas.pydata.org/pandas-docs/version/1.4.4/pandas.pdf",
          },
          {
            file_name: "安全检查报告.docx",
            url: "http://xxx/安全检查报告.docx",
          },
        ],
        // doc_reports: [],
      },
      reportModalVisible: false,
      reportForm: {
        reportTime: new Date(),
        repository: "",
      },
    };
  },
  methods: {
    open_url(url) {
      window.open(url);
    },
    refreshTaskInfo() {},
    generateDocReport() {
      this.reportModalVisible = true;
    },
    confirmGenerateReport() {
      // 发送 HTTP 请求生成报告
      // 使用 this.reportForm 中的数据
      // 发送请求成功后关闭 Modal
      this.reportModalVisible = false;
    },
  },
};
</script>
<style scoped>
.page-width {
  width: 80%;
  margin: 0 auto;
}
.title-center {
  text-align: center;
}
</style>
