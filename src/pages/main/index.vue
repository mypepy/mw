<template>
    <div>
        <div style="width:70%;margin-top: 30px;margin-left: 180px;display: flex;justify-content: space-around;">
            <el-input v-model="input" placeholder="请输入材料名称" style="width:30%;"></el-input>
            <el-select v-model="value" placeholder="请选择材料类别">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <el-button type="primary" @click="searchMate">搜材料</el-button>
        </div>
        <el-table :data="mateLook?mateLook:mateList" border height="550" style="width:70%;margin:10px auto;">
            <el-table-column prop="mid" label="材料编号" width="120">
            </el-table-column>
            <el-table-column prop="mName" label="材料名称" width="120">
            </el-table-column>
            <el-table-column prop="unit" label="单位" width="120">
            </el-table-column>
            <el-table-column prop="sum" label="库存总量" width="120">
            </el-table-column>
            <el-table-column prop="outSum" label="出库总量" width="120">
            </el-table-column>
            <el-table-column prop="type" label="材料分类" width="120">
            </el-table-column>
            <el-table-column prop="remarks" label="备注" width="120">
            </el-table-column>
            <el-table-column prop="name" label="创建时间" width="120">
            </el-table-column>
            <el-table-column prop="name" label="修改时间" width="120">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-button type="primary" icon="el-icon-plus" style="position: absolute;right: 230px;" @click="toAdd">材料入库</el-button>
    </div>
</template>

<script>
import {mapState } from "vuex";
export default {
    methods: {
        handleClick(row) {
            this.$router.push({path:'/edit',query:{metaDetail:row}})
        },
        toAdd(){
            this.$router.push('/edit')
        },
        getMateList(){
            this.$store.dispatch('getMateList')
        },
        searchMate(){
           this.mateLook=this.searchList
           console.log(this.searchList)
        }
    },
    data() {
        return {
            // 看到的材料列表
            mateLook:this.mateList,
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            value: '',
            input: '',
           
        }
    },
    mounted(){
        this.getMateList()
    },
    computed: {
    ...mapState({
        mateList: (state) => state.materials.mateList,
    }),
    searchList(){
       return this.mateList.filter((item)=>
         item.mName.includes(this.input)
       )
    }
  },
}
</script>

<style>

</style>