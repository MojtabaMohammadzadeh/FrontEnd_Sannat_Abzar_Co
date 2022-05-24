<template>
  <div id="loginMain">
    <img class="logoLogin" src="../assets/Logo.png" alt="" />

    <h6>.به ابزار صنعت پارس خوش آمدید</h6>
    <p>.برای ورود یا ثبت نام، لطفا شماره موبایل خود را وارد نمایید</p>
    <input v-model="text" placeholder="09xx xxxxxxx" id="inputPhone" />
    <q-btn color="primary" label="ورود" id="loginFormBtn" />
  </div>
</template>

<script>
export default {
  name: "loginUser",
};
</script>

<style lang="scss" scoped>
* {
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
}
#loginMain {
  font-family: "Dirooz";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(43, 43, 43);
}
.logoLogin {
  width: 20%;
  height: auto;
  margin-bottom: 1.5em;
}

#inputPhone {
  background-color: rgba($color: #dbdbdb, $alpha: 0.8);
  width: 40%;
  height: 3em;
  border-radius: 5px;
  border: #13131362;
  border-style: solid;
  border-width: 1px;
  text-align: center;
  margin-top: 2em;
}

#inputPhone:hover {
  background-color: rgba($color: #dbdbdb, $alpha: 1);
  border-width: 2px;
}

#loginFormBtn {
  width: 40%;
  margin-top: 2em;
  margin-bottom: 1em;
}
</style>
