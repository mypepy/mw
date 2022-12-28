import { reqMaterials,reqAddMaterials } from '@/api'
import Vue from 'vue';

const state = {
    mateList: [],
};
const mutations = {
    GETMATELIST(state, mateList) {
        state.mateList = mateList;
    },
    SEARCHMATE(state, searchList) {
        state.mateList = searchList
    },
    EDITMATE(state, editmate) {
        for (let item of state.mateList) {
            if (item.mid === editmate.mid) {
                Vue.delete(state.mateList, item)
                Vue.set(state.mateList, 0, editmate)
            }
            
        }
    },
    ADDMATE(state, addmate,commit) {
        Vue.set(state.mateList, '', addmate)
        
    },
};
const actions = {
    // 获取材料列表信息
    async getMateList({ commit }) {
        let result = await reqMaterials();
        if (result.code == 200) {
            commit('GETMATELIST', result.data)
        }
    },
    async addMaterials({disptch}){
        let result = await reqAddMaterials();
        console.log(result)
        // if (result.code == 200) {
        //     disptch('getMateList')
        // }
    }

};
const getters = {

};
export default {
    state,
    mutations,
    actions,
    getters
}