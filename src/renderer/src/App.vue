<script setup>
import { message, theme } from 'ant-design-vue'
import { storeToRefs } from "pinia";
import useStore from '@/store'
const { useSystemStore } = useStore();
const { primaryColor } = storeToRefs(useSystemStore)
import TitleBar from '@/layouts/titleBar/Index.vue'

const tip = () => {
  message.info('Hello, Ant Design Vue!')
}
</script>

<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: primaryColor,
        algorithm: theme.compactAlgorithm,
      },
    }"
  >
    <TitleBar />
    <div class="main-box">
      <a-button type="primary" @click="tip">123</a-button>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/mine">Mine</router-link>
      <router-view></router-view>
    </div>
  </a-config-provider>
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}

.titlebar {
}

.main-box {
  overflow: auto;
  flex: 1;
}
</style>
