<template>
  <div class="userProfileContainer">
    <!-- <div class="headerWave">
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 500"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stop-color="#002bdcff"></stop>
            <stop offset="95%" stop-color="#32ded4ff"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,500 C 0,500 0,250 0,250 C 88.78571428571428,212.89285714285714 177.57142857142856,175.78571428571428 295,199 C 412.42857142857144,222.21428571428572 558.5,305.75 703,306 C 847.5,306.25 990.4285714285716,223.2142857142857 1113,200 C 1235.5714285714284,176.7857142857143 1337.7857142857142,213.39285714285717 1440,250 C 1440,250 1440,500 1440,500 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#gradient)"
          class="transition-all duration-300 ease-in-out delay-150 path-0"
          transform="rotate(-180 720 250)"
        ></path>
      </svg>
    </div> -->

    <!-- *******************************END SVG ************************** -->
    <div class="picContainer">
      <img
        class="profilePic"
        :src="'https://www.abzarsaanat.ir/public/' + image"
        alt=""
      />
      <q-icon id="profilePicIcon" name="photo_camera" />
    </div>
    <!-- ********************************INPUT ***************************** -->
    <div dir="rtl" class="form">
      <label>نام : </label>
      <span>{{ this.name }}</span>
      <br />
      <label>نام خانوادگی : </label>
      <span>{{ this.family }}</span>
      <br />
      <label>شماره تماس : </label>
      <span>{{ this.phone_number }}</span>
      <br />

      <q-btn color="dark" label="تغییر مشخصات" @click="prompt = true" />
    </div>

    <div class="imgContainer">
      <img src="../assets/pic03.png" alt="" />
    </div>

    <!-- *********************************MOdal***************************** -->
    <q-dialog v-model="prompt" persistent>
      <q-card class="modalCard">
        <form @submit="saveInfo">
          <div>
            <q-icon id="closeIcon" name="close" v-close-popup />
          </div>
          <div dir="rtl" class="modalForm">
            <input type="text" v-model="name" placeholder="نام" />
            <input type="text" v-model="family" placeholder="نام خانوادگی" />
            <input
              type="text"
              v-model="phone_number"
              placeholder="شماره تماس"
            />
            <q-btn
              type="submit"
              class="modalBtn"
              color="dark"
              label="ثبت تغییرات"
              v-close-popup
            />
          </div>
        </form>
      </q-card>
    </q-dialog>

    <!-- *************************END MODAL************************ -->
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { api } from "boot/axios";
import FormData from "form-data";

export default defineComponent({
  name: "userProfile",
  data() {
    return {
      name: "",
      family: "",
      phone_number: "",
      image: "",
    };
  },
  methods: {
    getInfo() {
      var data = new FormData();
      data.append("token", "j9En4rRP");
      data.append("page_param", "1");
      data.append("per_param", "10");

      var config = {
        method: "post",
        url: "/userprofile",
        headers: {},
        data: data,
      };

      return api(config)
        .then((response) => {
          this.name = response.data.user_detail.name;
          this.family = response.data.user_detail.family;
          this.phone_number = response.data.user_detail.phone_number;
          this.image = response.data.user_detail.img;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    saveInfo(e) {
      e.preventDefault();
      var data = new FormData();
      data.append("token", "j9En4rRP");
      data.append("name", this.name);
      data.append("family", this.family);
      data.append("phone_number", this.phone_number);

      var config = {
        method: "post",
        url: "/updateuser",
        headers: {},
        data: data,
      };

      api(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          this.prompt.value = false;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getInfo();
  },
  setup() {
    return {
      prompt: ref(false),
    };
  },
});
</script>

<style lang="scss" scoped>
.userProfileContainer {
  position: relative;
  margin: 0%;
  padding: 0%;
}

.headerWave {
  position: absolute;
  top: 0%;
  width: 100%;
}

//******************PIC************
.picContainer {
  position: absolute;
  top: 2em;
  right: 4em;
  width: 15%;
  border-radius: 20px;
  background-color: #f5f5f5;
  box-shadow: 1px 12px 12px 5px rgba(0, 0, 0, 0.4);

  @media screen and (max-width: 760px) {
    top: 5em;
    right: 10em;
    width: 25%;
  }
}
.profilePic {
  border-radius: 50%;
  width: 90%;
  margin: 5%;

  @media screen and (max-width: 760px) {
    width: 90%;
  }
}
#profilePicIcon {
  cursor: pointer;
  font-size: 3em;
  position: absolute;
  bottom: 0.25em;
  left: 0.25em;
  @media screen and (max-width: 760px) {
    bottom: 0.25em;
    left: 0em;
    font-size: 2em;
  }
}
#profilePicIcon:hover {
  color: blue;
  transition: 100ms ease-in-out;
}
.form {
  width: 70%;
  position: absolute;
  top: 15em;
  left: 6em;

  font-family: "Dirooz";

  @media screen and (max-width: 760px) {
    top: 15em;
    left: 0em;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h5 {
    margin: 1em;
  }
}
.modalCard {
  min-width: 40%;
  min-height: 60%;
  font-family: "Dirooz";
  background: rgba(182, 178, 233, 0.44);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8.9px);
  -webkit-backdrop-filter: blur(8.9px);
  border: 1px solid rgba(182, 178, 233, 0.78);

  @media screen and (max-width: 760px) {
    min-width: 90%;
    min-height: 40%;
  }
}

#closeIcon {
  position: absolute;
  right: 5%;
  top: 5% !important;
  cursor: pointer;
  font-size: 2em;
  color: rgba(0, 0, 0, 0.8);

  border-radius: 50%;
}
.modalForm {
  position: absolute;
  top: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  input {
    margin: 1em;
    width: 70%;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    padding-right: 1em;
    border-radius: 20px;
    border: none;
    box-shadow: 1px 12px 12px 1px rgba(0, 0, 0, 0.2);
  }
  .modalBtn {
    margin-top: 2em;
  }
}
.imgContainer {
  position: absolute;
  left: 3em;
  top: 1em;

  @media screen and (max-width: 760px) {
    display: none;
  }
  img {
    width: auto;
    height: 70vh;
  }
}
</style>
