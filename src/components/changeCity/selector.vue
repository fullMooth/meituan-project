<template>
    <div class="selector">
        <div class="choose-wrap">
            <span class="name">{{name}}</span>
            <i class="el-icon-caret-bottom"></i>
            <div class="itemlist" v-if="isShow">
                <div class="title">{{name}}</div>
                <div class="city-content">
                    <span v-for="(ele,index) in provinceList" :key="index">
                        {{ele}}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            provinceList:["北京","上海","广州","深圳","天津","西安","重庆","杭州","南京","武汉","成都"],
        }
    },
    props:["name","isShow"]
}
</script>
<style lang="scss">
    @import '../../assets/css/changeCity/selector.scss';
   /* .selector{
        display:inline-block;
        width:148px;
        height:38px;
        border:1px solid white;
        border-radius: 5px;
        line-height: 38px;
        padding: 0 10px;
        color:#666;
        font-size: 14px;
        position: relative;
        .name{
            position:absolute;
            left:10px;
        }
        i{
            position:absolute;
            right: 10px;
            top:50%;
            transform: translateY(-50%);
        }
        .itemlist{

            .city-content{
                background:white;
                height: 200px;
                min-width: 100px;
                writing-mode: vertical-lr;
                position: relative;
                z-index: 10;
                span{
                    display:inline-block;
                    width:100px;
                    height: 40px;
                    writing-mode: horizontal-tb;
                }
                &::after{
                    content:"";
                    display: block;
                    clear:both;
                }
            }
        }
    }*/
</style>