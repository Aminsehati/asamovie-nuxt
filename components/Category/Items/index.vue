<template>
  <div class="category__item">
    <nuxt-link :to="categoryInfo.path">
      <figure class="category__item_cover">
        <img :src="categoryInfo.image" />
      </figure>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    categoryInfo: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped>
@import "./style.css";
</style>