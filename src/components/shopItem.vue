<template>
  <q-card class="shopCard">
    <img src="https://cdn.quasar.dev/img/mountains.jpg" />

    <q-card-section class="part01">
      <div class="text-h6">عنوان محصول</div>
      <div class="text-subtitle2">4000 تومان</div>
    </q-card-section>

    <q-card-section class="part01">
      <p>توضیحات محصول</p>
    </q-card-section>
    <q-card-section class="part02">
      <div class="part03">
        <q-btn
          push
          color="primary"
          round
          icon="add"
          class="QuantyBtn"
        /><q-input outlined v-model="text" class="inputQuantity" /><q-btn
          push
          color="primary"
          round
          icon="remove"
          class="QuantyBtn"
        />
      </div>
      <div id="trashIcon"><q-icon name="delete" size="3em" /></div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "shopItem",
};
</script>

<style lang="scss" scoped>
.shopCard {
  width: 25%;
  font-family: "Dirooz";
  margin: 5%;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-content: center;
}

.part03 {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}
.QuantyBtn {
  width: 1em;
  height: 1em;
}
#trashIcon {
  cursor: pointer;
}
.inputQuantity {
  margin: 1em;
  width: 30px;
  height: 20px;
}
</style>
