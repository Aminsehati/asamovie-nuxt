<template>
  <div class="account-user-page">
    <div class="container-fluid">
      <div class="box-account-box">
        <div class="title">
          <span class="font-12 font-500">
            پنل کاربری - ویرایش اطلاعات کاربری
          </span>
        </div>
        <div class="body">
          <div class="name-field flex">
            <Textfield
              class="w-1/2"
              light
              placeholder="نام"
              v-model="userInfo.firstName"
            />
            <Textfield
              class="w-1/2"
              light
              placeholder="نام خانوادگی"
              v-model="userInfo.lastName"
            />
          </div>
          <div class="phoneNumber-field flex">
            <Textfield
              class="w-1/2"
              light
              v-model="userInfo.phoneNumber"
              readonly
            />
            <Textfield class="w-1/2" light v-model="userInfo.newPhoneNumber" />
          </div>
          <div class="password-field">
            <div class="old-password">
              <label class="block font-12 font-400"> ویرایش رمز عبور </label>
              <div class="flex">
                <Textfield class="w-1/2" light :readonly="true"/>
              </div>
            </div>
            <div class="new-password flex">
              <Textfield light class="w-1/2" placeholder="رمز عبور جدید" />
              <Textfield light class="w-1/2" placeholder="رمز عبور جدید" />
            </div>
            <div>
            </div>
          </div>
          <div class="submit-area text-center">
              <Button green>
                  ثبت
              </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./style.scss";
export default {
  middleware: ["auth"],
  data() {
    return {
      userInfo: {
        firstName: "",
        lastName: "",
        phoneNumber: "09364384344",
        newPhoneNumber: "09364384344",
      },
    };
  },
};
</script>

<style>
</style>