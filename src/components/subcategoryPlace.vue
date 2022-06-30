<template>
  <div class="main">
    <ul class="card-wrapper">
      <li class="card" dir="rtl">
        <router-link class="categoryLink" :to="`/placeproducts/${place.id}`">
          <div class="cards_item">
            <img
              :src="'https://www.abzarsaanat.ir/public/' + place.img"
              alt=""
            />

            <h6>{{ place.title }}</h6>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  name: "subcategoryPlace",
  props: {
    place: Object,
  },
});
</script>

<style lang="scss" scoped>
.card {
  font-family: "mikhakMedium";
  height: 15vh;
  width: 90%;
  color: #212121;
  cursor: pointer;
  overflow: hidden;
  /* From https://css.glass */

  background: rgba(240, 234, 234, 0.46);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  border: 1px solid rgba(82, 77, 77, 0.39);

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 10vh;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }

  img {
    height: 13vh;
    border-radius: 20%;
    margin: 5px;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    @media screen and (max-width: 960px) {
      height: 10vh;
    }
    @media screen and (max-width: 480px) {
      height: 8vh;
    }
  }

  &:hover,
  &:focus-within {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
    border: none;

    transform: scale(1.05);
    transition: 100ms ease-in-out 100ms;
  }
}

/* Additional demo display styles */
* {
  box-sizing: border-box;
  margin: 0%;
  padding: 0%;
}

.card-wrapper {
  margin-top: 15px !important;

  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    width: 95%;
    margin-left: 3%;
  }
}

.cards_item {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h6 {
    padding-right: 5%;
  }
}

.categoryLink {
  text-decoration: none;
  color: #212121;
}
</style>
