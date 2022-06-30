<template>
  <q-page :style="' background: linear-gradient(to right, #a1ffce, #faffd1);'">
    <section dir="rtl" class="categoryContainer">
      <subcategoryPlace
        class="subCategoryCard"
        :key="place.id"
        v-for="place in places"
        :place="place"
      ></subcategoryPlace>
    </section>
  </q-page>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import { api } from "boot/axios";
import subcategoryPlace from "../components/subcategoryPlace.vue";

export default defineComponent({
  name: "m-category",
  components: {
    subcategoryPlace,
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
      data.append("id_category", this.id);

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
.categoryContainer {
  display: grid;

  grid-template-columns: repeat(1, 1fr);

  // @media screen and (min-width: 760px) {
  //   display: grid;
  //   grid-template-columns: repeat(2, 1fr);
  // }
  @media screen and (min-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1290px) {
    grid-template-columns: repeat(3, 1fr);
    padding-left: 3%;
  }
}
.subCategoryCard {
  width: 100%;
}
</style>
