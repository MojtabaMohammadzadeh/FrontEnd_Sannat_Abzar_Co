<template>
  <q-page class="q-ma-md">
    <!-- **********************Slider***************** -->
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
    <!-- ************************End Slider********************* -->
    <section class="cardContainer">
      <cardSingleBrand
        class="cardMaker"
        :key="brand.id"
        v-for="brand in brands"
        :post="brand"
      ></cardSingleBrand>
    </section>
  </q-page>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import { api } from "boot/axios";
 
import {  ref } from "vue";
 
 
import cardSingleBrand from "../components/cardSingleBrand.vue";
 
export default defineComponent({
  name: "m-brand",
  components: {
    cardSingleBrand,
  },
  data() {
    return {
      slides: [],
      brands: [],
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  methods: {
    getBrandInfo() {
      var data = new FormData();
      data.append("token", "B49K61mY");
      data.append("page_param", "1");
      data.append("per_param", "10");
      data.append("id_brand", this.id);
      var config = {
        method: "post",
        url: "/singlebrand",
        headers: {},
        data: data,
      };
      return api(config)
        .then((response) => {
          this.brands = response.data.list_category;
          this.slides = response.data.slider;
 

          console.info(this.slides);

          this.name = brand.name;
 })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getBrandInfo();
  },
 
  setup() {
  return {
      slide: ref(1),
      autoplay: ref(true),
      tab: ref("mails"),
    };
  },
});
</script>

<style lang="scss" scoped>
.cardContainer {
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  padding-left: 10%;
  @media screen and (min-width: 760px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 960px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (min-width: 1290px) {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    padding-left: 3%;
  }
}
.cardMaker {
  width: 100%;
  margin: 0% !important;
  padding: 0% !important;
}
</style>
