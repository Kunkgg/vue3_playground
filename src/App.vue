<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <RouterLink to="/">
    <button>Go to Home</button>
  </RouterLink>

  <RouterLink to="/doc-report">
    <button>Doc Report</button>
  </RouterLink>  

  <RouterLink to="/dashboard">
    <button>Dashboard</button>
  </RouterLink>  

  <RouterLink to="/gpt-dashboard">
    <button>GPT-Dashboard</button>
  </RouterLink>  

  <RouterLink to="/scroll-table">
    <button>Scroll Table</button>
  </RouterLink>  

  <RouterView />
</template>

<style scoped>
</style>
