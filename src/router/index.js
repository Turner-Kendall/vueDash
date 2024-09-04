import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import Edit from "../views/EditLink.vue";
import Add from "../views/AddLink.vue"
import PageView from "../views/PageView.vue";
import Search from "../views/SearchPage.vue";
import axios from "../js/axios";
import { store } from "../store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // this is how my simple backend login deal works on the front-end
    // {
    //   path: "/admin/:name",
    //   name: "Admin",
    //   component: AdminView,
    //   meta: { requiresAuth: true },
    // },
    
    {
      path: "/edit/:name",
      name: "Edit",
      component: Edit,
      // meta: { requiresAuth: true },
    },

    {
      path: "/add",
      name: "Add",
      component: Add,
      // meta: { requiresAuth: true },
    },

    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/SignIn.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/SignUp.vue"),
    },
    {
      path: "/page/:name",
      name: "PageView",
      component: PageView,
    },
    {
      path: "/search/:name",
      name: "Search",
      component: Search,
    },
    {
      path: "/more",
      name: "MoreWidgets",
      component: () => import("../views/MorePage.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFound.vue"),
    }
  ],
});

router.beforeEach(async (to, from) => {
  try {
    const authenticated = await is_authenticated();
    if (to.meta.requiresAuth && !authenticated) {
      // User is not authenticated, redirect to login
      return { path: "/login" };
    }
    if ((to.path === "/login" || to.path === "/register") && authenticated) {
      // User is authenticated and trying to access login, redirect to /
      return { path: "/" };
    }
  } catch (err) {
    alert('server is down');
  }
});

async function is_authenticated() {
  try {
    const response = await axios.get("profile/");
    store.updateName(response.data.username);
    return true;
  } catch (err) {
    return false;
  }
}

export default router;
