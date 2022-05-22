<template>
  <div>
    <shopItem></shopItem>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import shopItem from "../components/shopItem.vue";

export default defineComponent({
  components: {
    shopItem,
  },
  setup() {},
});
</script>

<style lang="scss" scoped></style>
