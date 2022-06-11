<template>
  <dir dir="rtl">
    <ul class="card-wrapper">
      <li class="card">
        <img :src="'https://www.abzarsaanat.ir/public/' + post.img" alt="" />
        <h3>
          <a href="">{{ post.name }}</a>
        </h3>
        <p>{{ post.discrib }}</p>
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
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  // --card-gradient: rgba(0, 0, 0, 0.8);
  // --card-gradient: #5e9ad9, #e271ad;
  // --card-gradient: tomato, orange;
  // --card-blend-mode: overlay;
  // --card-blend-mode: multiply;
  font-family: "Dirooz";

  background-color: #f5f5f5;
  border-width: 1px;
  border: solid;
  border-color: rgba(0, 0, 0, 0.247);
  border-radius: 0.5rem;
  box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45);
  padding-bottom: 1rem;
  width: 100%;
  background-image: linear-gradient(
    var(--card-gradient),
    white max(9.5rem, 27vh)
  );
  overflow: hidden;

  img {
    border-radius: 0.5rem 0.5rem 0 0;
    width: 100%;
    object-fit: cover;
    // height: max(10rem, 25vh);
    max-height: max(10rem, 30vh);
    aspect-ratio: 4/3;
    mix-blend-mode: var(--card-blend-mode);
    // filter: grayscale(100);

    ~ * {
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }

  > :last-child {
    margin-bottom: 0;
  }

  &:hover,
  &:focus-within {
    --card-gradient: #24a9d5 max(8.5rem, 20vh);
  }
}

/* Additional demo display styles */
* {
  box-sizing: border-box;
}

.card h3 {
  margin-top: 1rem;
  font-size: 1.25rem;
  list-style: none;
}

.card a {
  color: inherit;
  text-decoration: none;
}

.card-wrapper {
  list-style: none;
}
</style>
