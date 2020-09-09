<template>
    <div class="page-register">
        <header>
            <div class="inner clear-fixed">
                <router-link :to="{name:'index'}">
                    <img src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/logo.6a89007.png" alt="" >
                </router-link>
                <div class="to-login">
                    <span>已有美团账号？</span>
                    <router-link :to="{name:'login'}">登&nbsp; 录</router-link>
                </div>
            </div>
        </header>
        <div class="main">
            <div class="inner">
                <div class="form-area">
                    <el-form :model="registerForm" status-icon :rules="rules" ref="registerForm" label-width="100px" class="demo-registerForm">
                        <el-form-item label="用户名" prop="userName">
                            <el-input type="text" v-model="registerForm.userName" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="创建密码" prop="pass">
                            <el-input type="password" v-model="registerForm.pass" autocomplete="off" @input="checkpwd"></el-input>
                            <div class="strongth" >
                                <div class="strong-bg " :class="strongClass"></div>
                                <div class="strong-wrap">
                                    <span class="weak">弱</span>
                                    <span class="middle">中</span>
                                    <span class="strong">强</span>
                                </div>
                            </div>
                        </el-form-item>
                        <el-form-item label="确认密码" prop="checkPass">
                            <el-input type="password" v-model="registerForm.checkPass" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('registerForm')">同意以下协议并注册</el-button>
                        </el-form-item>
                    </el-form>
                </div>

            </div>
        </div>
        <footer>
            <div class="copyright"><a href="#">©meituan.com</a>  京ICP证070791号  京公网安备11010502025545号</div>
        </footer>
    </div>
</template>
<script>
export default {

    data(){
        var validateUser = (rule,value,callback) => {
            if(value == ""){
                callback(new Error("请输入用户名"))
            }else if(value.length < 4 || value.length > 16){
                callback(new Error("用户名必须为4-16位的数字字母下划线组合"));
            }else{
                callback();
            }
        }
        var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.registerForm.checkPass !== '') {
            this.$refs.registerForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.registerForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
        return {
            registerForm:{
                userName:"",
                pass:"",
                checkPass:"",
            },
            strongClass:"",
            rules:{
                userName:[
                    {validator:validateUser,trigger:'blur'}
                ],
                pass:[
                    {validator: validatePass, trigger: 'blur' }
                ],
                checkPass:[
                    {validator:validatePass2,trigger:"blur"}
                ]
            }
        }
    },
    methods:{
        //正则校验留在methods里写
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                //全部校验成功才会静茹提交表单这一步
                // api.register({
                //     params = thsi.registerForm
                // }).then(res =>{
                //     if(res.data.status == 'success'){
                //         this.$router.push({name:'login'});
                //     }else{
                //         alert(res.data.msg);
                //     }
                // })
                //用vuex的state来存储登录后的用户名1.10处
                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
        checkpwd(){
            //正则匹配
            const reg = / /;
            if(this.registerForm.pass.length > 20){
                console.log(this.registerForm.pass)
                this.strongClass = 'strong';
            }else if(this.registerForm.pass.length > 6){

            }
        }
    }
}
</script>
<style lang="scss">
    @import '../assets/css/register.scss';
</style>