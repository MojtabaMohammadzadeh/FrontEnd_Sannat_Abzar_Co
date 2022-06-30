<template>
  <q-page class="mainStore">
    <!-- ******************SLider******************* -->
    <div>
      <q-carousel
        animated
        v-model="slide"
        navigation
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide
          v-for="(item, index) in slides"
          :key="index"
          :name="item.name"
          :img-src="'https://www.abzarsaanat.ir/public/' + item.img"
        />
      </q-carousel>
    </div>
    <!-- *********************End Slider********************** -->
    <div class="categoryContainer">
      <storeCategoryCard
        :key="category.id"
        v-for="category in categories"
        :category="category"
      ></storeCategoryCard>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import storeCategoryCard from "../components/storeCategoryCard.vue";
import { api } from "boot/axios";
import FormData from "form-data";

export default defineComponent({
  name: "listOfCategories",
  components: {
    storeCategoryCard,
  },
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
  data() {
    return {
      categories: [],
      slides: [],
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
        url: "/vip-category",
        headers: {},
        data: data,
      };

      return api(config)
        .then((response) => {
          this.categories = response.data.vip_categories;
          this.slides = response.data.sliders;
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
.mainStore {
  margin-bottom: 5%;
}
</style>
