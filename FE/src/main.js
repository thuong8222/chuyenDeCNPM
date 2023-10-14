import { createApp } from "vue";
import App from "./App.vue";
import VueCookies from 'vue-cookies';
import 'font-awesome/css/font-awesome.min.css';
import { createRouter, createWebHistory } from "vue-router";
import Login from "./pages/Login.vue";
import Register from "./pages/Register.vue";
import Home from "./pages/Home.vue";
const routes = [
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/", component:Home }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).use(VueCookies).mount("#app");

