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
      <q-card class="my-card bg-dark text-secondary">
        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section>
          {{ lorem }}
        </q-card-section>

        <q-separator dark />

        <q-card-actions>
          <q-btn flat>Action 1</q-btn>
          <q-btn flat>Action 2</q-btn>
        </q-card-actions>
      </q-card>

      <q-card class="my-card bg-dark text-secondary">
        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section>
          {{ lorem }}
        </q-card-section>

        <q-separator dark />

        <q-card-actions>
          <q-btn flat>Action 1</q-btn>
          <q-btn flat>Action 2</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "messagesOfUser",

  setup() {
    return {
      tab: ref("mails"),
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    };
  },
});
</script>

<style lang="scss" scoped>
.mainContainerMessage {
  font-family: "Dirooz";
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
