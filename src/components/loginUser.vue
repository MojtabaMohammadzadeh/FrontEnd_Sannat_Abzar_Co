<template>

  <q-form v-if="this.step==='getCode'" class="q-gutter-md" @submit.prevent="getLoginCode">
    <div id="loginMain">
      <img class="logoLogin" src="../assets/Logo.png" alt=""/>

      <h6>.به ابزار صنعت پارس خوش آمدید</h6>
      <p>.برای ورود یا ثبت نام، لطفا شماره موبایل خود را وارد نمایید</p>
      <input v-model="login.phone_number" placeholder="09xx xxxxxxx" id="inputPhone"/>
      <q-btn color="primary" label="ورود" type="submit" id="loginFormBtn"></q-btn>
    </div>
  </q-form>

  <q-form v-if="this.step==='checkCode'" class="q-gutter-md" @submit.prevent="checkLoginCode">
    <div id="loginMain">
      <img class="logoLogin" src="../assets/Logo.png" alt=""/>

      <h6>.به ابزار صنعت پارس خوش آمدید</h6>
      <p>کد ارسال شده به موبایل خود را وارد کنید.</p>
      <input v-model="this.login.code" placeholder="xxxx" id="inputPhone"/>
      <q-btn color="primary" label="ورود" type="submit" id="loginFormBtn"></q-btn>
    </div>
  </q-form>

</template>

<script>
    import {useQuasar} from 'quasar'
    import {mapActions} from 'vuex'

    let $q
    export default {
        name: "loginUser",
        data() {
            return {
                login: {
                    phone_number: '98*9913480969',
                    sms_code: "1lPbVWLo",
                    code : "",
                    ios: ""
                },
                step : 'getCode',
            }
        },
        methods: {
            ...mapActions('auth', ['sendCode','checkCode']),
            async getLoginCode() {
                if (!this.login.phone_number) {
                    $q.notify({
                        type: 'negative',
                        message: 'please enter your mobile number.'
                    })
                } else if (this.login.phone_number.length < 10) {
                    $q.notify({
                        type: 'negative',
                        message: 'please enter valid mobile number.'
                    })
                } else {
                    try {
                        this.sendCode(this.login)
                            .then(response => {
                                alert(JSON.stringify(response))
                                if (response.success) {
                                    this.step = 'checkCode';
                                }else{
                                    this.step = 'checkCode';
                                    $q.notify({
                                        type: 'negative',
                                        message: response.msg
                                    })
                                }
                            })
                            .catch(error => {
                                $q.notify({
                                    type: 'negative',
                                    message: error
                                })
                            })
                        // const toPath = this.$route.query.to || '/'
                        // this.$router.push(toPath)
                    } catch (err) {
                        if (err.response.data.detail) {
                            $q.notify({
                                type: 'negative',
                                message: err.response.data.detail
                            })
                        }
                    }
                }
            },
            async checkLoginCode() {
                if (!this.login.code) {
                    $q.notify({
                        type: 'negative',
                        message: 'please enter code.'
                    })
                }
                else {
                    try {
                        this.checkCode({
                            phone_number: this.login.phone_number,
                            code: this.login.code,
                            type_device : 'android',
                            device_id : '',
                            device_name : ''
                        })
                            .then(response => {
                                if (response.success) {
                                    $q.notify({
                                        type: 'success',
                                        message: 'شما با موفقیت وارد سیستم شدید.'
                                    })
                                }else{
                                    $q.notify({
                                        type: 'negative',
                                        message: response.msg
                                    })
                                }
                            })
                            .catch(error => {
                                $q.notify({
                                    type: 'negative',
                                    message: JSON.stringify(error)
                                })
                            })
                        // const toPath = this.$route.query.to || '/'
                        // this.$router.push(toPath)
                    } catch (err) {
                        if (err.response.data.detail) {
                            $q.notify({
                                type: 'negative',
                                message: 'خطا داریم..'
                            })
                        }
                    }
                }
            },
        },
        mounted() {
            $q = useQuasar()
        }
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
