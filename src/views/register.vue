<template>
    <div class="onLogin">
        <div class="registerHeader">
            <router-link style="color:white" to="/person">返回</router-link>
            <div style="font-size: 1.4rem;">注册</div>
            <router-link style="color:white" to="/onLogin">登录</router-link>
        </div>
        <div class="registerInput registerCon" >
            <label>账号</label>
            <input type="text" name="" placeholder = "请输入注册账号" v-model="account"   @change="checkRegister(1,account)">
        </div>
        <div class="registerName registerCon" >
            <label>用户名</label>
            <input type="text" name="" placeholder = "请输入用户名/昵称" v-model="accountName"  @change="checkRegister(2,accountName)">
        </div>
        <div class="registerInput2 registerCon" >
            <label>密码</label>
            <div style="width:70%;display:inline-flex;font-size: 1.2rem;">
                <Input type="password" name="" password placeholder = "请输入密码" v-model="password1" ref ="password1"  />
            </div>
        </div>
        <div class="registerInput3 registerCon" >
            <label>确认密码</label>
            <div style="width:70%;display:inline-flex;font-size: 1.2rem;">
                <Input type="password" name="" password placeholder = "请再次确认密码" v-model="password2" ref ="password2"  />
            </div>
        </div>
        <div>
            <router-link to="/onLogin" >
                <Button style="width:86%" type="info">注册</Button>
            </router-link>
           
        </div>
        <div style="padding-bottom:0;color:#aabbcc;">
            <div>_______其他方式注册________</div>
            <div style="display:flex;justify-content: space-evenly;padding-top:1rem;">
                <div>
                    <img style="background:white;" src="@/assets/weibo.png"  width="42" alt="">
                </div>
                <div>
                    <img src="@/assets/wechat.png" width="42" alt="">
                </div>
                <div>
                    <img src="@/assets/QQ.png" width="42" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
           account: '',
           accountName: "",
           password1: "",
           password2: "",
           isRegisterOk: false
        }
    },
    methods: {
        checkRegister(a,e){
            console.log(a,e);
        },
        // registerBtn(){
        //     this.checkRegister()
        // }
    },
}
</script>
<style>
    /* 修改placeholder颜色 */
    input::-webkit-input-placeholder {
        color: #c5c8ce;
    }
    input::-moz-input-placeholder {
        color: #c5c8ce;
    }
    input::-ms-input-placeholder {
        color: #c5c8ce;
    } 
    .onLogin {
        background: #646980; 
        height: 100%;
        border: none;
        color: white;
    }
    .onLogin >div {
        text-align: center;
        padding: 1.4rem 1rem;
    }

    .loginImage {
        width: 7rem;
        height: 7rem;
        border-radius: 50%;
    }
    .registerHeader {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 1.2rem;
        font-size: 1rem;
    }
    .registerCon {
        margin: 0 12%;
        border-bottom: 1px dotted #fff;
        font-size: 1rem;
        line-height: 3.2rem;
        height:3.2rem;
        padding: 0!important;
        /* text-align: left; */
    }
    .registerCon label {
        display: inline-flex;
        width:30%;
        text-align:left;
    }
    .registerCon input {
        width:70%;
        background: none;
        color: #e6e3f1;
        border: none;
    }
    /* 密码眼睛图标 */
    .registerCon .ivu-icon-ios-eye-outline:before {
        color: white;
        font-size: 1.2rem;
    }
    .registerCon .ivu-icon-ios-eye-off-outline:before {
        color: white;
        font-size: 1.2rem;
    }
    .registerCon .ivu-input{
        outline: none;
        font-size: 1rem;
        width: 100%;
        padding: 0;
    }
    input{
        outline: none;
    }
</style>