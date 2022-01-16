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
        const httpReponse = await this.$account.getAccountUser();
        if (httpReponse?.isSuccess) {
          const { phone } = httpReponse.data;
          this.phoneNumber = phone ;
        }
      } catch (error) {}
    },
  },
  computed: {
    ...mapGetters({
      userInfo: "user/getUser",
    }),
  },
  mounted() {
    this.setToken();
    this.getUserInfo();
  },
};
</script>

<style>
</style>