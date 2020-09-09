<template>
    <div class="m-geo">
        <div class="position">
            <i class="el-icon-location-outline" />
             北京 &nbsp;    
            <router-link :to="{name:'changeCity'}">
                切换城市 
            </router-link>
             [
            <router-link to="#">
                 &nbsp;门头沟区大厂&nbsp; 
            </router-link>
            <router-link to="#">
                 回族自治县
            </router-link>
            <router-link to="#">
                 廊坊
            </router-link>
             ] 
        </div>
        <div class="user-info">
            <router-link :to="{name:'login'}" class="login">
                立即登录
            </router-link>
            <router-link :to="{name:'register'}" class="register">
                注册
            </router-link >
            
        </div>
    </div>
</template>
<style scoped>

</style>