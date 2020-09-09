<template>
    <div class="proitem clear-fixed">
        <div class="imgBox">
            <img :src="meta.image" alt="picture">
            <span>{{count + 1}}</span>
        </div>
        <div class="itemData">
            <h3>
                <router-link to="{name:'productDetail'}">{{meta.title}}</router-link>
            </h3>
            <p class="comment-details">
                <el-rate v-model="meta.score" class="rate"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}">
                </el-rate>

                <span class="space" v-if="meta.score > 4.5">很好</span>
                <span class="space" v-else-if="meta.score > 4">好</span>
                <span class="space" v-else-if="meta.score > 3.5">不错</span>
                <span class="space" v-else-if="meta.score > 3">一般</span>
                <span class="space" v-else>很差</span>
                <span class="space" >{{meta.score}}分</span>
                <span class="comment space">{{meta.commentNum}}人评论</span>
            </p>
            <p>
                
                <span class="p-item-tag">
                    <span v-for="(ele,i) in meta.tag" :key="i">{{ele}}|</span>
                </span>
                <span class="p-item-addr">{{meta.address}}</span>
                <span class="p-item-map">
                    <i class="el-icon-location-information"></i>
                    <a href="#">查看地图</a>
                </span>
            </p>
            <p>
                <span v-if="meta.avg_price">人均￥{{meta.avg_price}}</span>
                <span v-else>暂无价格</span>
            </p>
            <ul>
                <li v-for="(ele,index) in meta.deal_items.slice(0,2)" :key="index">
                    <p class="deal-title">
                        <a href="#">{{ele.title}}</a>
                    </p>
                    <p>
                        <span class="cur-price">￥{{ele.price}}</span>
                        <span class="shop-price">门市价￥{{ele.couter_price}}</span>
                        <span class="sellNum">已售{{ele.saleNum}}</span>
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props:["meta","count"]
}
</script>