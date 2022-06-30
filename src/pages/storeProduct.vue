<template>
  <q-page>
    <div>
      <q-carousel
        v-if="Object.keys(slides).length > 0"
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
          class="headerOfProduct"
          v-for="(item, index) in slides"
          :key="index"
          :name="item.name"
          :img-src="'https://www.abzarsaanat.ir/public/' + item.img"
        />
      </q-carousel>
    </div>
    <div class="discText" dir="rtl">
      <div class="titleOfProduct">
        <h5>{{ this.product?.title }}</h5>
      </div>

      <div class="descOfProduct">
        <span v-html="this.product?.description"></span>
      </div>
    </div>
    <div class="btnOfProduct">
        <q-btn
          type="button"
          @click="addToCart"
          class="ShoppingBtn"
          icon="shopping_cart"
          icon-right="send"
          label="افزودن به سبد خرید"
        />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import { api } from "boot/axios";
import { ref } from "vue";



export default defineComponent({
  name: "productPage",
  components: {}, 
  data() {
    return {
      product: null,
      slides: [],
      order: [],
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  methods: {
    getProductInfo() {
      var data = new FormData();
      data.append("token", "B49K61mY");
      data.append("page_param", "1");
      data.append("per_param", "10");
      data.append("vip_product_id", this.id);
      var config = {
        method: "post",
        url: "/vip-product-single",
        headers: {},
        data: data,
      };
      return api(config)
        .then((response) => {
          this.product = response.data.vip_product;
          this.slides = response.data.sliders;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addToCart() {
      this.$store.dispatch("cart/addToCart", this.product);
    },
  },
  mounted() {
    this.getProductInfo();
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
.cardContainer {
  display: grid;

  grid-template-columns: repeat(1, 1fr);

  // @media screen and (min-width: 760px) {
  //   display: grid;
  //   grid-template-columns: repeat(2, 1fr);
  // }
  // @media screen and (min-width: 960px) {
  //   display: grid;
  //   grid-template-columns: repeat(2, 1fr);
  // }
  // @media screen and (min-width: 1290px) {
  //   display: grid;
  //   grid-template-columns: repeat(3, 1fr);
  //   padding-left: 3%;
  // }
}
.cardMaker {
  width: 100%;
}

.discText {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "mikhakMedium";
}

.titleOfProduct {
  background-color: #212121;
  color: aliceblue;

  width: 40%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;
  margin-top: 1em;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}
.descOfProduct {
  list-style: none;
  border: 2px solid #212121;
  border-radius: 20px;
  padding: 2em;
  margin-bottom: 1em;
}

.headerOfProduct {
  width: 90%;
  height: 40vh;
  margin: 1em;
}

.btnOfProduct {
  font-family: "mikhakMedium";
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;
}

#linkOfShopingCart {
  text-decoration: none;
}

.ShoppingBtn {
  background-color: #212121;
  color: aliceblue;
  font-family: "mikhakBold";
  border-radius: 20px;
  padding: 1em;
}
.ShoppingBtn:hover {
  transform: scale(1.1);
  background-color: aliceblue;
  color: #212121;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  transition: 100ms ease-in-out;
}
</style>
