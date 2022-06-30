<template>
  <div class="categoryContainer">
    <categoryPlace
      class="placeCategoryCard"
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
  components: { categoryPlace },
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

      data.append("page_param", "1");
      data.append("per_param", "10");
      data.append("id_category", this.id);

      var config = {
        method: "post",
        url: "/allsubcategoryplaces",
        headers: {},
        data: data,
      };

      return api(config)
        .then((response) => {
          this.places = response.data.placescategory;
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
.categoryContainer {
  padding: 0% !important;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  margin-right: 3%;
}
.placeCategoryCard {
  margin-top: 16px;
  margin-bottom: 16px;

  padding: 0% !important;
  min-width: 20vw;
  max-width: 20vw;

  @media screen and (max-width: 960px) {
    min-width: 30vw;
    max-width: 30vw;
  }
  @media screen and (max-width: 760px) {
    min-width: 40vw;
    max-width: 40vw;
  }
}
</style>
