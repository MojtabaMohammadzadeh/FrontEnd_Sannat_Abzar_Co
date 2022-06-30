<template>
  <q-page>
    <!-- ******************SLider******************* -->

    <q-carousel
      class="Slider"
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = true"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide
        class="Slide"
        v-for="(item, id) in slides"
        :key="id"
        :name="item.name"
        :img-src="'https://www.abzarsaanat.ir/public/' + item.img"
      />
    </q-carousel>

    <!-- *********************End Slider********************** -->
    <section class="mainContainer" dir="rtl">
      <div class="productContent">
        <h5>{{ places.title }}</h5>
        <span v-html="this.places?.description"></span>
      </div>
      <div class="address" dir="rtl">
        <div>
          <h6>آدرس:</h6>
          <p>{{ places.address }}</p>
        </div>
      </div>
      <div class="address" dir="rtl">
        <div>
          <h6>تلفن:</h6>
          <p>{{ places.phone }}</p>
        </div>
        <q-btn class="phoneBtn" color="dark" glossy label="تماس با ما" />
      </div>
      <div dir="rtl" class="bottmoBtn">
        <q-btn
          id="favoriteBtn"
          icon="favorite"
          glossy
          label="افزودن به علاقه مندی ها"
        />
        <q-btn id="reportBtn" icon="report_problem" glossy label="گزارش تخلف" />
      </div>
    </section>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { api } from "boot/axios";
export default defineComponent({
  name: "listPlaceFinal",
  data() {
    return {
      places: [],
      slides: [],
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
      data.append("token", "Yd1Qd2Ql");
      data.append("page_param", "1");
      data.append("per_param", "10");
      data.append("id_place", this.id);

      var config = {
        method: "post",
        url: "/singleplaces",
        headers: {},
        data: data,
      };

      return api(config)
        .then((response) => {
          this.places = response.data.single_place;
          this.slides = response.data.slider;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getCategoryPlacesInfo();
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
.mainContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "mikhakMedium";
}

.Slider {
  width: 100%;
  margin: 0%;
}

.Slide {
  max-width: 100%;
  height: auto;
}
.productContent {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "mikhakBold";
  background-color: #212121;
  color: #f5f5f5;
  width: 90%;
  border-radius: 16px;
  h5 {
    margin: 0%;
    line-height: normal;
  }

  @media screen and (min-width: 1280px) {
    width: 40%;
  }
}

.address {
  border: 1px solid #212121;
  padding: 1em;
  border-radius: 16px;
  margin-top: 32px;
  line-height: normal;
  word-wrap: break-word;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h6 {
    margin: 0%;
    line-height: normal;
  }
}

.phoneBtn {
  height: 50%;
  padding: 0em 2em;
}
.phoneBtn:hover {
  transform: scale(1.1);
  transition: 100ms ease-in-out;
}
.bottmoBtn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 32px;
}
#favoriteBtn {
  background-color: chartreuse;
  font-family: "mikhakBold";
  border-radius: 16px;
  margin: 8px;
}
#favoriteBtn:hover {
  transform: scale(1.1);
  color: red;
  transition: 200ms ease-in-out;
}

#reportBtn {
  background: none;
  border: 1px solid #212121;
  border-radius: 8px;
  margin-right: 32px;
}
</style>
