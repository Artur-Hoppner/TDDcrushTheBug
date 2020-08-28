import Vue from "vue";
import VueRouter from "vue-router";
import Bug from "../views/Bug.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Bug",
    component: Bug,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
