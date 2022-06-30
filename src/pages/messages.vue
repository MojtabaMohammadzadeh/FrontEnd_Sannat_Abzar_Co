<template>
  <div dir="rtl" class="mainContainerMessage">
    <div>
      <h4>
        پیام ها
        <hr />
      </h4>
    </div>
    <div class="q-gutter-y-md tabsMessage">
      <q-tabs v-model="tab" inline-label class="bg-purple text-white shadow-2">
        <q-tab name="mails" icon="mail" label="پیام ها" />
        <q-tab name="alarms" icon="alarm" label="در انتظار پاسخ" />
        <q-tab name="movies" icon="movie" label="پاسخ داده شده" />
      </q-tabs>
    </div>

    <div class="cartContainer">
      <q-card
        v-for="message in this.messages"
        :key="message.id"
        class="my-card"
      >
        <q-card-section>
          <div class="text-h6">{{ message.title }}</div>
          <div class="text-subtitle2">{{ message.created_at }}</div>
        </q-card-section>

        <!-- <q-card-section>
          {{ message.content.replace(/[&]nbsp[;]/gi, " ") }}
        </q-card-section> -->

        <q-separator dark />

        <q-card-actions class="btns">
          <q-btn id="readBtn" flat>خواندن</q-btn>
          <q-btn id="deletBtn" flat>حذف</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { api } from "boot/axios";
import FormData from "form-data";

export default defineComponent({
  name: "messagesOfUser",
  data() {
    return {
      messages: [],
    };
  },
  methods: {
    getMessages() {
      var data = new FormData();
      data.append("token", "B49K61mY");
      data.append("page_param", "1");
      data.append("per_param", "10");

      var config = {
        method: "post",
        url: "/allmessage",
        headers: {},
        data: data,
      };

      return api(config)
        .then((response) => {
          this.messages = response.data.message;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getMessages();
  },
  setup() {
    return {
      tab: ref("mails"),
    };
  },
});
</script>

<style lang="scss" scoped>
.mainContainerMessage {
  font-family: "mikhakMedium";
  display: flex;
  flex-direction: column;

  padding: 10%;
  background-color: F5F5DB;
}
.tabsMessage {
  width: 100%;
}

.my-card {
  max-width: 30%;
  max-height: 30%;
  overflow: hidden;
  margin: 16px;
  @media screen and (max-width: 960px) {
    max-width: 40%;
  }
  @media screen and (max-width: 760px) {
    max-width: 80%;
  }
}
.cartContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.btns {
  display: flex;
  justify-content: center;
  align-items: center;
}

#readBtn {
  background-color: #212121;
  color: #f5f5f5;
  padding: 0em 2em;
  margin: 1em;
  border-radius: 8px;
}
#readBtn:hover {
  background-color: #f5f5f5;
  color: #212121;
  transform: scale(1.1);

  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  transition: 200ms ease-in-out;
}

#deletBtn {
  border: 2px solid #212121;
  border-radius: 8px;
}
#deletBtn:hover {
  background-color: #212121;
  color: red;
  border: none;
  transform: scale(1.1);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  transition: 100ms ease-in-out;
}
</style>
