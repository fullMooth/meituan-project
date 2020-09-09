<template>
    <el-container>
        <el-header height="">
            <my-header />
        </el-header>
        <router-view></router-view>
        <el-main>Main</el-main>
        <el-footer>
            <my-footer/>
        </el-footer>
    </el-container>
</template>
<script>
import myHeader from '../components/header/index.vue'
import myFooter from '../components/footer/index.vue'
export default {
    components:{
        myHeader,
        myFooter
    }
}
</script>
<style >
    @import url('../assets/css/main.css');
   
    .el-header{
        width:100%;
        padding:0;
    }
    .header-bg{
        background: #f8f8f8;
    }
</style>