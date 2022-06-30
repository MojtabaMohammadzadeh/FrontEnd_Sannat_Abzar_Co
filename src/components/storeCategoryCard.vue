<template>
  <div class="main">
    <ul class="cards">
      <li class="cards_item">
        <router-link
          id="linkOfRouter"
          :to="`/store/subcategory/${category.id}`"
        >
          <div class="card">
            <div class="card_image">
              <img :src="'https://www.abzarsaanat.ir/public/' + category.img" />
            </div>
            <div dir="rtl" class="card_content">
              <h6 class="card_title">{{ category.title }}</h6>
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
  name: "storeCategoryCard",
  props: {
    category: Object,
  },
});
</script>

<style lang="scss" scoped>
* {
  margin: 0%;
  padding: 0%;
}
h6 {
  font-family: "mikhakBold";
  font-size: 1em;
  text-align: center;
}

img {
  height: 80%;
  max-width: 90%;

  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.card_image {
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  height: 40vh;
  width: 100%;
  border-radius: 10px;
  @media screen and (max-width: 760px) {
    height: 30vh;
  }
  overflow: hidden;
}

.cards_item {
  cursor: pointer;
  border-radius: 5px;
  list-style: none;
}

.cards:hover {
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  transform: scale(1.1);
  transition: 200ms ease-in-out;
}

#linkOfRouter {
  text-decoration: none;
  color: black;
}
.card_content {
  margin-bottom: 1em;
}

.cards {
  margin: 1em;
}
</style>
