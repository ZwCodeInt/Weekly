<template>
    <div class="records conContent">
        <div v-if='recordList.length>=1'>
        
            
            <div class='recordList' v-for="(item,index) in recordList" :key="index">
            <div class='recordListHeader'>
                    <div class='recordDate'>
                        {{item.RecordDate}}({{item.RecordDay}})
                    </div>
                    <div class="edit" >
                        <router-link :to="{path:'/edit',query: {recordDate: item.RecordDate,recordDay: item.RecordDay,workContent: item.WorkContent,progress:item.Progress,id:item.Id}}" >编辑</router-link>
                    <!-- <a href="#/edit" >编辑</a>  -->
                    </div> 
            </div>
            <div class="workContent" style="word-break: break-all;">
                工作内容：<span>{{item.WorkContent}}</span>
            </div>
            <div class="progress">
                完成进度：<span>{{item.Progress}}%</span>
            </div>
            </div>
        </div>
        <div v-else style="color: #aabbcc;padding-top: 2rem;text-align: center;">暂无数据</div>
    </div>
</template>
<script>
import Bus from '../../bus.js'

export default {
    name: 'searchResult',
    data() {
        return {
           recordList: [{
               
           }]
        }
    },
    methods: {
        
    },
    mounted() {
        var self = this;
        Bus.$on("recordListFun",(e)=>{
            self.recordList = e;
            console.log(self.recordList)
        })
    },
    
}
</script>
<style>
    .records{
        overflow-y: scroll;
        max-height: 85vh;
    }
    .records::-webkit-scrollbar {
        display: none;/*隐藏滚动条*/
    }
    .recordList{
        width: 88%;
        margin: 0rem auto;
        margin-bottom: 15px;
        background: #ffffff;
        /*height: 5rem;*/
        border-radius: .5rem;
        padding: .4rem;

    }
    .recordListHeader{
        display: flex;
        justify-content: space-between;
        font-weight: bold;
        color: #556d80;
        padding: .4rem 0;
    }
    .workContent{
        color: #898f98;
    }
    .edit a{
        color: #908b9e;
    }
    .progress{
        margin: .1rem 0;
        color: #757b94;
        font-size: .6rem;
    }

</style>