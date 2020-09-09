<template>
    <div class="firstletter">
        <dl class="first-tilte clear-fixed">
            <dt>按拼音选择首字母：</dt>
            <dd v-for="(ele,index) in letterList" :key="index">
                <a :href="'#'+ele">{{ele}}</a>
            </dd>
        </dl>
        <ul class="citylist">
            <li class="clear-fixed" 
            v-for="(ele,index) in letterList" :key="index" :id="ele">
                <div class="letter">
                    <a href="#">{{ele}}</a>
                </div>
                <!-- <div class="letter-city" v-for="(elem,i) in group[index][ele]" :key="i">
                    {{elem}}
                </div> -->
                <div class="letter-city">
                    <span  v-for="(elem,i) in group[index][ele]" :key="i">
                        {{elem}}
                    </span>
                </div>
            </li>
            <!-- <li id="A" @click="groupByFirstLetter"><a href="#">首字母为A的城市</a></li> -->
        </ul>
    </div>
</template>
<script>
// import func from '../../../vue-temp/vue-editor-bridge';
export default {
    data(){
        return {
            letterList: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],//大写的首字母
            proviceList:[],//省份
            group:[],//按首字母分开的城市
            allProvinceCity:[]
        }
    },
    created(){
        // for(let i = 65;i < 91;i ++){
        //     var item = String.fromCharCode(i);
        //     this.letterList.push(item);
        // }
        console.log(this.letterList,"letterlist")
        let self = this;
        this.$http.get('/city.json').then((response)=>{
            // console.log(response.data)
            this.proviceList = getProvice(response.data);
            // console.log(this.proviceList)
            console.log('00000'); 
            console.log(this)
            this.allProvinceCity = response.data;
            groupByFirstLetter();
            console.log(111111);
        }).catch(function(error){
            console.log(error);
        })
        //获取省份
        function getProvice(data){
            let arr = [];
            data.forEach(ele => {
                if(ele.provinceName){
                    let obj = {
                        provinceName:ele.provinceName,
                        cityInfoList:ele.cityInfoList
                    }
                    arr.push(obj)
                }
            })
            return arr;
        }
        function groupByFirstLetter(){
            console.log("provincelist");
           console.log(self.proviceList);
           let tempArr = [];
           for(let letter of self.letterList){
               let arr = [];
               let temp = [];
               for(let province of self.proviceList){
                   tempArr = filterFunc(province.cityInfoList,letter);
                    arr = temp.concat(tempArr);
                    temp = arr;
               }
               let obj = {
                   [letter]:arr
               }
               self.group.push(obj);
            //    console.log("tempArr:",tempArr);
            //    console.log(this.group,"分组后的");
           } 
           console.log(2222222);
           
            
        }
        function filterFunc(arr,letter){
            const newArr = [];
            for(let i = 0;i < arr.length;i ++){
                arr[i].firstChar == letter && newArr.push(arr[i].name);
            }
            return newArr;
        }
        
    },
  
    methods:{
        /**
         * 将城市按首字母分组
         */
        // groupByFirstLetter(){
        //    console.log(this.proviceList);
        //    let tempArr = [];
        //    for(let letter of this.letterList){
        //        let arr = [];
        //        let temp = [];
        //        for(let province of this.proviceList){
        //            tempArr = this.filterFunc(province.cityInfoList,letter);
        //             arr = temp.concat(tempArr);
        //             temp = arr;
        //        }
        //        let obj = {
        //            [letter]:arr
        //        }
        //        this.group.push(obj);
        //     //    console.log("tempArr:",tempArr);
        //     //    console.log(this.group,"分组后的");
        //    } 
           
            
        // },
        // filterFunc(arr,letter){
        //     const newArr = [];
        //     for(let i = 0;i < arr.length;i ++){
        //         arr[i].firstChar == letter && newArr.push(arr[i].name);
        //     }
        //     return newArr;
        // }
    },
}
</script>
<style lang="scss">
    @import '../../assets/css/changeCity/firstLetter.scss'
</style>