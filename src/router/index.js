/**
 * 封装路由相关模块，
 * 若项目中涉及的路由较为复杂，则可将相关路由模块写在一个文件中，然后向外暴露接口，引入到该index文件中
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import { Form } from 'element-ui'


Vue.use(VueRouter)
//在打包过程中每一个组件都会打包成一个js文件，如果不使用使用/* webpackChunkName: "home" */
//在打包的时候就会生成0.js,1.js等等，使用了之后就会打包成home.js
// 导入 Login 组件（注意，不要添加 .vue 后缀）
//这是路由的异步加载，！important,这是优化项目必须的

//引入home组件
const Home = () => import(/* webpackChunkName: "home" */ '@/layouts/Home/Index')
const Login =  () => import(/* webpackChunkName: "login" */ '@/views/login/Index')
const Table = () => import(/* webpackChunkName: "table" */ '@/views/Table/Index')
const userForm = () => import(/* webpackChunkName: "form" */ '@/views/Form/Index')

const affiliate = () => import(/* webpackChunkName: "affiliate" */ '@/views/Staff/Affiliate/Index')



  const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {title: '首页'},
    children: [
      {
        path: 'table',
        name: 'table',
        component: Table,
        meta: { title: '表格'}
      },
      {
        path: 'form',
        name: 'form',
        component: userForm,
        meta: {title: '表单'}
      },
      {
        path: 'affiliate',
        name: 'affiliate',
        component: affiliate,
        meta: {title: '挂靠请求'}
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login,
    meta: {title: '登录'}
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
