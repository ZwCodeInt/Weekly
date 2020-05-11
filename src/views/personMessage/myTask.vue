<template>
    <div class="Task">
        <div class="taskTitle">
            <router-link to="/person"  class="toPerson" ><Icon type="ios-arrow-dropleft" size="24"/></router-link>
            <!-- <div class="toPerson">&lt;</div> -->
            我的任务
        </div>
        <div class="taskList">
            <div>1.主要负责h5移动端网页的开发和微信小程序开发</div>
            <div>2.与后台开发工程师协作，完成各种数据交互、动态信息展现和用户的互动;</div>
            <div>3.配合设计完成移动Web项目迭代，不断优化和提升用户体验</div>
            <div>4.新技术的攻关与研究实现，H5框架的设计与优化，并运用和推动到H5实际项目中;</div>
            <!-- <div></div> -->
        </div>
        <div class="skills">
            <div>必备技能：</div>
            <div class="skill">
                <a href="https://vuex.vuejs.org/zh/guide/">Vue </a>
                <a href="https://www.w3school.com.cn/js/index.asp">js </a>
                <a href="https://www.jquery123.com/category/version/">jQuery </a>
                <a href="http://es6.ruanyifeng.com/">es6 </a>
                <a href="https://www.bootcss.com//">bookstrap </a>
                <a href="https://www.iviewui.com/docs/introduce">iview </a>
                <a href="https://developers.weixin.qq.com/miniprogram/dev/framework/config.html">小程序 </a>
            </div>
            <!-- <div></div> -->
        </div>
    </div>
</template>
<style>
    .Task {
        background: white; 
        height: 100%;
        border: none;
    }
    .taskTitle {
        height: 4rem;
        line-height: 4rem;
        font-size: 1.4rem;
        background: #8894c4;
        color: white;
        text-align: center;
        position: relative
    }
    .toPerson {
        position: absolute;
        left: 1rem;
        color: white;
    }
    .taskList{
        padding: 1rem ;
    }
    .taskList >div {
        /* height: 3rem; */
        line-height: 3rem;
        color: #768e9b;
        border-bottom: 1px dotted #aabbcc;
        white-space: pre-wrap;
    }
    .skills {
        width: 100%;
        padding: 1rem;
        font-size: 1.2rem;
    }
    .skill {
        padding: 1rem 0;
        font-size: 1rem;
        
    }
    .skill a {
        color: #487cb1!important;
    }
</style>