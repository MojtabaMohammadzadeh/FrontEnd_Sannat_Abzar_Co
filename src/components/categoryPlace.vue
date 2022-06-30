<template>
  <div class="main">
    <ul class="cards">
      <li>
        <router-link class="categoryLink" :to="`/subcategory/${place.id}`">
          <div class="cards_item" dir="rtl">
            <div class="img-contain">
              <img :src="'https://www.abzarsaanat.ir/public/' + place.img" />
            </div>
            <div class="card_content">
              <h6 class="card_title">{{ place.title }}</h6>
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
* {
  margin: 0%;
}

h6 {
  font-family: "mikhakBold";

  text-align: center;
  margin-top: 1em;
}
.img-contain {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
  overflow: hidden;
  @media screen and (max-width: 760px) {
    height: 10vh;
  }
}
img {
  max-width: 100%;
  height: max-content;

  border-bottom: 1px solid rgba(7, 6, 6, 0.13);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  list-style: none;
}

.cards_item {
  background-color: #f5f5f5;
  cursor: pointer;
  border-radius: 5px;
  padding: 1em;
  list-style: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}

.cards_item:hover {
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  transform: scale(1.1);
  transition: 200ms ease-in-out;
}

.categoryLink {
  text-decoration: none;
  color: black;
}
.card_title {
  font-size: 12px;
  line-height: normal;
  margin-bottom: 1em;
  @media screen and (max-width: 760px) {
    font-size: 10px;
  }
}
</style>
