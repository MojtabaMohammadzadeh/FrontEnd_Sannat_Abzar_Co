<template>
  <dir dir="rtl">
    <ul class="card-wrapper">
      <li class="card">
        <router-link :to="`/brand/${post.id}`">
          <div class="img-contain">
            <img
              :src="'https://www.abzarsaanat.ir/public/' + post.img"
              alt=""
            />
          </div>
          <h3>
            {{ post.name }}
          </h3>
        </router-link>
      </li>
    </ul>
  </dir>
</template>

<script>
export default {
  name: "cardMaker",
  props: {
    post: Object,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.card {
  font-family: "mikhakBold";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  cursor: pointer;
  border-radius: 0.5rem;
  box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45);
  margin-bottom: 0%;

  background-image: linear-gradient(
    var(--card-gradient),
    white max(9.5rem, 27vh)
  );
  overflow: hidden;

  img {
    max-width: 100%;
    height: max-content;

    border-bottom: 1px solid rgba(7, 6, 6, 0.13);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    ~ * {
      margin-left: 1rem;
      margin-right: 1rem;
    }
    // @media screen and (max-width: 760px) {
    //   height: 80%;
    // }
  }

  &:hover,
  &:focus-within {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;

    transform: scale(1.1);
    transition: 200ms ease-in-out 200ms;
  }
}

/* Additional demo display styles */
* {
  box-sizing: border-box;
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
.card h3 {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  list-style: none;
  text-align: center;

  padding: 0%;
  margin-bottom: 0%;
  @media screen and (max-width: 760px) {
    font-size: 0.75rem;
  }
}

.card a {
  color: inherit;
  text-decoration: none;
}

.card-wrapper {
  list-style: none;
}
</style>
