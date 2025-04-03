<template>
  <div class="titlebar">
    <img :src="icon" alt="" v-if="showTitleBarIcon">
    <span>{{ titleBarText }}</span>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import useStore from '@/store'
const { useSystemStore } = useStore();
const { titleBarText } = storeToRefs(useSystemStore)
console.log('useSystemStore: ', useSystemStore);
const { showTitleBarIcon } = storeToRefs(useSystemStore)
import icon from '@resources/logo.png?asset'
</script>

<style lang="less" scoped>
.titlebar {
  height: 35px;
  background: #23272e;
  color: white;
  padding-left: 12px;
  app-region: drag;
  -webkit-app-region: drag;
  display: flex;
  align-items: center;
  img {
    width: 20px;
    height: 20px;
    margin-right: 12px;
  }
}
</style>