<template>
  <div class="categoryContainer">
    <categoryCard
      class="categoryCard"
      :key="category.id"
      v-for="category in categories"
      :category="category"
    ></categoryCard>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import categoryCard from "../components/categoriCard.vue";
import { api } from "boot/axios";
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
* {
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
}
.categoryContainer {
  // display: grid;
  // width: 99%;
  // grid-template-columns: repeat(2, 1fr);

  // background-color: brown;
  // @media screen and (min-width: 760px) {
  //   grid-template-columns: repeat(3, 1fr);
  // }
  // @media screen and (min-width: 960px) {
  //   grid-template-columns: repeat(3, 1fr);
  // }
  // @media screen and (min-width: 1290px) {
  //   grid-template-columns: repeat(5, 1fr);
  // }
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;

  margin-right: 1%;
  margin-top: 32px;
}
.categoryCard {
  // margin: 0% !important;
  margin-bottom: 32px;
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
