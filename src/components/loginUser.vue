<template>
  <div id="login">
    <input type="text" name="username" placeholder="Username" />
    <input type="password" name="password" placeholder="Password" />
    <div>
      <q-btn color="primary" label="ورود" style="width: 20%" />
      <q-btn color="warning" label="ثبت نام" style="width: 20%" />
    </div>
  </div>
</template>

<script>
export default {
  name: "loginUser",
};
</script>

<style lang="scss" scoped></style>
