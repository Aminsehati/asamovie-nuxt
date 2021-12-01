<template>
  <div class="register-page">
    <div class="back-to-home">
      <nuxt-link to="/"> برگشت </nuxt-link>
    </div>
    <div class="box-register-wrapper">
      <div class="box_register">
        <form class="register-form" @submit.prevent="onSubmit">
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
            <Textfield
              placeholder="رمز عبور خود را وارد کنید"
              v-model="infoUser.password"
              type="password"
            />
          </div>
          <Button block blue> ثبت نام </Button>
        </form>
        <div class="go-to-login text-center">
          <nuxt-link to="/login" class="font-12"> برگشت به ورود </nuxt-link>
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
  middleware:"admin",
  data() {
    return {
      infoUser: {
        phone: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit(e) {
      const toast = this.$refs.toast;
      toast.info = false;
      if (!this.infoUser.phone || !this.infoUser.password) {
        toast.info = true;
        toast.title = "اطلاع!";
        toast.description = "لطفا تمام اطلاعات موردنیاز را پر کنید";
      } else {
        this.registerUser();
      }
    },
    async registerUser() {
      const toast = this.$refs.toast;
      toast.error = false;
      try {
        const httpResponse = await this.$axios.$post("/auth/register", {
          ...this.infoUser,
        });
        const { message, accessToken } = httpResponse;
        if (httpResponse.isSuccess) {
          localStorage.setItem("token",accessToken);
          this.$store.commit("user/setStatusLogin",!!localStorage.getItem("token"))
          this.$router.push("/");
        } else {
          toast.error = true;
          toast.title = "خطا!";
          toast.description = message;
        }
      } catch (error) {}
    },
  },
};
</script>

<style>
</style>