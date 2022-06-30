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

    <div class="q-pa-md row items-start q-gutter-md">
      <q-card
        v-for="message in this.messages"
        :key="message.id"
        class="my-card"
      >
        <q-card-section>
          <div class="text-h6">{{ message.title }}</div>
          <div class="text-subtitle2">{{ message.created_at }}</div>
        </q-card-section>

        <q-card-section>
          {{ message.content.replace(/[&]nbsp[;]/gi, " ") }}
        </q-card-section>

        <q-separator dark />

        <q-card-actions>
          <q-btn color="green" flat>read</q-btn>
          <q-btn color="red" flat>delete</q-btn>
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
}
</style>
