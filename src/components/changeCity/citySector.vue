<template>
    <div class="province-select">
        <span class="s-by-province">按省份选择：</span>
        <sector name="省份" @click="handleProvince" :isShow="isShowProvince" 
        @blur="focusProvince"/>
        <sector name="城市" class="city-selector" @click="handleCity"
        :isShow="isShowCity" />
    </div>
</template>
<script>
import sector from './selector.vue';
export default {
    components:{
        sector,
    },
    data(){
        return {
            isShowProvince:false,
            isShowCity:false
        }
    },
    methods:{
        handleProvince(){
            this.isShowProvince = true;
            console.log(this.isShowProvince)
        },
        focusProvince(){
            this.isShowProvince = false;
        },
        handleCity(){

        }
    }
}
</script>