<template>
    <div class="crumbs">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">{{ $store.state.position }}美团</el-breadcrumb-item>
            <el-breadcrumb-item>{{$store.state.position}}{{$route.params.name}}</el-breadcrumb-item>
            <!-- 通过路由参数获取数据 -->
        </el-breadcrumb>
    </div>
</template>
<script>
export default {
    // props:[]
    
}
</script>