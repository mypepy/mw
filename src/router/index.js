// 配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

// 使用插件
Vue.use(VueRouter);
let router = new VueRouter({
    routes
})

export default router