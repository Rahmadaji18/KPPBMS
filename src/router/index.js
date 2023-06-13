import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue";
import AboutView from "../views/AboutView.vue";
import PhotoView from "../views/PhotoView.vue";
import VideoView from "../views/VideoView.vue";
import DesignView from "../views/DesignView.vue";
import WebView from "../views/WebView.vue";
// import DashboardView from "../views/DashboardView.vue";
import NotfoundView from "../views/NotfoundView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/photography",
    name: "photography",
    component: PhotoView,
  },
  {
    path: "/videography",
    name: "videography",
    component: VideoView,
  },
  {
    path: "/graphicsdesign",
    name: "graphicsdesign",
    component: DesignView,
  },
  {
    path: "/webdevelopment",
    name: "webdevelopment",
    component: WebView,
  },
  // {
  //   path: "/dashboard",
  //   name: "dashboard",
  //   component: DashboardView,
  // },
  {
    path: "/error404",
    name: "error404",
    component: NotfoundView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
