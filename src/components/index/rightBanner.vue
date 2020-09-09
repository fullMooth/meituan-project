<template>
    <div class="right-banner">
        <dl class="r-banner-title clear-fixed">
            <dd>
                <a href="#">美团外卖</a>
                </dd>
            <dd>
                <a href="#">猫眼电影</a>
                </dd>
            <dd>
                <a href="#">美团酒店</a>
                </dd>
            <dd>
                <a href="#">民宿／公寓</a>
                </dd>
            <dd>
                <a href="#">商家入驻</a>
                </dd>
            <dd>
                <a href="#">美团公益</a>
            </dd>
        </dl>
        <div class="r-banner-middle clear-fixed">
            <div class="rbm-slider">
                <el-carousel class="slider-wrap">
                    <el-carousel-item v-for="item in imglist" :key="item.id">
                        <img :src="item.url" alt="">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="spane-life">
                <a href="#"></a>
            </div>
            <div class="login-reg">
                <div class="header-img">
                    <img src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt="图片">
                </div>
                <p class="hello">Hi! 你好</p>
                <a href="#" class="login">注册</a>
                <a href="#" class="login">立即登录</a>
            </div>
        </div>
        <div class="r-banner-bottom clear-fixed">
            <div class="into-hotel">
                <!-- 住酒店 -->
            </div>
            <div class="add-know">
                <!-- 涨姿势 -->
            </div>
            <div class="shop-owner">
                <!-- 我是商家 -->
            </div>
            <div class="m-app">
                <!-- 美团app -->
                <div class="er-code">
                    <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="下载APP">
                </div>
                <p class="m-phone">美团APP手机版</p>
                <p class="eat-play"><span>1元起</span> &nbsp;吃喝玩乐</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            imglist:[
                {
                    id:1,
                    url:'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg',
                },
                {
                    id:2,
                    url:'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg',
                },{
                    id:3,
                    url:'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg'
                },
                {
                    id:4,
                    url:'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg'
                },
                {
                    id:5,
                    url:'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png'
                }
            ]
        }
    }
}
</script>
<style lang="sass">
    @import '../../assets/css/index/banner.scss'
</style>