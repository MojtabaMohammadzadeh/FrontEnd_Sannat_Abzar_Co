<template>
  <q-page class="changeContainer">
    <div>
      <h4>.لطفا شهر و استان خود را انتخاب نمایید</h4>
    </div>
    <q-select
      class="selector"
      clearable
      filled
      color="purple-12"
      v-model="model"
      :options="allStates"
      label="استان"
    />

    <!-- equivalent -->
    <q-select
      class="selector"
      color="orange"
      filled
      v-model="city"
      :options="allStates"
      label="شهرستان"
    >
      <template v-if="model" v-slot:append>
        <q-icon
          name="cancel"
          @click.stop="model = null"
          class="cursor-pointer"
        />
      </template>
    </q-select>

    <q-btn color="dark" label="ثبت" id="CityBtn" />
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "changeCity",

  setup() {
    return {
      city: ref("تهران"),
      model: ref("تهران"),

      allStates: [
        "آذربایجان شرقی",
        "آذربایجان غربی",
        "اردبیل",
        "اصفهان",
        "البرز",
        "ایلام",
        "بوشهر",
        "تهران",
        "چهارمحال بختیاری",
        "خراسان جنوبی",
        "خراسان رضوی",
        "خراسان شمالی",
        "خوزستان",
        "زنجان",
        "سمنان",
        "سیستان و بلوچستان",
        "فارس",
        "قزوین",
        "قم",
        "کردستان",
        "کرمان",
        "کرمانشاه",
        "کهگیلویه و بویراحمد",
        "گلستان",
        "گیلان",
        "لرستان",
        "مازندران",
        "مرکزی",
        "هرمزگان",
        "همدان",
        "یزد",
      ],
    };
  },
});
</script>

<style scoped>
.changeContainer {
  font-family: "mikhakMedium";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.selector {
  width: 50%;
  margin: 2em;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
#CityBtn {
  width: 25%;
}
#CityBtn:hover {
  width: 30%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: 300ms ease-in-out;
}
</style>
