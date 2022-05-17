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

  created() {
    this.categories = [
      {
        id: 1,
        imgLink: "https://picsum.photos/500/300/?image=10",
        title: "IMAGE01",
        discrib: "this is image one",
      },
      {
        id: 2,
        imgLink: "https://picsum.photos/500/300/?image=5",
        title: "IMAGE02",
        discrib: "this is image 02",
      },
      {
        id: 3,
        imgLink: "https://picsum.photos/500/300/?image=11",
        title: "IMAGE03",
        discrib: "this is image 03",
      },
      {
        id: 4,
        imgLink: "https://picsum.photos/500/300/?image=14",
        title: "IMAGE04",
        discrib: "this is image 04",
      },
      {
        id: 5,
        imgLink: "https://picsum.photos/500/300/?image=17",
        title: "IMAGE05",
        discrib: "this is image 05",
      },
      {
        id: 1,
        imgLink: "https://picsum.photos/500/300/?image=2",
        title: "IMAGE01",
        discrib: "this is image one",
      },
      {
        id: 2,
        imgLink: "https://picsum.photos/500/300/?image=10",
        title: "IMAGE02",
        discrib: "this is image 02",
      },
      {
        id: 3,
        imgLink: "https://picsum.photos/500/300/?image=5",
        title: "IMAGE03",
        discrib: "this is image 03",
      },
      {
        id: 4,
        imgLink: "https://picsum.photos/500/300/?image=11",
        title: "IMAGE04",
        discrib: "this is image 04",
      },
      {
        id: 5,
        imgLink: "https://picsum.photos/500/300/?image=14",
        title: "IMAGE05",
        discrib: "this is image 05",
      },
    ];
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
