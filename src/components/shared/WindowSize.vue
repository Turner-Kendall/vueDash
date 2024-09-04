<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'

const { width, height } = useWindowSize()
</script>

<template>
  <div class="d-flex flex-sm-column flex-nowrap align-items-center window-size">
    {{ width }} x {{ height }} px
  </div>
</template>

<style scoped>
.window-size{
  text-align: center;
  margin: 3rem auto;
  color: #7d7d7d;
  font-size: 13px;
}
.dark .window-size{
  color:#343434;
}
</style>

