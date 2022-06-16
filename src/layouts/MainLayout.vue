<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-primary text-dark">
      <q-toolbar>
        <q-toolbar-title class="topTitle">
          <q-avatar>
            <img src="../assets/Logo.png" />
          </q-avatar>
          صنعت ابزار
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>

      <q-tabs class="navBarContainer" align="left">
        <q-route-tab class="navBar" to="/home" label="صفحه اصلی" />
        <q-route-tab class="navBar" to="/categories" label="دسته بندی" />
        <q-route-tab class="navBar" to="/home" label="فروشگاه" />
        <q-btn
          v-if="!this.user"
          class="loginBtn"
          label="ورود"
          @click="prompt = true"
        />
         
      </q-tabs>
    </q-header>

    <q-drawer
      dir="rtl"
      class="bg-secondary"
      v-model="rightDrawerOpen"
      side="right"
      elevated
    >
      <!--************** Drawer Content *********************-->

      <q-list class="qList">
        <ul class="navbarList">
          <li>
            <div
              @click="(prompt = true), (rightDrawerOpen = false)"
              class="login2"
            >
              <span class="material-icons"
                ><q-icon name="login" size="2em" /></span
              ><span class="drawerText">ورود</span>
            </div>
          </li>
          <li>
            <router-link to="/profile" class="myRouter"
              ><span class="material-icons"
                ><q-icon name="engineering" size="2em" /></span
              ><span class="drawerText">پروفایل کاربری</span>
            </router-link>
          </li>
          <li>
            <router-link to="/messages" class="myRouter"
              ><span class="material-icons"
                ><q-icon name="email" size="2em" /></span
              ><span class="drawerText">پیام ها</span></router-link
            >
          </li>
          <li>
            <router-link to="/contactUs" class="myRouter"
              ><span class="material-icons"
                ><q-icon name="call" size="2em" /></span
              ><span class="drawerText">تماس با ما</span>
            </router-link>
          </li>
          <li>
            <router-link to="/orderList" class="myRouter"
              ><span class="material-icons"
                ><q-icon name="shopping_bag" size="2em" /></span
              ><span class="drawerText">لیست سفارش ها</span></router-link
            >
          </li>
          <li>
            <router-link to="/shopingCart" class="myRouter"
              ><span class="material-icons"
                ><q-icon name="shopping_cart" size="2em" /></span
              ><span class="drawerText">سبد خرید</span></router-link
            >
          </li>
          <li>
            <router-link to="/aboutUs" class="myRouter"
              ><span class="material-icons"
                ><q-icon name="people_alt" size="2em" /></span
              ><span class="drawerText">درباره ما</span></router-link
            >
          </li>
          <li>
            <router-link to="/favorites" class="myRouter"
              ><span class="material-icons"
                ><q-icon size="2em" name="favorite" /></span
              ><span class="drawerText">علاقه مندی ها</span>
            </router-link>
          </li>
          <li>
            <router-link to="/importingCo" class="myRouter"
              ><span class="material-icons"
                ><q-icon name="lan" size="2em" /></span
              ><span class="drawerText">ثبت فروشگاه و شرکت ها</span>
            </router-link>
          </li>
          <li>
            <router-link to="/changecity" class="myRouter"
              ><span class="material-icons"
                ><q-icon name="edit_location_alt" size="2em" /></span
              ><span class="drawerText">تغییر شهر</span></router-link
            >
          </li>
          <li v-if="user" @click="logout">
            <div class="exitBtn">
              <span class="material-icons"
                ><q-icon name="logout" size="2em" /></span
              ><span class="drawerText">خروج</span>
            </div>
          </li>
        </ul>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>

  <!-- *******************************Modal Start *********************************** -->
  <q-dialog v-model="prompt" persistent>
    <q-card class="modalCard">
      <div>
        <q-icon id="closeIcon" name="close" v-close-popup />
      </div>
      <div>
        <loginUser :prompt="prompt"></loginUser>
      </div>
    </q-card>
  </q-dialog>
  <!-- **************************************End Modal ************************* -->
</template>

<script>
import { defineComponent, ref } from "vue";
import { mapActions } from "vuex";

