<template>
    <div class="p-selector" @click="haneleClick" @blur="disappear">
        <span>{{title}}</span> 
        <i class="el-icon-caret-bottom"></i>
        <dl v-if="show">
            <dt>{{title}}</dt>
            <dd>
                <span v-for="(elem,index) in sublist" :key="index">{{elem.name}}</span>
            </dd>
        </dl>
    </div>
</template>
<script>
export default {
    data(){
        return {
            show:false,
        }
    },
    props:[
        "title",
        "sublist"
    ],
    methods:{
        haneleClick(){
            this.show = true;
        },
        disappear(){
            this.show = false;
        }
    }
}
</script>
<style lang="scss">
    .p-selector{
        cursor: pointer;
        display: inline-block;
        width:114px;
        text-align: left;
        position: relative;
        color:#666;
        &>span{
            font-size: 14px;
        }
        &>dl{
            position: absolute;
            z-index:10;
            top:120%;
            // display:none;
            padding:15px;
            width:510px;
            border:1px solid #eee;
            box-shadow: 0px 0px 1px #ccc;
            border-radius: 3px;
            background:#fff;
            &.active{
                display:block;
            }
            /*commom code*/
            &::after,
            &::before{
                content:"";
                display:inline-block;
                border-right:5px solid transparent;
                border-left: 5px solid transparent;
                position: absolute;
                left: 20px;
            }
            &::after{
                border-bottom: 6px solid #eee;
                top:-6px;
                z-index:11;
            }
            &::before{
                border-bottom: 6px solid #fff;
                top:-5px;
                z-index:12;
            }
            &>dt{
                font-size:15px;
                color:#999;
                padding-bottom: 5px;
                
            }
            dd{
                span{
                    display: inline-block;
                    width:127px;
                    padding:5px 0;
                }
            }
        }
    }
    /*test code */
    //  .name0{
    //     dl{
    //         display: block;
    //         z-index:100;
    //     }
    // }
</style>