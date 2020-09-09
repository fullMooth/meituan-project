<template>
    <div class="page-goodlist">
        <div class="goods-inner">
            <el-row>
                <bread-crumbs />
            </el-row>
            <el-row class="product-wrap">
                <el-col :span="19">
                    <el-row>
                        <categroy />
                    </el-row>
                    <el-row>
                       <list />
                    </el-row>
                </el-col>
                <el-col :span="5">
                    <div class="map">
                        地图
                    </div>
                    <div class="guess-you-like">
                        右下
                    </div>
                </el-col>
            </el-row>
        </div>
        
    </div>
</template>
<script>
import breadCrumbs from '../components/products/breadcrumbs.vue';
import categroy from '../components/products/categroy.vue';
import list from '../components/products/list.vue';
export default {
    components:{
        breadCrumbs,
        categroy,
        list,
    }
    
}
</script>
<style lang="scss">

    .page-goodlist{
        background:#f8f8f8;
        .goods-inner{
            width: 1196.61px;
            // background: yellow;
            margin:0 auto;
            .crumbs{
                padding:25px 0;
            }
        }
    }
    @import '../assets/css/goodslist/categroy.scss';
</style>