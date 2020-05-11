<template>
    <div class = "record conContent" >
       <div  v-for="(item,i) in newRecord" :key="i" >
           <div class="day-title">
               <!-- <div>
                   <img :src="imgUrl[i%5]">
                </div>  -->
                <div style="padding: 0 .3rem;">
                    <div style="width: 24px;height: 24px;background: rgb(17, 149, 219);border-radius: 5px;color: white;font-size: 1rem;line-height: 24px;text-align: center;font-weight: bolder;font-family: monospace;">{{item.Id}}</div>
                </div>
                <div style="word-break: break-all;">{{item.WorkContent}}</div>
           </div>
           <div class="jindu">
               <div>完成进度：<span class="percentageMessage">{{item.Progress}}%</span> </div>
               <div class="date"><span>{{item.RecordDate}}</span><span>({{item.RecordDay}})</span> </div>
           </div>
           <div class="progress">
               <div class="progress-bar progress-bar-info" role="progressbar" :aria-valuenow="item.Progress" 
                    aria-valuemin="0" aria-valuemax="100" :style="{width:item.Progress + '%'}">
               </div>
           </div>
       </div>
       <!-- <div style="padding: 10px;">
           <div style="width: 28px;height: 28px;background: rgb(17, 149, 219);border-radius: 5px;color: white;font-size: 22px;line-height: 28px;text-align: center;font-weight: bolder;font-family: monospace;">4</div>
       </div> -->
    </div>
</template>
<script>
import '@/api/record'

import axios from 'axios';
// import { mapState } from 'vuex'
export default {
    name: "homeRecord",
    data(){
        return{
            newRecord:[{
                RecordDate: ""
            }],
            imgUrl:[
                require("@/assets/first.png"),
                require("@/assets/second.png"),
                require("@/assets/third.png"),
                require("@/assets/fourth.png"),
                require("@/assets/fifth.png")
            ],
        }
    },
    computed: {
        // recordContent (){
        //     return this.$store.state.recordContent
        // }
        // newRecord () {
        //     return this.$store.getters.newRecord
        // },
        // ...mapState({
        //     records: "recordContent"
        // }),
        // ...mapGetters(['newRecord'])
    },
    mounted() {
        axios({
            method:"post",
           // url: "https://easy-mock.com/mock/5e8058c711787b056d42b8cb/Weekly/home", 
           // url: "https://easy-mock.com/mock/5e806d1044cf7975f2649902/Weekly/QueryRecord"
            url: "http://20200330record.com/queryRecord"


        }).then((e)=>{
            //console.log(this.newRecord)

            this.newRecord = e.data;
            console.log(e.data)
        })    
    },
}
</script>
<style scoped>
    .record {
        padding: 5px 0;
    }
    .progress {
        width:90%;
        margin: 10px 5%;
        background: #ececec;
        height:10px;
    }
    .progress-bar{
        height:10px;
        background: #567cc1;
    }
    .percentageMessage{
        color: #e88117;
        font-weight: bold;
    }
    .jindu{
        display: flex;
        width: 90%;
        -webkit-box-pack: justify;
        justify-content: space-between;
        font-size: 12px;
        color: #e08b8b;
        margin-left: 5%;
        margin-top: 5px;
    }
    .date{
        color: #999;
       
    }
    .record > div{
        width: 92%;
        margin: 11px auto;
        background: white;
        min-height: 80px;
        border: 1px solid #eee;
        color: #666;
        font-size: 14px;
        border-radius: 10px;
        padding: 10px 0;
    }
    .record img{
        vertical-align: middle;
    }
    .record > div>div{
        text-align: left;
    }
    .day-title{
        display: flex;
        align-items: baseline;
        width: 95%;
        margin: 0 auto;
        padding-top: 5px;
    }
</style>
