<script setup>
import { message } from 'ant-design-vue'
import Versions from './components/Versions.vue'

const ipcHandle = () => window.electron.ipcRenderer.send('ping')

const tip = () => {
  message.info('Hello, Ant Design Vue!')
}
</script>

<template>
  <div style="position: fixed;top: 0;left: 0;">
    <a-button type="primary" @click="tip">123</a-button>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/mine">Mine</router-link>
  </div>
  <router-view></router-view>
  
  <img alt="logo" class="logo" src="./assets/electron.svg" />
  <div class="creator">Powered by electron-vite</div>
  <div class="text">
    Build an Electron app with
    <span class="vue">Vue</span>
  </div>
  <p class="tip">Please try pressing <code>F12</code> to open the devTool</p>
  <div class="actions">
    <div class="action">
      <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">Documentation</a>
    </div>
    <div class="action">
      <a target="_blank" rel="noreferrer" @click="ipcHandle">Send IPC</a>
    </div>
  </div>
  <Versions />
</template>
