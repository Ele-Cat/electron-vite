import { createRouter, createWebHistory } from 'vue-router';

// 导入组件（推荐使用懒加载）
const Home = () => import('../views/Home.vue');
const About = () => import('../views/About.vue');

// 定义路由规则
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: '首页' } // 路由元信息
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { title: '关于我们' }
  }
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(), // 使用 HTML5 History 模式
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return { ...savedPosition, behavior: 'smooth' }; // 恢复滚动位置并平滑滚动
    } else {
      return { top: 0, behavior: 'smooth' }; // 滚动到顶部并平滑滚动
    }
  }
});

// 全局路由守卫示例
router.beforeEach((to, from) => {
  document.title = to.meta.title || '默认标题'; // 动态设置页面标题
});

export default router;