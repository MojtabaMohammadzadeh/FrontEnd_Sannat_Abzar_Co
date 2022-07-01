<template>
  <q-page class="flex flex-center">
    <div><h1>علاقه مندی ها</h1></div>
    <ul v-for="place in places" :key="place">
      <li>{{place.title}}</li>
    </ul>

  </q-page>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import { api } from "boot/axios";
export default defineComponent({
  name: "myFavorites",
  mounted() {
    this.getFavoritePlaces();
  },
  data() {
    return {
      places: [],
    };
  },
  methods: {
    getFavoritePlaces() {
      var data = new FormData();
      const token = localStorage.getItem("token");
      const city = localStorage.getItem("city");
      data.append("token", token);
      data.append("page_param", "1");
      data.append("per_param", "10");
      data.append("type_fav", "places");

      var config = {
        method: "post",
        url: "/allfovarite",
        headers: {},
        data: data,
      };

      return api(config)
        .then((response) => {
          this.places = response.data.places;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
</script>

<style scoped>
h1 {
  font-family: "mikhakBold";
}
</style>
