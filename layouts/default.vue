<template>
  <div>
    <Header :phoneNumber="phoneNumber" />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      phoneNumber: "",
    };
  },
  methods: {
    setToken() {
      const token = localStorage["token"] || "";
      this.$store.commit("user/setStatusLogin", !!token);
    },
    async getUserInfo() {
      try {
        if (this.userInfo.isLogin) {
          const httpReponse = await this.$account.getAccountUser();
          if (httpReponse?.isSuccess) {
            this.$store.commit("user/setUserInfo", httpReponse.data);
            this.phoneNumber = httpReponse.data.phone;
          }
        }
      } catch (error) {}
    },
  },
  computed: {
    ...mapGetters({
      userInfo: "user/getUser",
    }),
  },
  async mounted() {
    await this.setToken();
    this.getUserInfo();
  },
};
</script>

<style>
</style>