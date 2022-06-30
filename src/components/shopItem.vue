<template>
  <q-card class="shopCard" dir="rtl">
    <img :src="'https://www.abzarsaanat.ir/public/' + item.product.img" />

    <q-card-section class="part01">
      <div class="texth6">{{ item.product.title }}</div>
      <div class="text-subtitle2">{{ item.product.price }} تومان</div>
    </q-card-section>

    <q-card-section class="part02">
      <!-- <q-btn
          push
          color="primary"
          round
          icon="add"
          @click="addToCart"
          class="QuantyBtn"
        /> -->

      <q-input
        outlined
        v-model="quantity"
        class="inputQuantity"
        value="0"
        type="number"
      />

      <!-- <q-btn
          push
          color="primary"
          round
          icon="remove"
          @click="removeFromCart"
          class="QuantyBtn"
        /> -->

      <div id="trashIcon">
        <q-icon name="delete" @click="removeAllFromCart" />
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "shopItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    quantity() {
      return this.item.quantity;
    },
  },
  methods: {
    addToCart() {
      this.$store.dispatch("cart/addCartItem", this.item);
    },
    removeFromCart() {
      this.$store.dispatch("cart/removeFromCart", this.item);
    },
    removeAllFromCart() {
      this.$store.dispatch("cart/removeFromCartAt", this.item);
    },
  },
};
</script>

<style lang="scss" scoped>
.shopCard {
  width: 25%;
  font-family: "mikhakMedium";
  margin: 20px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding-bottom: 1em;
}
.part01 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#imgShop {
  width: 80%;
  height: auto;
  border-radius: 20px;
}

.part02 {
  display: grid;
  grid-template-columns: 3fr 1fr;
  justify-items: center;
  align-content: center;
}

.QuantyBtn {
  width: 1em;
  height: 1em;
}
#trashIcon {
  cursor: pointer;
  font-size: 2em;
  margin-right: 1em;
}
.inputQuantity {
  width: 80%;
}

.texth6 {
  font-family: "mikhakBold";
  font-size: 14px;
}
</style>
