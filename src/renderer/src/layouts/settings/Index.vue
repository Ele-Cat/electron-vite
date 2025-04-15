<template>
  <a-drawer :width="500" title="设置" :open="open" :closable="false" rootClassName="settings-drawer">
    <template #footer>
      <a-button style="margin-right: 8px" @click="onClose">关闭</a-button>
      <a-button type="primary" @click="onClose">保存</a-button>
    </template>
    <a-tabs
      v-model:activeKey="activeKey"
      tab-position="left"
      size="small"
      :style="{ height: 'calc(100vh - 176px)' }"
      @tabScroll="callback"
    >
      <a-tab-pane :key="1" tab="外观设置">
        <Appearance />
      </a-tab-pane>
    </a-tabs>
  </a-drawer>
</template>

<script setup>
import { ref } from "vue";
import Appearance from "./Appearance.vue";
const props = defineProps({
  open: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits()

const onClose = () => {
  emit('close')
}
const activeKey = ref(1);
const callback = val => {
  console.log(val);
};
</script>

<style lang="less">
.settings-drawer {
  .ant-drawer-content-wrapper {
    top: 35px !important;
    .ant-drawer-header {
      padding: 8px 24px;
    }
    .ant-drawer-footer {
      display: flex;
      justify-content: flex-end;
    }
  }
  .ant-tabs-content-holder {
    overflow: auto; 
  }
}
</style>