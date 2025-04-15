<template>
  <div class="titlebar">
    <div>
      <img :src="icon" alt="" v-if="showTitleBarIcon">
      <span>{{ titleBarText }} - {{ metaTitle }}</span>
    </div>
    <SettingOutlined @click="showDrawer" />
  </div>
  <settings :open="open" @close="onClose" />
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { SettingOutlined } from '@ant-design/icons-vue';
import useStore from '@/store'
const { useSystemStore } = useStore();
const { titleBarText, showTitleBarIcon } = storeToRefs(useSystemStore);
import icon from '@resources/logo.png?asset';
import settings from '../settings/Index.vue';

const route = useRoute()
const metaTitle = ref(route.meta.title)
watch(
  () => route.meta.title,
  (newVal, oldVal) => {
    metaTitle.value = newVal
  }
)

const open = ref(false);
const showDrawer = () => {
  open.value = true;
};
const onClose = () => {
  open.value = false;
};
</script>

<style lang="less">
.titlebar {
  height: 35px;
  background: #23272e;
  color: white;
  font-size: 14px;
  padding-left: 12px;
  app-region: drag;
  -webkit-app-region: drag;
  display: flex;
  justify-content: space-between;
  padding-right: 138px;
  align-items: center;
  z-index: 99999;
  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    object-fit: contain;
  }
  .anticon {
    width: 45px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    app-region: no-drag;
    -webkit-app-region: no-drag;
    &:hover {
      background: #393D43;
    }
  }
}
</style>