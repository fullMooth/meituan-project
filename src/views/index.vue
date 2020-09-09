<template>
   <div class="index-page">
       <el-row class="banner">
           <el-col :span="5">
               <my-menu />
           </el-col>
           <el-col :span="19">
               <right-banner />
           </el-col>
       </el-row >
       <el-row class="cat-movie">
           猫眼电影
       </el-row>
       <el-row class="suggest">
           <suggest />
       </el-row>
       <el-row class="guess-like">
           猜你喜欢
       </el-row>
   </div>
</template>
<script>
import myMenu from '../components/index/menu.vue';
import rightBanner from '../components/index/rightBanner.vue';
import suggest from '../components/index/suggest.vue';

export default {
    components:{
        myMenu,
        rightBanner,
        suggest,
    }
}
</script>
<style lang="scss" >
    @import '../assets/css/index/index.scss'
</style>