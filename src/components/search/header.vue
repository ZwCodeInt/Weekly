<template>
    <div class="search-header conheader">
        <div class="search-top ">
            <div class= "search-left">
                <router-link to="/" class="toHome">
                    <img src="@/assets/last.png">
                </router-link>
               
            </div>
            <div class= "search-title">
                日期搜索
            </div>
        </div> 
        
    </div>
</template>
<script>
export default {
    name: "searcHeader",
}
</script>
<style>
    /* .search-header{
        height: 6rem;
        overflow: hidden;
    } */
    .search-top{
        display: flex;
        align-items: center;
        text-align: center;
        color: white;
    }
    .search-left{
       height: 50px;
       line-height: 60px;
       width: 10%;

    } 
    .search-left img{
       width: 20px;
       height: 20px;
       
    }
    .search-title{
        width: 80%;
        font-size: 16px;
    }
    
</style>