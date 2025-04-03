import { defineStore } from "pinia";
import defaultSettings from "@/config/defaultSettings";
// console.log('defaultSettings: ', defaultSettings);

export const useSystemStore = defineStore("system", {
  state: () => {
    return {
      ...defaultSettings,
      // primaryColor: defaultSettings.primaryColor,
      count: 1,
    };
  },
  getters: {
    getCount(store) {
      return store.count;
    },
  },
  actions: {
    changeCount(num) {
      this.count += num;
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
        // paths: ["count", "primaryColor"], // 在state定义的其他属性不会被缓存
      },
    ],
  },
});