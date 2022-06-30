<template>
  <div class="shopMainContainer">
    <div v-for="item in items" :key="item">
      <p v-if="items.length == 0">آیتمی وجود ندارد</p>

      <shopItem :item="item" class="shopCarts"></shopItem>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import shopItem from "../components/shopItem.vue";
import { mapGetters } from "vuex";

export default defineComponent({
  components: {
    shopItem,
  },
  computed: {
    ...mapGetters("cart", ["items"]),
  },
  data() {
    return {
      total_amount: 0,
    };
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
.shopMainContainer {
  margin: 0% !important;
  padding: 0% !important;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
}
.shopCarts {
  margin: 16px;
  padding: 8px;
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
</style>
