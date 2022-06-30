<template>
  <div class="importingContainer">
    <div v-if="prompt">
      <newCompany></newCompany>
    </div>
    <div v-if="!prompt">
      <h4>هیچ آیتمی وجود ندارد . لطفا اضافه کنید</h4>
    </div>
    <q-btn
      id="addBtn"
      round
      color="teal"
      :icon="prompt ? 'close' : 'add'"
      @click="addMethod"
    />
    <!-- *****************Modal Start*************************** -->

    <!-- *************************End Modal ************************* -->
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import newCompany from "src/components/newCompany.vue";
export default defineComponent({
  name: "importingCompanies",
  components: {
    newCompany,
  },
  setup() {
    return {
      prompt: ref(false),
    };
  },
  methods: {
    addMethod: function () {
      this.prompt = !this.prompt;
    },
  },
});
</script>

<style lang="scss" scoped>
.importingContainer {
  font-family: "mikhakMedium";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
}

#addBtn {
  position: fixed;
  bottom: 5%;
  right: 2%;
  font-size: 25px;
}
#addBtn:hover {
  bottom: 7%;
  font-size: 35px;
  transition: 200ms ease-in-out;
}
</style>
