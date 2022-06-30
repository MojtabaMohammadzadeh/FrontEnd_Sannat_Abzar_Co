<template>
  <q-page :style="' background: linear-gradient(to right, #a1ffce, #faffd1);'">
    <section class="cardContainer">
      <productCard
        class="cardMaker"
        :key="product.id"
        v-for="product in products"
        :post="product"
      >
      </productCard>
    </section>
  </q-page>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import { api } from "boot/axios";
import { ref } from "vue";
import productCard from "../components/productCard.vue";

export default defineComponent({
  name: "productPage",
  components: {
    productCard,
  },
  data() {
    return {
      products: [],
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
      data.append("id_category", this.id);
      var config = {
        method: "post",
        url: "/singlecategory",
        headers: {},
        data: data,
      };
      return api(config)
        .then((response) => {
          this.products = response.data.list_products;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getProductInfo();
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

  grid-template-columns: repeat(1, 1fr);

  // @media screen and (min-width: 760px) {
  //   display: grid;
  //   grid-template-columns: repeat(2, 1fr);
  // }
  @media screen and (min-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1290px) {
    grid-template-columns: repeat(3, 1fr);
    padding-left: 3%;
  }
}
.cardMaker {
  width: 100%;
}
</style>
