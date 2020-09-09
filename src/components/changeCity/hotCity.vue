<template>
    <div class="hotcity">
        <dl class="clear-fixed">
            <dt>{{title}}：</dt>
            <dd v-for="(ele,index) in hotlist" :key='index'>
                {{ele}}
            </dd>
        </dl>
    </div>
</template>
<script>
export default {
    props:[
        "title",
        "hotlist"
    ],
}
</script>
<style lang="scss">

</style>