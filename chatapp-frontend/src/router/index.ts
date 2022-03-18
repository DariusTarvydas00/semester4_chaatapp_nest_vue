import { createRouter, createWebHistory } from "vue-router";
import WelcomePageLogin from "../views/WelcomePageLogin.vue";
import ChatView from "../views/ChatView.vue";
import WelcomePageRegister from "../views/WelcomePageRegister.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "WelcomePageLogin",
      component: WelcomePageLogin,
    },
    {
      path: "/chat",
      name: "Chat",
      component: ChatView,
    },
    {
      path: "/welcomePageRegister",
      name: "WelcomePageRegister",
      component: WelcomePageRegister,
    },
  ],
});

export default router;
