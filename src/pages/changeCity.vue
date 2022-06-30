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
      :options="options"
      label="استان"
    />

    <!-- equivalent -->
    <q-select
      class="selector"
      color="orange"
      filled
      v-model="model"
      :options="options"
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
      model: ref("تهران"),

      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
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
