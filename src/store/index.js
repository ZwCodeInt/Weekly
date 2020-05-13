import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let defaultRecord = [{
  dayName: "Monday",
  /*imgUrl:  '/static/image/first.png',*/
  name: "星期一",
  content: "周报界面日期搜索界面实现",
  daydate: "2019-12-23",
  percentage: '60'
},{
  dayName: "Tuesday",
  /*imgUrl:  '/static/image/first.png',*/
  name: "星期二",
  content: "周报界面编辑界面实现",
  daydate: "2019-12-24",
  percentage: '70'
},{
  dayName: "Tuesday",
  /*imgUrl:  '/static/image/second.png',*/
  name: "星期三",
  content: "了解更新vuex数据并实时渲染页面",
  daydate: "2019-12-25",
  percentage: '20'
},{
  dayName: "Tuesday",
  /*imgUrl:  '/static/image/second.png',*/
  name: "星期四",
  content: "实现最佳后勤和最受欢迎后勤票数及部分投票详情显示页面",
  daydate: "2019-12-26",
  percentage: '80'
},{
  dayName: "Tuesday",
  /*imgUrl:  '/static/image/second.png',*/
  name: "星期五",
  content: "测试页面并上正式库",
  daydate: "2019-12-27",
  percentage: '100'
}];

export default new Vuex.Store({
  state: {
    recordContent: defaultRecord,
    imgUrl:[
       "~@/assets/first.png",
       "~@/assets/second.png",
       "~@/assets/third.png",
       "~@/assets/fourth.png",
       "~@/assets/fifth.png"
    ],
    user:[{
      account: '2522594977@qq.com',
      password: 12345678
    }]
  },
  mutations: {
    changeRecord (state, pushobj){
        let arr = [];arr.push(pushobj);
        let newArr = state.recordContent.concat(arr);
      //let newArr = state.recordContent.push(pushobj);
        console.log(newArr);
        try {
          localStorage.setItem("recordContent",JSON.stringify(newArr))
          //  localStorage.Record = newArr;
        } catch (error) {
          console.log(error)
        }
        
    }
  },
  actions: {},
  modules: {}
});
