<template>
  <div class="main">
    <ul class="cards">
      <li class="cards_item">
        <router-link id="linkOfRouter" :to="`/store/product/${category.id}`">
          <div class="card">
            <div class="card_image">
              <img :src="'https://www.abzarsaanat.ir/public/' + category.img" />
            </div>
            <div dir="rtl" class="card_content">
              <h6 class="card_title">{{ category.title }}</h6>
              <h6 class="card_title">{{ category.price }} تومان</h6>
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
  name: "storeSubCategoryCard",
  props: {
    category: Object,
  },
});
</script>

<style lang="scss" scoped>
h6 {
  font-family: "mikhakBold";
  font-size: 1em;
  text-align: center;
}

img {
  height: 100%;
  max-width: 100%;

  border-radius: 5px;

  margin: 0%;
  @media screen and (max-width: 760px) {
    height: 50%;
  }
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.cards_item {
  background-color: #f5f5f5;
  cursor: pointer;
  border-radius: 5px;
  padding: 1em;
  list-style: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  height: 20%;

  @media screen and (max-width: 760px) {
    height: 30%;
  }
}

.cards_item:hover {
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  transform: scale(1.1);
  transition: 200ms ease-in-out;
}

#linkOfRouter {
  text-decoration: none;
  color: black;
}

.card_title {
  margin-bottom: 0%;
}
</style>
