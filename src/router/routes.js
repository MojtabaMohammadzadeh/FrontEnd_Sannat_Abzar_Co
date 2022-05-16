const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "/home", component: () => import("pages/IndexPage.vue") },
      {
        path: "/categories",
        component: () => import("src/pages/listOfCategories.vue"),
      },
      {
        path: "/aboutUs",
        component: () => import("pages/aboutUs.vue"),
      },
      {
        path: "/contactUs",
        component: () => import("src/pages/contactUs.vue"),
      },
      {
        path: "/favorites",
        component: () => import("src/pages/favorits.vue"),
      },
      {
        path: "/importingCo",
        component: () => import("src/pages/importingCompanies.vue"),
      },
      {
        path: "/messages",
        component: () => import("src/pages/messages.vue"),
      },
      {
        path: "/orderList",
        component: () => import("src/pages/orderList.vue"),
      },
      {
        path: "/profile",
        component: () => import("src/pages/userProfile.vue"),
      },
      {
        path: "/changeCity",
        component: () => import("src/pages/changeCity.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
