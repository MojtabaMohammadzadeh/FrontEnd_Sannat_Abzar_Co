<template>
  <div class="search">
    <div>
      <input type="text" placeholder="Search . . ." required />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "searchBar",
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:400,400i,700");

* {
  font-family: Roboto, sans-serif;
  padding: 0;
  margin-right: 0.5em;
}

.search > div {
  display: inline-block;
  position: relative;
  filter: drop-shadow(0 1px #0091c2);
}

.search > div:after {
  content: "";
  background: rgb(1, 2, 39);
  width: 5px;
  height: 15px;
  position: absolute;
  top: 18px;
  right: 3px;
  transform: rotate(130deg);
}

.search > div > input {
  color: rgb(1, 2, 39);
  font-size: 16px;
  background: transparent;
  width: 25px;
  height: 25px;
  padding: 10px;
  border: solid 3px rgb(1, 2, 39);
  outline: none;
  border-radius: 35px;
  transition: width 0.5s;
}

.search > div > input::placeholder {
  color: rgb(1, 2, 39);
  opacity: 0;
  transition: opacity 150ms ease-out;
}

.search > div > input:focus::placeholder {
  opacity: 1;
}

.search > div > input:focus,
.search > div > input:not(:placeholder-shown) {
  width: 250px;
}
</style>
