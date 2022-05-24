<template>
  <q-page class="q-ma-md">
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
        <q-carousel-slide :name="1" img-src="../imges/Banner01.jpg" />
        <q-carousel-slide
          :name="2"
          img-src="https://images.unsplash.com/photo-1455165814004-1126a7199f9b?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870"
        />
        <q-carousel-slide
          :name="3"
          img-src="https://images.unsplash.com/photo-1567789884554-0b844b597180?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870"
        />
        <q-carousel-slide
          :name="4"
          img-src="https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870"
        />
      </q-carousel>
    </div>
    <!-- *********************End Slider********************** -->
    <div class="main-container">
      <!-- ************************Select Tabs********************** -->
      <div class="selectTabs">
        <div style="max-width: 600px">
          <q-tabs
            v-model="tab"
            align="justify"
            narrow-indicator
            class="q-mb-lg"
          >
            <q-tab
              class="qTab text-dark"
              name="mails"
              label="ابزار"
              icon="construction"
            />
            <q-tab
              class="qTab text-dark"
              name="alarms"
              label="صنعت"
              icon="factory"
            />
            <q-tab
              class="qTab text-dark"
              name="movies"
              label="ساختمان"
              icon="apartment"
            />
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
  </q-page>
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
          "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032",
        title: "تصویر اول",
        discrib: "توضیحات تصویر",
      },
      {
        id: 2,
        imgLink:
          "https://images.unsplash.com/photo-1540104539488-92a51bbc0410?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876",
        title: "تصویر دوم",
        discrib: "توضیحات تصویر",
      },
      {
        id: 3,
        imgLink:
          "https://images.unsplash.com/photo-1616321507403-9db926c914fd?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870",
        title: "تصویر سوم",
        discrib: "توضیحات تصویر",
      },
      {
        id: 4,
        imgLink:
          "https://images.unsplash.com/photo-1518709414768-a88981a4515d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
        title: "تصویر چهارم",
        discrib: "توضیحات تصویر",
      },
      {
        id: 5,
        imgLink:
          "https://images.unsplash.com/photo-1505798577917-a65157d3320a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870",
        title: "تصویر پنجم",
        discrib: "توضیحات تصویر",
      },
      {
        id: 1,
        imgLink:
          "https://images.unsplash.com/photo-1458829267686-b15150d4a28e?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870",
        title: "تصویر ششم",
        discrib: "توضیحات تصویر",
      },
      {
        id: 2,
        imgLink:
          "https://images.unsplash.com/photo-1540103711724-ebf833bde8d1?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876",
        title: "تصویر هفتم",
        discrib: "توضیحات تصویر",
      },
      {
        id: 3,
        imgLink:
          "https://images.unsplash.com/photo-1567507145544-da3fe1b4f8f9?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870",
        title: "تصویر هشتم",
        discrib: "توضیحات تصویر",
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

.qTab {
  background-color: #f4cf19;
  margin: 10px;
  border-radius: 5px;
}
</style>
