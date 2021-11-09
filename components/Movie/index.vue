<template>
  <div class="movie__">
    <nuxt-link to="/">
      <figure class="movie__cover">
        <img
          :src="movieInfo.image"
        />
        <div class="movie-item_overlay">
            <div class="movie_info_box">
                <p class="mb-8">
                  {{movieInfo.description}}
                </p>
                <p>
                  {{movieInfo.year}}
                </p>
            </div>
        </div>
      </figure>
      <p class="movie__title">
            {{movieInfo.title}}
      </p>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    movieInfo: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style >
@import "./style.css";
</style>