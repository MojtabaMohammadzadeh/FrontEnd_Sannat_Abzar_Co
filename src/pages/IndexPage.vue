<template>
  <!-- ******************SLider******************* -->
  <div>
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide
        :name="1"
        img-src="https://cdn.quasar.dev/img/mountains.jpg"
      />
      <q-carousel-slide
        :name="2"
        img-src="https://cdn.quasar.dev/img/parallax1.jpg"
      />
      <q-carousel-slide
        :name="3"
        img-src="https://cdn.quasar.dev/img/parallax2.jpg"
      />
      <q-carousel-slide
        :name="4"
        img-src="https://cdn.quasar.dev/img/quasar.jpg"
      />
    </q-carousel>
  </div>
  <!-- *********************End Slider********************** -->
  <div class="main-container">
    <!-- ************************Select Tabs********************** -->
    <div class="selectTabs">
      <div style="max-width: 600px">
        <q-tabs v-model="tab" align="justify" narrow-indicator class="q-mb-lg">
          <q-tab class="qTab text-purple" name="mails" label="ابزار" />
          <q-tab class="qTab text-orange" name="alarms" label="صنعت" />
          <q-tab class="qTab text-teal" name="movies" label="ساختمان" />
        </q-tabs>
      </div>
    </div>
    <!-- *************************End Tabs********************************** -->

    <section class="cardContainer">
      <cardMaker
        class="cardMaker"
        :key="post.id"
        v-for="post in posts"
        :post="post"
      ></cardMaker>
    </section>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import cardMaker from "../components/cardMaker.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    cardMaker,
  },
  data() {
    return {
      posts: [],
    };
  },
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
      tab: ref("mails"),
    };
  },
  created() {
    this.posts = [
      {
        id: 1,
        imgLink:
          "https://images.unsplash.com/photo-1611916656173-875e4277bea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400",
        title: "IMAGE01",
        discrib: "this is image one",
      },
      {
        id: 2,
        imgLink:
          "https://images.unsplash.com/photo-1611083360739-bdad6e0eb1fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400",
        title: "IMAGE02",
        discrib: "this is image 02",
      },
      {
        id: 3,
        imgLink:
          "https://images.unsplash.com/photo-1613230485186-2e7e0fca1253?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400",
        title: "IMAGE03",
        discrib: "this is image 03",
      },
      {
        id: 4,
        imgLink:
          "https://images.unsplash.com/photo-1652615851857-e45177e4fccc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        title: "IMAGE04",
        discrib: "this is image 04",
      },
      {
        id: 5,
        imgLink:
          "https://images.unsplash.com/photo-1652357079256-a50324f438f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
        title: "IMAGE05",
        discrib: "this is image 05",
      },
      {
        id: 1,
        imgLink:
          "https://images.unsplash.com/photo-1611916656173-875e4277bea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400",
        title: "IMAGE01",
        discrib: "this is image one",
      },
      {
        id: 2,
        imgLink:
          "https://images.unsplash.com/photo-1611083360739-bdad6e0eb1fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400",
        title: "IMAGE02",
        discrib: "this is image 02",
      },
      {
        id: 3,
        imgLink:
          "https://images.unsplash.com/photo-1613230485186-2e7e0fca1253?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400",
        title: "IMAGE03",
        discrib: "this is image 03",
      },
      {
        id: 4,
        imgLink:
          "https://images.unsplash.com/photo-1652615851857-e45177e4fccc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        title: "IMAGE04",
        discrib: "this is image 04",
      },
      {
        id: 5,
        imgLink:
          "https://images.unsplash.com/photo-1652357079256-a50324f438f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
        title: "IMAGE05",
        discrib: "this is image 05",
      },
    ];
  },
});
</script>

<style lang="scss" scoped>
.main-container {
  padding-left: 2%;
  padding-right: 2%;
}
.selectTabs {
  display: flex;
  justify-content: center;
}
.qTab {
  font-family: "Dirooz";
}
.cardContainer {
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (min-width: 760px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 960px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (min-width: 1290px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
}
.cardMaker {
  margin: 0%;
  padding: 0%;
}
</style>
