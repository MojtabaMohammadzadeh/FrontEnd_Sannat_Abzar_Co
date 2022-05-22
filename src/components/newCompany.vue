<template>
  <div dir="rtl" class="newCompanyContainer">
    <div class="">
      <q-uploader
        url="http://localhost:4444/upload"
        label="تصویر فروشگاه"
        multiple
        style="max-width: 300px"
      />
    </div>

    <div class="q-pa-md">
      <div class="selectContainer">
        <q-select
          standout="bg-teal text-white"
          class="selectCompany"
          color="purple-12"
          v-model="model"
          :options="options"
          label="استان"
          rounded
        >
          <template v-slot:prepend>
            <q-icon name="event" />
          </template>
        </q-select>
        <q-select
          standout="bg-teal text-white"
          class="selectCompany"
          color="purple-12"
          v-model="model"
          :options="options"
          label="شهر"
          rounded
        >
          <template v-slot:prepend>
            <q-icon name="event" />
          </template>
        </q-select>
        <q-select
          standout="bg-teal text-white"
          class="selectCompany"
          color="purple-12"
          v-model="model"
          :options="options"
          label="دسته بندی"
          rounded
        >
          <template v-slot:prepend>
            <q-icon name="event" />
          </template>
        </q-select>
        <q-select
          standout="bg-teal text-white"
          class="selectCompany"
          color="purple-12"
          v-model="model"
          :options="options"
          label="زیر مجموعه"
          rounded
        >
          <template v-slot:prepend>
            <q-icon name="event" />
          </template>
        </q-select>
        <q-select
          standout="bg-teal text-white"
          class="selectCompany"
          color="purple-12"
          v-model="model"
          :options="options"
          label="زیر دسته"
          rounded
        >
          <template v-slot:prepend>
            <q-icon name="event" />
          </template>
        </q-select>
      </div>
    </div>

    <q-input
      class="inputCompany"
      bottom-slots
      v-model="text"
      placeholder=" آدرس "
      :dense="dense"
    >
      <template v-slot:prepend>
        <q-icon name="place" />
      </template>
      <template v-slot:append>
        <q-icon name="close" @click="text = ''" class="cursor-pointer" />
      </template>
    </q-input>

    <q-input
      class="inputCompany"
      bottom-slots
      v-model="text"
      placeholder=" شماره تماس "
      :dense="dense"
    >
      <template v-slot:prepend>
        <q-icon name="phone" />
      </template>
      <template v-slot:append>
        <q-icon name="close" @click="text = ''" class="cursor-pointer" />
      </template>
    </q-input>
    <q-input
      class="inputCompany"
      bottom-slots
      v-model="text"
      placeholder=" نام فروشگاه "
      :dense="dense"
    >
      <template v-slot:prepend>
        <q-icon name="storefront" />
      </template>
      <template v-slot:append>
        <q-icon name="close" @click="text = ''" class="cursor-pointer" />
      </template>
    </q-input>

    <q-btn id="companyBtn" color="primary" label="ثبت تغییرات" />
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "newCompany",
  setup() {
    return {
      model: ref(null),

      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
    };
  },
});
</script>

<style lang="scss" scoped>
.newCompanyContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20%;
  margin-bottom: 3%;
  width: 90vw;
}
.selectContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 90vw;

  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
  }
}
.selectCompany {
  margin: 5%;

  border-radius: 20px;
  text-decoration: none;
}
.inputCompany {
  width: 80%;
}

#companyBtn {
  width: 20%;
  margin-top: 2em;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
#companyBtn:hover {
  width: 25%;
  margin-top: 2em;
  box-shadow: rgba(0, 0, 0, 0.5) 3px 8px 15px;
  transition: 100ms ease-in-out;
}
</style>
