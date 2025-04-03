<template>
  Home
  <a-space>
    {{ count }}
    <a-button size="small" type="primary" @click="changeCount(1)">+1</a-button>
    <a-button size="small" type="primary" @click="changeCount(-1)">-1</a-button>
    <a-input size="small" v-model:value="count" />
    <a-button size="small" type="primary" @click="changeCountBy()">手动修改</a-button>
  </a-space>
  <p v-for="i in 50">  
    {{ i }}
  </p>
</template>

<script setup>
import useStore from "@/store";
const { useSystemStore } = useStore();
import { storeToRefs } from "pinia";
const { count } = storeToRefs(useSystemStore);
const { changeCount } = useSystemStore;

const changeCountBy = () => {
  count.value = 1232
}
</script>