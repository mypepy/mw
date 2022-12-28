import { reqMaterials,reqAddMaterials,reqEditMaterials,reqDelMaterials } from '@/api'

const state = {
    mateList: [],
};
const mutations = {
    GETMATELIST(state, mateList) {
        state.mateList = mateList;
    },
    SEARCHMATE(state, searchList) {
        state.mateList = searchList
    }
    
};
const actions = {
    // 获取材料列表信息
    async getMateList({ commit }) {
        let result = await reqMaterials();
        if (result.code == 200) {
            commit('GETMATELIST', result.data)
        }
    },
    // 材料入库
    async addMaterials({dispatch},mateDetail){
        let result = await reqAddMaterials(mateDetail);
        if (result.code == 200) {
           await dispatch('getMateList')
        }
    },
    // 材料信息修改
    async editMaterials({dispatch},mateDetail){
        let result = await reqEditMaterials(mateDetail);
        if (result.code == 200) {
           await dispatch('getMateList')
        }
    },
    // 清库
    async delMate({dispatch},mateDetail){
        let result = await reqDelMaterials(mateDetail);
        if (result.code == 200) {
           await dispatch('getMateList')
        }
    },

};
const getters = {

};
export default {
    state,
    mutations,
    actions,
    getters
}