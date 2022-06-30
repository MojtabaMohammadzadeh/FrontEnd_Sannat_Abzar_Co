<template>
  <q-page class="q-ma-md">
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
    <div class="main-container">
      <!-- ************************Select Tabs********************** -->
      <div class="selectTabs">
        <div style="max-width: 600px">
          <q-tabs
            @click="refresh()"
            v-model="tab"
            align="justify"
            narrow-indicator
            class="q-mb-lg"
          >
            <q-tab
              class="qTab text-dark"
              name="1"
              label="ابزار"
              icon="construction"
            />
            <q-tab
              class="qTab text-dark"
              name="2"
              label="صنعت"
              icon="factory"
            />
            <q-tab
              class="qTab text-dark"
              name="3"
              label="ساختمان"
              icon="apartment"
            />
          </q-tabs>
        </div>
      </div>
      <!-- *************************End Tabs********************************** -->

      <section class="cardContainer">
        <cardMaker
          class="cardMaker"
          :key="brand.id"
          v-for="brand in brands"
          :post="brand"
        ></cardMaker>
      </section>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import cardMaker from "../components/cardMaker.vue";
import { api } from "boot/axios";
import FormData from "form-data";

export default defineComponent({
  name: "IndexPage",
  components: {
    cardMaker,
  },
  data() {
    return {
      brands: [],
      slides: [],
      tab: ref("1"),
      number: ref("1"),
    };
  },

  methods: {
    refresh() {
      this.number = this.tab;
      this.getBrandsInfo();
    },
    getBrandsInfo() {
      var data = new FormData();
      data.append("token", "B49K61mY");
      data.append("page_param", "1");
      data.append("per_param", "200");
      data.append("category_brand_id", this.number);

      var config = {
        method: "post",
        url: "/allbrandv2",
        headers: {},
        data: data,
      };

      return api(config)
        .then((response) => {
          this.slides = response.data.slider;
          this.brands = response.data.brands;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getBrandsInfo();
  },
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
});
</script>

<style lang="scss" scoped>
.selectTabs {
  display: flex;
  justify-content: center;
}
.qTab {
  font-family: "mikhakMedium";
}
.cardContainer {
  margin: 0% !important;
  padding: 0% !important;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
}
.cardMaker {
  margin: 0% !important;
  padding: 0% !important;
  min-width: 15vw;
  max-width: 15vw;

  @media screen and (max-width: 960px) {
    min-width: 30vw;
    max-width: 30vw;
  }
  @media screen and (max-width: 760px) {
    min-width: 40vw;
    max-width: 40vw;
  }
}

.qTab {
  background-color: #f4cf19;
  margin: 10px;
  border-radius: 5px;
}
</style>
