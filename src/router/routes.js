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
      {
        path: "/shopingCart",
        component: () => import("src/pages/ShopingCart.vue"),
      },
      {
        path: "/brand/:id",
        component: () => import("src/pages/brandPage.vue"),
        props: {},
      },
      {
        path: "/categoryPlaces/:id",
        component: () => import("src/pages/listPlacesCategory.vue"),
        props: {},
      },
      {
        path: "/subcategory/:id",
        component: () => import("src/pages/subListPlacesCategory.vue"),
        props: {},
      },
      {
        path: "/placeproducts/:id",
        component: () => import("src/pages/listPlaceFinal.vue"),
        props: {},
      },
      {
        path: "/product/:id",
        component: () => import("src/pages/productPage.vue"),
        props: {},
      },
      {
        path: "/store/category",
        component: () => import("src/pages/storeCategories.vue"),
      },
      {
        path: "/store/subcategory/:id",
        component: () => import("src/pages/storeSubCategories.vue"),
      },
      {
        path: "/store/product/:id",
        component: () => import("src/pages/storeProduct.vue"),
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
