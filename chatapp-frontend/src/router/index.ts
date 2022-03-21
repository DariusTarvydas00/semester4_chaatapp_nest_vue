import { createRouter, createWebHistory } from "vue-router";
import WelcomePageLogin from "../views/WelcomePageLogin.vue";
import ChatView from "../views/ChatView.vue";
import WelcomePageRegister from "../views/WelcomePageRegister.vue";
import GroupChat from "../views/GroupChat.vue";

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
    {
      path: "/groupChat",
      name: "GroupChat",
      component: GroupChat,
    },
  ],
});

export default router;
