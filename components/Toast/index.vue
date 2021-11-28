<template>
  <div
    class="toast_notifaction"
    :class="{ 'show-toast-notifaction': info || success || error }"
  >
    <div :class="['toast', { 'toast-error': error, 'toast-info': info }]">
      <div class="toast-icon">
        <img :src="iconsItem.error" v-if="error" />
        <img :src="iconsItem.info" v-else-if="info" />
        <!-- <img :src="error.icon" /> -->
      </div>
      <div class="toast-content">
        <h2>{{ title }}</h2>
        <h5>{{ description }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import "./style.css";
export default {
  data() {
    return {
      title: "خطا!!!",
      description:
        "این شماره در حال حاضر در حال استفاده است (قبلا ثبت نام کرده است)!",
      success: false,
      error: false,
      info: false,
      iconsItem: {
        error: require("@/assets/img/toast/error.svg"),
        info: require("@/assets/img/toast/info.svg"),
      },
      isToast: false,
    };
  },
  computed: {},
};
</script>

<style>
</style>