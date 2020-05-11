<template>
    <div class="conContent">
        <div class="selDate">
            <DatePicker :value="minDate" @on-change="dateVal1" class="dateSelected" :size="divSize" type="date" placement="bottom-end" placeholder="Select date" style="width: 40%;background: #2b85e4;"></DatePicker>
            <span style="width:8%;text-align: center;"> - </span>
            <DatePicker :value="maxDate" @on-change="dateVal2" class="dateSelected" :size="divSize" type="date" placement="bottom-end" placeholder="Select date" style="width: 40%;background: #2b85e4;    margin-right: 10px;
"></DatePicker>
            <Button @click ="searchDate" :size="divSize" class="searchBtn" type="info" ghost icon="ios-search">搜索</Button>
        </div> 
    </div>
</template>
<script>
import Bus from '../../bus'
import axios from 'axios';
export default {
    name: "searchBox",
    dateVal: "",
    data () {
        return {
            divSize: 'small',
            minDate: '',
            maxDate: '',
            headerRecordList: []
        }
    },
    methods: {
        // 日期排序升序
        // sortDataArray(dataArray){
        //     return dataArray.sort(function(a,b) {
        //         return Date.parse(a.recordDate.replace(/-/g,"/"))-Date.parse(b.recordDate.replace(/-/g,"/"));
        //     });
        // },

        searchDate(){
            // let min = Date.parse(this.minDate);
            // let max = Date.parse(this.maxDate);
            // let minIndex = this.headerRecordList.findIndex((x)=>(Date.parse(x.recordDate) === min || Date.parse(x.recordDate)>min));
            // let len = this.headerRecordList.length;
            // let maxIndex ;
            // let newRecordList = [];
            // if(Date.parse(this.headerRecordList[len-1].recordDate) >max ){
            //     maxIndex = this.headerRecordList.findIndex((x)=>(Date.parse(x.recordDate) > max))-1;
            //     for(let i= minIndex;i<=maxIndex;i++){
            //         newRecordList.push(this.headerRecordList[i]);
            //     }    
            // }
            // else{
            //     maxIndex = len-1;
            //     for(let i= minIndex;i< len;i++){
            //         newRecordList.push(this.headerRecordList[i]);
            //     }
            // }
            let start = new Date(this.minDate);
            let end = new Date(this.maxDate);
            


            if(start > end) {
                let l = this.minDate;
                let r = this.maxDate;
                this.minDate = r;
                this.maxDate = l;
                
                
            }
             console.log(this.minDate,this.maxDate);

            axios({
                method: "post",
                url: "http://weekly/search",
                //url: "http://localhost/weekly/api/home/Query",
                data: {
                    MinDate: this.minDate,
                    MaxDate: this.maxDate
                }
            }).then((e)=>{
                // this.headerRecordList = this.sortDataArray(e.data);
                Bus.$emit('recordListFun',e.data);
                console.log(e.data);
            })
        },
        dateVal1(e){
            this.minDate = e;
            // if(e[0] != null && e[1] != null) {
            //     this.minDate = e[0].replace(/-/g,"/");
            //     this.maxDate = e[1].replace(/-/g,"/");
            // }
        },
        dateVal2(e){
            this.maxDate = e;
            // if(e[0] != null && e[1] != null) {
            //     this.minDate = e[0].replace(/-/g,"/");
            //     this.maxDate = e[1].replace(/-/g,"/");
            // }
        }
    },
    mounted() {
        axios({
            method:"post",
            url: "http://20200330record.com/queryRecord",
             //url: "http://localhost/weekly/api/home/Query",
        }).then((e)=>{
            // this.headerRecordList = this.sortDataArray(e.data);
            Bus.$emit('recordListFun',e.data);
            // console.log(e.data)
        });
        
    }
}
</script>
<style>
    .selDate{
        display: flex;
        width: 88%;
        margin: 0 auto;
        padding: 12px 0;
    }
    .searchBtn{
        flex: 1;
        margin-left: -1px;
    }
</style>