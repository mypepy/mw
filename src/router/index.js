// 配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

// 使用插件
Vue.use(VueRouter);
// 重写push防止反复跳转同一组件报错
// const routerPush = VueRouter.prototype.push
// VueRouter.prototype.push = function (location, onComplete, onAbort) {
//     return routerPush.call(this, location, onComplete, onAbort).catch(err => {
//         if (!/^NavigationDuplicated/.test(err)) {
//             console.log(err);
//         }
//     })
// }
let router = new VueRouter({
    routes,
    // 滚动行为
    scrollBehavior(to, from, savedPosition) {
        // 返回的这个y=0，代表滚动条在最上方
        return { y: 0 };
    },
})

export default router