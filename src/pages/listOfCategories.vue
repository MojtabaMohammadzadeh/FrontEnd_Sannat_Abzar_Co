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
        imgLink:
          "https://images.unsplash.com/photo-1455165814004-1126a7199f9b?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870",
        title: " جوش و برش",
        discrib: "this is image one",
      },
      {
        id: 2,
        imgLink:
          "https://images.unsplash.com/photo-1582489853490-cd3a53eb4530?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870",
        title: "فروشگاه های ابزارآلات و تجهیزات صنعتی ",
        discrib: "this is image 02",
      },
      {
        id: 3,
        imgLink:
          "https://images.unsplash.com/photo-1530863506128-dc9eb5c3e0fc?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870",
        title: "ابزار و تجهیزات ساختمانی",
        discrib: "this is image 03",
      },
      {
        id: 4,
        imgLink:
          "https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869",
        title: "تولید ابزار و تجهیزات صنعتی",
        discrib: "this is image 04",
      },
      {
        id: 5,
        imgLink:
          "https://images.unsplash.com/photo-1593106410288-caf65eca7c9d?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870",
        title: "ابزار تراش",
        discrib: "this is image 05",
      },
      {
        id: 6,
        imgLink:
          "https://images.unsplash.com/photo-1563456019498-843e11bdaae0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869",
        title: "ابزارآلات و کمپرسور بادی",
        discrib: "this is image one",
      },
      {
        id: 7,
        imgLink:
          "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871",
        title: "چسب و رنگ",
        discrib: "this is image 02",
      },
      {
        id: 8,
        imgLink:
          "https://images.unsplash.com/photo-1582297649766-c07106890cea?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869",
        title: "الکتروموتور و گیربکس",
        discrib: "this is image 03",
      },
      {
        id: 9,
        imgLink:
          "https://images.unsplash.com/photo-1635947160528-79e4027467f9?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870",
        title: "کشاورزی و باغبانی",
        discrib: "this is image 04",
      },
      {
        id: 10,
        imgLink:
          "https://images.unsplash.com/photo-1478486982180-2de2fafa19f9?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871",
        title: "کالاهای ایمنی",
        discrib: "this is image 05",
      },
      {
        id: 11,
        imgLink:
          "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870",
        title: "برق و پنومات",
        discrib: "this is image 05",
      },
      {
        id: 12,
        imgLink:
          "https://images.unsplash.com/photo-1523848309072-c199db53f137?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870",
        title: "معادن و فلزلت",
        discrib: "this is image 05",
      },
      {
        id: 13,
        imgLink:
          "https://images.unsplash.com/photo-1621905251918-48416bd8575a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869",
        title: "خدمات و تعمیرکاران مجاز",
        discrib: "this is image 05",
      },
      {
        id: 14,
        imgLink:
          "https://images.unsplash.com/photo-1640682841767-cdfce3aea6e0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870",
        title: "ابزارهای کارکرده",
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