import loginUser from "components/loginUser.vue";


export default defineComponent({
  name: "MainLayout",

  components: {
    loginUser,
  },

  setup() {
    const rightDrawerOpen = ref(false);

    return {
      prompt: ref(false),
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
  computed: {
    user() {
      return this.getMe();
    },
  },
  methods: {
    ...mapActions("auth", ["signOut", "getMe"]),
    logout() {
      this.signOut();
    },
    getUser() {
      return this.getMe();
    },
  },
});
</script>

<style lang="scss" scoped>
* {
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
}

.modalCard {
  min-width: 40%;
  min-height: 60%;
  display: grid;
  grid-template-rows: 10% 90%;
  justify-content: center;
  align-items: center;

  position: relative;

  background: rgba(182, 178, 233, 0.44);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8.9px);
  -webkit-backdrop-filter: blur(8.9px);
  border: 1px solid rgba(182, 178, 233, 0.78);
}

#closeIcon {
  position: absolute;
  right: 5%;
  top: 0% !important;
  cursor: pointer;
  font-size: 2em;
  color: rgba(0, 0, 0, 0.8);

  border-radius: 50%;
}
#closeIcon:hover {
  background-color: rgba(0, 0, 0, 0.24);
  transition: transform 0.25s ease-out;
}
.topToolbar {
  background-color: #e3f2fd;
  color: #01060e;
  box-shadow: rgba(0, 0, 0, 0.24) 5px 8px 15px;
}

.loginBtn {
  font-family: "Dirooz";
  position: absolute;
  right: 1em;
  min-width: 10%;
  margin-left: 5%;
  padding-left: 1em;
  padding-right: 1em;
  border-radius: 5px;
  @media screen and (max-width: 760px) {
    display: none;
  }
}
.loginBtn:hover {
  background-color: #090217;
  color: #f5f5f5;
}

q-icon {
  font-family: Arial, Helvetica, sans-serif;
}
.myRouter {
  color: #090217;
  text-decoration: none;
  font-size: 1em;
  font-family: "Dirooz";
  display: grid;
  grid-template-columns: 20% 80%;

  margin-left: 1em;
}

.myRouter:hover {
  background-color: #f4cf19;
  transition: 0.25s ease-out;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
ul {
  margin-top: 2em;
}

li {
  list-style: none;
  position: relative;
  /* box-shadow: inset -9px -9px 18px #bababa, inset 9px 9px 18px #ffffff; */
}

.searchBar {
  position: absolute;
  right: 1em;
  margin-top: 1em;
}

.navBarContainer {
  margin-right: 2em;
}

.topTitle {
  font-family: "Dirooz";
  margin-left: 1em;
}

.navBar {
  text-decoration-line: none;
  text-decoration-color: none;
  text-decoration-style: none;
  font-family: "Dirooz";
  margin-right: 1em;
  margin-left: 1em;
  border-radius: 5px;
}
.navBar:hover {
  background-color: #090217;
  color: #f5f5f5;
  padding: 2px;
  border-radius: 5px;
  transition: 200ms ease-out;
}

@media screen and (max-width: 480px) {
  .navBarContainer {
    margin-right: 0.5em;
  }
  .navBar {
    margin-right: 0.5em;
    margin-left: 0.5em;
  }
}

.abzarLogo {
  width: 6em;
  height: auto;
  margin-left: 30%;
  margin-top: 5%;
}
.login2 {
  font-family: "Dirooz";

  display: none;
  cursor: pointer;
  @media screen and (max-width: 760px) {
    display: grid;
    grid-template-columns: 20% 80%;
  }
}
.login2:hover {
  background-color: #f4cf19;
  transition: 0.25s ease-out;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.exitBtn {
  font-family: "Dirooz";

  display: grid;
  grid-template-columns: 20% 80%;
  cursor: pointer;
}
.exitBtn:hover {
  background-color: #f4cf19;
  transition: 0.25s ease-out;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.material-icons {
  margin-bottom: 5%;
  margin-top: 5%;
}

.drawerText {
  margin-bottom: 5%;
  margin-top: 5%;
}
</style>
