<template>
  <a-form :model="formState" :label-col="labelCol">
    <a-form-item label="暗黑模式">
      <a-radio-group v-model:value="formState.darkMode" button-style="solid">
        <a-radio-button value="light">明亮</a-radio-button>
        <a-radio-button value="dark">暗黑</a-radio-button>
        <a-radio-button value="system">跟随系统</a-radio-button>
      </a-radio-group>
    </a-form-item>
  </a-form>
</template>

<script setup>
import { reactive } from 'vue';
const formState = reactive({
  darkMode: 'light',
});
const labelCol = {
  style: {
    width: '80px',
  },
};
</script>