<template>
  <div @click="prompt = true">
    <ul class="card-wrapper">
      <li class="card" dir="rtl">
        <img :src="'https://www.abzarsaanat.ir/public/' + post.img" alt="" />

        <div class="content" dir="rtl">
          <h3>
            {{ post.title }}
          </h3>
        </div>
      </li>
    </ul>
  </div>
  <!-- *******************************Modal Start *********************************** -->
  <q-dialog v-model="prompt" persistent>
    <q-card class="modalCard">
      <div>
        <q-icon id="closeIcon" name="close" v-close-popup />
      </div>
      <div class="modalParts">
        <img
          class="modalImage"
          :src="'https://www.abzarsaanat.ir/public/' + post.img"
          alt=""
        />
        <div class="modalContent" dir="rtl">
          <h3>
            {{ post.title }}
          </h3>

          <span class="modalPost" v-html="this.post?.content"></span>
        </div>
      </div>
    </q-card>
  </q-dialog>
  <!-- **************************************End Modal ************************* -->
</template>

<script>
import { ref } from "vue";
export default {
  name: "productCard",

  props: {
    post: Object,
  },
  setup() {
    return {
      prompt: ref(false),
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  font-family: "mikhakMedium";
  height: 15vh;
  width: 90%;
  display: grid;
  grid-template-columns: 0.3fr 1fr;
  justify-content: center;
  align-items: center;
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

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    font-family: "mikhakBold";
    font-size: 1em;

    @media screen and (max-width: 480px) {
      font-size: 0.6em;
    }
  }

  p {
    // white-space: pre-wrap;
    font-size: 1em;
    text-overflow: ellipsis;
    padding: 5%;
  }
}

.modalCard {
  min-width: 80%;
  min-height: 80%;
  display: grid;
  grid-template-rows: 10% 90%;
  justify-content: center;
  align-items: center;

  position: relative;

  background: rgba(182, 178, 233, 0.44);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8.9px);
  -webkit-backdrop-filter: blur(8.9px);
  border: 1px solid rgba(182, 178, 233, 0.78);
}

#closeIcon {
  position: absolute;
  right: 5px;
  top: 5px !important;
  cursor: pointer;
  font-size: 2em;
  color: rgba(0, 0, 0, 0.8);

  border-radius: 50%;
}
#closeIcon:hover {
  background-color: rgba(0, 0, 0, 0.24);
  transition: transform 0.25s ease-out;
}

.modalParts {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-family: "mikhakBold";
    font-size: 1em;
  }
}

.modalImage {
  width: 20%;
  border-radius: 10%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;

  @media screen and (max-width: 960px) {
    width: 40%;
  }
}

.modalContent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  white-space: pre-wrap;
  font-family: "mikhakMedium";
  padding: 10px;
}
.modalPost {
  word-wrap: break-word;
  width: 80%;
}
</style>
