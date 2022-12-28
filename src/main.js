import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入路由
import router from '@/router';
//引入仓库
import store from '@/store';
import App from './App.vue'
// 引入mock数据
import '@/mock/mockServe';
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
