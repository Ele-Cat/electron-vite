import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/logo.png?asset'
import defaultSettings from '../renderer/src/config/defaultSettings'
const {
  titleBarText,
  defaultWidth,
  defaultHeight,
  defaultMinWidth,
  defaultMinHeight,
  showTitleBar, 
  showMenuBar,
  resizable,
  movable,
  fullscreenable,
  alwaysOnTop,
  hasShadow,
  skipTaskbar,
} = defaultSettings

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    title: titleBarText,
    width: defaultWidth,
    height: defaultHeight,
    minWidth: defaultMinWidth,
    minHeight: defaultMinHeight,
    frame: showTitleBar, // 隐藏默认的窗口边框
    autoHideMenuBar: !showMenuBar,
    resizable: resizable, // 允许用户调整窗口大小
    movable: movable, // 允许用户拖动窗口
    fullscreenable: fullscreenable, // 允许用户全屏显示
    alwaysOnTop: alwaysOnTop, // 始终保持在其他窗口的顶部
    hasShadow: hasShadow, // 是否显示窗口阴影
    skipTaskbar: skipTaskbar, // 隐藏任务栏图标
    ...(process.platform !== 'darwin' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    },
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: 'rgba(0,0,0,0)', // 透明背景（仅 Windows）
      symbolColor: '#ffffff',   // 按钮颜色（仅 Windows）
      height: 35                // 控制按钮区域高度（跨平台）
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // IPC test
  ipcMain.on('ping', () => console.log('pong'))

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
