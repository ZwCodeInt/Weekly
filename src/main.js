import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css"
Vue.use(ViewUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// router.beforeEach((to, from, next) => {
//   // 判断要进入的路由是否需要认证
//   if (to.name === 'onLogin') { // 如果是登录页则用next方法resolve掉这个钩子，如果不是，进行到下一个判断
//     return next();  
//   }
//   if(to.meta.auth) {
//       // 通过token令牌机制判断是否已经登录
//       const token = false;
//       if (token) {
//           next(); // 如果登录则放行，进入路由
//       } else {
//           // 跳转，并携带重定向地址
//           next({
//              path: from.path, 
//             //  query: {
//             //      redirect: to.path 
//             //  }
//           });
//       }
//   } else {
//       // 不需要验证的模块，直接放行
//       next();
//   }
// });
