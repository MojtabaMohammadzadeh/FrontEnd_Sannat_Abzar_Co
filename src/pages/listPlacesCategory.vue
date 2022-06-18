<template>
  <div class="categoryContainer">
    <categoryPlace
      :key="place.id"
      v-for="place in places"
      :place="place"
    ></categoryPlace>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import { api } from "boot/axios";
import categoryPlace from "../components/categoryPlace.vue";

export default defineComponent({
  name: "m-category",
  components: {
    categoryPlace,
  },
  data() {
    return {
      places: [],
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  methods: {
    getCategoryPlacesInfo() {
      var data = new FormData();
      data.append("token", "B49K61mY");
      data.append("page_param", "1");
      data.append("per_param", "10");
      data.append("id_category", "25");

      var config = {
        method: "post",
        url: "/listplacescategory",
        headers: {},
        data: data,
      };

      return api(config)
        .then((response) => {
          this.places = response.data.places;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getCategoryPlacesInfo();
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
</style>
