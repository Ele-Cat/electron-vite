/**
 * 项目默认配置项
 * primaryColor - 默认主题色, 如果修改颜色不生效，请清理 localStorage
 * theme - sidebar theme ['dark', 'light'] 两种主题
 */
// TODO 整体样式设置

const defaultSettings = {
  defaultWidth: 900, // 默认宽度
  defaultHeight: 670, // 默认高度
  defaultMinWidth: 700, // 默认最小宽度
  defaultMinHeight: 500, // 默认最小高度
  showTitleBar: false, // 显示标题栏
  showTitleBarText: true, // 显示标题
  titleBarText: 'Electron Vite', // 标题
  showMenuBar: false, // 显示菜单栏
  resizable: true, // 是否可缩放
  movable: true, // 是否可移动
  fullscreenable: true, // 是否可全屏
  alwaysOnTop: false, // 是否置顶
  hasShadow: false, // 是否有阴影
  skipTaskbar: false, // 是否在任务栏显示
  primaryColor: '#3C8CE7', // primary color of ant design
  theme: 'light', // theme for system dark/light/auto
  hideFooter: false, // 隐藏底部
  // device: process.env.OS, // 设备类型Windows_NT, Linux, Darwin
  // production: process.env.NODE_ENV === 'production', // 是否是生产环境
}

export default defaultSettings
