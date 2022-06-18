<template>
  <div class="main">
    <ul class="cards">
      <li class="cards_item">
        <router-link :to="`/category/${place.id}`">
          <div class="card">
            <div dir="rtl" class="card_content">
              <h6 class="card_title">{{ place.title }}</h6>
            </div>
            <div dir="rtl" class="card_content">
              <p class="card_title">{{ place.description }}</p>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  name: "categoryPlace",
  props: {
    place: Object,
  },
});
</script>

<style lang="scss" scoped>
h6 {
  font-family: "Dirooz";

  text-align: center;
  margin: 0%;
  padding: 0%;
}

img {
  height: 100%;
  max-width: 100%;
  vertical-align: middle;
  border-radius: 5px;
  margin-bottom: 1em;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}

.cards_item {
  display: flex;

  background-color: #f5f5f5;
  height: 40%;
  border-radius: 5px;
  padding: 1em;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.card_title {
  color: #090217;

  margin: 0px;
}

.card_text {
  color: #090217;
  font-size: 0.875rem;

  margin-bottom: 1.25rem;
  font-weight: 400;
}
</style>
