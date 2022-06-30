<template>
  <div class="userProfileContainer">
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
      <div class="labelForm">
        نام : <span>{{ this.name }}</span>
      </div>

      <div class="labelForm">
        نام خانوادگی : <span>{{ this.family }}</span>
      </div>

      <div class="labelForm">
        شماره تماس : <span>{{ this.phone_number }}</span>
      </div>

      <q-btn class="changeBtn" label="تغییر مشخصات" @click="prompt = true" />
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
  margin: 0%;
  padding: 0%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.headerWave {
  position: absolute;
  top: 0%;
  width: 100%;
}

//******************PIC************
.picContainer {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: 1px 12px 12px 5px rgba(0, 0, 0, 0.4);
}
.profilePic {
  border-radius: 50%;

  width: 90%;
  margin: 5%;
}
#profilePicIcon {
  cursor: pointer;
  font-size: 3em;
}
#profilePicIcon:hover {
  color: blue;
  transition: 100ms ease-in-out;
}
.form {
  width: 100%;
  padding: 5%;
  color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 85, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );

  @media screen and (max-width: 760px) {
    top: 15em;
    left: 0em;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

.labelForm {
  margin-bottom: 20px;
  font-family: "mikhakBold";
  font-size: 1.5em;
}
.modalCard {
  min-width: 40%;
  min-height: 60%;
  font-family: "mikhakMedium";
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
.changeBtn {
  background-color: #f4cf19;
  color: #17043a;
  font-family: "mikhakBold";
  font-size: 1em;
  margin: 1em;
  border-radius: 10%;
}
.changeBtn:hover {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  background-color: #17043a;
  color: #f5f5f5;
  transform: scale(1.1);
  transition: 100ms ease-in-out 100ms;
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
  font-family: "mikhakBold";
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
  top: 5em;

  @media screen and (max-width: 760px) {
    display: none;
  }
  img {
    width: auto;
    height: 70vh;
  }
}
</style>
