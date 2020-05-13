<template>
  <div class="person">
      <div class="personHeader" >
          <router-link to="/" style="color:white;"><Icon type="ios-arrow-dropleft" size="24"/></router-link>
          <div style="text-align:center;">
            <img  src="@/assets/person.png" alt="头像" class="messageTmage" >
            <div  style="margin-top:1rem;font-size:1.2rem;"><p>花非花 雾非雾</p></div>
            <div  style="margin-top:1rem;"><p>珠海市 女生</p></div>
            <div  style="margin-top:.2rem;"><p>程序员</p></div>
          </div>
          <router-link to="/myMessage" style="color:white;"><Icon type="ios-create-outline" size="24"/></router-link>
      </div>
      <div>
        <router-link  class="myTask con" to="/myTask">
          <div>
            <Icon type="md-browsers" size="20"/> 
            <span> 我的任务</span>
          </div>
          <div><Icon type="ios-arrow-dropright" size="20"/></div>
        </router-link>
        <router-link class="myMessage con" to="/myMessage">
          <div>
            <Icon type="ios-create" size="24"/>
            <span>我的资料</span>
          </div>
          <div><Icon type="ios-arrow-dropright" size="20"/></div>
        </router-link>
        <router-link class="myCard con" to="/myCard">
          <div>
            <Icon type="md-photos" size="20"/>
            <span> 我的名片</span>
          </div>
          <div><Icon type="ios-arrow-dropright" size="20"/></div>
        </router-link>
      </div>
      
      <div class="exitlogin" @click="exitBtn">
        <Button style="width:60%;" size="large" shape="circle">退出登录</Button>
      </div>
      
  </div>
</template>
<script>
export default {
  methods: {
    exitBtn(){
        localStorage.removeItem('token');
        this.$router.push({
          name: "onLogin"
        })
    }
    
  }
}
</script>
<style>
    .person {
        background: white; 
        height: 100%;
        border: none;
    }
    .con {
      border-bottom: 1px solid #eee;
      color:#666;
      height:4rem;
      line-height:4rem;
      margin:0 1rem;
      display:flex;
      justify-content:space-between
    }
    .messageTmage {
      margin-top:2rem;
      width:70px;
      height:70px;
      border-radius: 50%;
    }
    .personHeader {
      padding:1rem;
      width:100%;
      height:16rem;
      background:#8894c4;
      color:white;
      display:flex;
      justify-content:space-between;
    }
    .exitlogin {
      text-align:center;
      padding: 10% 0;
      width: 100%;
      display:inline-block
    }
</style>