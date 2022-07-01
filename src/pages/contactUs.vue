<template>
  <div dir="rtl" class="mainContactUsContainer">
    <div id="app">
      <form class="vue-form" @submit.prevent="submit">
        <div class="error-message">
          <p v-show="!email.valid">لطفا شماره صحیح وارد نمایید</p>
        </div>

        <fieldset>
          <legend>خواسته خود را با ما در میان گذارید</legend>
          <div>
            <label class="label" for="name">نام*</label>
            <input
              type="text"
              name="name"
              id="name"
              required=""
              v-model="name"
            />
          </div>
          <div>
            <label class="label" for="phoneNumber">شماره تماس*</label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              required=""
              v-model="phoneNumber.value"
            />
          </div>
          <div>
            <label class="label" for="email">ایمیل</label>
            <input
              type="email"
              name="email"
              id="email"
              required=""
              :class="{ email, error: !email.valid }"
              v-model="email.value"
            />
          </div>

          <div>
            <label class="label" for="textarea">توضیحات</label>
            <textarea
              class="message"
              name="textarea"
              id="textarea"
              required=""
              v-model="message.text"
              :maxlength="message.maxlength"
            ></textarea>
          </div>
          <div>
            <input type="submit" value="ارسال" />
          </div>
        </fieldset>
      </form>
    </div>

    <div class="OurInfo">
      <img src="../assets/pic04.png" alt="" />
      <q-card class="my-card">
        <q-card-section>
          <div class="text-h6">اطلاعات تماس</div>
          <div class="text-subtitle2">تنظیمات موقتی</div>
        </q-card-section>

        <q-card-section class="q-pt-none">{{
          this.institute_tell
        }}</q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import { api } from "boot/axios";
import FormData from "form-data";

var emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export default defineComponent({
  name: "contactUs",
  data: function () {
    return {
      name: "",
      email: {
        value: "example@email.com",
        valid: true,
      },
      phoneNumber: {
        value: "09** *******",
        valid: true,
      },

      message: {
        text: "",
        maxlength: 255,
      },
      submitted: false,
      institute_tell: "",
    };
  },
  methods: {
    // submit form handler
    submit: function () {
      this.submitted = true;
    },
    // validate by type and value
    validate: function (type, value) {
      if (type === "email") {
        this.email.valid = this.isEmail(value) ? true : false;
      }
    },
    // check for valid email adress
    isEmail: function (value) {
      return emailRegExp.test(value);
    },
    // check or uncheck all
    checkAll: function (event) {
      this.selection.features = event.target.checked ? this.features : [];
    },
    info() {
      var data = new FormData();
      const token = localStorage.getItem("token");
      data.append("token", token);
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
  watch: {
    // watching nested property
    "email.value": function (value) {
      this.validate("email", value);
    },
  },
  mounted() {
    this.info();
  },
});
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Source+Code+Pro:300,400");

.OurInfo {
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -20%;

  @media screen and (max-width: 760px) {
    margin-top: 0%;
  }
  img {
    width: 50%;
    height: auto;
  }
}
.my-card {
  width: 100%;
  max-width: 70%;

  background-color: #f4cf19;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.mainContactUsContainer {
  font-family: "mikhakMedium";
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

a {
  color: #2c3e50;
  text-decoration: none;
}

header {
  position: relative;
  height: 150px;
  padding-top: 100px;
}

header h1 {
  text-align: center;
  font-size: 2.4rem;
  font-weight: 300;
}

#app {
  display: flex;
}

.vue-form {
  font-size: 16px;
  width: 500px;
  padding: 15px 30px;
  border-radius: 4px;
  margin: 50px auto;
  width: 500px;
  background-color: rgb(222, 224, 236);
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.3);
}
.vue-form fieldset {
  margin: 24px 0 0 0;
}
.vue-form legend {
  padding-bottom: 10px;
  border-bottom: 1px solid #ecf0f1;
}
.vue-form div {
  position: relative;
  margin: 20px 0;
}
.vue-form h4,
.vue-form .label {
  color: #94aab0;
  margin-bottom: 10px;
}
.vue-form .label {
  display: block;
}
.vue-form input,
.vue-form textarea,
.vue-form select,
.vue-form label {
  color: #2b3e51;
}
.vue-form input[type="text"],
.vue-form input[type="email"],
.vue-form textarea,
.vue-form select,
.vue-form legend {
  display: block;
  width: 100%;
  appearance: none;
}
.vue-form input[type="text"],
.vue-form input[type="email"],
.vue-form textarea,
.vue-form select {
  padding: 12px;
  border: 1px solid #cfd9db;
  background-color: #ffffff;
  border-radius: 0.25em;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);
}
.vue-form input[type="text"]:focus,
.vue-form input[type="email"]:focus,
.vue-form textarea:focus,
.vue-form select:focus {
  outline: none;
  border-color: #2c3e50;
  box-shadow: 0 0 5px rgba(44, 151, 222, 0.2);
}

.vue-form textarea {
  min-height: 120px;
  resize: vertical;
  overflow: auto;
}
.vue-form input[type="submit"] {
  border: none;
  background: #2c3e50;
  border-radius: 0.25em;
  padding: 12px 20px;
  color: #ffffff;
  font-weight: bold;
  float: right;
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  appearance: none;
}
.no-touch .vue-form input[type="submit"]:hover {
  background: #42a2e1;
}
.vue-form input[type="submit"]:focus {
  outline: none;
  background: #2b3e51;
}
.vue-form input[type="submit"]:active {
  transform: scale(0.9);
}
.vue-form .error-message {
  height: 35px;
  margin: 0px;
}
.vue-form .error-message p {
  background: #e94b35;
  color: #ffffff;
  font-size: 1.4rem;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border-radius: 0.25em;
  padding: 16px;
}
.vue-form .error {
  border-color: #e94b35 !important;
}

@-webkit-keyframes cd-bounce {
  0%,
  100% {
    -webkit-transform: scale(1);
  }
  50% {
    -webkit-transform: scale(0.8);
  }
}
@-moz-keyframes cd-bounce {
  0%,
  100% {
    -moz-transform: scale(1);
  }
  50% {
    -moz-transform: scale(0.8);
  }
}
@keyframes cd-bounce {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.8);
  }
}
</style>
