import Vue from "vue";
import Vuex from 'vuex';
//需要使用插件一次
Vue.use(Vuex);
//引入小仓库
import mType from "./type";
import materials from "./materials";

//对外暴露store类的实例
export default new Vuex.Store({
    //实现vuex仓库模式开发存储数据
    modules: {
       type:mType,
       materials
    }
});