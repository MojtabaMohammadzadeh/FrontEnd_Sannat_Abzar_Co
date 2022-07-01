<template>
  <div
    v-for="category in categories"
    :key="category.id"
    class="mainStoreCategory"
    dir="rtl"
  >
    <div class="titleContainer">
      <h5 class="title" dir="rtl">{{ category.title }}</h5>
    </div>

    <div class="categoryContainer">
      <storeSubCategoryCard
        :key="product.id"
        v-for="product in category.vip_products"
        :category="product"
      ></storeSubCategoryCard>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import storeSubCategoryCard from "../components/storeSubCategoryCard.vue";
import { api } from "boot/axios";
import FormData from "form-data";

export default defineComponent({
  name: "listOfCategories",
  components: {
    storeSubCategoryCard,
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
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
      const token = localStorage.getItem("token");
      data.append("token", token);
      data.append("page_param", "1");
      data.append("per_param", "10");
      data.append("vip_category_id", this.id);

      var config = {
        method: "post",
        url: "/get-vip-product-with-subcategory",
        headers: {},
        data: data,
      };

      return api(config)
        .then((response) => {
          this.categories = response.data.vip_subcategories;
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
.mainStoreCategory {
  font-family: "mikhakMedium";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 3%;
}
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
.titleContainer {
  background-color: #212121;
  color: #f5f5f5;
  width: 50%;
  display: flex;
  justify-content: center;
  margin: 1em;
  padding: 1em;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 16px;
  @media screen and (max-width: 960px) {
    width: 80%;
    padding: 0.5em;
  }
}
.title {
  margin: 0%;
  padding: 0.5em;
}
</style>
