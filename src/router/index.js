import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/person",
    name: "person",
    meta: { auth:true },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/person.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },{
    path: "/suggest",
    name: "suggest",
    meta: { auth:true },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/suggest.vue")
  },
  {
    path: "/addRecord",
    name: "addRecord",
    component: () =>
      import("../views/addRecord.vue")
  },{
    path: "/search",
    name: "search",
    component: () =>
      import("../views/search.vue")
  },{
    path: "/edit",
    name: "searchEdit",
    component: () =>
      import("../views/edit.vue")
  },{
    path: "/myTask",
    name: "myTask",
    component: () =>
      import("../views/personMessage/myTask.vue")
  },{
    path: "/myMessage",
    name: "myMessage",
    component: () =>
      import("../views/personMessage/myMessage.vue")
  },{
    path: "/myCard",
    name: "myCard",
    component: () =>
      import("../views/personMessage/myCard.vue")
  },{
    path: "/onLogin",
    name: "onLogin",
    component: () =>
      import("../views/onLogin.vue")
  },{
    path: "/register",
    name: "register",
    component: () =>
      import("../views/register.vue")
  }
];

const router = new VueRouter({
  routes
});


export default router;

