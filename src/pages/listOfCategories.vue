<template>
  <div class="categoryContainer">
    <categoryCard
      :key="category.id"
      v-for="category in categories"
      :category="category"
    ></categoryCard>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import categoryCard from "../components/categoriCard.vue";
import {api} from 'boot/axios'
import FormData from "form-data";

export default defineComponent({
  name: "listOfCategories",
  components: {
    categoryCard,
  },
  setup() {},
  data() {
    return {
      categories: [],
    };
  },
  methods: {
    getCategories() {
      var data = new FormData();
      data.append("token", "B49K61mY");
      data.append("page_param", "1");
      data.append("per_param", "10");

      var config = {
        method: "post",
        url: "/allcategoryplaces",
        headers: {},
        data: data,
      };

      return api(config)
        .then((response) => {
          this.categories = response.data.placescategory;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getCategories();
  },
});
</script>

<style lang="scss" scoped>
.categoryContainer {
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (min-width: 760px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 960px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (min-width: 1290px) {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
