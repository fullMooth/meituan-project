<template>
    <div class="searchbar">
        <el-row class="search-wrap">
            <el-col :span="3" class="logo">
                <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团">
            </el-col>
            <el-col :span="10" class="search-area">
                <el-input v-model="input" placeholder="搜索商家或地点" class="search-content" @focus="focus" @blur="blur"></el-input>
                <el-button type="primary" icon="el-icon-search"></el-button>
                <ul class="search-relation" v-if="isFocus">
                    <li v-for="(elem,index) in searchRelation" 
                    :key="index">
                    <router-link to="{name:'goods',params:{name:'elem.keywords'}}">{{elem.keywords}}</router-link>
                    </li>
                </ul>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data(){
        return {
            searchRelation:[
                {
                    keywords:'今朝有酒今朝醉',
                    url:"https://www.baidu.com"    
                },
                 {
                    keywords:'今夕是何年',
                    url:"/s"    
                },
                 {
                    keywords:'高出不胜寒',
                    url:"/s"    
                },
                 {
                    keywords:'天长第九有时尽',
                    url:"/s"    
                }

            ],
            input:'',
            isFocus:false

        }
    },
    methods:{
        focus(){
            this.isFocus = true;
        },
        blur(){
            setTimeout(()=>{//解决点击搜索列表不能跳转的问题
                 this.isFocus = false;
            },100)
           
        }
    }
}
</script>