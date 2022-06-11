<template>
  <div class="mainContainerAboutUs">
    <div id="part01">
      <img id="pic01" src="../assets/pic01.png" alt="" />
    </div>
    <div id="part02">
      <div dir="rtl" class="cardSection">
        <h4>درباره ما</h4>
        <p>{{this.text}}</p>
      </div>
    </div>
    <div id="part03">
      <div dir="rtl" class="cardSection">
        <h4>بیشتر درباره ما</h4>
        <p>{{ this.institute_tell }}</p>
      </div>
    </div>
    <div id="part04"><img id="pic01" src="../assets/pic02.png" alt="" /></div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import { api } from "boot/axios";
import FormData from "form-data";

export default defineComponent({
  name: "aboutUs",
  data() {
    return {
      text: "",
      institute_tell: "",
    };
  },
  methods: {
    info() {
      var data = new FormData();
      data.append("token", "B49K61mY");
      data.append("page_param", "1");
      data.append("per_param", "10");

      var config = {
        method: "post",
        url: "/firstpage",
        headers: {},
        data: data,
      };

      return api(config)
        .then((response) => {
          this.text = response.data.about_us;
          this.institute_tell = response.data.institute_tell;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.info();
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
.mainContainerAboutUs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-family: "Dirooz";
  background-color: #f5f5db;
  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
  }
}

#part01 {
  width: 100%;
}
#part02 {
  width: 100%;
}

.cardSection {
  background-color: #f5f5db;
  margin: 10%;
  padding: 5%;
  border-radius: 15px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
}
#pic01 {
  max-width: 80%;
  margin: 5%;
}
</style>
