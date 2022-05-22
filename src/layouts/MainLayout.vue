<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="topToolbar">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <!-- ****************************Login Start******************************************* -->
        <q-btn class="loginBtn" label="ورود" @click="prompt = true" />

        <!-- *******************************Modal Start *********************************** -->
        <q-dialog v-model="prompt" persistent>
          <q-card class="modalCard">
            <div>
              <q-icon id="closeIcon" name="close" v-close-popup />
            </div>
            <div>
              <loginUser></loginUser>
            </div>
          </q-card>
        </q-dialog>
        <!-- **************************************End Modal ************************* -->

        <q-space />

        <q-tabs v-model="tab" class="text-teal navBarContainer">
          <q-tab>
            <router-link class="navBar" to="/home">فروشگاه</router-link></q-tab
          >
          <q-tab
            ><router-link class="navBar" to="/categories"
              >دسته بندی
            </router-link></q-tab
          >
          <q-tab>
            <router-link class="navBar" to="/home"
              >صفحه اصلی</router-link
            ></q-tab
          >
        </q-tabs>
      </q-toolbar>

      <!-- **********Search box********************* -->
      <div>
        <searchBar class="searchBar" />
      </div>
    </q-header>

    <q-drawer class="bg-blue-1" v-model="leftDrawerOpen" show-if-above bordered>
      <q-list class="qList">
        <q-item-label class="logoContainer" header
          ><img class="abzarLogo" src="../assets/Abzar-Sanat.png" alt=""
        /></q-item-label>

        <ul class="navbarList">
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
          <li>
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
</template>

<script>
import { defineComponent, ref } from "vue";
import searchBar from "components/searchBar.vue";
import loginUser from "components/loginUser.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    searchBar,
    loginUser,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      prompt: ref(false),
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style scoped>
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
  color: #cccdeb;
  min-width: 10%;
  margin-left: 1em;
  padding-left: 1em;
  padding-right: 1em;
  border-radius: 5px;
  background: linear-gradient(45deg, #4b5096, #a1a3c9);
  box-shadow: 5px -5px 10px #bababa, -5px 5px 10px #e6f0f8;
}
.loginBtn:hover {
  background: linear-gradient(60deg, #7479bd, #cccdeb);
}

q-icon {
  font-family: Arial, Helvetica, sans-serif;
}
.myRouter {
  color: #041836;
  text-decoration: none;
  font-size: 1em;
  font-family: "Dirooz";
  display: grid;
  grid-template-columns: 20% 80%;

  margin-left: 1em;
}

.myRouter:hover {
  color: #e0e0e0;
  background-color: #041836;
}
ul {
  margin-top: 2em;
}

li {
  list-style: none;
  position: relative;
  /* box-shadow: inset -9px -9px 18px #bababa, inset 9px 9px 18px #ffffff; */
}

li:after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #0087ca;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
li:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
li:hover {
  background-color: #afaee6;
  box-shadow: inset -9px -9px 18px #bababa, inset 9px 9px 18px #ffffff;

  transition: transform 0.25s ease-out;
}

.searchBar {
  position: absolute;
  right: 1em;
  margin-top: 1em;
}

.navBarContainer {
  margin-right: 2em;
}

.navBar {
  text-decoration-line: none;
  text-decoration-color: none;
  text-decoration-style: none;
  font-family: "Dirooz";
  margin-right: 1em;
  margin-left: 1em;
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

.exitBtn {
  font-family: "Dirooz";

  display: grid;
  grid-template-columns: 20% 80%;
  cursor: pointer;

  padding-left: 35%;
  padding-top: 3%;
  padding-bottom: 3%;
  margin-top: 20%;
  background: linear-gradient(315deg, #adb7cc, #f4f4f5);
  box-shadow: 9px 9px 18px #bababa, -9px -9px 18px #ffffff;
}
.exitBtn:hover {
  background: #e0e0e0;
  box-shadow: inset -9px -9px 18px #bababa, inset 9px 9px 18px #ffffff;
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
