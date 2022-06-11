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
            v-model="tab"
            align="justify"
            narrow-indicator
            class="q-mb-lg"
          >
            <q-tab
              class="qTab text-dark"
              name="mails"
              label="ابزار"
              icon="construction"
            />
            <q-tab
              class="qTab text-dark"
              name="alarms"
              label="صنعت"
              icon="factory"
            />
            <q-tab
              class="qTab text-dark"
              name="movies"
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
import {api} from 'boot/axios'
import FormData from "form-data";

export default defineComponent({
  name: "IndexPage",
  components: {
    cardMaker,
  },
  data() {
    return {
      brands: [],
      slides : [] ,
    };
  },
  methods: {
    getBrandsInfo() {
      
      var data = new FormData();
      data.append('token', 'B49K61mY');
      data.append('page_param', '1');
      data.append('per_param', '10');

      var config = {
        method: 'post',
        url: '/allbrandv2',
        headers: {},
        data : data
      };

      return api(config).then(response => {
        this.slides = response.data.slider;
        this.brands = response.data.brands;
      }).catch(error => {
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
      tab: ref("mails"),
    };
  }
});
</script>

<style lang="scss" scoped>
.main-container {
  padding-left: 2%;
  padding-right: 2%;
}
.selectTabs {
  display: flex;
  justify-content: center;
}
.qTab {
  font-family: "Dirooz";
}
.cardContainer {
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(2, 1fr);

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
    grid-template-columns: repeat(5, 1fr);
  }
}
.cardMaker {
  margin: 0%;
  padding: 0%;
}

.qTab {
  background-color: #f4cf19;
  margin: 10px;
  border-radius: 5px;
}
</style>
