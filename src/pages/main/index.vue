<template>
    <div>
        <div style="width:70%;margin-top: 30px;margin-left: 180px;display: flex;justify-content: space-around;">
            <el-input v-model="input" placeholder="请输入材料名称" style="width:30%;"></el-input>
            <el-select v-model="value" placeholder="请选择材料类别" @change="searchByType(value)">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <el-button type="primary" @click="searchMate">搜材料</el-button>
        </div>
        <el-table :data="mateLook ? mateLook : mateList" border height="550" style="width:70%;margin:10px auto;">
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
            <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
                    <el-button @click="del(scope.row)" type="text" size="small">清空</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-button type="primary" icon="el-icon-plus" style="position: absolute;right: 230px;"
            @click="toAdd">材料入库</el-button>
        <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
            <span>你是否要清空该库？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="mateDelete">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { mapState } from "vuex";
import Vue from 'vue';
export default {
    methods: {
        // 修改
        handleClick(row) {
            this.$router.push({ path: '/edit', query: { metaDetail: row } })
        },
        // 添加
        toAdd() {
            this.$router.push('/edit')
        },
        // 获取材料信息
        getMateList() {
            this.$store.dispatch('getMateList')
        },
        // 搜索by材料名
        searchMate() {
            this.mateLook = this.searchList
        },
        // 搜索by类型
        searchByType(value) {
            this.mateLook = []
            for (let item of this.mateList) {
                if (item.type == value) {
                    this.mateLook.push(item)
                    return this.mateLook
                } else {
                    this.mateLook = []
                }

            }

        },
        // 清空
        del(row) {
            this.dialogVisible = true
            this.delRow = row
        },
        mateDelete() {
            this.$store.dispatch('delMate', this.delRow)
            this.dialogVisible = false
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => { });
        }
    },
    data() {
        return {
            // 看到的材料列表
            mateLook: this.mateList,
            //    材料类型
            options: [{
                value: '金属材料',
                label: '金属材料'
            }, {
                value: '无机物非金属材料',
                label: '无机物非金属材料'
            }, {
                value: '有机高分子材料',
                label: '有机高分子材料'
            }, {
                value: '复合材料',
                label: '复合材料'
            }],
            value: '',
            input: '',
            dialogVisible: false,
            delRow: {}
        }
    },
    mounted() {
        this.getMateList()
    },
    computed: {
        ...mapState({
            mateList: (state) => state.materials.mateList,
        }),
        searchList() {
            return this.mateList.filter((item) =>
                item.mName.includes(this.input)
            )
        },
    },

}
</script>

<style>

</style>