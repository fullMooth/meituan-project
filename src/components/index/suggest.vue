<template>
    <div class="s-container">
        <dl class="s-title clear-fixed" @mouseover="handleSelect">
            <dt>推荐民宿</dt>
            <dd class="local active">天津</dd>
            <dd class="local">济南</dd>
            <dd class="local">大连</dd>
            <dd class="local">太原</dd>
            <dd class="local">石家庄</dd>
            <dd class="local">秦皇岛</dd>
            <dd class="local">呼和浩特</dd>
            <dd class="local">潍坊</dd>
            <dd class="local">唐山</dd>
            <dd class="local">泰安</dd>
            <dd class="all">全部 <i class="el-icon-arrow-right"></i></dd>
        </dl>
        <ul class="s-box">
            <!-- <li>
                <div class="pic">
                    <img src="" alt="">
                </div>
                <div class="title">
                    <a href="#">临近远洋城唐山学院唐山师范学院清新风</a>
                </div>
                <p class="subtitle"><a href="#">整套1居室·可住2人 |</a></p>
                <p class="price"><span>￥</span><span class="money">135</span></p>
            </li> -->
             <li v-for="(item,index) in suggestList" :key="index">
                 <a href="#">
                     <div class="pic">
                        <img :src="item.imgurl" alt="">
                    </div>
                    <div class="title">
                        {{item.title}}
                    </div>
                    <p class="subtitle">{{item.subtitle}}</p>
                    <p class="price"><span>￥</span><span class="money">{{item.price}}</span></p>
                 </a>
                
            </li>
        </ul>

    </div>
</template>
<script>
export default {
    data(){
        return {
            suggestTitleList:[

            ],
            suggestList: [
                {
                    imgurl:'http://p0.meituan.net/iphoenix/27753e3d7bf3a88b6e7bbb98918da22e71486.jpg@740w_416h_1e_1c',
                    title:'【夏日微风】天津站·远洋国际地铁站',
                    subtitle:'天津站后广场',
                    price:145
                },
                {
                    imgurl:'https://img.meituan.net/phoenix/017dc66654297c6f3d5fa73bf90b1e79202644.jpg@740w_416h_1e_1c',
                    title:'都市馨家公寓 温馨大床房 小吃一条街/高尔夫球场/外滩/地铁站',
                    subtitle:'开发区一二三大街',
                    price:135
                },
                {
                    imgurl:'https://img.meituan.net/phoenix/bfdb409b8199c4b9d1450498eb2749e91911475.jpg@740w_416h_1e_1c',
                    title:'【瘾宿·Hostel】之 夜太美（于家堡滨海站高铁站/图书馆/外滩/海洋馆/步行街/万达/天津/塘沽/滨海新区）',
                    subtitle:'新港',
                    price:299
                },
                {
                    imgurl:'https://img.meituan.net/phoenix/30bdd255adcb6d460bd9f060ec27ae325000287.jpg@740w_416h_1e_1c',
                    title:'【榴莲连锁短租公寓】～润和温馨一居',
                    subtitle:'整套可住两人',
                    price:155
                },
                {
                    imgurl:'https://img.meituan.net/phoenix/f8feee5f02263560cf253e8e515feda4748802.jpg@740w_416h_1e_1c',
                    title:'整租loft 爱琴海商圈 万达 天津站 巨幕影院整租loft 爱琴海商圈 万达 天津站 巨幕影院',
                    subtitle:'河东万达广场',
                    price:209
                },
                {
                    imgurl:'https://img.meituan.net/phoenix/5b7706363118d707a3b43ae5cc8e21dd1040532.jpg@740w_416h_1e_1c',
                    title:'【九月●美宿】法式•轻奢/古楼/古文化街/100寸投影',
                    subtitle:'老城厢/鼓楼',
                    price:178
                },

            ]
        }
    },
    methods:{
        handleSelect(e){
            // e.target.siblings.removeClass("active");
            // e.target.addClass = "active";
        }
    }
}
</script>