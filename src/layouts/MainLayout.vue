<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <!-- **********************New Tolbar************* -->
      <q-toolbar class="bg-purple text-white shadow-2 rounded-borders">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-btn flat label="ورود/ثبت نام" @click="prompt = true" />
        <q-dialog v-model="prompt" persistent>
          <q-card style="min-width: 60vw">
            <q-card-actions align="right" class="text-primary">
              <!-- <q-btn icon="Cancle" flat v-close-popup /> -->
              <q-icon
                name="close"
                v-close-popup
                size="2em"
                color="black"
                style="cursor: pointer"
              />
              <!-- <q-btn flat label="Add address" v-close-popup /> -->
            </q-card-actions>
            <!-- <q-card-section> -->

            <!-- <div class="text-h6">Your address</div> -->
            <!-- </q-card-section> -->
            <loginUser></loginUser>
            <!-- <q-card-section class="q-pt-none">
              <q-input
                dense
                v-model="address"
                autofocus
                @keyup.enter="prompt = false"
              />
            </q-card-section> -->
          </q-card>
        </q-dialog>
        <q-space />

        <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
        <q-tabs v-model="tab" shrink>
          <router-link class="navBar" to="/categories"
            ><q-tab name="tab2" label="دسته بندی ها"
          /></router-link>
          <router-link to="/home"
            ><q-tab class="navBar" name="tab3" label="صفحه اصلی"
          /></router-link>
        </q-tabs>
      </q-toolbar>

      <!-- **********Search box********************* -->
      <q-toolbar>
        <q-btn class="storeBtn" color="deep-orange" glossy label="فروشگاه" />
        <searchBar class="searchBar" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> ابزار صنعت</q-item-label>

        <ul class="navbarList">
          <li>
            <router-link to="/profile" class="myRouter"
              ><span class="material-icons"><q-icon name="engineering" /></span
              >پروفایل کاربری</router-link
            >
          </li>
          <li>
            <router-link to="/messages" class="myRouter"
              ><span class="material-icons"><q-icon name="email" /></span>پیام
              ها</router-link
            >
          </li>
          <li>
            <router-link to="/contactUs" class="myRouter"
              ><span class="material-icons"><q-icon name="call" /></span> تماس
              با ما</router-link
            >
          </li>
          <li>
            <router-link to="/orderList" class="myRouter"
              ><span class="material-icons"><q-icon name="list_alt" /></span
              >لیست سفارش ها</router-link
            >
          </li>
          <li>
            <router-link to="/aboutUs" class="myRouter"
              ><span class="material-icons"><q-icon name="people_alt" /></span
              >درباره ما</router-link
            >
          </li>
          <li>
            <router-link to="/favorites" class="myRouter"
              ><span class="material-icons"
                ><q-icon size="2em" name="favorite"
              /></span>
              علاقه مندی ها</router-link
            >
          </li>
          <li>
            <router-link to="/importingCo" class="myRouter"
              ><span class="material-icons"><q-icon name="lan" /></span>لیست
              فروشگاه ها و شرکت های وارد کننده</router-link
            >
          </li>
          <li>
            <router-link to="/changecity" class="myRouter"
              ><span class="material-icons"
                ><q-icon name="edit_location_alt" /></span
              >تغییر شهر</router-link
            >
          </li>
          <li>
            <span class="material-icons"><q-icon name="logout" /></span> خروج
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
q-icon {
  font-family: Arial, Helvetica, sans-serif;
}
.myRouter {
  color: black;
  text-decoration: none;
  font-size: 1em;
  font-family: "Dirooz";
}

li {
  list-style: none;
  margin-bottom: 1.5em;
}

.storeBtn {
  position: absolute;
  left: 1em;
  font-family: "Dirooz";
}
.searchBar {
  position: absolute;
  right: 1em;
}

.navBar {
  text-decoration: none;
  color: aliceblue;
  font-family: "Dirooz";
}

q-btn {
  font-family: "Dirooz";
}
</style>
