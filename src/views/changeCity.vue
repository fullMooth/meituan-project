<template>
    <div class="city-wrapper">
        <div class="page-changecity">
            <el-row>
                <city-sector />
            </el-row>
            <el-row>
                <hot-city title="热门城市" :hotlist="hotlist"/>
            </el-row>
            <el-row>
                <hot-city title="最近访问" :hotlist="hotlist"/>
            </el-row>
            <el-row>
                <first-letter />
            </el-row>
        </div>
    </div>
    
</template>
<script>
import hotCity from '../components/changeCity/hotCity';
import firstLetter from '../components/changeCity/firstLetter.vue';
import citySector from '../components/changeCity/citySector';
export default {
    components:{
        hotCity,
        firstLetter,
        citySector,
    },
    data(){
        return {
            hotlist:["北京","上海","广州","深圳","天津","西安","重庆","杭州","南京","武汉","成都"],
        }
    }
}
</script>
<style lang="scss">
    @import '../assets/css/changeCity/changeCity.scss';
</style>