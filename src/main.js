import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/theme/index.css'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';
//引入nprogress进度条
import NProgress from 'nprogress'
//引入nprogress进度条的样式
import 'nprogress/nprogress.css'
// import './utils/hotcss.js'


Vue.use(ElementUI)
Vue.config.productionTip = false

//引入mock
require('@/mock.js')
/**
 * 给router配置导航守卫
 * 在用户未登录之前，将跳转至登录页面
 */
router.beforeEach((to, from, next) => {
  //	开启进度条
  NProgress.start()
  document.title = `${to.meta.title}`;
  console.log(localStorage.getItem('username') === null)
  if (to.name !== 'login' && localStorage.getItem('username') === null) {
    next('/login')
  }
  else next();
})

router.afterEach(() => {
  //	关闭进度条
  NProgress.done()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
