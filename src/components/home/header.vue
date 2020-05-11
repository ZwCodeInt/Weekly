<template>
    <div class="header conheader">
        <div class="header-left">
            <div @click="value2 = true"><img src="@/assets/setup.png" alt="设置"></div>
            <Drawer class="drawer" title="设置"  placement="left"  v-model="value2">
                <router-link to="/person"><p><Icon type="md-person" custom="i-icon i-icon-shop_fill" size="16" />个人中心</p> </router-link>              
                <router-link to="/about"><p><Icon type="ios-alert-outline" size="16"/>关于我们</p></router-link>
                <router-link to="/suggest"><p><Icon type="ios-build" size="16" />意见反馈</p></router-link>
            </Drawer>
        </div>
        <div class="header-title">
            周报
        </div>
        <div class="header-right">
            <router-link  class="search" to="/search">
                <img src="@/assets/search.png" alt="搜索">
            </router-link>
            <router-link class="add" to="/addRecord">
                <img src="@/assets/add.png" alt="添加">
            </router-link > 
        </div>
    </div>
</template>

<script>

export default {
    name:"homeHeader",
    data () {
        return {
            value2: false
        }
    }
 }

</script>
<style scoped>
    .header{
        /*height: 50px;*/
        /* line-height: 60px; */
        display:flex;
        padding: 0 10px;
        
        justify-content: space-between;
        /*padding-bottom: 20px;*/
        border-bottom: 1px solid #fff;
    }
    .header>div{
        flex: 1;
    }
    .header-title{
        font-size: 16px;
        color: white;
        text-align: center;  
    }
    .header-right{
        display: flex;
        justify-content: flex-end;
    }
    .header-right>div,.header-right .search{
        display: block;
        margin-right: 20px;
    }
    .header-right img,.header-left img{
        width:20px;
        height:20px;
        vertical-align: middle;
    }
    .drawer p {
        padding: .4rem 0;
    }
    .drawer a {
        color: #17233d;
    }
</style>