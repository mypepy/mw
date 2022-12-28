<template>
    <el-form ref="form" :model="form" label-width="80px" style="width:70%;margin-top: 30px;margin-left: 180px;">
        <el-form-item label="材料名称">
            <el-input v-model="form.mName"></el-input>
        </el-form-item>
        <el-form-item label="单位">
            <el-input v-model="form.unit"></el-input>
        </el-form-item>
        <el-form-item label="库存总量">
            <el-input v-model="form.sum" type="number"></el-input>
        </el-form-item>
        <el-form-item label="出库总量">
            <el-input v-model="form.outSum" type="number"></el-input>
        </el-form-item>
        <el-form-item label="备注">
            <el-input v-model="form.remarks"></el-input>
        </el-form-item>
        <el-form-item label="材料分类">
            <el-select v-model="form.type" placeholder="请选择材料类别">
                <el-option label="金属材料" value="金属材料"></el-option>
                <el-option label="无机物非金属材料" value="无机物非金属材料"></el-option>
                <el-option label="有机高分子材料" value="有机高分子材料"></el-option>
                <el-option label="复合材料" value="复合材料"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">保存</el-button>
            <el-button @click="toMain">取消</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    data() {
        return {
            form: this.$route.query.metaDetail || {}
        }
    },
    methods: {
        onSubmit() {
            if (this.$route.query.metaDetail) 
            {
                this.$store.dispatch('editMaterials', this.form)
            }
            else {
                this.$store.dispatch('addMaterials', this.form)
            }
            this.$router.push('/main')
        },
        toMain() {
            this.$router.push('/main')
        }
    }
}
</script>

<style>

</style>