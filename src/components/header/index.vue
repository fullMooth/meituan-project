<template>
    <div class="headers">
        <el-row class="header-bg">
            <top-bar />
        </el-row>
        <el-row class="search-wrap">
            <search-bar />
        </el-row>
    </div>
</template>
<script>
import topBar from './topBar.vue'
import searchBar from './searchBar.vue'
export default {
    components:{
        topBar,
        searchBar
    }
}
</script>
<style lang="scss" type="text/css" >
    @import '../../assets/css/header/header.scss';
    .search-wrap{
        height:160px;
    }
</style>