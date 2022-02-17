import Vue from 'vue'
import App from './App.vue'
// 三级联动组件---全局组件
import TypeNav from '@/components/TypeNav'
// 第一个参数：全局组件的名字 第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav)

// 引入路由
import router from '@/router'
// 引入仓库
import store from '@/store'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  // 注册路由：底下的写法KV一致省略V
  // 注册路由信息：当这里书写 router 的时候，组件身上都拥有 $route $router 属性
  router,
  // 注册仓库：组件实例身上会多一个 $store 属性
  store
}).$mount('#app')
