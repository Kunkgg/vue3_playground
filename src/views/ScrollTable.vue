<template>
  <div style="padding: 20px">
    <vxe-table
      ref="xTable"
      height="400"
      border
      :data="displayData"
      @scroll="handleScroll"
    >
      <vxe-column field="id" title="ID" width="80"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
    </vxe-table>

    <div v-if="loading" style="text-align:center; padding: 10px;">加载中...</div>
    <div v-if="finished" style="text-align:center; padding: 10px;">已经到底了</div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      allData: [],        // 全量数据（模拟 200 条）
      displayData: [],    // 渲染到表格的数据
      batchSize: 20,      // 每次加载条数
      loading: false,
      finished: false,
    };
  },

  created() {
    // 模拟后端返回 200 条数据
    const total = 200;
    this.allData = Array.from({ length: total }, (_, i) => ({
      id: i + 1,
      name: "Name " + (i + 1),
    }));

    // 默认加载第一批数据
    this.loadMore();
  },

  methods: {
    // 加载更多数据
    loadMore() {
      if (this.loading || this.finished) return;

      this.loading = true;

      setTimeout(() => {
        const start = this.displayData.length;
        const end = start + this.batchSize;

        const nextBatch = this.allData.slice(start, end);

        this.displayData.push(...nextBatch);

        this.loading = false;

        if (this.displayData.length >= this.allData.length) {
          this.finished = true;
        }
      }, 400);
    },

    // 当滚动时触发
    handleScroll({ scrollTop, scrollHeight, clientHeight }) {
      const distanceToBottom = scrollHeight - (scrollTop + clientHeight);

      // 距离底部小于 20px 时加载更多
      if (!this.loading && !this.finished && distanceToBottom < 20) {
        this.loadMore();
      }
    },
  },
}
</script>
