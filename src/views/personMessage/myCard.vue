<template>
    <div class="Card">
        <div class="CardHeader">
            <router-link to="/person">上一页</router-link>
            <div class="CardTitle">我的名片</div>
            <router-link to="/">首页</router-link>
        </div>
        <div>
            <div style="color: gold;width:90%;text-align: left;height:30vh;background:#404042;margin: 2rem auto;padding: 6% 15%;position: relative;">
               <div>
                   <div style="font-size: 1.6rem;color: white;line-height: 6vh;margin: .4rem 0;">程序员</div>
                   <div style="font-size: 1rem;font-weight: bold;margin: .2rem 0;">吴泽薇(Wendy)</div>
                   <div>Web前端 / 小程序 / 网页</div>
                   <div>联系方式：13112361985</div>
                   <!-- <div>微信：</div> -->
               </div>
               <div style="position:absolute;bottom: .8rem;right:  .8rem;"> 
                    
                    <img src="@/assets/erweima.jpg" alt="girl" style="vertical-align: middle;width: 3.2rem;height: 3.2rem;">
               </div>
               <div style="width: 0;height: 0;border-bottom: 50px solid gold;border-right: 100px solid transparent;position:absolute;bottom: 0px;left:  0px;"> </div>
            </div>
            <div style="color: gold;width:90%;text-align: center;height:30vh;background:#404042;margin: 2rem auto;padding: 15% 0;position: relative;">
                <div style="font-size: 1.6rem;">
                    我的名片  
                </div>
                <!-- <Icon type="md-woman" size="20"/> -->
                <div style="font-size: 1rem;">Wendy
                    <img src="@/assets/girl2.png" alt="girl" width="30" height="30" style="vertical-align: middle;">
                </div>
                <div style="width: 0;height: 0;border-bottom: 50px solid gold;border-right: 100px solid transparent;position:absolute;bottom: 0px;left:  0px;"></div>
            </div>   
        </div>
    </div>
</template>
<style>
    .Card {
        background: white; 
        height: 100%;
        border: none;
    }
    .CardHeader {
        display: flex;
        height: 4rem;
        line-height: 4rem;
        background: #404042;
        font-size: 1rem;
        /* padding: 0 1rem; */
        justify-content: space-between;
         /* align-items: center;  */
    }
    .CardHeader a {
        color: #fff;
        display: inline-flex;
        min-width: 3rem;
        flex: 1;
        display: block;
        text-align: center;
    }
    .CardTitle {
        font-size: 1.3rem;
        font-weight: bold;
        color: white;
        flex: 1;
        text-align: center;
    }
</style>