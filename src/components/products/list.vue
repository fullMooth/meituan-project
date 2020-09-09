<template>
    <div class="p-list">
        <ul class="sort-by clear-fixed">
            <li v-for="item in nav" :key="item.key" :class="{'active':item.active}">{{item.name}}</li>
        </ul>
        <el-row>
            <productItem v-for="(item,index) in productlist" :key="index" :meta="item" :count="index"/>
        </el-row>
    </div>

</template>
<script>
import productItem from './proitem.vue';
export default {
    components:{
        productItem
    },
    data(){
        
        return {
            nav:[
                {
                    key:'s-default',
                    name:"智能排序",
                    active:true
                },{
                    key:'s-price',
                    name:'价格最低',
                    active:false
                },{
                    key:'s-score',
                    name:'人气最高',
                    active:false
                },{
                    key:'s-commont',
                    name:'评价最高',
                    active:false
                },{
                    key:'',
                    name:''
                },
            ],
            productlist:[
                {
                    image:'https://p0.meituan.net/msmerchant/d52a5e31ac3f508f751aff9c0216bc64410468.jpg@220w_125h_1e_1c',
                    title:'班花串串香火锅（霄云路店）',
                    type:'food',
                    score:4.1,
                    commentNum:0,
                    comment:[
                        {
                            username:"xxx",
                            evalaute:"好吃"
                        }
                    ],
                    tag:["火锅","沙河"],
                    address:"朝阳区霄云路15号地下1层至1层15-7号",
                    avg_price:64,
                    deal_items:[
                        {
                            title:"火鸡宴，建议10-14人使用",
                            price:909,
                            couter_price:1105,
                            saleNum:0,
                            price_type:"元"
                        },
                        {
                            title:"100元代金卷一张",
                            price:208,
                            couter_price:500,
                            saleNum:257,
                            price_type:"元"
                        }
                    ]
                },
                {
                    image:'https://p1.meituan.net/deal/9090c869ac6caa0af56a0ce8af6a12ee66870.jpg@220w_125h_1e_1c',
                    title:'重庆辣道口老灶火锅',
                    type:'food',
                    score:5,
                    commentNum:0,
                    comment:[
                        {
                            username:"xxx",
                            evalaute:"好吃"
                        }
                    ],
                    tag:["火锅","沙河"],
                    address:"重庆火锅|沙河昌平区百沙路京康医院左侧",
                    avg_price:88,
                    deal_items:[
                        {
                            title:"火鸡宴，建议10-14人使用",
                            price:909,
                            couter_price:1105,
                            saleNum:0,
                            price_type:"元"
                        }
                    ]
                }
            ]
        }
    }
}
</script>
<style lang="scss">
    @import '../../assets/css/goodslist/list.scss';
</style>