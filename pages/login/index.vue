<template>
  <div class="login-page">
    <div class="back-to-home">
      <nuxt-link to="/"> بازگشت </nuxt-link>
    </div>
    <div class="box-login-wrapper">
      <div class="box-login-page">
        <form class="login_form" @submit.prevent="onSubmit">
          <div class="form-item field-number">
            <label class="font-12 font-400 block"> شماره موبایل </label>
            <Textfield
              isPhoneNumber
              :maxLength="10"
              v-model="userInfo.phone"
              placeholder="شماره موبایل خود را وارد کنید"
            />
          </div>
          <div class="form-item field-password">
            <label class="font-12 font-400 block"> رمز عبور </label>
            <Textfield
              type="password"
              placeholder="رمز عبور خود را وارد کنید"
              v-model="userInfo.password"
            />
          </div>
          <Button blue block> ورود </Button>
        </form>
        <div class="forget-to-password">
          <p class="text-center font-11 font-400">
            رمز عبور را فراموش کرده اید ؟
          </p>
        </div>
        <div class="login-with-otp">
          <Button red block> ورود با کد یکبار مصرف </Button>
        </div>
        <div class="actions-box">
          <span class="font-13"> آیا حساب کاربری ندارید ؟ </span>
          <nuxt-link to="/register"> ثبت نام </nuxt-link>
        </div>
      </div>
    </div>
    <Toast ref="toast" />
  </div>
</template>
<script>
import "./style.scss";
export default {
  layout: "auth",
  data() {
    return {
      userInfo: {
        phone: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      const toast = this.$refs.toast;
      toast.info = false;
      if (!this.userInfo.phone || !this.userInfo.password) {
        toast.info = true;
        toast.title = "اطلاع!";
        toast.description = "لطفا تمام اطلاعات موردنیاز را پر کنید";
      } else {
        this.loginUser();
      }
    },
    async loginUser() {
      const toast = this.$refs.toast;
      toast.error = false;
      try {
        const params = {
          phone: this.userInfo.phone,
          password: this.userInfo.password,
        };
        const httpResponse = await this.$auth.login(params);

        const { isSuccess, token } = httpResponse;
        if(isSuccess){
          localStorage.setItem("token",token);
          this.$router.push("/")
        }
      } catch (error) {
        const { message } = error.response.data;
        toast.error = true;
        toast.title = "خطا!";
        toast.description = message;
      }
    },
  },
};
</script>