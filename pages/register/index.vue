<template>
  <div class="register-page">
    <div class="box_register">
      <form class="register-form">
        <div class="phonenumber-field">
          <label class="font-12 font-400 block"> شماره موبایل </label>
          <Textfield
            placeholder="شماره موبایل خود را وارد کنید"
            v-model="infoUser.phone"
            isPhoneNumber
            :maxLength="10"
          />
        </div>
        <div class="password-field">
          <label class="font-12 font-400 block"> رمز عبور </label>
          <Textfield placeholder="رمز عبور خود را وارد کنید" v-model="infoUser.password" type="password"/>
        </div>
        <Button block blue> ورود </Button>
      </form>
      <div class="go-to-login text-center">
        <nuxt-link to="/register" class="font-12"> برگشت به ورود </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import "./style.scss";
export default {
  layout: "auth",
  data() {
    return {
      infoUser: {
        phone: "",
        password: "",
      },
    };
  },
};
</script>

<style>
</style>