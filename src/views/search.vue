<template>
    <div>
        <searc-header></searc-header>
        <search-box></search-box>
        <search-result ></search-result>
    </div>
</template>
<script>
import searcHeader from '@/components/search/header.vue'
import searchResult from '@/components/search/searchResult.vue'
import searchBox from '@/components/search/searchBox.vue'
export default {
    name: "search",
    components:{
        searcHeader,
        searchResult,
        searchBox
    }

}
</script>
<style>
    
</style>