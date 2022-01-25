<template>
  <div class="account-user-page">
    <div class="container-fluid">
      <div class="box-account-box">
        <div class="title">
          <span class="font-12 font-600">
            پنل کاربری - ویرایش اطلاعات کاربری
          </span>
        </div>
        {{
          userInfo
        }}
        <div class="body">
          <Spinner v-if="userInfo.loading" />
          <div v-else>
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
              <Textfield
                class="w-1/2"
                light
                v-model="userInfo.newPhoneNumber"
              />
            </div>
            <div class="password-field">
              <div class="old-password">
                <label class="block font-12 font-400"> ویرایش رمز عبور </label>
                <div class="flex">
                  <Textfield class="w-1/2" light :readonly="true" />
                </div>
              </div>
              <div class="new-password flex">
                <Textfield light class="w-1/2" placeholder="رمز عبور جدید" />
                <Textfield light class="w-1/2" placeholder="رمز عبور جدید" />
              </div>
              <div></div>
            </div>
            <div class="submit-area text-center">
              <Button green @onClick="updateUserInfo"> ثبت </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./style.scss";
import { mapGetters } from 'vuex';
export default {
  middleware({ redirect }) {
    if (process.client) {
      const token = localStorage["token"] || "";
      if (!token) {
        return redirect("/");
      }
    }
  },
  data() {
    return {
      userInfo: {
        loading: false,
        firstName: "",
        lastName: "",
        phoneNumber: "",
        newPhoneNumber: "",
      },
    };
  },
  computed: {
    ...mapGetters({
      userInfo: "user/getUser",
    }),
  },
  methods: {
    async updateUserInfo() {
      try {
        const params = {
          firstName : this.userInfo.firstName,
          lastName:this.userInfo.lastName
        }
        const httpResponse = await this.$axios.$put("/account/user", {
          ...params
        });
      } catch (error) {}
    },
    
  },
};
</script>

<style>
</style>