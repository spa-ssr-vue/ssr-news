import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Main from "../views/Main.vue";
import Home from "../views/Home.vue";

import ResourceList from "../views/ResourceList.vue";

import Test from "../views/User/Test.vue";
import UserEdit from "../views/User/UserEdit.vue";
import UserList from "../views/User/UserList.vue";


Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    component: Main,
    children: [
      { path: "/", name: 'home', component: Home },
      { path: "/:resource/list", name: 'resource-list', component: ResourceList, props: true },
    ]
  },
];

const router = new VueRouter({
  routes
});

export default router;
