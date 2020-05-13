import Mock from 'mockjs'

let users = [{
    account: 'wzw',
    password: '123'
}]

let resp = {
    flag: false,
    message: ''
}

let login = function(data) {
    resp.flag = false;
    let params = JSON.parse(data.body);
    let account = params.account;
    let password = params.password;
    let result = users.filter(x => x.account == account)[0];
    if(result){
        if(result.password == password) {
            resp.flag = true;
        }else{
            resp.message = '密码错误'
        }
    }else{
        resp.message = '账号不存在';
        
    }

    return resp;
}

let register = function(data){
    resp.flag = false;
    let newAccount = JSON.parse(data.body).account;
    let newPassword = JSON.parse(data.body).password;
    let result2 = users.filter(x => x.account == newAccount)[0];
    if(result2){
        resp.message = '账号已存在！'
    }
    else {
        resp.flag = true;
    
        users.push({
            account: newAccount,
            password: newPassword
        });
    }
    return resp;
}

Mock.mock('https://weekly.com/login',login)
Mock.mock('https://weekly.com/register',register)