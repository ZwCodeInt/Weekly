import Mock from "mockjs";

const url = {
    record: "http://20200330record.com/queryRecord",
    remove: "http://weekly/remove",
    edit: "http://weekly/edit",
    add: "http://weekly/add",
    search: "http://weekly/search"
};
// var Random = Mock.Random;
let data = [];

let Id = [1,2,3,4,5,6];
// let recordDay = ["sssddd","monday", "thurday","sddd","ggttt","efrjehf"];
let WorkContent = ["完成数据mock借口模拟","实现html5+Div+Css布局","微信小程序功能完善以及完成新需求","三大框架文档总结","个人周报重构以及部分代码实现可复用性","个人周报重构以及部分代码实现可复用性"];
let Progress = [50,30,60,40,80,90];
let RecordDate = ["2020-02-02","2020-02-03","2020-02-04","2020-02-05","2020-02-06","2020-02-07"];
let RecordDay = ["星期一","星期二","星期三","星期四","星期五","星期六"];

for(let i = 0;i<6; i++) {
    data.push({
        Id: Id[i],
        // recordDay: recordDay[i],
        WorkContent: WorkContent[i],
        Progress: Progress[i],
        RecordDay: RecordDay[i],
        RecordDate: RecordDate[i]
    })
}

let query = function() {
    return data;
}

let remove = function(option) {
    let id = JSON.parse(option.body).Id;
    console.log(id)
    data = data.filter(x=>x.Id != id);
    
    return {isSuccess: true}
}

let edit = function(option){
    let requestData = JSON.parse(option.body).editObj;
    let id = requestData.editId;
    let oo = data.filter(x=>x.Id == id)[0];
    oo.WorkContent = requestData.editWork;
    oo.Progress = requestData.editProgress;
    
    return {
        isSuccess: true
    }
}

let add = function(option){
    let addData = JSON.parse(option.body).addObj;
    // let id = addData.editId;
    debugger;
    let hasno = data.filter(x=>x.RecordDate == addData.addDate).length;
    if(hasno == 0){
        data.push({
            Id: parseInt(data.length+1),
            WorkContent: addData.addWork,
            Progress: addData.addProgress,
            RecordDay: addData.addDay,
            RecordDate: addData.addDate
        })
        return {
            isSuccess: true
        }
    }
    else {
        return {
            isSuccess: false
        } 
    }
    
 


}

let search = function(option) {
    let minDate = JSON.parse(option.body).MinDate;
    let maxDate = JSON.parse(option.body).MaxDate; 
    if(minDate && maxDate){
        let min = Date.parse(minDate);
        let max = Date.parse(maxDate);
       
        let searchData = data.filter((x)=> (Date.parse(x.RecordDate) >= min && (Date.parse(x.RecordDate) <= max)));
        return searchData
    }
    else {
        return data;
    }
}

// let list = function (options) {
//     // console.log(options.type);
//     let rtype = options.type.toLowerCase(); //获取请求的类型并转换为小写
//     switch (rtype) {
//         case 'get':
//             break;
//         case 'post':
//             let id = parseInt(JSON.parse(options.body).params.id); // 获取请求的id，将options.body转换为JSON对象
//             arr = arr.filter(function (val) {
//                 return val.id != id; // 过滤掉前台传过来的id对应的相应数据，并重新返回
//             });
//             break;
//         default:
//             break;
//     }
//     return {
//         data: arr
//     }
// }

Mock.mock(url.record, query);

Mock.mock(url.remove, remove)

Mock.mock(url.edit, edit)

Mock.mock(url.add, add)

Mock.mock(url.search, search)

// export default [
//     Mock.mock(url.record, {
//         "data|5":[{
//             "Id|+1": 1,
//             "recordDay|1": ["sssddd","monday", "thurday","sddd","ggttt"],
//             "WorkContent|1": [Random.cparagraph(1, 3),Random.cparagraph(2),Random.cparagraph(1),Random.cparagraph(2),Random.cparagraph(1, 3)],
//             "Progress|1": [Random.integer(0, 100),Random.integer(0, 100),Random.integer(0, 100),Random.integer(0, 100),Random.integer(0, 100)],
//             "RecordDate|1": ["2020-02-02 ","2020-02-03 ","2020-02-04 ","2020-02-05 ","2020-02-06 "],
//             "RecordDay|1": ["星期一","星期二","星期三","星期四","星期五"]
//         }]
//     })
// ]
// module.exports = [
   
// ]