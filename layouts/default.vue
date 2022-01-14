<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    setToken() {
      const token = localStorage["token"];
      console.log(token);
      this.$store.commit("user/setStatusLogin", !!token);
    },
  },
  computed: {
    ...mapGetters({
      userInfo:'user/getUser'
    })
  },
  mounted() {
    this.setToken();
  },
};
</script>

<style>
</style>