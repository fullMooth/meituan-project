<template>
    <el-row class="topbar">
        <el-col :span="12">
            <geo />
        </el-col>
        <el-col :span="12">
            <user />
        </el-col>
    </el-row>
</template>
<script>
import geo from './geo.vue';
import user from './user.vue';
export default {
    components:{
        geo,
        user
    }
}
</script>