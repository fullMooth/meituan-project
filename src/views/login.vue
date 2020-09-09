<template>
    <div class="page-login">
        <div class="login-top">
            <router-link :to="{name:'index'}">
                <img src='//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/logo.6a89007.png'>
            </router-link>
        </div>
        <div class="login-content clear-fixed">
            <div class="content-img">
                <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" width="480" height="370" alt="美团网">
            </div>
            <div class="login-info">
                <div class="user-info">
                    <p class="tips-wrap">
                        <span class="tips" v-if="errorTips"><i class="el-icon-remove"></i>&nbsp;&nbsp;{{errorTips}}</span>
                    </p>
                    <p class="clear-fixed top" ><span class="account">账号登录</span><span class="phone-vericode">手机动态码登录
                        <i class="el-icon-mobile-phone"></i></span>
                    </p>
                    <el-input v-model="userName" placeholder="手机号" class="uname"></el-input>                                                                                                                                                                                                                                                                                                                  
                    <el-input v-model="password" placeholder="密码" show-password class="upwd"></el-input>
                    <p class="forget"><a href="#">忘记密码？</a></p>
                    <button class="sign-in" @click="submit">登 录</button>
                    <p class="to-register"><span>还没有账号？</span><router-link :to="{name:'register'}">免费注册</router-link></p>
                    <p class="other-account"><span>用合作网站账号登录</span></p>
                    <p class="to-other-acc"><a href="#" class="qq"></a><a href="#" class="weibo"></a></p>
                </div>
                    <!-- <div class="other-account">

                    </div> -->
               
            </div>
        </div>
        <div class="login-bottom">
            <ul class="clear-fixed">
                <li class="first">
                    <a href="#">关于美团</a>
                </li>
                <li>
                    <a href="#">加入我们</a>
                </li>
                <li>
                    <a href="#">商家入驻</a>
                </li>
                <li>
                    <a href="#">帮助中心</a>
                </li>
                <li >
                    <a href="#">美团手机版</a>
                </li>
            </ul>
            <p class="copyright">
                <a href="#">©2020 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</a>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            userName:"",
            password:"",
            isError:false,
            errorTips:"",
        }
    },
    methods:{
        submit(){
            console.log(this.userName,this.password);
            if(!this.userName && !this.password){
                this.errorTips = "请输入账号和密码 ";
                console.log(this.errorTips)
                return ;
            }
            if(!this.userName){
                this.errorTips = "请输入手机号";
                return;
            }
            if(!this.password){
                this.errorTips = "请输入用户密码";
                return ;
            }
            //请求api接口，需要先引入api 模块
            /*api.login({
                params:{
                    userNamme:this.userName,
                    password:this.password
                }
            }).then((res)=>{
                if(res.data.status == 'success'){
                    // 请求成功跳转页面
                    this.$router.push({name:"index"});
                }else{
                    //验证失败，返回错误提示
                    this.errorTips = res.data.msg;
                }
            })*/
        }
    }
}
</script>
<style lang="scss">
    @import '../assets/css/login.scss';
</style>